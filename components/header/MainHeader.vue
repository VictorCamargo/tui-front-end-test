<template>
  <header class="main-header">
    <div class="container d-flex">
      <div class="d-flex">
        <nuxt-link :to="localePath('/')">
          <LogoTui />
        </nuxt-link>
        <nav class="header-menu d-flex">
          <Button>{{ $t('header.menu.hotels') }}</Button>
          <Button>{{ $t('header.menu.destinations') }}</Button>
          <Button>{{ $t('header.menu.inspiration') }}</Button>
        </nav>
      </div>

      <div class="d-flex">
        <nav class="header-menu d-flex">
          <Button>{{ $t('header.menu.help') }}</Button>
          <Button>{{ $t('header.menu.send_feedback') }}</Button>
          <LanguageSelector></LanguageSelector>
          <Button>EUR €</Button>
          <Button type="lite">{{ $t('header.menu.log_in') }}</Button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import LogoTui from 'assets/svg/logo-tui.svg'
import Button from '@/components/ui/buttons/Button'
import LanguageSelector from '@/components/header/LanguageSelector'

export default {
  name: 'TuiHeader',

  components: {
    LogoTui,
    Button,
    LanguageSelector
  }
}
</script>

<style lang="scss">
.main-header {
  height: 80px;
  display: flex;
  border-bottom: 1px solid $color-tui-blue-25;

  .header-menu {
    align-items: center;

    > .button + .button {
      margin-left: 20px;
    }
  }

  .container {
    justify-content: space-between;
  }

  .tui-svg--logo {
    height: 40px;
    margin-top: 14px;
    margin-right: 38px;
  }
}
</style>
