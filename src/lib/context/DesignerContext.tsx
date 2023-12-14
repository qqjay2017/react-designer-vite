import { createContext } from "react";
import { TemplateType } from "../components/Editor/interface";

export type DesignerContextType = {
  name?: string;
  busHandles?: BusHandles;
  templateType?: TemplateType;
};
export const defaultConfig = {
  name: "test",
  templateType: "RelationData",
};

export interface BusHandles {
  getDictTypes?: (params?: any) => Promise<any[]>;
  dictQueryCode?: (params?: any) => Promise<any[]>;
}

export const DesignerContext = createContext<DesignerContextType | null>(null);
