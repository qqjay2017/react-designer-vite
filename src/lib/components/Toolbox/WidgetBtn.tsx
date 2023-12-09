import { ElementsType } from "../../fields/Field";
import { FormElementConfigMap, FormElements } from "../../fields";
import { useEditor } from "@craftjs/core";

export const WidgetBtn = (props: { widgetKey: ElementsType }) => {
  const { widgetKey } = props;
  const Elem = FormElements[widgetKey];
  const elemConfig = FormElementConfigMap[widgetKey];
  const { icon: Icon, label } = elemConfig.designerBtnElement;
  const { connectors } = useEditor();
  return (
    <div
      className="w-[116px] h-[36px]  flex  items-center justify-start border-1 
      
      border-solid border-border  cursor-pointer 
      bg-[#F9FAFC]  rounded-sm
       pl-2
      "
      ref={(ref) => connectors.create(ref!, <Elem />)}
    >
      <Icon className=" text-sm" />
      <span className="ml-2">{label}</span>
    </div>
  );
};
