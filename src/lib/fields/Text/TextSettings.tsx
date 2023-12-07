import { useNode } from "@craftjs/core";
import { Radio } from "antd";

export const TextSettings = () => {
  const {
    actions: { setProp },
    colSpan,
  } = useNode((node) => ({
    colSpan: node.data.props.colSpan,
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
    </div>
  );
};
