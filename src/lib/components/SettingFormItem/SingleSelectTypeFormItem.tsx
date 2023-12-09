import { IBaseFormItemProps } from ".";
import { FormItem, FormLabel } from "../ui/form";
import { Input, Select } from "antd";

interface ISingleSelectTypeFormItemProps extends IBaseFormItemProps {}

export const SingleSelectTypeFormItem = ({
  label,
  value,
  onChange,
  options = [],
}: ISingleSelectTypeFormItemProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select
        style={{
          minWidth: 100,
        }}
        options={options}
        value={value}
        onChange={(e: any) => {
          console.log(e, "e");
          onChange && onChange(e);
        }}
      />
    </FormItem>
  );
};
