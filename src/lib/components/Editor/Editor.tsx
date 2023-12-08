import { Frame, Editor as InnerEditor, Element } from "@craftjs/core";

import { Viewport } from "../Viewport";
import { ProFormContainer } from "../Container";

import { RenderNode } from "../RenderNode";
import { FormElements } from "../../fields";

export const Editor = () => {
  return (
    <div className=" relative  h-screen w-screen overflow-hidden">
      <InnerEditor
        resolver={{
          ...FormElements,
        }}
        // 统一的渲染处理
        onRender={RenderNode}
      >
        <Viewport>
          <Frame>
            <Element canvas is={ProFormContainer}></Element>
          </Frame>
        </Viewport>
      </InnerEditor>
    </div>
  );
};
