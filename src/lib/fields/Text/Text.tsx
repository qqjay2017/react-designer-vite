import { ProFormText } from "@ant-design/pro-components";
import { useNode } from "@craftjs/core";
import { TextSettings } from "./TextSettings";

export const Text = (props: any) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));
  console.log(props, "props");
  return (
    <div ref={(ref) => connect(drag(ref!))} className="">
      <ProFormText {...props} />
    </div>
  );
};

Text.craft = {
  props: {},
  related: {
    settings: TextSettings,
  },
};
