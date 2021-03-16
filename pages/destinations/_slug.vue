<template>
  <div class="page-destination">
    <template v-if="$fetchState.pending">
      <!-- TODO: Add loader or placeholder to improve user experience -->
    </template>
    <template v-else>
      <AppHero
        v-if="country"
        :src="country.image"
        :alt="country.country"
        :title="country.country"
      />

      <section class="container mt-8">
        <h1 class="page-destination__title h1 mb-5" v-if="country">
          {{ country.country }}
        </h1>
      </section>

      <section class="container">
        <AppFilter class="mb-6" />
        <AppGrid columns="4">
          <AppCardHotel
            v-for="hotel in hotels"
            :hotel="hotel"
            :key="hotel.id"
          />
        </AppGrid>
      </section>
    </template>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero'
import AppGrid from '@/components/grid/AppGrid'
import AppCardHotel from '@/components/ui/cards/AppCardHotel'
import AppFilter from '@/components/ui/AppFilter'

export default {
  name: 'DestinationDetail',

  components: {
    AppHero,
    AppGrid,
    AppCardHotel,
    AppFilter
  },

  data() {
    return {
      country: null,
      pagination: {
        docs: []
      }
    }
  },

  watch: {
    $route() {
      this.$fetch()
    }
  },

  async fetch() {
    const country = this.$route.params.slug
    const page = this.$route.query.page || 1
    const limit = this.$route.query.limit || 16
    const sortBy = this.$route.query.sortBy || ''

    this.country = await this.$axios
      .get(`/countries/${country}`)
      .then(({ data }) => data)

    this.pagination = await this.$axios
      .get(`/hotels`, { params: { country, page, limit, sortBy } })
      .then(({ data }) => data)
  },

  computed: {
    hotels() {
      return this.pagination.docs
    }
  }
}
</script>

<style lang="scss">
.page-destination {
  &__title {
    color: var(--tui-dark-100);
  }

  .app-grid {
    row-gap: 32px;
  }
}
</style>
