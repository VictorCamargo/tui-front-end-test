<template>
  <div class="page-home">
    <div class="container">
      <SearchForm />
      <HotelsList />
    </div>
  </div>
</template>

<script>
import HotelsList from '@/components/HotelsList'
import SearchForm from '~/components/SearchForm'

import { seoMetaTags } from '~/utils/seo'

export default {
  components: {
    HotelsList,
    SearchForm
  },

  head() {
    return seoMetaTags(this, 'home')
  },

  async fetch() {
    try {
      const { data } = await this.$axios.$get(
        'https://test.api.amadeus.com/v2/shopping/hotel-offers',
        {
          cityCode: 'LONG',
          lang: 'pt'
        }
      )

      console.log({ data })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}
</script>

<style lang="scss">
.page-home {
}
</style>
