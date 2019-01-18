import axios from 'axios';

export default {
  fetch_top_stories: ({ commit }) => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((res) => {
        const results = res.data.slice(0, 25);
        results.forEach((el) => {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`)
            .then((resChild) => {
              commit('APPEND_TOP_STORY', resChild);
            })
            .catch((err) => {
              // eslint-disable-next-line
              console.log(err);
            });
        });
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  },
  fetch_new_stories: ({ commit }) => {
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then((res) => {
        const results = res.data.slice(0, 25);
        results.forEach((el) => {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`)
            .then((resChild) => {
              commit('APPEND_NEW_STORY', resChild);
            })
            .catch((err) => {
              // eslint-disable-next-line
              console.log(err);
            });
        });
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  },
};
