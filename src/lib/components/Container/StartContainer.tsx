import { useNode } from "@craftjs/core";

export const StartContainer = ({
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
      ref={(ref) => connect(drag(ref!))}
      className="w-full min-h-[200px] bg-white p-8 bg-[ #F9FAFC]  grid   grid-cols-2 gap-4 auto-rows-min shadow-sm   rounded-md	"
    >
      {children}
    </div>
  );
};
StartContainer.craft = {
  props: {},
  related: {
    // settings: ContainerSettings,
  },
};
