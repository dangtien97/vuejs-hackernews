<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import TopStories from '@/components/TopStories';
import NewestStories from '@/components/NewestStories';

export default {
  name: 'App',
  components: {
    navbar: Navbar,
    top: TopStories,
    newest: NewestStories,
  },
};
</script>

<style lang = "scss">
@import "./assets/App.scss";
</style>
