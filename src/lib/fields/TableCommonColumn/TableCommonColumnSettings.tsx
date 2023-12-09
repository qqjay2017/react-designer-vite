import { useNode } from "@craftjs/core";
import { Radio } from "antd";
import { SettingFormItem } from "../../components/SettingFormItem";

export const TableCommonColumnSettings = () => {
  const {
    actions: { setProp },
    colSpan,
    title,
    dataIndex,
    width,
  } = useNode((node) => ({
    colSpan: node.data.props.colSpan,
    title: node.data.props.title,
    dataIndex: node.data.props.dataIndex,
    width: node.data.props.width,
  }));
  return (
    <div>
      <SettingFormItem.StrTypeFormItem
        label="标题"
        value={title}
        onChange={(e) => setProp((props: any) => (props.title = e), 1000)}
      />
      <SettingFormItem.StrTypeFormItem
        label="接口字段"
        value={dataIndex}
        onChange={(e) => setProp((props: any) => (props.dataIndex = e), 1000)}
      />
      <SettingFormItem.StrTypeFormItem
        label="宽度"
        value={dataIndex}
        onChange={(e) => setProp((props: any) => (props.width = e), 1000)}
      />
    </div>
  );
};
