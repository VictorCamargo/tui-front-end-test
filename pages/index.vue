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
