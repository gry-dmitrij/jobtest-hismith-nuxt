import { mapMutations } from 'vuex';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    /**
     * Переименовывает поля:
     * item: [
     *   ['old_name', 'new_name'}
     * ]
     * keepArray сохраняет весь массив данных, без него прилетает только первое значение
     */
    item: [
      ['rbc_news:image', 'images', { keepArray: true }],
      ['rbc_news:anons', 'preview'],
      ['rbc_news:date', 'date'],
      ['rbc_news:time', 'time'],
      ['rbc_news:full-text', 'fullText'],
      ['rbc_news:newsDate_timestamp', 'timestamp'],
    ],
  },
});

const PROXY = 'https://thingproxy.freeboard.io/fetch/';
const URL = 'http://static.feed.rbc.ru/rbc/logical/footer/news.rss';

export default {
  async asyncData ({ store }) {
    if (process.client) { return; }
    let news = [];
    try {
      news = await parser.parseURL(URL);
    } catch (e) {

    }
    store.commit('setNews', news.items);
  },
  async fetch () {
    if (process.server) { return; }
    let address = URL;
    if (process.client) {
      address = PROXY + URL;
    }
    let news = [];
    try {
      news = await parser.parseURL(address);
    } catch (ex) {

    }
    this.setNews(news.items);
  },
  methods: {
    ...mapMutations([
      'setNews',
    ]),
  },
};
