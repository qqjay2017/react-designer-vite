import { ProForm } from "@ant-design/pro-components";
import React, { PropsWithChildren } from "react";
import { ProFormContainerSettings } from "./ProFormContainerSettings";
import { useNode } from "@craftjs/core";
import { ProFormContainerConfig } from "./ProFormContainerConfig";

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
      className="w-full min-h-[300px] p-8 bg-white  shadow-sm   rounded-md	"
    >
      <ProForm
        {...props}
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
  related: {
    settings: ProFormContainerSettings,
  },
};
