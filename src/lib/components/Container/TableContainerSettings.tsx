import { useNode } from "@craftjs/core";
import { StrTypeFormItem } from "../SettingFormItem/StrTypeFormItem";
import { SingleSelectTypeFormItem } from "../SettingFormItem/SingleSelectTypeFormItem";
import { Label } from "../ui/label";
import { Button, Input, Table } from "antd";
import { FormItem } from "../ui/form";
import { nanoid } from "nanoid";

export const TableContainerSettings = () => {
  const {
    actions: { setProp },
    layout,
    grid,
    apiUrl,
    apiMethod,
    nameFieldKey,
    idFieldKey,
    queryParams = [],
    apiHeader = [],
  } = useNode((node) => ({
    layout: node.data.props.layout,
    grid: node.data.props.grid,
    apiUrl: node.data.props.apiUrl,
    apiMethod: node.data.props.apiMethod,
    nameFieldKey: node.data.props.nameFieldKey,
    idFieldKey: node.data.props.idFieldKey,
    queryParams: node.data.props.queryParams,
    apiHeader: node.data.props.apiHeader,
  }));
  return (
    <div>
      <StrTypeFormItem
        label="接口地址"
        value={apiUrl}
        onChange={(e) => setProp((props: any) => (props.apiUrl = e), 1000)}
      />
      <SingleSelectTypeFormItem
        label="请求方式"
        value={apiMethod}
        options={[
          {
            value: "get",
            label: "GET",
          },
          {
            value: "post",
            label: "POST",
          },
        ]}
        onChange={(e) => setProp((props: any) => (props.apiMethod = e), 1000)}
      />
      <StrTypeFormItem
        label="名称字段"
        value={nameFieldKey}
        onChange={(e) =>
          setProp((props: any) => (props.nameFieldKey = e), 1000)
        }
      />
      <StrTypeFormItem
        label="ID字段"
        value={idFieldKey}
        onChange={(e) => setProp((props: any) => (props.idFieldKey = e), 1000)}
      />
      {/* 接口参数 */}
      <div className="p-3 my-2 border shadow-sm">
        <div className="flex items-center justify-between">
          <Label className="mb-2">查询参数</Label>
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
                            (props.queryParams[index]["value"] =
                              e.target.value),
                          1000
                        );
                      }}
                    />
                  );
                },
              },
            ]}
          />
        ) : null}
      </div>
      {/* 接口请求头 */}
      <div className="p-3 my-2 border shadow-sm">
        <div className="flex items-center justify-between">
          <Label className="mb-2">查询请求头</Label>
          <Button
            className="mb-2"
            type="link"
            size="small"
            onClick={() => {
              setProp(
                (props: any) =>
                  props.apiHeader.push({
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
        {apiHeader && apiHeader.length ? (
          <Table
            rowKey={"id"}
            pagination={false}
            size="small"
            dataSource={apiHeader}
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
                            (props.apiHeader[index]["name"] = e.target.value),
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
                            (props.apiHeader[index]["value"] = e.target.value),
                          1000
                        );
                      }}
                    />
                  );
                },
              },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
};
