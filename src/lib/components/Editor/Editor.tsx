import { Frame, Editor as InnerEditor } from "@craftjs/core";

import { Viewport } from "../Viewport";
import { Container } from "../Container";

import { RenderNode } from "../RenderNode";
import { FormElements } from "../../fields";
import { IHeaderProps } from "../Header/interface";

import { DesignerContextProvider } from "../../context";
import { BusHandles } from "../../context/DesignerContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { ConfigProvider } from "antd";

import { TemplateType } from "./interface";
import { defaultJson } from "@/lib/defaultJson";
export interface IDesignerClientProps {
  headerProps?: IHeaderProps;
  busHandles?: BusHandles;
  templateType?: TemplateType;
}

export const DesignerClient = (props: IDesignerClientProps) => {
  return (
    <ConfigProvider
      getPopupContainer={() =>
        document.getElementById("DesignerSettingsPanel")!
      }
    >
      <DesignerContextProvider
        config={{
          templateType: props.templateType || "RelationData",
          busHandles: props.busHandles || {},
        }}
      >
        <QueryClientProvider client={queryClient}>
          <div className="innerEditorWrap relative  overflow-hidden">
            <InnerEditor
              resolver={{
                Container,
                ...FormElements,
              }}
              // 统一的渲染处理
              onRender={RenderNode}
            >
              <Viewport headerProps={props.headerProps}>
                <Frame
                  json={JSON.stringify(
                    defaultJson[props.templateType || "RelationData"]
                  )}
                ></Frame>
              </Viewport>
            </InnerEditor>
          </div>
        </QueryClientProvider>
      </DesignerContextProvider>
    </ConfigProvider>
  );
};
