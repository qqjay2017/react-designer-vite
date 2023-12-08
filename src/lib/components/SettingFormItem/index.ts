import { ElementType, FC } from "react";
import { StrTypeFormItem } from "./StrTypeFormItem";

type SettingFormItemKey = "StrTypeFormItem";

export interface IBaseFormItemProps {
  label: string;
  value: any;
  onChange: (e: string) => any;
}
export const SettingFormItem: Record<
  SettingFormItemKey,
  ElementType<IBaseFormItemProps>
> = {
  StrTypeFormItem: StrTypeFormItem,
};
