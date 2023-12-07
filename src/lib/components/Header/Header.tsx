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
          // 解码
          //   const json = lz.decompress(lz.decodeBase64(stateToLoad));
          // actions.deserialize(json);
          console.log(lz1, "lz1");
        }}
      >
        actions
      </Button>
    </header>
  );
};
