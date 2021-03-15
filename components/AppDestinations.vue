<template>
  <section class="container">
    <h1 class="h1 text-center mb-6">DESTINOS</h1>
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

<style lang="scss"></style>
