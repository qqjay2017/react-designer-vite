import { Checkbox, Radio } from "antd";

import { IBaseFormItemProps } from ".";

import { FormItem } from "../ui/form";

export const RadioGroupButtonFormItem = ({
  label,
  value,
  onChange,
  tooltip,
  options = [],
  horizontal = false,
}: IBaseFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip} horizontal={horizontal}>
      <Radio.Group
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        value={value}
      >
        {options.map((option, index) => (
          <Radio.Button value={option.value} key={option.value}>
            {option.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </FormItem>
  );
};
