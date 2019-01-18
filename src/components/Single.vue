<template>
  <div class="container">
    <h2>
      {{ story.title }}
    </h2>
    <p>
      Score: {{ story.score }}
    </p>
    <div v-for="comment in comments" :key="comment">
      <div class="comment-wrap">
        <div class="comment-block">
          <p class="comment-text" v-html="comment.text">
            {{ comment.text }}
          </p>
          <div class="bottom-comment">
            <div class="comment-author">
              By: {{ comment.by }}
            </div>
            <div class="comment-date">
              {{ comment.time | moment("dddd, MMMM Do YYYY")}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
import Vue from 'vue';

Vue.use(require('vue-moment'));

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm');
  } return value;
});
export default{
  name: 'Single',
  data: () =>
    (
      {
        story: {},
        comments: [],
      }
    ),
  /* eslint-disable */
  created: function() {
    console.log(this.$route);
    axios.get('https://hacker-news.firebaseio.com/v0/item/' + this.$route.params.id + '.json')      
      .then((res) => {
        this.story = res.data;
        this.story.comments = [];
        this.story.kids.forEach((id) => {
          axios.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
            .then((resKid) => {
              this.$nextTick(() => {
                console.log(resKid.data);
                this.comments.push(resKid.data);
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  /* eslint-disable */
};
</script>
<style lang="scss" scoped>
   @import './../assets/Single.scss';
</style>
