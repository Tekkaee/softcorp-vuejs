<script setup lang="ts">
import { TagType, VariantType } from "@/types/Elements";
import { PropType, defineProps } from "vue";

defineProps({
  as: {
    type: String as PropType<keyof typeof TagType>,
    default: "button",
  },
  variant: {
    type: String as PropType<keyof typeof VariantType>,
    default: "default",
  },
  to: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    :class="[$style.button, $style['button--' + variant]]"
  >
    <slot />
  </router-link>
  <component
    v-else
    :is="as"
    :class="[$style.button, $style['button--' + variant]]"
  >
    <slot />
  </component>
</template>

<style module lang="scss">
@import "@/styles/core/support";

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  text-transform: uppercase;
  position: relative;
  transition: top 0.2s, box-shadow 0.2s, border 0.2s, color 0.2s;
  top: 0;
  border: 1px solid;
  gap: 10px;
  font-size: 13px;
  line-height: 15.6px;

  @include desktop-and-laptop {
    cursor: pointer;
    min-width: 183px;
    padding: 15px;
  }

  @include mobile-only {
    min-width: 123px;
    padding: 12px;
  }

  &:active {
    top: 3px;
  }

  &--default {
    background-color: $accent-100;
    color: $white-100;

    &:hover {
      @include desktop-and-laptop {
        box-shadow: 0 0 0 3px rgba($accent-100, 0.5);
      }
    }
  }

  &--outline {
    background-color: $white-100;
    color: $text-90;

    &:hover {
      @include desktop-and-laptop {
        box-shadow: 0 0 0 3px rgba($text-90, 0.5);
      }
    }
  }
}

.button__icon {
  width: 20px;
  height: 20px;
  display: block;
}
</style>
