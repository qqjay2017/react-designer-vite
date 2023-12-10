import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button, Select, Table, message } from "antd";

import { useQuery } from "@tanstack/react-query";
import { FormItem } from "@/lib/components/ui/form";

export const SelectDictBtn = ({
  getDictTypes,
  dictQueryCode,
  setProp,
}: {
  getDictTypes: any;
  dictQueryCode: any;
  setProp: any;
}) => {
  const [open, setOpen] = useState(false);
  const [selectCode, setSelectCode] = useState("");

  // Queries
  const { data: dictTypes } = useQuery({
    queryKey: ["dictTypes"],
    queryFn: () => getDictTypes({}),
    enabled: open,

    staleTime: 1000 * 60 * 10, // 10分钟数据才过期
  });
  const { data: dictItems } = useQuery({
    queryKey: ["dictItems", selectCode],
    queryFn: () =>
      dictQueryCode({
        type: selectCode,
        dataType: 1,
        queryType: 3,
      }),
    enabled: !!selectCode,
    staleTime: 1000 * 60 * 10, // 10分钟数据才过期
    // behavior: {
    //   onFetch(context, query) {

    //   },
    // }
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mb-2 " type="link" size="small">
          字典
        </Button>
      </DialogTrigger>
      <DialogContent id="DictDialogContent">
        {/* <DialogHeader className="flex items-center flex-row">
          <DialogTitle className="mb-0 mr-2">选择字典</DialogTitle>
        </DialogHeader> */}
        <div>
          <FormItem label="选择字典" horizontal>
            <Select
              placeholder="请选择字典"
              getPopupContainer={() =>
                document.getElementById("DictDialogContent")!
              }
              filterOption={(input: string = "", option) => {
                const label: any = option?.label || "";
                const value: any = option?.value || "";
                return label.includes(input) || value.includes(input);
              }}
              showSearch
              style={{
                width: 200,
              }}
              options={dictTypes || []}
              value={selectCode}
              onChange={(e) => setSelectCode(e)}
            />
          </FormItem>
        </div>
        <div className="w-full overflow-hidden">
          {dictItems && dictItems.length ? (
            <Table
              scroll={{
                x: 699,
                y: 300,
              }}
              pagination={{
                defaultPageSize: 5,
              }}
              dataSource={dictItems}
              columns={[
                {
                  dataIndex: "name",
                  width: 280,
                  title: "名称",
                },
                {
                  dataIndex: "code",
                  width: 200,
                  title: "code",
                },
                {
                  dataIndex: "descreption",
                  title: "描述",
                },
              ]}
            ></Table>
          ) : null}
        </div>

        <DialogFooter className="flex items-center ">
          <DialogDescription className="m-0">
            提交后,将会覆盖原有数据
          </DialogDescription>
          <Button
            type="primary"
            onClick={() => {
              if (!dictItems || !dictItems.length) {
                message.warning("请先选择字典");
                return;
              }
              setProp(
                (props: any) =>
                  (props.valueEnumArray = dictItems.map((item) => {
                    return {
                      id: item.code,
                      key: item.code,
                      value: item.name,
                    };
                  })),
                1000
              );
              setOpen(false);
            }}
          >
            确认选择
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
