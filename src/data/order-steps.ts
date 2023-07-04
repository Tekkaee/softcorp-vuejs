import { IconTypes } from "@/types/Icon";

interface OrderStepProps {
  icon: keyof typeof IconTypes;
  title: string;
}
export const ORDER_STEPS: Array<OrderStepProps> = [
  {
    icon: IconTypes.step1,
    title: "Lorem ipsum dolor sit amet",
  },
  {
    icon: IconTypes.step2,
    title: "Сonsecteturadipiscing elit",
  },
  {
    icon: IconTypes.step3,
    title: "Sed do eiusmod tempor",
  },
  {
    icon: IconTypes.step4,
    title: "Esse cillum dolore eu fugiat",
  },
  {
    icon: IconTypes.step5,
    title: "Excepteur sint occaecat cupidatat non proident",
  },
];
