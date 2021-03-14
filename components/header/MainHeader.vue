<template>
  <header class="main-header">
    <div class="container d-flex">
      <div class="d-flex">
        <nuxt-link :to="localePath('/')" aria-label="Home">
          <LogoTui />
        </nuxt-link>
        <nav class="header-menu d-flex">
          <AppButton :link="localePath('/')">
            {{ $t('header.menu.hotels') }}
          </AppButton>
          <AppButton :link="localePath('/')">
            {{ $t('header.menu.destinations') }}
          </AppButton>
          <AppButton :link="localePath('/')">
            {{ $t('header.menu.inspiration') }}
          </AppButton>
        </nav>
      </div>

      <div class="d-flex">
        <nav class="header-menu d-flex">
          <AppButton :link="localePath('/')">
            {{ $t('header.menu.help') }}
          </AppButton>
          <AppButton :link="localePath('/')">
            {{ $t('header.menu.send_feedback') }}
          </AppButton>
          <LanguageSelector></LanguageSelector>
          <CurrencySelector></CurrencySelector>
          <AppButton
            type="lite"
            :link="localePath('/')"
            :aria-label="$t('header.menu.log_in')"
          >
            {{ $t('header.menu.log_in') }}
          </AppButton>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import LogoTui from 'assets/svg/logo-tui.svg'
import AppButton from '@/components/ui/buttons/AppButton'
import LanguageSelector from '@/components/ui/LanguageSelector'
import CurrencySelector from '@/components/ui/CurrencySelector'

export default {
  name: 'TuiHeader',

  components: {
    LogoTui,
    AppButton,
    LanguageSelector,
    CurrencySelector
  }
}
</script>

<style lang="scss">
.main-header {
  height: 80px;
  display: flex;
  border-bottom: 1px solid $tui-blue-25;

  .header-menu {
    align-items: center;

    > *:not(:first-child) {
      margin-left: 20px;
    }
  }

  .container {
    justify-content: space-between;
  }

  .app-svg--logo {
    height: 40px;
    margin-top: 14px;
    margin-right: 38px;
  }
}
</style>
