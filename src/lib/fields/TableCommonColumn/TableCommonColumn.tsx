import { useNode } from "@craftjs/core";

import { TableCommonColumnSettings } from "./TableCommonColumnSettings";
import { tableCommonColumnConfig } from "./TableCommonColumnConfig";
import React from "react";

export const TableCommonColumn = (props: any) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));
  const { title, width = 100 } = props;
  const style: React.CSSProperties = {
    width: width,
  };

  return (
    <th
      className="ant-table-cell cursor-move"
      ref={(ref) => connect(drag(ref!))}
      style={style}
    >
      {title || "请配置列名称"}
    </th>
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
