<script setup lang="ts">
import Icons from "@/components/icons/Icons.vue";
import Navbar from "@/components/navbar/Navbar.vue";
import { ref } from "vue";

const isOpenMenu = ref(false);
const toggleView = () => (isOpenMenu.value = !isOpenMenu.value);
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <router-link class="logo header__logo" title="Logo" to="/">
        <Icons name="logo" />
      </router-link>
      <div @click="toggleView" class="burger header__burger">
        <Icons v-if="isOpenMenu" name="close" class="icon burger__button" />
        <Icons v-if="!isOpenMenu" name="burger" class="icon burger__button" />
      </div>
      <Navbar v-model:isOpen="isOpenMenu" class="header__navigation" />
    </div>
  </header>
</template>

<style lang="scss">
@import "@/styles/core/support";

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba($primary-100, 0.9);
  z-index: 2;
  display: flex;

  @include desktop-and-laptop {
    min-height: $header-height-desktop;
  }

  @include mobile-only {
    min-height: $header-height-mobile;
  }
}

.burger {
  width: 48px;
  height: 48px;
  position: relative;

  .burger__button--opened,
  .burger__button--closed {
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.2s;
  }

  @include desktop-and-laptop {
    display: none;
  }
}

.burger__button {
  width: inherit;
  height: inherit;
  display: block;
  color: $white-100;
  position: relative;
}

.header__container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo {
  width: 245px;
  height: 21px;
}
</style>
