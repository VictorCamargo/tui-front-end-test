<template>
  <div class="app-grid" :class="`app-grid--column-${columns}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppGrid',

  props: {
    columns: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style lang="scss">
.app-grid {
  display: grid;
  column-gap: 32px;

  @for $i from 1 through 12 {
    &--column-#{$i} {
      grid-template-columns: repeat($i, [col-start] 1fr);
    }
  }
}
</style>
