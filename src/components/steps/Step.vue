<script lang="ts">
import Icons from "@/components/icons/Icons.vue";
import { IconTypes } from "@/types/Icon";
import { PropType } from "vue";

export default {
  components: { Icons },
  props: {
    icon: {
      type: String as PropType<keyof typeof IconTypes>,
      default: IconTypes.step1,
    },
  },
};
</script>

<template>
  <li class="steps-order__item">
    <div class="steps-order__symbol">
      <Icons :name="icon" class="steps-order__icon" />
    </div>
    <p class="steps-order__title"><slot /></p>
  </li>
</template>

<style lang="scss">
@import "@/styles/core/support";

.steps-order__item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;

  @include desktop-and-laptop {
    transition: all 0.3s;
    filter: blur(5px);
    top: 30px;

    will-change: transform;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
  }

  @include desktop-and-laptop {
    flex: 1 0 209px;
  }

  @include mobile-only {
    flex: 1 0 140px;
  }

  @include desktop-and-laptop {
    .in-view &:nth-child(1) {
      animation: steps 0.5s forwards 0s ease;

      .steps-order__title {
        animation: steps-title 0.3s forwards 0.2s ease;
      }

      &::after {
        animation: steps-bg 1s forwards 0.2s ease;
      }
    }
    .in-view &:nth-child(2) {
      animation: steps 0.5s forwards 0.2s ease;

      .steps-order__title {
        animation: steps-title 0.3s forwards 0.4s ease;
      }

      &::after {
        animation: steps-bg 1s forwards 0.4s ease;
      }
    }
    .in-view &:nth-child(3) {
      animation: steps 0.5s forwards 0.4s ease;

      .steps-order__title {
        animation: steps-title 0.3s forwards 0.6s ease;
      }

      &::after {
        animation: steps-bg 1s forwards 0.6s ease;
      }
    }
    .in-view &:nth-child(4) {
      animation: steps 0.5s forwards 0.6s ease;

      .steps-order__title {
        animation: steps-title 0.3s forwards 0.8s ease;
      }

      &::after {
        animation: steps-bg 1s forwards 0.8s ease;
      }
    }
    .in-view &:nth-child(5) {
      animation: steps 0.5s forwards 0.8s ease;

      .steps-order__title {
        animation: steps-title 0.3s forwards 1s ease;
      }
    }
  }

  &:not(:last-child) {
    &::after {
      @include order-steps-fix {
        content: "";
        @include background-circles-with-space(6px, 20px);
        color: $white-100;
        display: block;
        position: absolute;
        left: calc(100% - 38px);
        top: 47px;
        width: 100%;
        height: 6px;
        overflow: hidden;
        opacity: 0;
      }
    }
  }
}

.steps-order__symbol {
  border-radius: 50%;
  background-color: $accent-100;
  border: 5px solid $accent-50;
  display: flex;

  @include desktop-and-laptop {
    width: 100px;
    height: 100px;
  }

  @include mobile-only {
    width: 70px;
    height: 70px;
  }
}

.steps-order__icon {
  color: $white-100;
  margin: auto;

  @include desktop-and-laptop {
    width: 55px;
    height: 55px;
  }

  @include mobile-only {
    width: 35px;
    height: 35px;
  }
}

.steps-order__title {
  color: $white-100;
  text-align: center;

  @include desktop-and-laptop {
    font-size: 16px;
    line-height: 19.2px;

    transform: translateY(-100%);
    opacity: 0;
  }

  @include mobile-only {
    font-size: 14px;
    line-height: 16px;
  }

  @include text-line-clamp();
}
</style>
