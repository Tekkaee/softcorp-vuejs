<script lang="ts">
import Button from "@/components/Button.vue";
import File from "@/components/form/File.vue";
import input from "@/components/form/Input.vue";
import Input from "@/components/form/Input.vue";
import Range from "@/components/form/Range.vue";
import select from "@/components/form/Select.vue";
import Select from "@/components/form/Select.vue";
import { SELECT_OPTIONS } from "@/data/select-options";
import { defineComponent, ref } from "vue";

const formRef = ref<HTMLFormElement | null>(null);

export default defineComponent({
  computed: {
    select() {
      return select;
    },
    input() {
      return input;
    },
    SELECT_OPTIONS() {
      return SELECT_OPTIONS;
    },
  },
  components: { File, Select, Input, Range, Button },
  methods: {
    reset() {
      if (formRef.value) formRef.value.reset();
    },
    getFormValues() {
      console.log(`select value: ${this.selectValue}`);
      console.log(`email value: ${this.emailValue}`);
      console.log(`name value: ${this.nameValue}`);
      console.log(`file value: ${this.fileValue}`);
      console.log(`range value: ${this.rangeValue}`);
    },
  },
  data: () => ({
    selectValue: "",
    emailValue: "",
    nameValue: "",
    fileValue: "",
    rangeValue: 25,
  }),
});
</script>

<template>
  <form
    @submit.prevent="getFormValues"
    class="form-order"
    id="form-order"
    action=""
    method="POST"
    ref="formRef"
  >
    <div class="form-order__inner">
      <Select
        v-model:input="selectValue"
        name="system-type"
        id="system-type"
        required
        :options="SELECT_OPTIONS"
        ariaLabel="Type select"
      />
      <Input
        v-model:input="emailValue"
        name="email"
        id="email"
        type="email"
        required
        placeholder="Ваш e-mail"
        ariaLabel="E-mail input"
      />
      <Input
        v-model:input="nameValue"
        name="name"
        id="name"
        required
        placeholder="Ваше имя"
        ariaLabel="Name input"
      />
      <Range
        v-model:input="rangeValue"
        class="form-order__item--2x"
        name="percentage"
        id="percentage"
        ariaLabel="Percentage input"
      />
      <File v-model:input="fileValue" name="file" id="file" required />
    </div>
    <Button
      as="button"
      type="submit"
      variant="default"
      aria-label="Send form"
      class="form-order__submit"
    >
      Отправить
    </Button>
  </form>
</template>

<style lang="scss">
@import "@/styles/core/support";

.form-order__submit {
  will-change: transform;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  filter: blur(5px);

  transition: 0.3s ease;

  @include desktop-and-laptop {
    min-width: 370px;
  }

  @include mobile-only {
    width: 100%;
  }

  .in-view & {
    filter: blur(0);
  }
}

.form-order {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.form-order__inner {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @include desktop-and-laptop {
    gap: $form-gap-desktop;
  }

  @include mobile-only {
    gap: $form-gap-mobile;
  }
}
</style>
