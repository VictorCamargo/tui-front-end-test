<template>
  <div class="page-home">
    <AppHero
      src="/img/maldives.jpeg"
      alt="Kuramathi, Maldivas, Maldives"
      title="Kuramathi, Maldivas, Maldives"
    />
    <section class="container">
      <AppSearch />
    </section>
  </div>
</template>

<script>
import HotelsList from '@/components/HotelsList'
import AppSearch from '@/components/AppSearch'

import { seoMetaTags } from '~/utils/seo'
import AppHero from '@/components/AppHero'

export default {
  components: {
    HotelsList,
    AppSearch,
    AppHero
  },

  head() {
    return seoMetaTags(this, 'home')
  },

  async fetch() {
    try {
      // const { data } = await this.$axios.$get(
      //   'https://test.api.amadeus.com/v2/shopping/hotel-offers',
      //   {
      //     cityCode: 'LONG',
      //     lang: 'pt'
      //   }
      // )
      //
      // console.log({ data })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}
</script>

<style lang="scss">
.page-home {
  .app-search {
    z-index: 2;
    margin-top: -40px;
  }
}
</style>
