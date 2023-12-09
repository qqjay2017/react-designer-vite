import { IBaseFormItemProps } from ".";
import { FormItem } from "../ui/form";
import { Input } from "antd";

export const StrTypeFormItem = ({
  label,
  value,
  onChange,
  tooltip,
}: IBaseFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip}>
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
