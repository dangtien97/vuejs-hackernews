<template>
    <div>
      <item v-for="story in stories" :key="story.data.id" class="story" :story="story">
      <hr>
      </item>
    </div>
</template>
<script>
import Item from '@/components/Item';

export default {
  name: 'NewestStories',
  components: {
    item: Item,
  },
  data() {
    return {
      err: '',
      stories: this.$store.state.newStories,
    };
  },
  created() {
    if (this.$store.state.newStories.length === 0) {
      this.$store.dispatch('fetch_new_stories');
    }
  },
};
</script>
<style type="text/css">
  .story{
    padding-bottom: 30px;
  }
</style>
