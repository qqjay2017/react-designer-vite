import { Frame, Editor as InnerEditor, Element } from "@craftjs/core";

import { Viewport } from "../Viewport";
import { ProFormContainer, StartContainer } from "../Container";

import { RenderNode } from "../RenderNode";
import { Text } from "../../fields";

export const Editor = () => {
  return (
    <div className=" relative  h-screen w-screen overflow-hidden">
      <InnerEditor
        resolver={{
          ProFormContainer,
          Text,
        }}
        // 统一的渲染处理
        onRender={RenderNode}
      >
        <Viewport>
          <Frame>
            <Element canvas is={ProFormContainer}>
              <Text label="123" />
              <Text label="456" />
            </Element>
          </Frame>
        </Viewport>
      </InnerEditor>
    </div>
  );
};
