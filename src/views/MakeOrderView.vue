<script lang="ts">
import MakeOrder from "@/components/MakeOrder.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MakeOrderView",
  components: { MakeOrder },
});
</script>

<template>
  <MakeOrder />
</template>
