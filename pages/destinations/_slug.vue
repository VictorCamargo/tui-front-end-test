<template>
  <div class="page-destination">
    <AppHero
      src="https://source.unsplash.com/featured/1920x400/?travel"
      alt="Kuramathi, Maldivas, Maldives"
      title="Kuramathi, Maldivas, Maldives"
    />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero'

export default {
  name: 'DestinationDetail',

  components: {
    AppHero
  }
}
</script>

<style lang="scss">
.page-destination {
}
</style>
