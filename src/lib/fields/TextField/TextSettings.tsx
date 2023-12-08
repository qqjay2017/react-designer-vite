import { useNode } from "@craftjs/core";
import { Radio } from "antd";

import { SettingFormItem } from "../../components/SettingFormItem";

export const TextSettings = () => {
  const {
    actions: { setProp },
    colSpan,
    label,
    name,
  } = useNode((node) => ({
    colSpan: node.data.props.colSpan,
    label: node.data.props.label,
    name: node.data.props.name,
  }));
  return (
    <div>
      组件占比
      <Radio.Group
        onChange={(e) => {
          setProp((props: any) => (props.colSpan = e.target.value), 1000);
        }}
        value={colSpan}
      >
        <Radio.Button value="6">1/4</Radio.Button>
        <Radio.Button value="8">1/3</Radio.Button>
        <Radio.Button value="12">1/2</Radio.Button>
        <Radio.Button value="24">1/1</Radio.Button>
      </Radio.Group>
      <SettingFormItem.StrTypeFormItem
        label="标题"
        value={label}
        onChange={(e) => setProp((props: any) => (props.label = e), 1000)}
      />
      <SettingFormItem.StrTypeFormItem
        label="字段"
        value={name}
        onChange={(e) => setProp((props: any) => (props.name = e), 1000)}
      />
    </div>
  );
};
