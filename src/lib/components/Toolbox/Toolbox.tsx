import { WeightBtn } from "./WeightBtn";

export const Toolbox = () => {
  return (
    <div className=" pb-9 overflow-x-hidden overflow-y-auto bg-white border-r-1  border-border">
      <div className="relative w-[268px] pt-11 pl-2">
        <WeightBtn weightKey="TextField" />
      </div>
    </div>
  );
};
