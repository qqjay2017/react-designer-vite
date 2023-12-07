import React from "react";

import { Radio, Select, Switch } from "antd";
import { useNode } from "@craftjs/core";

export const ProFormContainerSettings = () => {
  const {
    actions: { setProp },
    layout,
    grid,
  } = useNode((node) => ({
    layout: node.data.props.layout,
    grid: node.data.props.grid,
  }));
  return (
    <div>
      <div>
        标签布局
        <Radio.Group
          onChange={(e) => {
            setProp((props: any) => (props.layout = e.target.value), 1000);
          }}
          value={layout}
        >
          <Radio.Button value="horizontal">水平布局</Radio.Button>
          <Radio.Button value="vertical">垂直布局</Radio.Button>
          {/* <Radio.Button value="inline">inline</Radio.Button> */}
        </Radio.Group>
      </div>
      <div>
        grid
        <Switch
          checked={grid}
          onChange={(e) => {
            setProp((props: any) => (props.grid = e), 1000);
          }}
        />
      </div>
    </div>
  );
};
