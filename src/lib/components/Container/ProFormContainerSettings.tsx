import React from "react";

import { Radio, Select, Switch } from "antd";
import { useNode } from "@craftjs/core";
import { SingleSelectTypeFormItem } from "../SettingFormItem/SingleSelectTypeFormItem";

export const ProFormContainerSettings = () => {
  const {
    actions: { setProp },
    layout,
  } = useNode((node) => ({
    layout: node.data.props.layout,
    grid: node.data.props.grid,
  }));
  return (
    <div>
      <SingleSelectTypeFormItem
        label="标签布局"
        value={layout}
        options={[
          {
            label: "水平布局",
            value: "horizontal",
          },
          {
            label: "垂直布局",
            value: "vertical",
          },
        ]}
        onChange={(e) => {
          setProp((props: any) => (props.layout = e), 1000);
        }}
      />
    </div>
  );
};
