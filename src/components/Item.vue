<template>
  <div class="story">
    <span class="score">
      {{ story.data.score }}
    </span>
    <router-link :to="{ path: '/story/' + story.data.id}">
      {{ story.data.title }}
    </router-link>
    <a v-bind:href="story.data.url">
       | Visit website
    </a>
    <br/>
    <span class="meta">
      By: {{ story.data.by }} | {{ story.data.time }} ago {{ story.data.descendants }} comments
    </span>
  </div>
</template>
<script>
export default {
  name: 'Item',
  props: [
    'story',
  ],
};
</script>
<style lang="scss" scoped>
  @import "./../assets/Item.scss";
</style>
