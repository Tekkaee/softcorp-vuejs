<script setup lang="ts">
import Button from "@/components/Button.vue";
import Icons from "@/components/icons/Icons.vue";
import { ref, defineProps, defineEmits } from "vue";

const target = ref<HTMLInputElement | null>(null);
const fileName = ref<string | null>(null);

defineProps({
  required: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  title: {
    type: String,
    default: "Прикрепить файл",
  },
  ariaLabel: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:input"]);
function changeValue(value: any) {
  fileName.value = value.target.files[0].name;
  emit("update:input", value.target.files[0]);
}
function reset(e: Event) {
  e.stopPropagation();
  e.preventDefault();
  fileName.value = null;
  if (target.value?.files) target.value.value = "";
}
</script>

<template>
  <label for="file" class="form-order__item">
    <input
      ref="target"
      :id="id"
      :name="name"
      type="file"
      hidden="hidden"
      :aria-label="ariaLabel"
      @change="changeValue"
    />
    <Button as="div" variant="outline" class="form-order__file">
      <Icons class="button__icon" name="file" />
      {{ title }}
    </Button>
    <div v-if="fileName" @click="reset" class="form-order__details">
      <p class="form-order__name">{{ fileName }}</p>
      <a @click="reset" href="#" class="form-order__link">
        <Icons class="form-order__delete" name="close" />
      </a>
    </div>
  </label>
</template>

<style lang="scss">
@import "@/styles/core/support";

.form-order__item {
  display: flex;
  position: relative;

  will-change: transform;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  @include desktop-and-laptop {
    flex: 1 0 calc((100% - ($form-gap-desktop * 2)) / 3);
  }

  @include mobile-only {
    width: 100%;
  }

  &--select {
    z-index: 1;
  }

  @include desktop-and-laptop {
    filter: blur(5px);

    transition: 0.3s ease;
  }

  .in-view & {
    @include desktop-and-laptop {
      filter: blur(0);
    }
  }

  &--2x {
    flex: 1 0 calc((100% - ($form-gap-desktop * 2)) / 3 * 2 + $form-gap-desktop);
  }

  input:not(:placeholder-shown) {
    & ~ .form-order__placeholder {
      display: none;
    }
  }
}

.button__icon {
  width: 20px;
  height: 20px;
  display: block;
}

.form-order__file {
  flex: 1;
  font-weight: 600;
  font-size: 15px;
  line-height: calc(18 / 15);
}

.form-order__details {
  align-items: center;
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  color: $accent-100;
  max-width: 100%;
  text-align: center;
  display: flex;
  gap: 10px;

  &:empty {
    &::after {
      display: none;
    }
  }
}

.form-order__name {
  @include text-line-clamp();
  flex: 1;
}

.form-order__link {
  display: inline-block;
  height: 24px;
  width: 24px;
}

.form-order__delete {
  color: $accent-100;
}
</style>
