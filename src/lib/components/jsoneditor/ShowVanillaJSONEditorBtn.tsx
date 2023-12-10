import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Button, message } from "antd";
import VanillaJSONEditor from "./VanillaJSONEditor";
import { useEditor } from "@craftjs/core";

export const ShowVanillaJSONEditorBtn = ({
  mode = "import",
}: {
  mode: "import" | "export";
}) => {
  const { query, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({
    text: "{}",
    json: undefined,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => {
            if (mode == "export") {
              setContent({
                text: undefined,
                json: JSON.parse(query.serialize()),
              });
            } else {
              setContent({
                text: "{}",
                json: undefined,
              });
            }

            setOpen(true);
          }}
        >
          {mode == "export" ? "导出" : "导入"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-modal     overflow-hidden">
        <div className="overflow-y-auto max-h-modal-inner">
          {open && (
            <VanillaJSONEditor
              content={content}
              readOnly={mode === "export"}
              onChange={setContent}
            />
          )}
        </div>

        {mode == "import" && (
          <DialogFooter className="h-[48px]">
            <Button
              type="primary"
              onClick={() => {
                try {
                  console.log(content, "content");
                  actions.deserialize(content.text);
                  message.success("导入成功!");
                  setOpen(false);
                } catch (error) {
                  console.log(error);
                  message.error("导入失败");
                }
              }}
            >
              导入
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
