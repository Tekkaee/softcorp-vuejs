<script lang="ts">
import Order from "@/components/Order.vue";
import Welcome from "@/components/Welcome.vue";
import { useIntersectionObserver } from "@vueuse/core";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  components: { Order, Welcome },
  setup() {
    const target = ref<HTMLElement[] | null>(null);

    onMounted(() => {
      target.value = document.querySelectorAll(
        "[data-observe]"
      ) as unknown as HTMLElement[];

      target.value.forEach((el: any) => {
        useIntersectionObserver(el, ([{ isIntersecting, target }]) => {
          if (target.classList.contains("in-view")) return;

          if (isIntersecting) {
            target.classList.add("in-view");
          }
        });
      });
    });
  },
});
</script>

<template>
  <Welcome />
  <Order />
</template>
