<template>
  <div class="app-search d-flex">
    <h3 class="app-search__title h3">{{ $t('search.title') }}</h3>
    <div class="app-search__content">
      <div>
        <FormSearchInput class="app-search__keyword">
          <IconSearch />
        </FormSearchInput>
      </div>
      <div class="d-flex">
        <div class="app-search__date">
          <IconCalendar />
          <div>
            <span>{{ $t('search.check_in') }}</span>
            <p>28/10-29/10</p>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="app-search__guest">
          <IconUser />
          <div>
            <span>{{ $t('search.guests') }}</span>
            <p>2 {{ $t('search.adults') }}</p>
          </div>
        </div>
      </div>
      <AppButton type="red" size="large"
        >{{ $t('search.submit') }}<IconArrowLong
      /></AppButton>
    </div>
  </div>
</template>

<script>
import AppGrid from '@/components/grid/AppGrid'
import IconSearch from '@/assets/svg/icon-search.svg'
import FormSearchInput from '@/components/ui/FormSearchInput'
import IconArrowLong from '@/assets/svg/icon-arrow-long.svg'
import IconUser from '@/assets/svg/icon-user.svg'
import IconCalendar from '@/assets/svg/icon-calendar.svg'
import AppButton from '@/components/ui/buttons/AppButton'

export default {
  name: 'AppSearch',

  components: {
    AppGrid,
    IconSearch,
    IconUser,
    IconCalendar,
    FormSearchInput,
    IconArrowLong,
    AppButton
  }
}
</script>

<style lang="scss">
.app-search {
  position: relative;
  padding: 40px;
  background: var(--tui-white);
  box-shadow: box-shadow(level3);
  justify-content: space-between;

  @media screen and (max-width: 1439px) {
    flex-direction: column;
  }

  &__title {
    color: var(--tui-dark-100);

    @media screen and (max-width: 1439px) {
      margin-bottom: 24px;
    }
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &__keyword {
    min-width: 400px;
    margin-left: 24px;

    @media screen and (max-width: 1920px) {
      min-width: 350px;
    }

    @media screen and (max-width: 1439px) {
      min-width: 274px;
      margin-left: 0;
    }
  }

  &__date,
  &__guest {
    display: inline-flex;
    padding: 2px 8px;
    border: 1px solid var(--color-border);
    height: 48px;
    width: 100%;
    border-radius: border-radius(base);
    font-size: 20px;
    font-family: font-family(main);
    transition: 0.2s cubic-bezier(0, 0, 0.13, 0.97);
    color: var(--tui-dark-100);
    min-width: 250px;
    line-height: 18px;
    margin-left: 24px;

    @media screen and (max-width: 1919px) {
      min-width: 200px;
    }

    .app-svg {
      width: 26px;
      margin-right: 8px;
    }

    span {
      font-size: 14px;
      color: var(--tui-grey-75);
    }
  }

  .app-button {
    margin-left: 24px;

    .app-svg {
      margin-left: 20px;
    }
  }

  // IGNORE
}
</style>
