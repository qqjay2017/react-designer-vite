import { IBaseFormItemProps } from ".";
import { FormItem, FormLabel } from "../ui/form";
import { Input, Select, Switch } from "antd";

interface ISingleSelectTypeFormItemProps extends IBaseFormItemProps {}

export const BoolSelectTypeFormItem = ({
  label,
  value,
  onChange,
  tooltip,
}: ISingleSelectTypeFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip} horizontal>
      <Switch
        style={{}}
        checked={value}
        onChange={(e: any) => {
          console.log(e, "e");
          onChange && onChange(e);
        }}
      />
    </FormItem>
  );
};
