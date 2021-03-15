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

    <AppDestinations></AppDestinations>
  </div>
</template>

<script>
import { seoMetaTags } from '~/utils/seo'
import AppSearch from '@/components/AppSearch'
import AppHero from '@/components/AppHero'
import AppDestinations from '@/components/AppDestinations'

export default {
  components: {
    AppSearch,
    AppHero,
    AppDestinations
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

  .h1 {
    color: var(--tui-dark-100);
    margin-top: spacer(8);
  }
}
</style>
