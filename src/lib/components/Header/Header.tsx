import { useEditor } from "@craftjs/core";
import { Button } from "antd";

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
    <header
      className="h-[50px]  min-h-[50px] bg-white  flex    shadow-md relative z-20 items-center justify-end px-9 "
      style={{ zIndex: "9999" }}
    >
      <Button
        type="primary"
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
