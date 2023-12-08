import { useNode } from "@craftjs/core";

export const Container = ({
  background,
  padding = 20,
  children,
  ...props
}: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref!))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
      className="min-h-[86px] flex flex-col w-full h-full"
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
