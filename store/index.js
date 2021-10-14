function sortNews (item1, item2) {
  return new Date(item2.isoDate).getTime() - new Date(item1.isoDate).getTime();
}

export const state = () => ({
  news: [],
  page: 1,
});

export const getters = {
  getNews: state => state.news,
  getPage: state => state.page,
  /**
   * Получает отдельную новость по guid новости
   * @param state
   * @returns {function(*): *}
   */
  getNewById: state => id => state.news.find(item => item.guid === id),
};

export const mutations = {
  setNews (state, payload) {
    payload.sort(sortNews);
    state.news = [...payload];
  },
  setPage (state, number) {
    state.page = number;
  },
};
