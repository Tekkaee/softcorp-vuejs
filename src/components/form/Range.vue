<template>
  <div class="form-order__item form-order__item--range form-order__item--2x">
    <p class="form-order__value">{{ currentValue }} %</p>
    <input
      ref="target"
      :id="id"
      :name="name"
      :value="currentValue"
      :max="max"
      :min="min"
      step="1"
      class="form-order__item"
      type="range"
      aria-label="Percentage"
      @input="changeValue"
      @change="changeValue"
    />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
const target = ref<HTMLInputElement | null>(null);
const currentValue = ref(25);
export default {
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    defaultValue: {
      type: Number,
      default: 25,
    },
  },
  setup() {
    function changeValue(value: any) {
      currentValue.value = parseInt(value?.target?.value);
    }

    return { target, currentValue, changeValue };
  },
};
</script>

<style lang="scss">
@import "@/styles/core/support";

.form-order__item--range {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4.5px;
  color: $white-100;

  will-change: transform;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
}
</style>
