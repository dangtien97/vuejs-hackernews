import axios from 'axios';

export default {
  fetch_top_stories: async ({ commit }) => {
    try {
      const allTopStories = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      const someTopStories = allTopStories.data.slice(0, 25);
      someTopStories.forEach(async (el) => {
        try {
          const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`);
          commit('APPEND_TOP_STORY', story);
        } catch (err) {
          // eslint-disable-next-line
          console.log(err);
        }
      });
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  },
  fetch_new_stories: async ({ commit }) => {
    try {
      const allNewStories = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json');
      const someNewStories = allNewStories.data.slice(0, 25);
      someNewStories.forEach(async (el) => {
        try {
          const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`);
          commit('APPEND_NEW_STORY', story);
        } catch (err) {
          // eslint-disable-next-line
          console.log(err);
        }
      });
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  },
};
