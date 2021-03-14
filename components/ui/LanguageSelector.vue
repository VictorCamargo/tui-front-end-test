<template>
  <div class="language-selector" v-click-outside="closeDropdown">
    <AppButton @click.native="active = !active" :aria-label="currentLocale.name"
      ><CountryFlag :code="currentLocale.code"
    /></AppButton>
    <AppDropdown :active="active">
      <AppDropdownSection :title="$t('language_selector.active')">
        <AppDropdownSectionItem disabled>
          <CountryFlag :code="currentLocale.code" />{{ currentLocale.name }}
        </AppDropdownSectionItem>
      </AppDropdownSection>
      <AppDropdownSection :title="$t('language_selector.other_languages')">
        <AppDropdownSectionItem
          v-for="(locale, index) in availableLocales"
          :key="index"
          @clicked="active = false"
        >
          <nuxt-link :to="switchLocalePath(locale.code)">
            <CountryFlag :code="locale.code" />{{ locale.name }}
          </nuxt-link>
        </AppDropdownSectionItem>
      </AppDropdownSection>
    </AppDropdown>
  </div>
</template>

<script>
import AppDropdown from '@/components/ui/dropdown/AppDropdown'
import AppDropdownSection from '@/components/ui/dropdown/AppDropdownSection'
import AppDropdownSectionItem from '@/components/ui/dropdown/AppDropdownSectionItem'
import CountryFlag from '@/components/ui/CountryFlag'
import AppButton from '@/components/ui/buttons/AppButton'

export default {
  name: 'LanguageSelector',

  components: {
    CountryFlag,
    AppDropdown,
    AppDropdownSection,
    AppDropdownSectionItem,
    AppButton
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
  align-items: center;

  $root: &;

  .app-svg {
    width: 24px;
  }

  &:hover {
    #{$root}__current {
      &:after {
        width: 100%;
      }
    }
  }

  &__current {
    position: relative;
    height: 29px;
    cursor: pointer;

    &:after {
      content: '';
      height: 2px;
      position: absolute;
      left: 0;
      width: 0;
      bottom: 1px;
      background: var(--tui-dark-100);
      transition: width 0.3s cubic-bezier(0, 0.15, 0.37, 1);
    }
  }

  .app-dropdown {
    top: 45px;
    left: -20px;
  }
}
</style>
