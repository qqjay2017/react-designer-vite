import { useNode } from "@craftjs/core";
import React, { PropsWithChildren } from "react";
import { cn } from "../../utils";

export const FieldWrap = (props: PropsWithChildren<any>) => {
  const { colSpan = 12, children } = props;
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref!))}
      className={cn(
        "cursor-move",
        "ant-col",
        colSpan ? `ant-col-${colSpan}` : "ant-col-xs-24"
      )}
    >
      {children}
    </div>
  );
};
