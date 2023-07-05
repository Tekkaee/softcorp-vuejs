<template>
  <div class="footer__group">
    <ul class="footer__list">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss">
@import "@/styles/core/support";

.footer__group {
  & + & {
    @include desktop-only {
      border-left: 1px solid $divider;
      padding-left: 40px;
    }
  }

  &:not(:last-child) {
    @include desktop-and-laptop {
      padding-right: 40px;
    }
  }

  &:first-child {
    @include laptop-and-mobile {
      order: 1;
      width: 100%;
      text-align: center;
    }
  }
}

.footer__list {
  display: flex;

  @include desktop-and-laptop {
    gap: 38px;
  }

  @include mobile-only {
    gap: 18px;
    flex-wrap: wrap;
  }
}
</style>
