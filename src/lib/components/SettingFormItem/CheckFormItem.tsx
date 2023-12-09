import { Checkbox } from "antd";

import { Label } from "../ui/label";
import { IBaseFormItemProps } from ".";
import { LabelTooltip } from "../ui/laTooltip";
import { cn } from "../../utils";

export const CheckFormItem = ({
  label,
  value,
  onChange,
  tooltip,
}: IBaseFormItemProps) => {
  return (
    <div
      className={cn(
        "space-y-0 flex   items-start justify-between border px-3  py-2",
        "flex-row"
      )}
    >
      <div className=" mb-2 flex items-center justify-center">
        <Checkbox
          checked={value}
          onChange={(e) => {
            onChange && onChange(e.target.checked);
          }}
        />
        <Label className="  text-[14px] ml-3">{label}</Label>

        {tooltip && <LabelTooltip content={tooltip} />}
      </div>
    </div>
  );
};
