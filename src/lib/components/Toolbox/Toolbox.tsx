import { useEditor } from "@craftjs/core";

import { WeightBtn } from "./WeightBtn";
import { Text } from "../../fields";

export const Toolbox = () => {
  const { connectors } = useEditor();
  return (
    <div className=" pb-9 overflow-x-hidden overflow-y-auto bg-white border-r-1  border-border">
      <div className="relative w-[268px] pt-11 pl-2">
        <WeightBtn
          ref={(ref) =>
            connectors.create(ref!, <Text label="TextTextTextText" />)
          }
          name="Text"
        />
      </div>
    </div>
  );
};
