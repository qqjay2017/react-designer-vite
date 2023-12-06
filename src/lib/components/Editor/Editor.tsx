import React, { PropsWithChildren } from "react";
import { Frame, Editor as InnerEditor, Element } from "@craftjs/core";
import { TextComponent } from "../TextComponent";

import { Container } from "../Container/Container";
import { Viewport } from "../Viewport";
import { StartContainer } from "../Container";
import { Card, CardBottom, CardTop } from "../Card";
export const Editor = () => {
  return (
    <div className=" relative  h-screen w-screen">
      <InnerEditor
        resolver={{
          StartContainer,
          TextComponent,
          Container,
          Card,
          CardBottom,
          CardTop,
        }}
      >
        <Viewport>
          <Frame>
            <Element
              canvas
              is={StartContainer}
              width="800px"
              height="auto"
              custom={{ displayName: "App" }}
            ></Element>
          </Frame>
        </Viewport>
      </InnerEditor>
    </div>
  );
};
