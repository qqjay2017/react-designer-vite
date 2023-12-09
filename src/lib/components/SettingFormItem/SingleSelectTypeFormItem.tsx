import { IBaseFormItemProps } from ".";
import { FormItem, FormLabel } from "../ui/form";
import { Input, Select } from "antd";

interface ISingleSelectTypeFormItemProps extends IBaseFormItemProps {}

export const SingleSelectTypeFormItem = ({
  label,
  value,
  onChange,
  options = [],
  tooltip,
}: ISingleSelectTypeFormItemProps) => {
  return (
    <FormItem label={label} tooltip={tooltip}>
      <Select
        getPopupContainer={() =>
          document.getElementById("DesignerSettingsPanel")!
        }
        style={{
          width: "100%",
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
