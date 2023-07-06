<script setup lang="ts">
import Button from "@/components/Button.vue";
import NavbarItem from "@/components/navbar/NavbarItem.vue";
import { NAVBAR_ROUTES } from "@/router";
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["update:isOpen"]);

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const closeMenu = () => {
  emit("update:isOpen", false);
};
</script>

<template>
  <nav class="navigation" :class="isOpen ? 'navigation--is-open' : ''">
    <ul class="navigation__list">
      <NavbarItem
        v-for="(route, index) in NAVBAR_ROUTES"
        :key="index"
        :to="route.path"
        @click="closeMenu"
      >
        {{ route.title }}
      </NavbarItem>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "@/styles/core/support";

.navigation {
  @include mobile-only {
    height: calc(100vh - $header-height-mobile);
    width: 100vw;
    position: absolute;
    left: 0;
    top: 100%;
    transform: scale(0);
    transition: all 0.2s ease;
    transform-origin: top right;
  }

  &--is-open {
    transform: scale(1);
  }
}

.navigation__list {
  display: flex;

  @include desktop-and-laptop {
    gap: 60px;
  }

  @include mobile-only {
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-bottom: calc(
      $header-height-mobile + env(safe-area-inset-bottom, 0)
    );
  }
}
</style>
