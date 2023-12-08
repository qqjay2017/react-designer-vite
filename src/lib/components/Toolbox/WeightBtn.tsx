import React, { forwardRef } from "react";
import { ElementsType } from "../../fields/Field";
import { FormElementConfigMap, FormElements } from "../../fields";
import { useEditor } from "@craftjs/core";

export const WeightBtn = (props: { weightKey: ElementsType }) => {
  const { weightKey } = props;
  const Elem = FormElements[weightKey];
  const elemConfig = FormElementConfigMap[weightKey];
  const { icon: Icon, label } = elemConfig.designerBtnElement;
  const { connectors } = useEditor();
  return (
    <div
      className="w-[116px] h-[36px] mx-1 mt-2 flex items-center justify-center border-border border-1 cursor-pointer"
      ref={(ref) => connectors.create(ref!, <Elem />)}
    >
      <Icon className=" text-sm" />
      <span className="ml-2">{label}</span>
    </div>
  );
};
