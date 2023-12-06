import { useNode } from "@craftjs/core";
import { Input } from "antd";
import { cn } from "../utils/cn";

export const TextComponent = ({ text, colSpan = 1 }: any) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));
  console.log(selected, colSpan, "selected TextComponent");

  return (
    <div
      ref={(ref) => connect(drag(ref!))}
      className={cn(
        `col-span-${colSpan}`,
        "min-h-[86px] border-border border-1"
      )}
    >
      <h2>{text}</h2>
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    text,
    colSpan,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    colSpan: node.data.props.colSpan,
  }));

  return (
    <>
      <div>
        <Input
          value={text}
          onChange={(e) =>
            setProp((props: any) => (props.text = e.target.value), 1000)
          }
        />
        <div>col soan</div>
        <Input
          value={colSpan}
          onChange={(e) =>
            setProp((props: any) => (props.colSpan = e.target.value), 0)
          }
        />
      </div>
    </>
  );
};

TextComponent.craft = {
  props: {
    colSpan: 1,
  },
  related: {
    settings: TextSettings,
  },
};
