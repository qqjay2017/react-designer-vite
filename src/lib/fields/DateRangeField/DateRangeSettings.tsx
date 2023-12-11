import { TextSettings } from "../TextField/TextSettings";
import { SettingFormItem } from "@/lib/components/SettingFormItem";
import { useNode } from "@craftjs/core";
import { FormItem } from "@/lib/components/ui/form";
import { DatePicker } from "antd";
import { formatTypeOptions } from "../DateField/formatTypeEnum";
import { initialValueCommonConfig } from "../Field/initialValueConfig";
import { getDatePickerCommonProps } from "../DateField/getDatePickerCommonProps";

// fieldProps={{ precision: 0 }}
export const DateRangeSettings = () => {
  const {
    actions: { setProp },
    formatType,
    initialValue,
  } = useNode((node) => ({
    formatType: node.data.props.formatType,
    initialValue: node.data.props.initialValue,
  }));

  const InitialValueConfig = () => {
    const datePickerCommonProps = getDatePickerCommonProps({
      formatType,
    });
    return (
      <>
        <FormItem {...initialValueCommonConfig} horizontal={false}>
          <DatePicker.RangePicker
            {...datePickerCommonProps}
            value={initialValue}
            onChange={(e) => {
              setProp((props: any) => (props.initialValue = e), 1000);
            }}
          />
        </FormItem>
      </>
    );
  };

  const AfterNameConfig = () => {
    return (
      <>
        <SettingFormItem.SingleSelectTypeFormItem
          label="显示格式"
          value={formatType}
          options={formatTypeOptions}
          onChange={(e: any) =>
            setProp((props: any) => (props.formatType = e), 1000)
          }
        />
      </>
    );
  };

  return (
    <TextSettings
      AfterNameConfig={AfterNameConfig}
      InitialValueConfig={InitialValueConfig}
    />
  );
};
