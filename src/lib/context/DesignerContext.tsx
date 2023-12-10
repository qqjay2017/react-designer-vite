import { createContext } from "react";

export type DesignerContextType = {
  name?: string;
  busHandles?: BusHandles;
};
export const defaultConfig = {
  name: "test",
};

export interface BusHandles {
  getDictTypes?: (params?: any) => Promise<any[]>;
  dictQueryCode?: (params?: any) => Promise<any[]>;
}

export const DesignerContext = createContext<DesignerContextType | null>(null);
