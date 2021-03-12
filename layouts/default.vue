<template>
  <div>
    <TuiHeader />
    <Nuxt />
    <TuiFooter />
  </div>
</template>

<script>
import TuiHeader from '@/components/header/MainHeader'
import TuiFooter from '@/components/footer/TuiFooter'

export default {
  name: 'default',
  components: {
    TuiHeader,
    TuiFooter
  }
}
</script>
