<template>
  <div class="app-card">
    <img class="app-card__image" :src="img" alt="" />
    <div class="app-card__content">
      <h3 class="app-card__title h3 mb-2">{{ title }}</h3>
      <AppButton :link="localePath(link)" light>
        <span>{{ $t('visit') }}</span
        ><IconArrowLong />
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/buttons/AppButton'
import IconArrowLong from '@/assets/svg/icon-arrow-long.svg'

export default {
  name: 'AppCard',

  components: {
    AppButton,
    IconArrowLong
  },

  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.app-card {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: border-radius(extra);
  background: var(--tui-white);
  overflow: hidden;
  font-size: 0;
  z-index: 1;
  display: flex;
  height: 100%;
  max-width: 100%;
  transition: 0.2s ease-in;

  $root: &;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 29.6%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.80015756302521) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  &:hover {
    box-shadow: box-shadow(level2);

    #{$root}__image {
      transform: scale(1.08);
    }
  }

  &__content {
    position: absolute;
    padding: 32px;
  }

  &__title {
    color: var(--tui-white);
  }

  &__image {
    position: relative;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    transition: 0.2s cubic-bezier(0.05, 0.36, 0.57, 1.01);
  }
}
</style>
