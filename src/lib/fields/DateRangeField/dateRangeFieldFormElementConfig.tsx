import { ElementsType, FormElement, fieldDefaultPorps } from "../Field";
import { BsCalendar4Range } from "react-icons/bs";

export const dateRangeFieldType: ElementsType = "DateRangeField";
export const dateDefaultPorps = {
  ...fieldDefaultPorps,
  label: "起止时间",
  formatType: "3",
  initialValue: null,
};

export const dateRangeFieldFormElementConfig: FormElement = {
  displayName: dateRangeFieldType,
  group: "formField",
  construct: (id: string) => ({
    id,
    type: dateRangeFieldType,
    extraAttributes: {
      ...dateDefaultPorps,
    },
  }),
  props: {
    ...dateDefaultPorps,
  },
  designerBtnElement: {
    icon: BsCalendar4Range,
    label: "起止时间",
    description: "时间选择组件，需要填写者选择起止日期与时刻。",
  },
};
