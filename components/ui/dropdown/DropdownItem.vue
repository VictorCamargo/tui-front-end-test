<template>
  <li class="dropdown_item">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'DropdownItem'
}
</script>

<style lang="scss">
.dropdown_item {
  display: flex;
  list-style: none;
  color: $color-link;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  align-items: center;

  transition: background 0.3s cubic-bezier(0.26, 0.54, 0.57, 0.99);

  &:hover {
    background: $color-tui-blue-25;
  }

  a,
  button {
    padding: 0 15px;
    display: flex;
    color: $color-link;
    text-decoration: none;
    width: 100%;
    height: 100%;
    align-items: center;
    white-space: nowrap;
  }

  .tui-svg {
    margin-right: 9px;
  }
}
</style>
