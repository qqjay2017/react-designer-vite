import { IBaseFormItemProps } from ".";
import { FormItem } from "../ui/form";
import { Input } from "antd";

export const StrTypeFormItem = ({
  label,
  value,
  onChange,
  tooltip,
  horizontal,
}: IBaseFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip} horizontal={horizontal}>
      <Input
        style={{
          minWidth: 100,
        }}
        value={value as any}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </FormItem>
  );
};
