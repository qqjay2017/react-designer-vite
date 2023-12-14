import { ProForm } from "@ant-design/pro-components";
import React, { PropsWithChildren } from "react";
import { ProFormContainerSettings } from "./ProFormContainerSettings";
import { useNode } from "@craftjs/core";
import { ProFormContainerConfig } from "./ProFormContainerConfig";
import { get } from "lodash-es";
import { ElementGroupType } from "../../fields/Field";
interface IProFormContainerPorps {}

export const ProFormContainer = (
  props: PropsWithChildren<IProFormContainerPorps>
) => {
  const { children } = props;
  const {
    connectors: { connect, drag },
  } = useNode();
  // grid   grid-cols-2 gap-4 auto-rows-min

  return (
    <div
      ref={(ref) => connect(drag(ref!))}
      className="w-full min-h-[300px] p-8 bg-white     rounded-md	 border-border border-1 border-solid shadow-lg"
    >
      <ProForm
        {...props}
        submitter={{
          render: (props, doms) => {
            return (
              <div className="flex items-center justify-end  gap-2">
                {doms[0]}
                {doms[1]}
              </div>
            );
          },
        }}
        rowProps={{
          gutter: [16, 16],
        }}
      >
        {children}
      </ProForm>
    </div>
  );
};

ProFormContainer.craft = {
  ...ProFormContainerConfig,
  custom: {
    group: ProFormContainerConfig.group,
    designerBtnElement: ProFormContainerConfig.designerBtnElement,
  },
  rules: {
    canDrag: () => false,
    canMoveIn: (incomingNode: any) => {
      const group: ElementGroupType = get(
        incomingNode,
        "[0].data.custom.group",
        ""
      );
      console.log(incomingNode, group);
      return group === "formField";
    },
  },
  related: {
    settings: ProFormContainerSettings,
  },
};
