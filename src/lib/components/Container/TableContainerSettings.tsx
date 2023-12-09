import { useNode } from "@craftjs/core";
import { StrTypeFormItem } from "../SettingFormItem/StrTypeFormItem";
import { SingleSelectTypeFormItem } from "../SettingFormItem/SingleSelectTypeFormItem";
import { Label } from "../ui/label";
import { Button, Input, Table } from "antd";
import { FormItem } from "../ui/form";
import { nanoid } from "nanoid";
import { IoMdMove, IoMdTrash } from "react-icons/io";
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
    dataPath,
    totalPath,
  } = useNode((node) => ({
    layout: node.data.props.layout,
    grid: node.data.props.grid,
    apiUrl: node.data.props.apiUrl,
    apiMethod: node.data.props.apiMethod,
    nameFieldKey: node.data.props.nameFieldKey,
    idFieldKey: node.data.props.idFieldKey,
    queryParams: node.data.props.queryParams,
    apiHeader: node.data.props.apiHeader,
    dataPath: node.data.props.dataPath,
    totalPath: node.data.props.totalPath,
  }));
  return (
    <div>
      <StrTypeFormItem
        tooltip="完整的接口地址"
        label="接口地址"
        value={apiUrl}
        onChange={(e) => setProp((props: any) => (props.apiUrl = e), 1000)}
      />
      <SingleSelectTypeFormItem
        label="请求方式"
        tooltip="1111"
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
        tooltip="json解析时,表格数组的取值path"
        label="rows取值路径"
        value={dataPath}
        onChange={(e) => setProp((props: any) => (props.dataPath = e), 1000)}
      />
      <StrTypeFormItem
        tooltip="json解析时,表格数量的取值path"
        label="totalPath取值路径"
        value={totalPath}
        onChange={(e) => setProp((props: any) => (props.totalPath = e), 1000)}
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
                            (props.queryParams[index]["value"] =
                              e.target.value),
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
      {/* 接口请求头 */}
      <div className="p-3 my-2 border shadow-sm">
        <div className="flex items-center justify-between">
          <Label className="mb-2">Header</Label>
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
                          (props: any) => props.apiHeader.splice(index, 1),
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
    </div>
  );
};
