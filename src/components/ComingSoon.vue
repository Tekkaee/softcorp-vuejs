<script lang="ts">
export default {
  props: {
    page: {
      type: String,
    },
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="coming-soon">
    <picture class="coming-soon__picture">
      <img
        class="coming-soon__image"
        src="../assets/images/coming-soon-desktop.png"
        alt=""
      />
    </picture>
    <div class="coming-soon__content">
      <p class="coming-soon__title">
        Page ~<span class="coming-soon__page">{{ page }}</span
        >~ coming soon!
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/core/support";

.coming-soon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.coming-soon__picture {
  width: 300px;
  display: block;
  z-index: 1;

  & + .coming-soon__content {
    margin-top: -12px;
  }
}

.coming-soon__image {
  object-fit: contain;
  width: 100%;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.16));
}

.coming-soon__content {
  background-color: $white-100;
  border-radius: 12px;
  padding: 12px 24px;
  text-align: center;
  border: 1px solid $accent-50;
}

.coming-soon__title {
  color: $select-bg;
  font-size: 18px;
}

.coming-soon__page {
  text-transform: uppercase;
  font-weight: 600;
  color: $accent-100;
  display: inline-block;
  animation: shake infinite 2s forwards;
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(3deg);
  }
  10% {
    transform: rotate(-3deg);
  }
  15% {
    transform: rotate(0deg);
  }
  85% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(3deg);
  }
  95% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
