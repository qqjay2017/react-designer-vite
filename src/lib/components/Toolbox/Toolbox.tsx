import { Label } from "../ui/label";
import { WeightBtn } from "./WeightBtn";

export const Toolbox = () => {
  return (
    <div className=" pb-9 overflow-x-hidden overflow-y-auto bg-white border-r-1  border-border">
      <div className="relative w-[268px] pt-3 pl-2">
        <Label>表单控件</Label>
        <div className="grid grid-cols-2 my-3">
          <WeightBtn weightKey="TextField" />
          {/* <WeightBtn weightKey="TextField" /> */}
        </div>
        <Label>表格控件</Label>
        <div className="grid grid-cols-2 my-3">
          <WeightBtn weightKey="TableCommonColumn" />
        </div>
      </div>
    </div>
  );
};
