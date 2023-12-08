import { useNode } from "@craftjs/core";
import React from "react";
import { cn } from "../../utils";
import { TableCommonColumnSettings } from "./TableCommonColumnSettings";
import { tableCommonColumnConfig } from "./TableCommonColumnConfig";

export const TableCommonColumn = (props: any) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));
  const { title } = props;
  return (
    <div
      ref={(ref) => connect(drag(ref!))}
      className={cn("cursor-move", "ant-col")}
    >
      {title || "TableCommonColumn"}
    </div>
  );
};

TableCommonColumn.craft = {
  ...tableCommonColumnConfig,
  custom: {
    ...tableCommonColumnConfig,
  },

  related: {
    settings: TableCommonColumnSettings,
  },
};
