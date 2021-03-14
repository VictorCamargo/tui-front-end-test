<template>
  <div class="app-hero">
    <img class="app-hero__image" :src="src" :alt="alt" :title="title" />
  </div>
</template>

<script>
export default {
  name: 'AppHero',

  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.app-hero {
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  max-height: 400px;
  display: flex;
  position: relative;

  &__image {
    max-width: 100%;
    object-fit: cover;
    max-height: 100%;
  }
}
</style>
