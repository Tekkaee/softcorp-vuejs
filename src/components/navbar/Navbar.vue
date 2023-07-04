<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <NavbarItem
        v-for="(route, index) in NAVBAR_ROUTES"
        :key="index"
        :to="route.path"
      >
        {{ route.title }}
      </NavbarItem>
    </ul>
  </nav>
</template>

<script lang="ts">
import NavbarItem from "@/components/navbar/NavbarItem.vue";
import { NAVBAR_ROUTES } from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    NAVBAR_ROUTES() {
      return NAVBAR_ROUTES;
    },
  },
  components: { NavbarItem },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "@/styles/core/support";

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
