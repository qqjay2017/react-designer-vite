import { ElementsType } from "../../fields/Field";
import { FormElementConfigMap, FormElements } from "../../fields";
import { useEditor } from "@craftjs/core";

export const WeightBtn = (props: { weightKey: ElementsType }) => {
  const { weightKey } = props;
  const Elem = FormElements[weightKey];
  const elemConfig = FormElementConfigMap[weightKey];
  const { icon: Icon, label } = elemConfig.designerBtnElement;
  const { connectors } = useEditor();
  return (
    <div
      className="w-[116px] h-[36px]  flex items-center justify-center border-1 border-solid border-border  cursor-pointer  "
      ref={(ref) => connectors.create(ref!, <Elem />)}
    >
      <Icon className=" text-sm" />
      <span className="ml-2">{label}</span>
    </div>
  );
};
