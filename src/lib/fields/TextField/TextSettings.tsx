import { useNode } from "@craftjs/core";
import { Radio } from "antd";

import { SettingFormItem } from "../../components/SettingFormItem";

export const TextSettings = () => {
  const {
    actions: { setProp },
    colSpan,
    label,
    name,
    tooltip,
    defaultValue,
    required,
  } = useNode((node) => ({
    colSpan: node.data.props.colSpan,
    label: node.data.props.label,
    name: node.data.props.name,
    tooltip: node.data.props.tooltip,
    defaultValue: node.data.props.defaultValue,
    required: node.data.props.required,
  }));
  return (
    <div>
      {/* 组件占比 */}
      {/* <Radio.Group
        onChange={(e) => {
          setProp((props: any) => (props.colSpan = e.target.value), 1000);
        }}
        value={colSpan}
      >
        <Radio.Button value="6">1/4</Radio.Button>
        <Radio.Button value="8">1/3</Radio.Button>
        <Radio.Button value="12">1/2</Radio.Button>
        <Radio.Button value="24">1/1</Radio.Button>
      </Radio.Group> */}
      <SettingFormItem.StrTypeFormItem
        tooltip="标题用于告诉填写者应该在该字段中输入什么样的内容。通常是一个词语或词组，也可以是一个问题。"
        label="标题"
        value={label}
        onChange={(e: any) => setProp((props: any) => (props.label = e), 1000)}
      />
      <SettingFormItem.StrTypeFormItem
        tooltip="提示属性用于指定对该模块进行一些附加说明，一般用来指导填写者输入。"
        label="提示"
        value={tooltip}
        onChange={(e: any) =>
          setProp((props: any) => (props.tooltip = e), 1000)
        }
      />
      <SettingFormItem.StrTypeFormItem
        label="字段"
        tooltip="于接口字段进行绑定。"
        value={name}
        onChange={(e: any) => setProp((props: any) => (props.name = e), 1000)}
      />
      <SettingFormItem.StrTypeFormItem
        label="默认内容"
        tooltip="设置默认内容后，默认值会显示在该模块的输入框中，填写者若不做修改，默认值将会作为填写者的数据提交。"
        value={defaultValue}
        onChange={(e: any) =>
          setProp((props: any) => (props.defaultValue = e), 1000)
        }
      />
      <SettingFormItem.CheckFormItem
        label="这是个必填项"
        tooltip="选择必填后，填写者不填写将无法提交表单。"
        value={required}
        onChange={(e: any) =>
          setProp((props: any) => (props.required = e), 1000)
        }
      />
    </div>
  );
};
