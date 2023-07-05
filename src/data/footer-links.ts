import { IconTypes } from "@/types/Icon";

interface FooterLink {
  icon: keyof typeof IconTypes;
  title: string;
}

interface FooterActiveLink extends FooterLink {
  link: string;
}
export const FOOTER_PAYMENTS: FooterLink[] = [
  {
    icon: IconTypes.qiwi,
    title: "Qiwi wallet",
  },
  {
    icon: IconTypes.yandex,
    title: "Yandex Money",
  },
  {
    icon: IconTypes.webMoney,
    title: "Web Money",
  },
];

export const FOOTER_CONTACTS: FooterActiveLink[] = [
  {
    icon: IconTypes.mail,
    title: "info@ipsum228.com",
    link: "mailto:info@ipsum228.com",
  },
  {
    icon: IconTypes.vk,
    title: "Мы вконтакте",
    link: "https://vk.com/",
  },
];
