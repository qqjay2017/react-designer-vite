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
      className=" min-h-[86px]"
    >
      {children}
    </div>
  );
};
Container.craft = {
  props: {},
  related: {
    // settings: ContainerSettings,
  },
};
