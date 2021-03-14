<template>
  <div class="app-search">
    <AppGrid columns="4">
      <h3 class="app-search__title h3">Find your perfect stay</h3>
      <FormInput>
        <IconSearch />
      </FormInput>
    </AppGrid>
  </div>
</template>

<script>
import AppGrid from '@/components/grid/AppGrid'
import IconSearch from '@/assets/svg/icon-search.svg'
import FormInput from '@/components/ui/FormInput'

export default {
  name: 'AppSearch',

  components: {
    AppGrid,
    IconSearch,
    FormInput
  }
}
</script>

<style lang="scss">
.app-search {
  position: relative;
  padding: 40px;
  background: var(--tui-white);
  box-shadow: box-shadow(level3);

  &__title {
    color: var(--tui-dark-100);
  }
}
</style>
