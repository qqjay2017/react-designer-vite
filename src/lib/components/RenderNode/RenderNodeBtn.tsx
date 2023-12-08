import React, { PropsWithChildren } from "react";
import { cn } from "../../utils";

interface IRenderNodeBtnPorps extends Record<string, any> {
  className: string;
}

export const RenderNodeBtn = ({
  children,
  className,
  ...rest
}: PropsWithChildren<IRenderNodeBtnPorps>) => {
  return (
    <div
      {...rest}
      className={cn(
        "rounded-[2px] px-[8px] py-[6px]  opacity-95 h-[20px] text-[12px] flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};
