import { useEditor } from "@craftjs/core";
import { Button } from "antd";
import React from "react";

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent("selected").last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });
  return isEnabled && selected ? (
    <div
      className="w-[325px] overflow-auto bg-white pb-6 border-l-1 border-t-0 border-border border-solid mb-4"
      id="DesignerSettingsPanel"
    >
      <div data-cy="settings-panel " className="py-3">
        {selected.settings && React.createElement(selected.settings)}
      </div>
      {/* {selected.isDeletable ? (
        <Button
          type="primary"
          onClick={() => {
            actions.delete(selected.id);
          }}
        >
          Delete
        </Button>
      ) : null} */}
    </div>
  ) : null;
};
