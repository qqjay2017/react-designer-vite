import { IBaseFormItemProps } from ".";
import { FormItem, FormLabel } from "../ui/form";
import { Input } from "antd";

export const StrTypeFormItem = ({
  label,
  value,
  onChange,
}: IBaseFormItemProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Input
        style={{
          minWidth: 100,
        }}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </FormItem>
  );
};
