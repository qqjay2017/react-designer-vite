import { ElementsType, FormElement, fieldDefaultPorps } from "../Field";
import { MdOutlineShortText } from "react-icons/md";

export const textAreaFieldType: ElementsType = "TextAreaField";
export const textDefaultPorps = {
  ...fieldDefaultPorps,
  label: "多行文字",
};

export const textAreaFieldFormElementConfig: FormElement = {
  displayName: textAreaFieldType,
  group: "formField",
  construct: (id: string) => ({
    id,
    type: textAreaFieldType,
    extraAttributes: {
      ...textDefaultPorps,
    },
  }),
  props: {
    ...textDefaultPorps,
  },
  designerBtnElement: {
    icon: MdOutlineShortText,
    label: "多行文本框",
    description: "多行文本输入框，需要填写者在输入框内根据标题填写相应的内容。",
  },
};
