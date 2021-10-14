<template>
  <v-container class="new-item pb-0">
    <v-row>
      <v-col class="pb-0">
        <nuxt-link :to="link">
          <h3>{{ header }}</h3>
        </nuxt-link>
      </v-col>
      <v-col v-if="date"
             class="d-flex justify-end align-end pb-0"
             cols="2"
      >
        <span class="subtitle-2 text--secondary">{{ date }}</span>
      </v-col>
    </v-row>
    <v-row v-if="description">
      <v-col class="py-0">
        <p class="pb-0 text--secondary">
          {{ description }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewItem',
  props: {
    link: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss"
       scoped>
.new-item {
  border-bottom: 1px solid #ccc;
}
</style>
