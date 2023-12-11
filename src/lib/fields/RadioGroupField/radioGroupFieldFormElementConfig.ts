import { ElementsType, FormElement, fieldDefaultPorps } from "../Field";
import { IoMdRadioButtonOn } from "react-icons/io";

export const radioGroupFieldType: ElementsType = "RadioGroupField";
export const radioGroupDefaultPorps = {
  ...fieldDefaultPorps,
  label: "单项选择",
  initialValue: null,
  radioType: "default",
};

export const radioGroupFieldFormElementConfig: FormElement = {
  displayName: radioGroupFieldType,
  group: "formField",
  construct: (id: string) => ({
    id,
    type: radioGroupFieldType,
    extraAttributes: {
      ...radioGroupDefaultPorps,
    },
  }),
  props: {
    ...radioGroupDefaultPorps,
  },
  designerBtnElement: {
    icon: IoMdRadioButtonOn,
    label: "单项选择",
    description: "选择组件，可以自定义编辑和增删选项，填写者需要进行单项选择。",
  },
};
