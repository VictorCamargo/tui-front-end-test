<template>
  <div>
    <MainHeader />
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/header/MainHeader'
import MainFooter from '@/components/footer/MainFooter'

export default {
  name: 'default',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>
