import { ElementsType, FormElement, fieldDefaultPorps } from "../Field";

export const numberFieldType: ElementsType = "NumberField";
import { Bs123 } from "react-icons/bs";
export const numberDefaultPorps = {
  ...fieldDefaultPorps,
  precision: 0,
  enableDecimal: false,
  enableMinMax: false,
  enableMoneyMode: false,
  label: "数字",
  min: undefined,
  max: undefined,
};

export const numberFieldFormElementConfig: FormElement = {
  displayName: numberFieldType,
  group: "formField",
  construct: (id: string) => ({
    id,
    type: numberFieldType,
    extraAttributes: {
      ...numberDefaultPorps,
    },
  }),
  props: {
    ...numberDefaultPorps,
  },
  designerBtnElement: {
    icon: Bs123,
    label: "数字",
    description: "单行文本输入框，规定填写者输入内容为数字，带有字段校验",
  },
};
