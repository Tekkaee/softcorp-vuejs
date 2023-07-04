<template>
  <label :for="name" class="form-order__item">
    <input
      :id="id"
      :name="name"
      placeholder=" "
      type="text"
      :required="required"
      class="input input--default"
      aria-label="Name"
      :value="value"
    />
    <span class="form-order__placeholder">{{ placeholder }}</span>
  </label>
</template>

<script lang="ts">
export default {
  props: {
    type: {},
    value: {
      type: String,
      default: "",
    },
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
    placeholder: {
      type: String,
      default: "Type..",
    },
  },
};
</script>

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
input,
textarea {
  font-family: "Lato", sans-serif;

  @include desktop-and-laptop {
    font-size: 18px;
    line-height: 21.6px;
  }

  @include mobile-only {
    font-size: 14px;
    line-height: 16px;
  }
}

input[type="text"],
input[type="email"] {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid $white-100;
  padding: 10px 12px;
  flex: 1;

  &:invalid {
    .form-order--submitted & {
      border-color: red !important;
    }
  }
}

input[type="range"] {
  height: 24px;
  width: 100%;
  background-color: transparent;
  appearance: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  border: 1px solid $white-100;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  border: 1px solid $white-100;
}

input[type="range"]::-webkit-slider-thumb {
  border: 3px solid $accent-50;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background: #42a9ed;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10px;
}

input[type="range"]::-moz-range-thumb {
  border: 3px solid $accent-50;
  height: 21px;
  width: 21px;
  border-radius: 50%;
  background: #42a9ed;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10px;
}

.form-order__placeholder {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font: inherit;
  left: 12px;
  cursor: text;

  @include desktop-and-laptop {
    font-size: 18px;
    line-height: 21.6px;
  }

  @include mobile-only {
    font-size: 14px;
    line-height: 16px;
  }

  &::selection {
    background: transparent;
  }
  &::-moz-selection {
    background: transparent;
  }
}
</style>
