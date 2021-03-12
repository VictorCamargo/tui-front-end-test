<template>
  <div class="language-selector" v-click-outside="closeDropdown">
    <div class="language-selector__current d-flex" @click="active = !active">
      <CountryFlag :code="currentLocale.code" />
    </div>
    <Dropdown :active="active">
      <DropdownSection title="ACTIVE">
        <DropdownItem disabled>
          <CountryFlag :code="currentLocale.code" />{{ currentLocale.name }}
        </DropdownItem>
      </DropdownSection>
      <DropdownSection title="OTHER LANGUAGES">
        <DropdownItem
          v-for="(locale, index) in availableLocales"
          :key="index"
          @clicked="active = false"
        >
          <nuxt-link :to="switchLocalePath(locale.code)">
            <CountryFlag :code="locale.code" />{{ locale.name }}
          </nuxt-link>
        </DropdownItem>
      </DropdownSection>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from '@/components/ui/dropdown/Dropdown'
import DropdownSection from '@/components/ui/dropdown/DropdownSection'
import DropdownItem from '@/components/ui/dropdown/DropdownItem'
import CountryFlag from '@/components/ui/CountryFlag'

export default {
  name: 'LanguageSelector',

  components: {
    CountryFlag,
    Dropdown,
    DropdownSection,
    DropdownItem
  },

  data() {
    return {
      active: false
    }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    },

    currentLocale() {
      return this.$i18n.locales.find(
        locale => locale.code === this.$i18n.locale
      )
    }
  },

  methods: {
    closeDropdown() {
      if (this.active) this.active = false
    }
  }
}
</script>

<style lang="scss">
.language-selector {
  position: relative;
  margin: 0 20px;
  align-items: center;

  .tui-svg {
    width: 24px;
  }

  .dropdown {
    top: 35px;
    left: -20px;
  }

  &__current {
    height: 29px;
    cursor: pointer;

    &:before {
      content: '';
    }
  }
}
</style>
