import { Frame, Editor as InnerEditor, Element } from "@craftjs/core";

import { Viewport } from "../Viewport";
import { Container, ProFormContainer, TableContainer } from "../Container";

import { RenderNode } from "../RenderNode";
import { FormElements } from "../../fields";
import { IHeaderProps } from "../Header/interface";
import { TextField } from "../../fields/TextField";
import { DesignerContextProvider } from "../../context";
import { BusHandles } from "../../context/DesignerContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { ConfigProvider } from "antd";
export interface IDesignerClientProps {
  headerProps?: IHeaderProps;
  busHandles?: BusHandles;
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
                <Frame>
                  <Element canvas is={Container}>
                    <Element canvas is={ProFormContainer}>
                      <TextField />
                    </Element>
                    <Element canvas is={TableContainer}></Element>
                  </Element>
                </Frame>
              </Viewport>
            </InnerEditor>
          </div>
        </QueryClientProvider>
      </DesignerContextProvider>
    </ConfigProvider>
  );
};
