<template>
  <section class="app-destinations container">
    <h1 class="h1 text-center mb-6 mt-8 color-title">
      {{ $t('home.destinations') }}
    </h1>
    <AppGrid columns="4">
      <AppCard
        v-for="destination in destinations"
        :title="destination.country"
        :img="destination.thumbnail"
        :link="`/destinations/${destination.id}`"
        :key="destination.id"
      />
    </AppGrid>
  </section>
</template>

<script>
import AppGrid from '@/components/grid/AppGrid'
import AppCard from '@/components/ui/cards/AppCard'

export default {
  name: 'AppDestinations',

  components: {
    AppGrid,
    AppCard
  },

  data() {
    return {
      destinations: []
    }
  },

  async fetch() {
    this.destinations = await this.$axios
      .get('/countries')
      .then(({ data }) => data)
  }
}
</script>

<style lang="scss">
.app-destinations {
  .app-grid {
    @media screen and (max-width: 1439px) {
      row-gap: 32px;
      grid-template-columns: repeat(2, [col-start] 1fr);
    }
  }
}
</style>
