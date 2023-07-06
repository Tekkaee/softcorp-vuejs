<script lang="ts">
import Icons from "@/components/icons/Icons.vue";
import { IconTypes } from "@/types/Icon";
import { PropType } from "vue";

export default {
  components: { Icons },
  props: {
    link: {
      type: String as PropType<string | null>,
      default: null,
    },
    title: {
      type: String,
    },
    icon: {
      type: String as PropType<keyof typeof IconTypes>,
      default: IconTypes.step1,
    },
  },
};
</script>
<template>
  <li v-if="!link" class="footer__item">
    <Icons class="footer__icon" :name="icon" />
    {{ title }}
  </li>
  <li v-else>
    <a :href="link" class="footer__item" target="_blank">
      <Icons class="footer__icon" :name="icon" />
      {{ title }}
    </a>
  </li>
</template>

<style lang="scss">
@import "@/styles/core/support";

.footer__item {
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  @extend %text;
  color: $text-20;
}

a.footer__item {
  color: $white-100;
  transition: all 0.2s;

  &:hover {
    @include desktop-only {
      color: $accent-100;
    }
  }
}

.footer__icon {
  width: 20px;
  height: 20px;
  display: block;
  color: $accent-100;
}
</style>
