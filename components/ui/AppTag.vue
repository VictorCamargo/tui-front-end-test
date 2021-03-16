<template>
  <span class="app-tag" :class="{ 'app-tag--small': small }">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'AppTag',

  props: {
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.app-tag {
  display: inline-flex;
  border: 1px solid var(--color-border);
  padding: 0 12px;
  height: 32px;
  align-items: center;
  border-radius: calc(32px / 2);

  &--small {
    height: 24px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.25px;
  }
}
</style>
