<template>
  <header class="tui-header">
    <div class="container">
      <LogoTui />
      TODO Header
    </div>
  </header>
</template>

<script>
import LogoTui from '@/assets/svg/logo-tui.svg'

export default {
  name: 'TuiHeader',
  components: {
    LogoTui
  }
}
</script>

<style lang="scss" scoped>
.tui-header {
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $color-tui-blue-25;

  .tui-svg--logo {
    height: 45px;
  }
}
</style>
