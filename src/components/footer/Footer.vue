<script lang="ts">
import FooterGroup from "@/components/footer/FooterGroup.vue";
import FooterLink from "@/components/footer/FooterLink.vue";
import { FOOTER_CONTACTS, FOOTER_PAYMENTS } from "@/data/footer-links";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    FOOTER_CONTACTS() {
      return FOOTER_CONTACTS;
    },
    FOOTER_PAYMENTS() {
      return FOOTER_PAYMENTS;
    },
  },
  components: { FooterLink, FooterGroup },
  setup() {
    return {};
  },
});
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <FooterGroup>
        <li class="footer__copyright">
          © 2018 «LoremIpsum.net» Все права защищены.
        </li>
      </FooterGroup>
      <FooterGroup>
        <FooterLink
          v-for="(payment, index) in FOOTER_PAYMENTS()"
          :key="index"
          :title="payment.title"
          :icon="payment.icon"
        />
      </FooterGroup>
      <FooterGroup>
        <FooterLink
          v-for="(contact, index) in FOOTER_CONTACTS()"
          :key="index"
          :title="contact.title"
          :icon="contact.icon"
          :link="contact.link"
        />
      </FooterGroup>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/styles/core/support";

.footer {
  background-color: $primary-70;

  @include desktop-and-laptop {
    padding: 30px 0;
  }

  @include mobile-only {
    padding: 14px 0 calc(14px + env(safe-area-inset-bottom, 0));
  }
}

.footer__container {
  display: flex;
  align-items: center;

  @include laptop-and-mobile {
    flex-wrap: wrap;
    gap: 12px;
  }

  @include laptop-only {
    justify-content: center;
  }
}

.footer__copyright {
  color: $white-100;
  @extend %text;
}
</style>
