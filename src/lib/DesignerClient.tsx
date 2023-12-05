import React from "react";
import { Editor, Frame, Canvas } from "@craftjs/core";

export const DesignerClient = () => {
  return (
    <div>
      <header>Some fancy header or whatever</header>
      <Editor resolver={{}}>
        <Frame></Frame>
      </Editor>
      <div>
        {/* <Toolbox />
        <SettingsPanel /> */}
      </div>
    </div>
  );
};
