<script lang="ts">
import ComingSoon from "@/components/ComingSoon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { ComingSoon },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="prices">
    <div class="container prices__container">
      <ComingSoon page="Prices" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/core/support";

.prices {
  display: flex;
  align-items: center;
  justify-content: center;

  @include desktop-and-laptop {
    min-height: calc(100vh - $header-height-desktop + 20px);
  }

  @include mobile-only {
    min-height: calc(100vh - $header-height-mobile);
  }
}
</style>
