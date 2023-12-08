import { useNode } from "@craftjs/core";

export const TableContainerSettings = () => {
  const {
    actions: { setProp },
    layout,
    grid,
  } = useNode((node) => ({
    layout: node.data.props.layout,
    grid: node.data.props.grid,
  }));
  return <div></div>;
};
