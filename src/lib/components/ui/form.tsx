import { PropsWithChildren } from "react";
import { Label } from "./label";
import { cn } from "../../utils";
import { LabelTooltip } from "./laTooltip";

export const FormItem = ({
  children,
  label,
  tooltip,
  horizontal = false,
}: PropsWithChildren<{
  label?: string;
  tooltip?: string;
  horizontal?: boolean;
}>) => {
  return (
    <div
      className={cn(
        "space-y-0 flex   items-start justify-between border px-3  py-2  ",
        horizontal ? "flex-row items-center" : "flex-col"
      )}
    >
      <div
        className={cn(
          "  flex items-center justify-start",
          horizontal ? "mb-0 min-w-[120px]" : "mb-2"
        )}
      >
        <Label className="  text-[14px]">{label}</Label>
        {tooltip && <LabelTooltip content={tooltip} />}
      </div>
      {children}
    </div>
  );
};

export const FormLabel = ({
  error,
  className,
  ...props
}: PropsWithChildren<any>) => {
  return (
    <Label
      className={cn(error && "text-destructive", " min-w-[80px]", className)}
      {...props}
    />
  );
};
