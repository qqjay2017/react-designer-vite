import { ProFormDatePicker } from "@ant-design/pro-components";

import { DateSettings } from "./DateSettings";

import { FieldWrap } from "../Field/FieldWrap";
import { pickFieldProps } from "../Field/pickFieldProps";

import { dateFieldFormElementConfig } from "./dateFieldFormElementConfig";
import { formatTypeEnum } from "./formatTypeEnum";

export const DateField = (props: any) => {
  const { fieldWrapProps, formItemProps: allFormItemProps } =
    pickFieldProps(props);
  const { formatType = 3, ...formItemProps } = allFormItemProps;

  return (
    <FieldWrap {...fieldWrapProps}>
      <ProFormDatePicker
        {...formItemProps}
        fieldProps={{
          format: formatTypeEnum[formatType],
          style: {
            width: "100%",
          },
        }}
      />
    </FieldWrap>
  );
};

DateField.craft = {
  ...dateFieldFormElementConfig,
  custom: {
    group: dateFieldFormElementConfig.group,
    designerBtnElement: dateFieldFormElementConfig.designerBtnElement,
  },

  related: {
    settings: DateSettings,
  },
};
