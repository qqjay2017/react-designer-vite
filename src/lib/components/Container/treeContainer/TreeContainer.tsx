import { PropsWithChildren } from "react";
import { TreeContainerSettings } from "./TreeContainerSettings";
import { useNode } from "@craftjs/core";
import { TreeContainerConfig } from "./TreeContainerConfig";

import { Skeleton } from "antd";

interface ITreeContainerPorps {}

export const TreeContainer = (
  props: PropsWithChildren<ITreeContainerPorps>
) => {
  const { children } = props;
  const {
    connectors: { connect, drag },
  } = useNode();
  // grid   grid-cols-2 gap-4 auto-rows-min

  return (
    <div
      ref={(ref) => connect(drag(ref!))}
      className="w-[180px]     bg-white  p-2   rounded-md	 border-border border-1 border-solid shadow-lg mt-2 mb-6"
    >
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

TreeContainer.craft = {
  ...TreeContainerConfig,
  custom: {
    group: TreeContainerConfig.group,
    designerBtnElement: TreeContainerConfig.designerBtnElement,
  },
  rules: {
    canDrag: () => false,
    // canMoveOut: () => false,
    canMoveIn: (incomingNode: any) => false,
  },
  related: {
    settings: TreeContainerSettings,
  },
};
