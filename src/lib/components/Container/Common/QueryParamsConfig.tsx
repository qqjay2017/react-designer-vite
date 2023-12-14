import React from "react";
import { Label } from "../../ui/label";
import { Button, Input, Table } from "antd";
import { useNode } from "@craftjs/core";
import { nanoid } from "nanoid";

export const QueryParamsConfig = () => {
  const {
    actions: { setProp },

    queryParams = [],
  } = useNode((node) => ({
    layout: node.data.props.layout,

    queryParams: node.data.props.queryParams,
  }));
  return (
    <div className="p-3 my-2 border ">
      <div className="flex items-center justify-between">
        <Label className="mb-2">QueryParam</Label>
        <Button
          className="mb-2"
          type="link"
          size="small"
          onClick={() => {
            setProp(
              (props: any) =>
                props.queryParams.push({
                  id: nanoid(),
                  name: "name_" + nanoid(3),
                  value: "value_" + nanoid(3),
                }),
              1000
            );
          }}
        >
          新增
        </Button>
      </div>
      {queryParams && queryParams.length ? (
        <Table
          rowKey={"id"}
          pagination={false}
          size="small"
          dataSource={queryParams}
          columns={[
            {
              dataIndex: "name",
              title: "name",
              render: (_, record, index) => {
                return (
                  <Input
                    value={record.name}
                    onChange={(e) => {
                      setProp(
                        (props: any) =>
                          (props.queryParams[index]["name"] = e.target.value),
                        1000
                      );
                    }}
                  />
                );
              },
            },
            {
              dataIndex: "value",
              title: "value",
              render: (_, record, index) => {
                return (
                  <Input
                    value={record.value}
                    onChange={(e) => {
                      setProp(
                        (props: any) =>
                          (props.queryParams[index]["value"] = e.target.value),
                        1000
                      );
                    }}
                  />
                );
              },
            },
            {
              dataIndex: "option",
              width: 60,
              title: "操作",
              render: (_, record, index) => {
                return (
                  <a
                    className=" cursor-pointer"
                    onClick={() => {
                      setProp(
                        (props: any) => props.queryParams.splice(index, 1),
                        1000
                      );
                    }}
                  >
                    删除
                  </a>
                );
              },
            },
          ]}
        />
      ) : null}
    </div>
  );
};
