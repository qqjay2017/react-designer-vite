import { useEditor } from "@craftjs/core";
import { PropsWithChildren } from "react";

import { Toolbox } from "../Toolbox";
import { Header } from "../Header";
import { SettingsPanel } from "../SettingsPanel";

import { IHeaderAction } from "../Header/interface";
interface IViewportPorps {
  headerActions?: IHeaderAction;
  defaultJson?: any;
}

export const Viewport = ({
  children,
  headerActions,
  defaultJson,
}: PropsWithChildren<IViewportPorps>) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div className="flex flex-col w-full h-full page-container">
      <Header headerActions={headerActions} defaultJson={defaultJson} />
      <div className=" flex flex-1  w-full h-full  bg-[#f9fafc]">
        <Toolbox />
        <div
          className="craftjs-renderer relative flex-1   h-full  overflow-auto  transition p-4"
          ref={(ref) => connectors.select(connectors.hover(ref!, ""), "")}
        >
          <div className="relative flex-col flex items-center pt-8">
            {children}
          </div>
        </div>
        <SettingsPanel />
      </div>
    </div>
  );
};
