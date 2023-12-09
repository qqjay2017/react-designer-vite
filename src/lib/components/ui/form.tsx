import { PropsWithChildren } from "react";
import { Label } from "./label";
import { cn } from "../../utils";

export const FormItem = ({ children }: PropsWithChildren) => {
  return (
    <div className="space-y-0 flex items-center justify-between rounded-lg border p-3 shadow-sm my-2">
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
