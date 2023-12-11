import { SettingFormItem } from "@/lib/components/SettingFormItem";
import { TextSettings } from "../TextField/TextSettings";

import { useNode } from "@craftjs/core";
import { FormItem } from "@/lib/components/ui/form";
import { initialValueCommonConfig } from "../Field/initialValueConfig";
import { Checkbox, Select } from "antd";

export const MultSelectSettings = () => {
  const {
    actions: { setProp },
    selectType = "checkbox",
    options = [],
    initialValue = [],
  } = useNode((node) => ({
    selectType: node.data.props.selectType,
    options: node.data.props.options,
    initialValue: node.data.props.initialValue,
  }));
  const AfterNameConfig = () => {
    return (
      <SettingFormItem.RadioGroupButtonFormItem
        label="选择模式"
        tooltip="选项展示方式"
        options={[
          {
            label: "平铺",
            value: "checkbox",
          },
          {
            label: "下拉",
            value: "select",
          },
        ]}
        value={selectType}
        onChange={(e) => {
          setProp((props) => (props.selectType = e), 1000);
        }}
      />
    );
  };
  const InitialValueConfig = () => {
    return (
      <>
        <FormItem {...initialValueCommonConfig} horizontal={false}>
          <Checkbox.Group
            value={initialValue}
            options={options}
            style={{
              width: "100%",
            }}
            onChange={(e) => {
              setProp((props: any) => (props.initialValue = e), 1000);
            }}
          />
        </FormItem>
      </>
    );
  };
  return (
    <TextSettings
      showDictConfigSetting
      AfterNameConfig={AfterNameConfig}
      InitialValueConfig={InitialValueConfig}
    />
  );
};
