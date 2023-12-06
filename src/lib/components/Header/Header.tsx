import { useEditor } from "@craftjs/core";
import { Button } from "antd";

import lz from "lzutf8";

export const Header = () => {
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );
  return (
    <header className="h-[50px]  bg-white  flex    shadow-md relative z-10">
      Header
      <Button
        onClick={() => {
          console.log(actions, "actions");
          const json = query.serialize();
          const lz1 = lz.encodeBase64(lz.compress(json));
          window.jjj = lz1;
          console.log(json, JSON.parse(json), "json");
        }}
      >
        actions
      </Button>
    </header>
  );
};
