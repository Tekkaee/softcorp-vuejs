<script lang="ts">
import Order from "@/components/Order.vue";
import Welcome from "@/components/Welcome.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
  components: {
    Order,
    Welcome,
  },
});
</script>

<template>
  <Welcome />
  <Order />
</template>
