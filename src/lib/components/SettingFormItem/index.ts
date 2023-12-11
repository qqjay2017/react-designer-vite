import { ElementType, FC } from "react";
import { StrTypeFormItem } from "./StrTypeFormItem";
import { SingleSelectTypeFormItem } from "./SingleSelectTypeFormItem";
import { NumTypeFormItem } from "./NumTypeFormItem";
import { BoolSelectTypeFormItem } from "./BoolSelectTypeFormItem";
import { CheckFormItem } from "./CheckFormItem";
import { RadioGroupButtonFormItem } from "./RadioGroupButtonFormItem";

type SettingFormItemKey =
  | "StrTypeFormItem"
  | "SingleSelectTypeFormItem"
  | "NumTypeFormItem"
  | "CheckFormItem"
  | "RadioGroupButtonFormItem"
  | "BoolSelectTypeFormItem";

export interface IBaseFormItemProps {
  label?: string;
  value?: string | number | boolean | object;
  tooltip?: string;
  onChange: any;
  horizontal?: boolean;
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
  CheckFormItem,
  RadioGroupButtonFormItem,
};
