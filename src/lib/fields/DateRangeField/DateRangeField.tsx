import {
  ProFormDatePicker,
  ProFormDateRangePicker,
} from "@ant-design/pro-components";

import { DateRangeSettings } from "./DateRangeSettings";

import { FieldWrap } from "../Field/FieldWrap";
import { pickFieldProps } from "../Field/pickFieldProps";

import { dateRangeFieldFormElementConfig } from "./dateRangeFieldFormElementConfig";
import { formatTypeEnum } from "../DateField/formatTypeEnum";

export const DateRangeField = (props: any) => {
  const { fieldWrapProps, formItemProps: allFormItemProps } =
    pickFieldProps(props);
  const { formatType = 3, ...formItemProps } = allFormItemProps;

  return (
    <FieldWrap {...fieldWrapProps}>
      <ProFormDateRangePicker
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

DateRangeField.craft = {
  ...dateRangeFieldFormElementConfig,
  custom: {
    ...dateRangeFieldFormElementConfig,
  },

  related: {
    settings: DateRangeSettings,
  },
};
