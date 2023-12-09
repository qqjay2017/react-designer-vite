import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

import { BsQuestionCircle } from "react-icons/bs";

export const LabelTooltip = ({ content }: { content: string }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger className="ml-2 mt-0" asChild>
          <div className=" w-[12px] h-[12px] flex items-center justify-center">
            <BsQuestionCircle
              className="text-[12px]"
              style={{
                color: "#acb3bd",
              }}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-[220px]">
          <p className="p-0 m-0">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
