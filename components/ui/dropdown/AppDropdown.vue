<template>
  <div
    class="app-dropdown"
    :class="[
      { 'app-dropdown--visible': active },
      `app-dropdown--arrow-${arrowPosition}`
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppDropdown',

  props: {
    active: {
      type: Boolean,
      default: false
    },
    arrowPosition: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss">
.app-dropdown {
  position: absolute;
  min-height: 200px;
  background: var(--tui-white);
  box-shadow: box-shadow(level2);
  z-index: z-index(dropdown);
  border-radius: border-radius(base);
  border: 1px solid rgba(#000, 0.05);
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  transition: 0.2s cubic-bezier(0, 0.3, 0.13, 1);
  min-width: 185px;

  &--visible {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }

  &--arrow-left {
    &:before {
      left: 24px;
    }
  }

  &--arrow-right {
    &:before {
      right: 24px;
    }
  }

  &:before {
    font-size: 16px;
    content: '▲';
    transform: scaleX(1.2) scaleY(0.6);
    position: absolute;
    color: var(--tui-white);
    text-shadow: 0 -1px rgba(#000, 0.05);
    top: -15px;
    line-height: normal;
  }
}
</style>
