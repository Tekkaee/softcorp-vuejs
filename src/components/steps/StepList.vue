<script setup lang="ts">
import Step from "@/components/steps/Step.vue";
import { ORDER_STEPS } from "@/data/order-steps";
</script>

<template>
  <ul class="steps-order__list">
    <Step v-for="(step, index) in ORDER_STEPS" :key="index" :icon="step.icon">
      {{ step.title }}
    </Step>
  </ul>
</template>

<style lang="scss">
@import "@/styles/core/support";

.steps-order__list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  margin: 0 auto;

  @include desktop-and-laptop {
    gap: 30px;
  }

  @include mobile-only {
    gap: 20px;
  }
}
</style>
