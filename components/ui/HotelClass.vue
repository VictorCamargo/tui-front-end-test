<template>
  <div class="hotel-class d-flex">
    <IconStar v-for="i in quantity" :key="i" />
    <span class="hotel-class__superior" v-if="superior">SUPERIOR</span>
  </div>
</template>

<script>
import IconStar from '@/assets/svg/icon-star.svg'

export default {
  name: 'HotelClass',

  components: {
    IconStar
  },

  props: {
    hotelClass: {
      type: Number,
      require: true
    }
  },

  computed: {
    quantity() {
      return Math.floor(this.hotelClass)
    },

    superior() {
      return this.hotelClass % 1 != 0
    }
  }
}
</script>

<style lang="scss">
.hotel-class {
  align-items: center;

  .app-svg {
    width: 16px;
    height: 16px;
    fill: var(--tui-dark-100);
    stroke: var(--tui-dark-100);
  }

  &__superior {
    font-size: 12px;
    color: var(--tui-dark-100);
    letter-spacing: 1.25px;
    margin-left: 3px;
  }
}
</style>
