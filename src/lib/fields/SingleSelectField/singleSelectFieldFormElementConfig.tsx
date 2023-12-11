import { ElementsType, FormElement, fieldDefaultPorps } from "../Field";
import { TbSelect } from "react-icons/tb";

export const singleSelectFieldType: ElementsType = "SingleSelectField";
export const singleSelectDefaultPorps = {
  ...fieldDefaultPorps,
  label: "下拉选择",
  initialValue: null,
};

export const singleSelectFieldFormElementConfig: FormElement = {
  displayName: singleSelectFieldType,
  group: "formField",
  construct: (id: string) => ({
    id,
    type: singleSelectFieldType,
    extraAttributes: {
      ...singleSelectDefaultPorps,
    },
  }),
  props: {
    ...singleSelectDefaultPorps,
  },
  designerBtnElement: {
    icon: TbSelect,
    label: "下拉选择",
    description:
      "选择组件，可以自定义编辑和增删选项，填写者通过下拉框进行单项选择。",
  },
};
