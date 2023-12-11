import { ElementType, FC } from "react";
import { StrTypeFormItem } from "./StrTypeFormItem";
import { SingleSelectTypeFormItem } from "./SingleSelectTypeFormItem";
import { NumTypeFormItem } from "./NumTypeFormItem";
import { BoolSelectTypeFormItem } from "./BoolSelectTypeFormItem";
import { CheckFormItem } from "./CheckFormItem";
import { RadioGroupButtonFormItem } from "./RadioGroupButtonFormItem";
import { MultSelectTypeFormItem } from "./MultSelectTypeFormItem";

type SettingFormItemKey =
  | "StrTypeFormItem"
  | "SingleSelectTypeFormItem"
  | "NumTypeFormItem"
  | "CheckFormItem"
  | "RadioGroupButtonFormItem"
  | "MultSelectTypeFormItem"
  | "BoolSelectTypeFormItem";

export interface IBaseFormItemProps {
  precision?: number;
  addonAfter?: string;
  label?: string;
  value?: string | number | boolean | object;
  tooltip?: string;
  onChange: any;
  disabled?: any;
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
  MultSelectTypeFormItem,
};
