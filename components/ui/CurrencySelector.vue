<template>
  <div class="currency-selector" v-click-outside="closeDropdown">
    <AppButton @click.native="active = !active">{{
      currency.isoName
    }}</AppButton>
    <AppDropdown :active="active" arrow-position="right">
      <AppDropdownSection :title="$t('language_selector.active')">
        <AppDropdownSectionItem disabled>
          {{ currency.isoName }}
        </AppDropdownSectionItem>
      </AppDropdownSection>
      <AppDropdownSection :title="$t('currency_selector.other_currencies')">
        <AppDropdownSectionItem
          v-for="(currency, index) in availableCurrencies"
          @clicked="active = false"
          :key="index"
          @click.native="setCurrency(currency.name)"
        >
          {{ currency.label }}
        </AppDropdownSectionItem>
      </AppDropdownSection>
    </AppDropdown>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import AppDropdown from '@/components/ui/dropdown/AppDropdown'
import AppDropdownSection from '@/components/ui/dropdown/AppDropdownSection'
import AppDropdownSectionItem from '@/components/ui/dropdown/AppDropdownSectionItem'
import CountryFlag from '@/components/ui/CountryFlag'
import AppButton from '@/components/ui/buttons/AppButton'

export default {
  name: 'CurrencySelector',

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
    ...mapState(['currencies', 'current_currency']),
    ...mapGetters(['currency', 'availableCurrencies'])
  },

  methods: {
    ...mapActions(['setCurrency']),

    closeDropdown() {
      if (this.active) this.active = false
    }
  }
}
</script>

<style lang="scss">
.currency-selector {
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
    right: 0;
  }
}
</style>
