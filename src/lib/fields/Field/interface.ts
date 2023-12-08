export type ElementsType = "TextField" | "ProFormContainer";
export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};
export interface FormElement {
  displayName: ElementsType;
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
