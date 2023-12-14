import { ElementsType, FormElement } from "@/lib/fields/Field";
import { MdTextFields } from "react-icons/md";
export const treeContainerType: ElementsType = "TreeContainer";
const treeContainerDefaultProps = {
  apiMethod: "post",
  nameFieldKey: "name",
  idFieldKey: "id",
  queryParams: [],
  apiHeader: [],
  dataPath: "rows",
  totalPath: "total",
  enablePagination: false,
  childrenFieldKey: "children",
  autoSelectFirst: false,
};

export const TreeContainerConfig: FormElement = {
  displayName: treeContainerType,
  group: "container",
  construct: (id: string) => ({
    id,
    type: treeContainerType,
    extraAttributes: {
      ...treeContainerDefaultProps,
    },
  }),
  props: {
    ...treeContainerDefaultProps,
  },
  designerBtnElement: {
    icon: MdTextFields,
    label: "树选择容器",
    description: "树选择容器，用于配置弹窗左侧树",
  },
};
