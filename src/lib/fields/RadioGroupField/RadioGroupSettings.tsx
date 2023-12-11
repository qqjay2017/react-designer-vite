import { TextSettings } from "../TextField/TextSettings";
import { SettingFormItem } from "@/lib/components/SettingFormItem";
import { useNode } from "@craftjs/core";

export const RadioGroupSettings = () => {
  const {
    actions: { setProp },
    radioType = "default",
  } = useNode((node) => ({
    radioType: node.data.props.radioType,
  }));
  const AfterNameConfig = () => {
    return (
      <SettingFormItem.RadioGroupButtonFormItem
        label="展示模式"
        tooltip="展示模式用于设置option的选项展示模式"
        options={[
          {
            label: "默认",
            value: "default",
          },
          {
            label: "按钮",
            value: "button",
          },
        ]}
        value={radioType}
        onChange={(e) => {
          setProp((props) => (props.radioType = e), 1000);
        }}
      />
    );
  };
  return (
    <TextSettings
      showDictConfigSetting
      AfterNameConfig={AfterNameConfig}
      // InitialValueConfig={InitialValueConfig}
    />
  );
};
