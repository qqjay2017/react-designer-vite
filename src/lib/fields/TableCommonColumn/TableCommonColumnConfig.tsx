import { ElementsType, FormElement } from "../Field";
import { MdViewColumn } from "react-icons/md";

export const textFieldType: ElementsType = "TableCommonColumn";
export const textDefaultPorps = {
  title: "字段",
};

export const tableCommonColumnConfig: FormElement = {
  displayName: textFieldType,
  group: "tableColumn",
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
    icon: MdViewColumn,
    label: "通用表格列",
    description: "列描述数据对象配置。",
  },
};
