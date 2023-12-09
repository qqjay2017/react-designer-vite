import { useNode } from "@craftjs/core";
import React from "react";
import { cn } from "../../utils";
import { TableCommonColumnSettings } from "./TableCommonColumnSettings";
import { tableCommonColumnConfig } from "./TableCommonColumnConfig";
import { Table } from "antd";

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
    <th
      className="ant-table-cell cursor-move"
      ref={(ref) => connect(drag(ref!))}
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
