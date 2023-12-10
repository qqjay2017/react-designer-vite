import React from "react";
import { TextSettings } from "../TextField/TextSettings";
import { SettingFormItem } from "@/lib/components/SettingFormItem";
import { useNode } from "@craftjs/core";
import { NumTypeFormItem } from "@/lib/components/SettingFormItem/NumTypeFormItem";
// fieldProps={{ precision: 0 }}
export const NumberSettings = () => {
  const {
    actions: { setProp },
    precision = 0,
    enableDecimal,
    enableMinMax,
    min,
    max,
    enableMoneyMode,
  } = useNode((node) => ({
    precision: node.data.props.precision,
    enableDecimal: node.data.props.enableDecimal,
    enableMinMax: node.data.props.enableMinMax,
    min: node.data.props.min,
    max: node.data.props.max,
    enableMoneyMode: node.data.props.enableMoneyMode,
  }));
  const CustomConfig = () => {
    return (
      <>
        <SettingFormItem.CheckFormItem
          label="允许小数"
          tooltip="选择后，填写者填写时可以输入带有小数点的数字，否则只能输入整数。"
          value={enableDecimal}
          onChange={(e: any) =>
            setProp((props: any) => {
              if (e) {
                props.precision = 2;
                props.enableDecimal = true;
              } else {
                props.precision = 0;
                props.enableDecimal = false;
              }
            }, 1000)
          }
        />
        {enableDecimal ? (
          <SettingFormItem.NumTypeFormItem
            label="限制位数"
            horizontal
            value={precision}
            onChange={(e) => {
              setProp((props: any) => {
                if (e) {
                  props.precision = e;
                }
              }, 1000);
            }}
          />
        ) : null}
        <SettingFormItem.CheckFormItem
          label="限制数值范围"
          value={enableMinMax}
          onChange={(e: any) =>
            setProp((props: any) => {
              if (e) {
                props.enableMinMax = true;
              } else {
                props.min = undefined;
                props.max = undefined;
                props.enableMinMax = false;
              }
            }, 1000)
          }
        />

        {enableMinMax ? (
          <SettingFormItem.NumTypeFormItem
            label="最小值"
            horizontal
            value={min}
            onChange={(e) => {
              setProp((props: any) => {
                if (e) {
                  props.min = e;
                }
              }, 1000);
            }}
          />
        ) : null}
        {enableMinMax ? (
          <SettingFormItem.NumTypeFormItem
            label="最大值"
            horizontal
            value={max}
            onChange={(e) => {
              setProp((props: any) => {
                if (e) {
                  props.max = e;
                }
              }, 1000);
            }}
          />
        ) : null}
        <SettingFormItem.CheckFormItem
          label="显示金额"
          value={enableMoneyMode}
          onChange={(e: any) =>
            setProp((props: any) => {
              props.enableMoneyMode = e;
            }, 1000)
          }
        />
      </>
    );
  };
  return <TextSettings CustomConfig={CustomConfig} />;
};
