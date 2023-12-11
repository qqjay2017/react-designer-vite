import { useNode } from "@craftjs/core";

import { SettingFormItem } from "../../components/SettingFormItem";
import React from "react";
import { initialValueCommonConfig } from "../Field/initialValueConfig";
import { DictConfigSetting } from "../TableCommonColumn/DictConfigSetting";

export const TextSettings = ({
  CustomConfig,
  AfterNameConfig,
  InitialValueConfig,
  showDictConfigSetting = false,
}: {
  CustomConfig?: React.ElementType;
  AfterNameConfig?: React.ElementType;
  InitialValueConfig?: React.ElementType;
  showDictConfigSetting?: boolean;
}) => {
  const {
    actions: { setProp },
    colSpan,
    label,
    name,
    tooltip,
    initialValue,
    required,
  } = useNode((node) => ({
    colSpan: node.data.props.colSpan,
    label: node.data.props.label,
    name: node.data.props.name,
    tooltip: node.data.props.tooltip,
    initialValue: node.data.props.initialValue,
    required: node.data.props.required,
  }));
  return (
    <div>
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
        tooltip="与接口字段进行绑定。"
        value={name}
        onChange={(e: any) => setProp((props: any) => (props.name = e), 1000)}
      />

      {/* 枚举配置 */}
      {showDictConfigSetting && (
        <DictConfigSetting
          optionsKey="options"
          labelKey="label"
          valueKey="value"
        />
      )}
      {AfterNameConfig && <AfterNameConfig />}

      {InitialValueConfig ? (
        <InitialValueConfig />
      ) : (
        <SettingFormItem.StrTypeFormItem
          {...initialValueCommonConfig}
          value={initialValue}
          onChange={(e: any) =>
            setProp((props: any) => (props.initialValue = e), 1000)
          }
        />
      )}

      <SettingFormItem.CheckFormItem
        label="这是个必填项"
        tooltip="选择必填后，填写者不填写将无法提交表单。"
        value={required}
        onChange={(e: any) =>
          setProp((props: any) => (props.required = e), 1000)
        }
      />
      {CustomConfig && <CustomConfig />}
    </div>
  );
};
