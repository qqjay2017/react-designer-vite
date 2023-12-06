import { useEditor } from "@craftjs/core";
import { Button } from "antd";
import { TextComponent } from "../TextComponent";
import { WeightBtn } from "./WeightBtn";
import { Card } from "../Card";

export const Toolbox = () => {
  const { connectors } = useEditor();
  return (
    <div className=" pb-9 overflow-x-hidden overflow-y-auto bg-white border-r-1  border-border">
      <div className="relative w-[268px] pt-11 pl-2">
        <WeightBtn
          ref={(ref) =>
            connectors.create(ref!, <TextComponent text="Hi world" />)
          }
          name="TextComponent"
        />
        <WeightBtn
          ref={(ref) => connectors.create(ref!, <Card />)}
          name="Card"
        />
      </div>
    </div>
  );
};
