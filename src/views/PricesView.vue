<script lang="ts">
import Prices from "@/components/Prices.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PricesView",
  components: { Prices },
});
</script>

<template>
  <Prices />
</template>
