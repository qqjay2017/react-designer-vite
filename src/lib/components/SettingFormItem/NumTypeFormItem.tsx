import { IBaseFormItemProps } from ".";
import { FormItem } from "../ui/form";
import { InputNumber } from "antd";

export const NumTypeFormItem = ({
  label,
  value,
  onChange,
  tooltip,
  horizontal,
  precision,
  addonAfter,
  ...rest
}: IBaseFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip} horizontal={horizontal}>
      <InputNumber
        {...rest}
        style={{
          width: "100%",
        }}
        addonAfter={addonAfter}
        precision={precision}
        value={value as any}
        onChange={(e) => onChange && onChange(e)}
      />
    </FormItem>
  );
};
