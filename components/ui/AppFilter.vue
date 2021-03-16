<template>
  <div class="app-filter">
    <span class="app-filter__label mr-3">{{ $t('sort_by.title') }}</span>
    <AppButton
      type="lite"
      dropdown
      v-click-outside="closeDropdown"
      @click.native="active = !active"
    >
      {{ selectedPrice.label }}<IconDropdown />
      <AppDropdown :active="active" arrow-position="left">
        <AppDropdownSection>
          <AppDropdownSectionItem
            v-for="option in sortBy.options"
            :key="option.key"
            @clicked="selectOption(option)"
          >
            {{ option.label }}
          </AppDropdownSectionItem>
        </AppDropdownSection>
      </AppDropdown>
    </AppButton>
  </div>
</template>

<script>
import AppButton from '@/components/ui/buttons/AppButton'
import IconDropdown from '@/assets/svg/icon-dropdown.svg'
import AppDropdown from '@/components/ui/dropdown/AppDropdown'
import AppDropdownSection from '@/components/ui/dropdown/AppDropdownSection'
import AppDropdownSectionItem from '@/components/ui/dropdown/AppDropdownSectionItem'

export default {
  name: 'AppFilter',

  components: {
    AppButton,
    IconDropdown,
    AppDropdown,
    AppDropdownSection,
    AppDropdownSectionItem
  },

  data() {
    return {
      active: false,
      sortBy: {
        selected: null,
        options: [
          { label: this.$t('sort_by.relevance'), key: null },
          { label: this.$t('sort_by.lower'), key: 'high' },
          { label: this.$t('sort_by.high'), key: 'lower' }
        ]
      }
    }
  },

  mounted() {
    let query = JSON.parse(JSON.stringify({ ...this.$route.query }))
    if (query.sortBy) {
      this.setOption(query.sortBy)
    }
  },

  computed: {
    selectedPrice() {
      return this.sortBy.selected
        ? this.sortBy.selected
        : this.sortBy.options[0]
    }
  },

  methods: {
    setOption(key) {
      this.sortBy.selected = this.sortBy.options.find(
        option => option.key === key
      )
    },

    closeDropdown() {
      if (this.active) this.active = false
    },

    selectOption(option) {
      this.sortBy.selected = option

      let query = JSON.parse(JSON.stringify({ ...this.$route.query }))

      if (option.key !== null) {
        query = { ...query, sortBy: option.key }
      } else {
        delete query.sortBy
      }

      this.$router.push({
        path: this.$route.path,
        query: query
      })
    }
  }
}
</script>

<style lang="scss">
.app-filter {
  position: relative;
  padding: 40px;
  background: var(--tui-white);
  border: 1px solid var(--color-border);
  color: var(--tui-dark-100);
  font-size: 16px;
  align-items: center;
  display: flex;

  &__label {
    font-size: 20px;
    font-weight: bold;
    color: var(--tui-dark-100);
  }

  .app-button {
    position: relative;

    .app-dropdown {
      top: 52px;
      left: 0;
    }
  }
}
</style>
