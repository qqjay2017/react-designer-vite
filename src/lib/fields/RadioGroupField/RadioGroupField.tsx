import { ProFormRadio } from "@ant-design/pro-components";

import { RadioGroupSettings } from "./RadioGroupSettings";

import { FieldWrap } from "../Field/FieldWrap";
import { pickFieldProps } from "../Field/pickFieldProps";

import { radioGroupFieldFormElementConfig } from "./radioGroupFieldFormElementConfig";

export const RadioGroupField = (props: any) => {
  const { fieldWrapProps, formItemProps: allFormItemProps } =
    pickFieldProps(props);
  const { radioType = "default", ...formItemProps } = allFormItemProps;

  return (
    <FieldWrap {...fieldWrapProps}>
      <ProFormRadio.Group
        {...formItemProps}
        radioType={radioType}
        fieldProps={{
          style: {
            width: "100%",
          },
        }}
      />
    </FieldWrap>
  );
};

RadioGroupField.craft = {
  ...radioGroupFieldFormElementConfig,
  custom: {
    group: radioGroupFieldFormElementConfig.group,
    designerBtnElement: radioGroupFieldFormElementConfig.designerBtnElement,
  },

  related: {
    settings: RadioGroupSettings,
  },
};
