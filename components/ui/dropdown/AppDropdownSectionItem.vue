<template>
  <li
    class="app-dropdown__section-item"
    :class="{ 'dropdown__section-item--disabled': disabled }"
    @click="$emit('clicked')"
  >
    <slot />
  </li>
</template>

<script>
export default {
  name: 'AppDropdownSectionItem',

  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.app-dropdown {
  &__section-item {
    display: flex;
    list-style: none;
    color: var(--tui-dark-100);
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    align-items: center;
    padding: 0 15px;
    white-space: nowrap;
    transition: background 0.3s cubic-bezier(0.26, 0.54, 0.57, 0.99);
    cursor: pointer;

    &--disabled {
      pointer-events: none;
    }

    &:hover {
      background: $tui-blue-25;
    }

    a,
    button {
      padding: 0 15px;
      margin: 0 -15px;
      display: flex;
      color: var(--tui-dark-100);
      text-decoration: none;
      height: 100%;
      align-items: center;
    }

    .app-svg {
      margin-right: 9px;
    }
  }
}
</style>
