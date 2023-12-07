import { ProForm } from "@ant-design/pro-components";
import React, { PropsWithChildren } from "react";
import { ProFormContainerSettings } from "./ProFormContainerSettings";
import { useNode } from "@craftjs/core";

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
      className="w-full min-h-[200px] p-8 bg-white  shadow-sm   rounded-md	"
    >
      <ProForm>{children}</ProForm>
    </div>
  );
};

ProFormContainer.craft = {
  displayName: "ProFormContainer",
  props: {},
  related: {
    settings: ProFormContainerSettings,
  },
};
