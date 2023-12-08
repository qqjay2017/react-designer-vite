import React, { PropsWithChildren, forwardRef } from "react";
import { cn } from "../../utils";

interface IRenderNodeBtnPorps extends Record<string, any> {
  className: string;
}

export const RenderNodeBtn = forwardRef(
  (
    { children, className, ...rest }: PropsWithChildren<IRenderNodeBtnPorps>,
    ref
  ) => {
    return (
      <div
        {...rest}
        ref={ref as any}
        className={cn(
          "rounded-[2px] px-[8px] py-[6px]  opacity-95 h-[20px] text-[12px] flex items-center justify-center",
          className
        )}
      >
        {children}
      </div>
    );
  }
);
