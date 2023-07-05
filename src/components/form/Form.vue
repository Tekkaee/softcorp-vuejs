<template>
  <form class="form-order" id="form-order" action="" method="POST">
    <div class="form-order__inner">
      <slot />
    </div>
    <Button
      as="button"
      type="submit"
      variant="default"
      aria-label="Send form"
      class="form-order__submit"
    >
      Отправить
    </Button>
  </form>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Button },
});
</script>

<style lang="scss">
@import "@/styles/core/support";

.form-order__submit {
  will-change: transform;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  filter: blur(5px);

  transition: 0.3s ease;

  @include desktop-and-laptop {
    min-width: 370px;
  }

  @include mobile-only {
    width: 100%;
  }

  .in-view & {
    filter: blur(0);
  }
}

.form-order {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.form-order__inner {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @include desktop-and-laptop {
    gap: $form-gap-desktop;
  }

  @include mobile-only {
    gap: $form-gap-mobile;
  }
}
</style>
