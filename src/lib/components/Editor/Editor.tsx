import { Frame, Editor as InnerEditor, Element } from "@craftjs/core";

import { Viewport } from "../Viewport";
import { Container, ProFormContainer, TableContainer } from "../Container";

import { RenderNode } from "../RenderNode";
import { FormElements } from "../../fields";
import { IHeaderProps } from "../Header/interface";
import { TextField } from "../../fields/TextField";
export interface IDesignerClientProps {
  headerProps?: IHeaderProps;
}

export const DesignerClient = (props: IDesignerClientProps) => {
  return (
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
  );
};
