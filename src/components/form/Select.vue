<script setup lang="ts">
import Icons from "@/components/icons/Icons.vue";
import { SelectOptionsProps } from "@/data/select-options";
import { onMounted, PropType, ref, defineProps, defineEmits } from "vue";
import { onClickOutside, useElementBounding } from "@vueuse/core";

const isOpen = ref(false);
const target = ref<HTMLSelectElement | null>(null);
const toTop = ref(false);
const { top, height } = useElementBounding(target);
const selected = ref<SelectOptionsProps | null>(null);

onMounted(() => {
  if (target?.value) target.value.selectedIndex = -1;
});

const emit = defineEmits(["update:input"]);

onClickOutside(target, () => isOpen.value && toggleView());

const setValue = (value: SelectOptionsProps) => {
  selected.value = value;
  emit("update:input", selected.value.value);
  toggleView();
};

function toggleView() {
  let shouldBeOpenToTop: boolean =
    top.value + height.value / 2 > document.documentElement.clientHeight / 1.5;

  if (shouldBeOpenToTop && !toTop.value) toTop.value = true;
  if (!shouldBeOpenToTop && toTop.value) toTop.value = false;

  isOpen.value = !isOpen.value;
}

defineProps({
  options: {
    type: [] as PropType<SelectOptionsProps[]>,
    default: [],
  },
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "Выберите тип системы",
  },
});
</script>

<template>
  <div class="form-order__item form-order__item--select" @click="toggleView">
    <div class="select">
      <select
        ref="target"
        :required="required"
        :name="name"
        :id="id"
        aria-label="Type"
      >
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
          :selected="selected"
        >
          {{ option.title }}
        </option>
      </select>
      <div
        class="select__input"
        :class="
          isOpen
            ? toTop
              ? 'select__input--opened-top'
              : 'select__input--opened-bottom'
            : ''
        "
      >
        <p class="select__value">
          {{ selected ? selected?.value : placeholder }}
        </p>
        <Icons name="chevron" class="select__icon" />
      </div>
      <div class="select__inner">
        <ul class="select__options">
          <li
            v-for="(option, index) in options"
            :key="index"
            class="select__option"
            :class="
              selected?.value === option.value ? 'select__option--selected' : ''
            "
            @click="() => setValue(option)"
          >
            {{ option.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/core/support";

.select {
  position: relative;
  flex: 1;
}

.select__input {
  background: $select-bg;
  border-radius: 3px;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;

  @include desktop-and-laptop {
    padding: 12px 10px;
  }

  @include mobile-only {
    padding: 9px 12px;
  }

  &--opened-bottom {
    border-radius: 3px 3px 0 0;

    & + .select__inner {
      display: flex;
      top: 100%;
      border-radius: 0 0 3px 3px;
      z-index: 1;
    }

    .select__icon {
      transform: rotate(0);
    }
  }

  &--opened-top {
    border-radius: 0 0 3px 3px;

    & + .select__inner {
      display: flex;
      bottom: 100%;
      border-radius: 3px 3px 0 0;
      z-index: 1;
    }

    .select__icon {
      transform: rotate(0);
    }
  }
}

.select__value {
  display: flex;
  flex: 1;
  color: $white-100;
  font-size: 18px;
  line-height: 21.6px;

  @include text-line-clamp(1);

  @include desktop-and-laptop {
    font-size: 18px;
    line-height: 21.6px;
  }

  @include mobile-only {
    font-size: 14px;
    line-height: 16px;
  }
}

.select__icon {
  width: 20px;
  height: 20px;
  color: $white-100;
  transform: rotate(180deg);
}

.select__inner {
  max-height: 180px;
  display: none;
  flex: 1;
  position: absolute;
  background-color: $text-80;
  border: 1px solid $primary-70;
  width: 100%;
}

.select__options {
  overflow: auto;
  margin: 5px;
  width: 100%;
}

.select__option {
  cursor: pointer;
  color: $white-100;

  @include desktop-and-laptop {
    padding: 5px 10px;
    font-size: 18px;
    line-height: 34px;
  }

  @include mobile-only {
    padding: 10px;
    font-size: 14px;
    line-height: 18px;
  }

  &--selected {
    color: #42a9ed;
  }
}

.select {
  select {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    clip-path: circle(0);
  }
}
</style>
