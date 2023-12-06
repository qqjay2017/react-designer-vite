import React, { forwardRef } from "react";

export const WeightBtn = forwardRef<any, any>((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-[116px] h-[36px] mx-1 mt-2 flex items-center border-border border-1 cursor-pointer"
    >
      {props.name}
    </div>
  );
});
