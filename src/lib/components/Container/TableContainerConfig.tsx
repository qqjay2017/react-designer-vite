import React from "react";

import { ElementsType, FormElement } from "../../fields/Field";
import { MdTextFields } from "react-icons/md";
export const tableContainerType: ElementsType = "TableContainer";
const tableContainerDefaultProps = {
  apiMethod: "post",
  nameFieldKey: "name",
  idFieldKey: "id",
  queryParams: [],
  apiHeader: [],
  dataPath: "rows",
  totalPath: "total",
};

export const TableContainerConfig: FormElement = {
  displayName: tableContainerType,
  group: "container",
  construct: (id: string) => ({
    id,
    type: tableContainerType,
    extraAttributes: {
      ...tableContainerDefaultProps,
    },
  }),
  props: {
    ...tableContainerDefaultProps,
  },
  designerBtnElement: {
    icon: MdTextFields,
    label: "表格容器",
    description: "表格容器，用于创建一个表格。",
  },
};
