import React from "react";

import { ElementsType, FormElement } from "../../fields/Field";
import { MdTextFields } from "react-icons/md";
export const proFormContainerType: ElementsType = "ProFormContainer";
const proFormContainerDefaultProps = {
  grid: true,
};

export const ProFormContainerConfig: FormElement = {
  displayName: proFormContainerType,
  group: "container",
  construct: (id: string) => ({
    id,
    type: proFormContainerType,
    extraAttributes: {
      ...proFormContainerDefaultProps,
    },
  }),
  props: {
    ...proFormContainerDefaultProps,
  },
  designerBtnElement: {
    icon: MdTextFields,
    label: "表单容器",
    description: "表单容器，用于创建一个实体或收集信息。",
  },
};
