<template>
  <component :is="componentType"></component>
</template>

<script>
import FlagUK from 'assets/svg/flag-uk.svg'
import FlagBR from 'assets/svg/flag-br.svg'
import FlagPT from 'assets/svg/flag-pt.svg'

export default {
  name: 'CountryFlag',

  props: {
    code: String
  },

  components: {
    FlagUK,
    FlagBR,
    FlagPT
  },

  computed: {
    componentType() {
      switch (this.code) {
        case 'en':
          return FlagUK
        case 'br':
          return FlagBR
        case 'pt':
          return FlagPT
      }
    }
  }
}
</script>
