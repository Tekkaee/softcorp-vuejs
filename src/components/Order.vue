<script lang="ts">
import Form from "@/components/form/Form.vue";
import StepList from "@/components/steps/StepList.vue";
import { SELECT_OPTIONS } from "@/data/select-options";
import { defineComponent } from "vue";
export default defineComponent({
  computed: {
    SELECT_OPTIONS() {
      return SELECT_OPTIONS;
    },
  },
  components: { Form, StepList },
});
</script>

<template>
  <section class="order">
    <div class="container order__container">
      <div class="order__header" data-observe>
        <h2 class="order__title">
          Оформление <span class="text--accent">Заказа</span>
        </h2>
        <h3 class="order__subtitle">
          Перед заполнением формы ознакомьтесь с нашей схемой работы!
        </h3>
      </div>
      <div class="steps-order order__steps" data-observe>
        <StepList />
      </div>
      <Form class="order__form" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/styles/core/support";

.order {
  @include desktop-and-laptop {
    padding: 120px 0 150px;
    background: $text-80 url("@/assets/images/order-bg-desktop.png");
  }

  @include mobile-only {
    padding: 60px 0 40px;
    background: $text-80 url("@/assets/images/order-bg-mobile.png");
  }
}

.order__container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.order__header {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include desktop-and-laptop {
    gap: 30px;
  }

  @include mobile-only {
    gap: 10px;
  }
}

.order__title {
  position: relative;
  text-transform: uppercase;
  color: $white-100;
  font-weight: 800;

  @include desktop-and-laptop {
    font-size: 36px;
    line-height: 43.2px;

    opacity: 0;
    top: 30px;
    transition: all 0.5s ease-in-out;
  }

  @include mobile-only {
    font-size: 24px;
    line-height: 32px;
  }

  .in-view & {
    top: 0;
    opacity: 1;
  }
}

.order__subtitle {
  position: relative;
  color: $text-30;
  font-weight: 400;

  @include desktop-and-laptop {
    font-size: 18px;
    line-height: 21.6px;

    opacity: 0;
    top: 20px;
    transition: all 0.5s ease-in-out;
  }

  @include mobile-only {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }

  .in-view & {
    top: 0;
    opacity: 1;
  }
}

.steps-order__title {
  color: $white-100;
  text-align: center;

  @include desktop-and-laptop {
    font-size: 16px;
    line-height: 19.2px;

    transform: translateY(-100%);
    opacity: 0;
  }

  @include mobile-only {
    font-size: 14px;
    line-height: 16px;
  }

  @include text-line-clamp();
}

$form-gap-desktop: 30px;
$form-gap-mobile: 20px;

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

@keyframes steps {
  0% {
    filter: blur(5px);
    top: 30px;
  }
  50% {
    top: 0;
    filter: blur(5px);
  }
  100% {
    top: 0;
    filter: blur(0);
  }
}

@keyframes steps-bg {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes steps-title {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
