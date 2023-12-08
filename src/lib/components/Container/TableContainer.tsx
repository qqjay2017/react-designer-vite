import { ProForm } from "@ant-design/pro-components";
import React, { PropsWithChildren } from "react";
import { TableContainerSettings } from "./TableContainerSettings";
import { useNode } from "@craftjs/core";
import { TableContainerConfig } from "./TableContainerConfig";
import { get } from "lodash-es";
import { ElementGroupType } from "../../fields/Field";
interface ITableContainerPorps {}

export const TableContainer = (
  props: PropsWithChildren<ITableContainerPorps>
) => {
  const { children } = props;
  const {
    connectors: { connect, drag },
  } = useNode();
  // grid   grid-cols-2 gap-4 auto-rows-min

  return (
    <div
      ref={(ref) => connect(drag(ref!))}
      className="w-full min-h-[70px] p-8 bg-white  shadow-sm   rounded-md	 mt-5"
    >
      <div className="flex items-center">{children}</div>
    </div>
  );
};

TableContainer.craft = {
  ...TableContainerConfig,
  custom: {
    ...TableContainerConfig,
  },
  rules: {
    canMoveIn: (incomingNode: any) => {
      const group: ElementGroupType = get(
        incomingNode,
        "[0].data.custom.group",
        ""
      );

      return group === "tableColumn";
    },
  },
  related: {
    settings: TableContainerSettings,
  },
};
