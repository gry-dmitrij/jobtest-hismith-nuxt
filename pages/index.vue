<template>
  <v-container>
    <news-list />
  </v-container>
</template>

<script>
import NewsList from '~/components/NewsList';
import InitLoad from '~/mixins/InitLoad';

export default {
  components: {
    NewsList,
  },
  mixins: [InitLoad],
};
</script>
