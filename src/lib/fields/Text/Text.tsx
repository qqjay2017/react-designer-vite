import { ProFormText } from "@ant-design/pro-components";
import { useNode } from "@craftjs/core";
import { TextSettings } from "./TextSettings";

import { cn } from "../../utils/cn";

export const Text = (props: any) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const { colSpan, ...restProps } = props;

  return (
    <div
      ref={(ref) => connect(drag(ref!))}
      className={cn(
        "ant-col",
        colSpan ? `ant-col-${colSpan}` : "ant-col-xs-24"
      )}
    >
      <ProFormText {...restProps} />
    </div>
  );
};

const textDefaultPorps = {
  colSpan: "12",
};
Text.craft = {
  props: textDefaultPorps,
  related: {
    settings: TextSettings,
  },
};
