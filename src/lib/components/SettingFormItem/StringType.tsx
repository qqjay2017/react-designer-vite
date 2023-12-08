import { useNode } from "@craftjs/core";
import { FormItem, FormLabel } from "../ui/form";
import { Input, InputProps } from "antd";

interface IStringTypeProps extends InputProps {
  label: string;
  onChange: (e: any) => void;
}

export const StringType = ({ label, value, onChange }: IStringTypeProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Input
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </FormItem>
  );
};
