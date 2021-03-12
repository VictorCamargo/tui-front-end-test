<template>
  <div class="language-selector">
    <div class="language-selector__current d-flex">
      <FlagUK />
    </div>
    <Dropdown>
      <DropdownSection title="ACTIVE">
        <DropdownItem>
          <nuxt-link to="#current-language"> <FlagUK /> English UK </nuxt-link>
        </DropdownItem>
      </DropdownSection>
      <DropdownSection title="OTHER LANGUAGES">
        <DropdownItem>
          <nuxt-link to="#current-language">
            <FlagBR /> Portuguese BR
          </nuxt-link>
        </DropdownItem>
        <DropdownItem>
          <nuxt-link to="#current-language">
            <FlagPT /> Portuguese PT
          </nuxt-link>
        </DropdownItem>
      </DropdownSection>
    </Dropdown>
  </div>
</template>

<script>
import FlagUK from 'assets/svg/flag-uk.svg'
import FlagBR from 'assets/svg/flag-br.svg'
import FlagPT from 'assets/svg/flag-pt.svg'
import Dropdown from '@/components/ui/dropdown/Dropdown'
import DropdownSection from '@/components/ui/dropdown/DropdownSection'
import DropdownItem from '@/components/ui/dropdown/DropdownItem'

export default {
  name: 'LanguageSelector',

  components: {
    FlagUK,
    FlagBR,
    FlagPT,
    Dropdown,
    DropdownSection,
    DropdownItem
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
    &:before {
      content: '';
    }
  }
}
</style>
