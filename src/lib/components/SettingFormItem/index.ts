import { ElementType, FC } from "react";
import { StrTypeFormItem } from "./StrTypeFormItem";
import { SingleSelectTypeFormItem } from "./SingleSelectTypeFormItem";
import { NumTypeFormItem } from "./NumTypeFormItem";
import { BoolSelectTypeFormItem } from "./BoolSelectTypeFormItem";

type SettingFormItemKey =
  | "StrTypeFormItem"
  | "SingleSelectTypeFormItem"
  | "NumTypeFormItem"
  | "BoolSelectTypeFormItem";

export interface IBaseFormItemProps {
  label: string;
  value: any;
  onChange: (e: string) => any;
  options?: { value: any; label: any }[];
}
export const SettingFormItem: Record<
  SettingFormItemKey,
  ElementType<IBaseFormItemProps>
> = {
  StrTypeFormItem: StrTypeFormItem,
  SingleSelectTypeFormItem: SingleSelectTypeFormItem,
  NumTypeFormItem: NumTypeFormItem,
  BoolSelectTypeFormItem,
};
