<template>
  <label
    class="form-search-input"
    :class="{ 'form-search-input--focus': focus }"
  >
    <slot />
    <input
      class="form-search-input__input"
      type="text"
      placeholder="Search a place or hotel"
      @focus="focus = true"
      @blur="focus = false"
    />
  </label>
</template>

<script>
export default {
  name: 'FormSearchInput',
  data() {
    return {
      focus: false
    }
  }
}
</script>

<style lang="scss">
.form-search-input {
  position: relative;

  $root: &;

  &:before {
    content: '';
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--tui-blue-100);
    border-radius: border-radius(base);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s cubic-bezier(0, 0, 0.13, 0.97);
  }

  .app-svg {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    stroke: var(--tui-grey-100);
    width: 26px;
    transition: stroke 0.2s cubic-bezier(0, 0, 0.13, 0.97);
  }

  &__input {
    padding: 8px 8px 8px 36px;
    border: 1px solid var(--color-border);
    height: 48px;
    width: 100%;
    border-radius: border-radius(base);
    font-size: 20px;
    font-family: font-family(main);
    font-style: italic;
    transition: 0.2s cubic-bezier(0, 0, 0.13, 0.97);
    color: var(--tui-dark-100);

    @include placeholder {
      color: var(--tui-grey-100);
    }

    &:focus {
      outline: none;
    }
  }

  &--focus {
    .app-svg {
      stroke: var(--tui-dark-100);
    }

    #{$root}__input {
      @include placeholder {
        color: var(--tui-dark-100);
      }
    }

    &:before {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
