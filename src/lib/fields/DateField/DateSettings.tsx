import React from "react";
import { TextSettings } from "../TextField/TextSettings";
import { SettingFormItem } from "@/lib/components/SettingFormItem";
import { useNode } from "@craftjs/core";
import { FormItem } from "@/lib/components/ui/form";
import { DatePicker } from "antd";
import { formatTypeEnum } from "./formatTypeEnum";

// fieldProps={{ precision: 0 }}
export const DateSettings = () => {
  const {
    actions: { setProp },
    formatType,
    initialValue,
  } = useNode((node) => ({
    formatType: node.data.props.formatType,
    initialValue: node.data.props.initialValue,
  }));

  const InitialValueConfig = () => {
    return (
      <>
        <FormItem
          label={"默认内容"}
          tooltip={
            "设置默认内容后，默认值会显示在该模块的输入框中，填写者若不做修改，默认值将会作为填写者的数据提交。"
          }
          horizontal={false}
        >
          <DatePicker
            showHour={formatType == "1"}
            showToday={formatType == "3"}
            showTime={formatType == "4" || formatType == "5"}
            showNow={formatType == "4" || formatType == "5"}
            showMinute
            showSecond
            style={{
              width: "100%",
            }}
            format={formatTypeEnum[formatType]}
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
          options={[
            {
              value: "1",
              label: "年",
            },
            {
              value: "2",
              label: "年-月",
            },
            {
              value: "3",
              label: "年-月-日",
            },
            {
              value: "4",
              label: "年-月-日 时:分",
            },
            {
              value: "5",
              label: "年-月-日 时:分:秒",
            },
          ]}
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
