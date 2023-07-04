<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <main class="main">
    <router-view />
  </main>
  <Footer />
</template>

<style lang="scss">
@import "@/styles/core";

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  display: flex;
  flex-direction: column;
}
</style>
