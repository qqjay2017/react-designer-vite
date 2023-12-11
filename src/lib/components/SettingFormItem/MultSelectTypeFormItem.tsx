import React from "react";
import { FormItem } from "../ui/form";
import { Select } from "antd";
import { IBaseFormItemProps } from ".";

export const MultSelectTypeFormItem = ({
  label,
  value,
  onChange,
  tooltip,
  horizontal,
  options = [],
  ...rest
}: IBaseFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip} horizontal={horizontal}>
      <Select
        {...rest}
        options={options}
        mode="multiple"
        style={{
          width: "100%",
        }}
        value={value as any}
        onChange={(e) => onChange && onChange(e)}
      />
    </FormItem>
  );
};
