<template>
  <div class="dropdown" :class="{ 'dropdown--visible': active }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',

  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  position: absolute;
  min-height: 200px;
  background: $tui-white;
  box-shadow: box-shadow(level2);
  z-index: z-index(dropdown);
  border-radius: border-radius(base);
  border: 1px solid rgba(#000, 0.05);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-15px);
  transition: 0.2s cubic-bezier(0, 0.3, 0.13, 1);

  &--visible {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }

  &:before {
    content: '▲';
    transform: scaleX(1.2) scaleY(0.6);
    position: absolute;
    color: $tui-white;
    text-shadow: 0 -1px rgba(#000, 0.05);
    left: 24px;
    top: -15px;
  }
}
</style>
