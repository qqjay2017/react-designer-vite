import { cn } from "@/lib/utils";
import { useNode } from "@craftjs/core";

export const Container = ({
  background,
  padding = 20,
  children,
  className,
  ...props
}: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref!))}
      style={{ margin: "5px 0", background }}
      className={cn(
        "min-h-[86px]  flex flex-col w-full h-full relative",
        className
      )}
    >
      {children}
    </div>
  );
};
Container.craft = {
  rules: {
    canDrag: () => false,
    canDrop: () => false,
    canMoveIn: () => false,
    canMoveOut: () => false,
  },
  props: {},
  related: {
    // settings: ContainerSettings,
  },
};
