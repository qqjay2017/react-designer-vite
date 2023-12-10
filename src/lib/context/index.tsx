import React from "react";
import {
  DesignerContext,
  defaultConfig,
  DesignerContextType,
} from "./DesignerContext";

export const DesignerContextProvider: React.FC<{
  config?: DesignerContextType;
  children?: React.ReactNode | React.ReactElement;
}> = ({ children, config = {} }) => {
  return (
    <DesignerContext.Consumer>
      {(originalConfig) => (
        <DesignerContext.Provider value={config || originalConfig}>
          {children}
        </DesignerContext.Provider>
      )}
    </DesignerContext.Consumer>
  );
};
