import { ElementsType, FormElement, fieldDefaultPorps } from "../Field";
import { RiCheckboxMultipleLine } from "react-icons/ri";

export const multSelectFieldType: ElementsType = "MultSelectField";
export const multSelectDefaultPorps = {
  ...fieldDefaultPorps,
  label: "多项选择",
  selectType: "checkbox",
  initialValue: [],
};

export const multSelectFieldFormElementConfig: FormElement = {
  displayName: multSelectFieldType,
  group: "formField",
  construct: (id: string) => ({
    id,
    type: multSelectFieldType,
    extraAttributes: {
      ...multSelectDefaultPorps,
    },
  }),
  props: {
    ...multSelectDefaultPorps,
  },
  designerBtnElement: {
    icon: RiCheckboxMultipleLine,
    label: "多项选择",
    description: "选择组件，可以自定义编辑和增删选项。",
  },
};
