<template>
  <section class="welcome">
    <picture class="welcome__bg">
      <source
        type="image/webp"
        media="(min-width: 768px)"
        srcset="@/assets/images/header-bg-desktop.webp"
      />
      <source
        type="image/png"
        media="(min-width: 768px)"
        srcset="@/assets/images/header-bg-desktop.jpg"
      />

      <source
        type="image/webp"
        media="(max-width: 767px)"
        srcset="@/assets/images/header-bg-mobile.webp"
      />
      <source
        type="image/png"
        media="(max-width: 767px)"
        srcset="@/assets/images/header-bg-mobile.jpg"
      />

      <img
        class="welcome__image"
        src="@/assets/images/header-bg-desktop.jpg"
        alt="welcome image"
      />
    </picture>
    <div class="container welcome__container">
      <div class="welcome__content">
        <h1 class="welcome__title">
          <span class="text--accent">Lorem ipsum</span> dolor sit amet
          consectetur <span class="text--accent">adipiscing</span>
        </h1>

        <div class="list-welcome welcome__list">
          <p class="list-welcome__title">
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </p>
          <ul class="list-welcome__content">
            <li class="list-welcome__item">Totam rem aperiam eaque ipsa</li>
            <li class="list-welcome__item">
              Sit voluptatem accusantium doloremque laudantium
            </li>
            <li class="list-welcome__item">
              Sed ut perspiciatis, unde omnis iste natus error
            </li>
          </ul>
        </div>

        <div class="welcome__control">
          <Button class="welcome__button" as="a">Заказать</Button>
          <Button class="welcome__button" as="a" variant="outline">
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<style lang="scss">
@import "@/styles/core/support";

.welcome {
  position: relative;
  display: flex;
  align-items: center;

  @include desktop-and-laptop {
    min-height: 849px;
  }
}

.welcome__container {
  flex: 1;
}

.welcome__image {
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: inline-block;
}

.welcome__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.welcome__content {
  max-width: 780px;
  display: flex;
  flex-direction: column;

  @include desktop-and-laptop {
    gap: 80px;
  }

  @include mobile-only {
    gap: 40px;
    padding: calc($header-height-mobile + 60px) 0 60px;
  }
}

.welcome__title {
  color: $text-100;
  text-transform: uppercase;
  font-weight: 700;

  @include desktop-and-laptop {
    font-size: 48px;
    line-height: calc(57.6 / 48);
  }

  @include mobile-only {
    font-size: 24px;
    line-height: calc(32 / 24);
  }

  &--accent {
    color: $accent-100;
  }
}

.list-welcome {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include desktop-and-laptop {
    font-size: 20px;
    line-height: calc(24 / 20);
  }

  @include mobile-only {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
}

.list-welcome__title {
  font-weight: 700;
}

.list-welcome__item {
  &::before {
    content: "-";
    padding: 10px;
    margin-right: 1px;
  }

  & + & {
    margin-top: 5px;
  }
}

.welcome__control {
  display: flex;

  @include desktop-and-laptop {
    gap: 30px;
  }

  @include mobile-only {
    gap: 12px;
  }
}
</style>
