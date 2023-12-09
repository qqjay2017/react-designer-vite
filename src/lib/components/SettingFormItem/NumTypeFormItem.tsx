import { IBaseFormItemProps } from ".";
import { FormItem, FormLabel } from "../ui/form";
import { Input, InputNumber } from "antd";

export const NumTypeFormItem = ({
  label,
  value,
  onChange,
  tooltip,
}: IBaseFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip}>
      <InputNumber
        style={{
          width: "100%",
        }}
        value={value}
        onChange={(e) => onChange && onChange(e)}
      />
    </FormItem>
  );
};
