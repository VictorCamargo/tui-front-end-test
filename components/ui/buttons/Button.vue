<template>
  <nuxt-link
    class="button d-flex"
    :class="[`button--${type}`, { 'button--disabled': disabled }]"
    :to="link"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'HeaderMenuItem',

  props: {
    link: {
      type: String,
      default: '#'
    },
    type: {
      type: String,
      default: 'link' // link, lite, dark, red, white
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.button {
  position: relative;
  padding: 3px 0;
  font-size: 20px;
  font-weight: bold;
  color: $color-link;
  text-decoration: none;

  $root: &;

  &--disabled {
    pointer-events: none;
    @include unselectable();
  }

  &:before {
    content: '';
    position: absolute;
    left: -4px;
    top: -4px;
    right: -4px;
    bottom: -4px;
    border: 4px solid $color-tui-blue-100;
    border-radius: border-radius(extra);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0, 0, 0.13, 0.97);
  }

  &:focus {
    outline: none;

    &:before {
      opacity: 1;
    }
  }

  &--lite {
    position: relative;
    height: 40px;
    border: 1px solid $tui-grey-38;
    border-radius: border-radius(base);
    padding: 0 16px;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in;

    &:after {
      content: '';
      border: 2px solid $tui-dark-100;
      position: absolute;
      left: -2px;
      top: -2px;
      bottom: -2px;
      right: -2px;
      border-radius: border-radius(base);
      opacity: 0;
      transition: 0.2s ease-in;
    }

    &:active {
      &:after {
        opacity: 1;
      }
    }

    &:hover {
      border-color: $tui-dark-100;
    }

    &#{$root}--disabled {
      background: $tui-grey-38u;
      color: $tui-grey-38;
    }
  }

  &--link {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 1px;
      width: 0;
      height: 2px;
      transition: width 0.3s cubic-bezier(0, 0.15, 0.37, 1);
      background: $color-link;
      pointer-events: none;
    }

    &:before {
      left: -3px;
      top: -3px;
      right: -3px;
      bottom: -3px;
      border-width: 3px;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
}
</style>
