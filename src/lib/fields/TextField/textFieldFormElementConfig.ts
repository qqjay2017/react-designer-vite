import { ElementsType, FormElement, fieldDefaultPorps } from "../Field";
import { MdTextFields } from "react-icons/md";
export const textFieldType: ElementsType = "TextField";
export const textDefaultPorps = {
  ...fieldDefaultPorps,
  label: "单行文字",
};

export const textFieldFormElementConfig: FormElement = {
  displayName: textFieldType,
  construct: (id: string) => ({
    id,
    type: textFieldType,
    extraAttributes: {
      ...textDefaultPorps,
    },
  }),
  props: {
    ...textDefaultPorps,
  },
  designerBtnElement: {
    icon: MdTextFields,
    label: "文本框",
    description: "单行文本输入框，需要填写者在输入框内根据标题填写相应的内容。",
  },
};
