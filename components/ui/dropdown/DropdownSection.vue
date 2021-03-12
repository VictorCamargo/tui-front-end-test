<template>
  <ul class="dropdown__section">
    <li v-if="title" class="dropdown__title">
      <span>{{ title }}</span>
    </li>
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'DropdownSection',

  props: {
    title: String
  }
}
</script>

<style lang="scss">
.dropdown {
  &__section {
    padding: 8px 0;

    & + & {
      border-top: 1px solid rgba(#000, 0.2);
    }
  }

  &__title {
    display: flex;
    align-items: center;
    padding: 0 15px;
    list-style: none;
    height: 30px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.25px;
    color: $tui-grey-75;
    text-transform: uppercase;
    pointer-events: none;
  }
}
</style>
