import Vue from 'vue';
import Router from 'vue-router';
import TopStories from '@/components/TopStories';
import Single from '@/components/Single';
import NewestStories from '@/components/NewestStories';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TopStories',
      component: TopStories,
    },
    {
      path: '/story/:id',
      name: 'View single story with its id',
      component: Single,
    },
    {
      path: '/newest',
      name: 'Newest stories',
      component: NewestStories,
    },
  ],
});
