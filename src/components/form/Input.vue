<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["update:input"]);
const props = defineProps({
  type: {
    type: String,
  },
  value: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "Type..",
  },
  ariaLabel: {
    type: String,
    default: "",
  },
});
const onChange = (event: any) => {
  emit("update:input", event.target.value);
};
</script>

<template>
  <label :for="name" class="form-order__item">
    <input
      :id="props.id"
      :name="props.name"
      placeholder=" "
      :type="props.type ?? 'text'"
      :required="props.required"
      class="input input--default"
      :aria-label="props.ariaLabel"
      @input="onChange"
    />
    <span class="form-order__placeholder">{{ placeholder }}</span>
  </label>
</template>

<style lang="scss">
@import "@/styles/core/support";
.form-order__item {
  display: flex;
  position: relative;

  will-change: transform;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  @include desktop-and-laptop {
    flex: 1 0 calc((100% - ($form-gap-desktop * 2)) / 3);
  }

  @include mobile-only {
    width: 100%;
  }

  &--select {
    z-index: 1;
  }

  @include desktop-and-laptop {
    filter: blur(5px);

    transition: 0.3s ease;
  }

  .in-view & {
    @include desktop-and-laptop {
      filter: blur(0);
    }
  }

  &--2x {
    flex: 1 0 calc((100% - ($form-gap-desktop * 2)) / 3 * 2 + $form-gap-desktop);
  }

  input:not(:placeholder-shown) {
    & ~ .form-order__placeholder {
      display: none;
    }
  }
}

.form-order__placeholder {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font: inherit;
  left: 12px;
  cursor: text;

  @include desktop-and-laptop {
    font-size: 18px;
    line-height: 21.6px;
  }

  @include mobile-only {
    font-size: 14px;
    line-height: 16px;
  }

  &::selection {
    background: transparent;
  }
  &::-moz-selection {
    background: transparent;
  }
}
</style>
