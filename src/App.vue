<script setup lang="ts">
import Footer from "@/components/footer/Footer.vue";
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
</style>
