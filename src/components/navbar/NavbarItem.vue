<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  to: String,
});
</script>

<template>
  <li class="navigation__item">
    <router-link
      :to="to"
      class="navigation__link"
      active-class="navigation__link--active"
    >
      <slot></slot>
    </router-link>
  </li>
</template>

<style lang="scss">
@import "@/styles/core/support";
.navigation__item {
  color: $white-100;
  transition: color 0.2s, top 0.2s;
  position: relative;

  &--active {
    color: $accent-70;
  }

  &:hover {
    @include desktop-and-laptop {
      color: $accent-70;
    }
  }
}
.navigation__link {
  color: inherit;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  text-transform: uppercase;

  &--active {
    color: $accent-70;
  }

  @include desktop-and-laptop {
    font-size: 13px;
    line-height: calc(15.6 / 13);
  }

  @include mobile-only {
    font-size: 24px;
    line-height: calc(28 / 14);
  }
}
</style>
