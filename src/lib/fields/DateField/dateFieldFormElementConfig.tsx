import { ElementsType, FormElement, fieldDefaultPorps } from "../Field";
import { BsFillCalendarDateFill } from "react-icons/bs";
export const dateFieldType: ElementsType = "DateField";
export const dateDefaultPorps = {
  ...fieldDefaultPorps,
  label: "日期",
  formatType: "3",
  initialValue: null,
};

export const dateFieldFormElementConfig: FormElement = {
  displayName: dateFieldType,
  group: "formField",
  construct: (id: string) => ({
    id,
    type: dateFieldType,
    extraAttributes: {
      ...dateDefaultPorps,
    },
  }),
  props: {
    ...dateDefaultPorps,
  },
  designerBtnElement: {
    icon: BsFillCalendarDateFill,
    label: "日期",
    description: "时间选择组件，需要填写者选择具体日期时间。",
  },
};
