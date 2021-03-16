<template>
  <div class="app-card-hotel">
    <figure class="app-card-hotel__image-wrapper">
      <img
        class="app-card-hotel__image"
        :src="hotel.thumbnail"
        :alt="hotel.name"
        :title="hotel.name"
      />
    </figure>
    <div class="app-card-hotel__content">
      <h4 class="app-card-hotel__title h4 mb-2">{{ hotel.name }}</h4>

      <HotelClass :hotel-class="hotel.class" />
      <p class="app-card-hotel__location">
        <AppTag v-if="hotel.resort" class="mr-4" small>RESORT</AppTag>
        {{ hotel.city }}, {{ hotel.country }}
      </p>

      <div class="app-card-hotel__footer d-flex">
        <p class="app-card-hotel__price">{{ hotel.price }} € /night</p>
        <AppButton type="red" size="small">Book now</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/buttons/AppButton'
import IconArrowLong from '@/assets/svg/icon-arrow-long.svg'
import HotelClass from '@/components/ui/HotelClass'
import AppTag from '@/components/ui/AppTag'

export default {
  name: 'AppCardHotel',

  components: {
    AppButton,
    IconArrowLong,
    HotelClass,
    AppTag
  },

  props: {
    hotel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.app-card-hotel {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: border-radius(extra);
  background: var(--tui-white);
  overflow: hidden;
  font-size: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  transition: 0.2s ease-in;

  $root: &;

  &:hover {
    box-shadow: box-shadow(level2);

    #{$root}__image {
      transform: scale(1.08) translateY(-50%);
    }
  }

  &__content {
    padding: 16px 24px 24px;
  }

  &__image-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-bottom: 50%;
  }

  &__image {
    position: absolute;
    left: 0;
    top: 50%;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    transform: translateY(-50%);
    transition: 0.2s cubic-bezier(0.05, 0.36, 0.57, 1.01);
  }

  &__title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--tui-dark-100);
  }

  .hotel-class {
    margin-bottom: 24px;
  }

  &__location {
    display: flex;
    font-size: 16px;
    color: var(--tui-dark-100);
    align-items: center;
    min-height: 24px;
  }

  &__footer {
    margin-top: 24px;
    border-top: 1px solid var(--color-border);
    padding-top: 16px;
    justify-content: space-between;
  }

  &__price {
    font-size: 20px;
    font-weight: bold;
    color: var(--tui-dark-100);
  }
}
</style>
