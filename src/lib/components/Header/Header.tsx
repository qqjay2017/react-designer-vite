import { useEditor } from "@craftjs/core";
import { Button } from "antd";

import lz from "lzutf8";
import { IHeaderAction } from "./interface";
import { useEffect } from "react";

export const Header = ({
  headerActions = {},
  defaultJson,
}: {
  headerActions?: IHeaderAction;
  defaultJson?: any;
}) => {
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  useEffect(() => {
    if (defaultJson && actions) {
      actions.deserialize(defaultJson);
    }
  }, [actions]);

  return (
    <header className="h-[50px]  bg-white  flex    shadow-md relative z-10">
      Header
      <Button
        onClick={() => {
          const json = query.serialize();
          headerActions?.save && headerActions?.save(json);
          // 解码
          //   const json = lz.decompress(lz.decodeBase64(stateToLoad));
          // actions.deserialize(json);
        }}
      >
        保存设计
      </Button>
    </header>
  );
};
