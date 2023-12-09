export type ElementsType =
  | "TextField"
  | "ProFormContainer"
  | "TableCommonColumn"
  | "TextAreaField"
  | "TableContainer";

export type ElementGroupType = "formField" | "tableColumn" | "container";
("container");
export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

export interface FormElement {
  displayName: ElementsType;
  group: ElementGroupType;
  construct: (id: string) => FormElementInstance;
  designerBtnElement: {
    icon: React.ElementType;
    label: string;
    description?: string;
  };
  props: Record<string, any>;
  //   designerComponent?: React.FC<{
  //     elementInstance: FormElementInstance;
  //   }>;
  //   settings?: React.FC<{ elementInstance: FormElementInstance }>;
}
