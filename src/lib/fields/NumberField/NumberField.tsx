import { ProFormDigit, ProFormMoney } from "@ant-design/pro-components";

import { FieldWrap } from "../Field/FieldWrap";
import { pickFieldProps } from "../Field/pickFieldProps";
import { numberFieldFormElementConfig } from "./numberFieldFormElementConfig";
import { NumberSettings } from "./NumberSettings";

export const NumberField = (props: any) => {
  const { fieldWrapProps, formItemProps: allFormItemProps } =
    pickFieldProps(props);
  const {
    precision,
    enableDecimal,
    enableMinMax,
    enableMoneyMode,
    min,
    max,
    initialValue,

    ...formItemProps
  } = allFormItemProps;

  const comProps = {
    min: enableMinMax ? min : undefined,
    max: enableMinMax ? max : undefined,
    fieldProps: {
      precision: enableDecimal ? precision : undefined,
    },
  };
  console.log(name, "name1");
  return (
    <FieldWrap {...fieldWrapProps}>
      {enableMoneyMode ? (
        <ProFormMoney {...formItemProps} {...comProps} locale="zh-CN" />
      ) : (
        <ProFormDigit {...formItemProps} {...comProps} />
      )}
    </FieldWrap>
  );
};

NumberField.craft = {
  ...numberFieldFormElementConfig,
  custom: {
    ...numberFieldFormElementConfig,
  },

  related: {
    settings: NumberSettings,
  },
};
