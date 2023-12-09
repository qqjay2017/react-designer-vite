import { IBaseFormItemProps } from ".";
import { FormItem, FormLabel } from "../ui/form";
import { Input, InputNumber } from "antd";

export const NumTypeFormItem = ({
  label,
  value,
  onChange,
}: IBaseFormItemProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <InputNumber
        style={{
          minWidth: 100,
        }}
        value={value}
        onChange={(e) => onChange && onChange(e)}
      />
    </FormItem>
  );
};
