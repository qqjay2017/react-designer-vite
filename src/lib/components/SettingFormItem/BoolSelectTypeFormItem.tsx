import { IBaseFormItemProps } from ".";
import { FormItem, FormLabel } from "../ui/form";
import { Input, Select, Switch } from "antd";

interface ISingleSelectTypeFormItemProps extends IBaseFormItemProps {}

export const BoolSelectTypeFormItem = ({
  label,
  value,
  onChange,
  tooltip,
  ...rest
}: ISingleSelectTypeFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip} horizontal>
      <Switch
        {...rest}
        style={{}}
        checked={value as any}
        onChange={(e: any) => {
          console.log(e, "e");
          onChange && onChange(e);
        }}
      />
    </FormItem>
  );
};
