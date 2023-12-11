import { Label } from "../ui/label";
import { WidgetBtn } from "./WidgetBtn";

export const Toolbox = () => {
  return (
    <div className=" pb-9 overflow-x-hidden overflow-y-auto bg-white border-r-1  border-t-0 border-solid  border-border relative z-20">
      <div className="relative w-[268px] pt-4 pl-3">
        <Label>表单控件</Label>
        <div className="grid grid-cols-2 my-3">
          <WidgetBtn widgetKey="TextField" />
          <WidgetBtn widgetKey="TextAreaField" />
          <WidgetBtn widgetKey="NumberField" />
          <WidgetBtn widgetKey="DateField" />
          <WidgetBtn widgetKey="DateRangeField" />
          <WidgetBtn widgetKey="RadioGroupField" />
          {/* <WidgetBtn widgetKey="TextField" /> */}
        </div>
        <Label>表格控件</Label>
        <div className="grid grid-cols-2 my-3">
          <WidgetBtn widgetKey="TableCommonColumn" />
        </div>
      </div>
    </div>
  );
};
