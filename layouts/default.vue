<template>
  <div>
    <TuiHeader />
    <Nuxt />
    <TuiFooter />
  </div>
</template>

<script>
import TuiHeader from '@/components/global/TuiHeader'
import TuiFooter from '@/components/global/TuiFooter'

export default {
  name: 'default',
  components: {
    TuiHeader,
    TuiFooter
  }
}
</script>
