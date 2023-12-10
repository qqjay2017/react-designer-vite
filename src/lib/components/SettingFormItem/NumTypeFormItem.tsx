import { IBaseFormItemProps } from ".";
import { FormItem, FormLabel } from "../ui/form";
import { Input, InputNumber } from "antd";

export const NumTypeFormItem = ({
  label,
  value,
  onChange,
  tooltip,
  horizontal,
}: IBaseFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip} horizontal={horizontal}>
      <InputNumber
        style={{
          width: "100%",
        }}
        value={value as any}
        onChange={(e) => onChange && onChange(e)}
      />
    </FormItem>
  );
};
