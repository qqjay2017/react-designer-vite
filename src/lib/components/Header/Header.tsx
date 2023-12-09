import { useEditor } from "@craftjs/core";
import { Button } from "antd";

import { IHeaderProps } from "./interface";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";

export const Header = ({
  headerActions = {},
  defaultJson,
  headerName = "",
}: IHeaderProps) => {
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
    <header className="h-[50px]  min-h-[50px] bg-white  flex    shadow-md relative z-20 items-center justify-end px-9  z-20">
      <div className="flex-1 items-center">
        <IoArrowBack
          className="   cursor-pointer "
          onClick={(e: any) => {
            headerActions?.back && headerActions?.back(e);
          }}
        />
        <span className="ml-4 text-lg">{headerName}</span>
      </div>
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
