<template>
  <nuxt-link
    v-if="link"
    class="app-button d-flex"
    :class="[
      `app-button--${type}`,
      { 'app-button--disabled': disabled },
      { 'app-button--light': light }
    ]"
    :to="link"
    key="app-button"
  >
    <slot />
  </nuxt-link>
  <button
    v-else
    key="app-button"
    class="app-button d-flex"
    :class="[`app-button--${type}`, { 'app-button--disabled': disabled }]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    link: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'link' // link, lite, dark, red, white
    },
    disabled: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.app-button {
  position: relative;
  padding: 3px 0;
  font-size: 20px;
  font-weight: bold;
  color: var(--tui-dark-100);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-family: font-family(main);
  min-height: 28px;

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
    border: 4px solid var(--tui-blue-100);
    border-radius: border-radius(extra);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0, 0, 0.13, 0.97);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;

    &:before {
      opacity: 1;
    }
  }

  &--lite {
    position: relative;
    height: 40px;
    border: 1px solid var(--tui-grey-38);
    border-radius: border-radius(base);
    padding: 0 16px;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in;

    &:after {
      content: '';
      border: 2px solid var(--tui-dark-100);
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
      border-color: var(--tui-dark-100);
    }

    &#{$root}--disabled {
      background: var(--tui-grey-38u);
      color: var(--tui-grey-38);
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
      background: var(--tui-dark-100);
      pointer-events: none;
    }

    &:before {
      left: -3px;
      top: -3px;
      right: -3px;
      bottom: -3px;
      border-width: 3px;
      border-radius: 0;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }

  &--light {
    color: var(--tui-white);

    .app-svg {
      stroke: var(--tui-white);
    }

    &#{$root}--link {
      &:after {
        background: var(--tui-white);
      }
    }
  }

  .app-svg {
    width: 26px;
    stroke-width: calc(20px * 0.1);
    margin-left: 4px;
    transform: translate(0, 2px);

    &:first-child {
      margin-left: 0;
      transform: none;
    }
  }
}
</style>
