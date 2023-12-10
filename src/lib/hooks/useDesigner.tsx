import React, { useContext } from "react";
import { DesignerContext } from "../context/DesignerContext";

export const useDesigner = () => {
  const ctx = useContext(DesignerContext);
  if (!ctx) {
    throw new Error("useDesigner must be used within a DesignerContext");
  }
  return ctx;
};
