<script lang="ts">
import Button from "@/components/Button.vue";
import File from "@/components/form/File.vue";
import input from "@/components/form/Input.vue";
import Input from "@/components/form/Input.vue";
import Range from "@/components/form/Range.vue";
import select from "@/components/form/Select.vue";
import Select from "@/components/form/Select.vue";
import { SELECT_OPTIONS } from "@/data/select-options";
import { defineComponent } from "vue";

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
    getFormValues() {
      console.log(`select value: ${this.selectValue}`);
      console.log(`email value: ${this.emailValue}`);
      console.log(`name value: ${this.nameValue}`);
      console.log(`file value: ${this.fileValue}`);
      console.log(`range value: ${this.rangeValue}`);
      this.forceRerender();
    },
    async forceRerender() {
      this.forceReload = false;
      await this.$nextTick();
      this.forceReload = true;
    },
  },
  data: () => ({
    selectValue: "",
    emailValue: "",
    nameValue: "",
    fileValue: "",
    rangeValue: 25,
    forceReload: true,
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
    v-if="forceReload"
  >
    <div class="form-order__inner">
      <Select
        v-model:input="selectValue"
        name="system-type"
        id="system-type"
        required
        :options="SELECT_OPTIONS"
        ariaLabel="Type select"
        class="form-order__item"
      />
      <Input
        v-model:input="emailValue"
        name="email"
        id="email"
        type="email"
        required
        placeholder="Ваш e-mail"
        ariaLabel="E-mail input"
        class="form-order__item"
      />
      <Input
        v-model:input="nameValue"
        name="name"
        id="name"
        required
        placeholder="Ваше имя"
        ariaLabel="Name input"
        class="form-order__item"
      />
      <Range
        v-model:input="rangeValue"
        name="percentage"
        id="percentage"
        ariaLabel="Percentage input"
        class="form-order__item form-order__item--2x"
      />
      <File
        v-model:input="fileValue"
        name="file"
        id="file"
        required
        class="form-order__item"
      />
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

  @include desktop-and-laptop {
    min-width: 370px;
  }

  @include mobile-only {
    width: 100%;
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
