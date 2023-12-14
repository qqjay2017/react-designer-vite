import { useNode } from "@craftjs/core";
import { StrTypeFormItem } from "../SettingFormItem/StrTypeFormItem";
import { SingleSelectTypeFormItem } from "../SettingFormItem/SingleSelectTypeFormItem";
import { Label } from "../ui/label";
import { Button, Input, Table } from "antd";

import { nanoid } from "nanoid";
import { QueryParamsConfig } from "./Common/QueryParamsConfig";
import { HeaderConfig } from "./Common/HeaderConfig";

export const TableContainerSettings = () => {
  const {
    actions: { setProp },
    layout,
    grid,
    apiUrl,
    apiMethod,
    nameFieldKey,
    idFieldKey,

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
        onChange={(e: any) => setProp((props: any) => (props.apiUrl = e), 1000)}
      />
      <SingleSelectTypeFormItem
        label="请求方式"
        tooltip="接口的请求方式"
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
        onChange={(e: any) =>
          setProp((props: any) => (props.apiMethod = e), 1000)
        }
      />
      <StrTypeFormItem
        tooltip="json解析时,表格数组的取值path"
        label="rows取值路径"
        value={dataPath}
        onChange={(e: any) =>
          setProp((props: any) => (props.dataPath = e), 1000)
        }
      />
      <StrTypeFormItem
        tooltip="json解析时,表格数量的取值path"
        label="totalPath取值路径"
        value={totalPath}
        onChange={(e: any) =>
          setProp((props: any) => (props.totalPath = e), 1000)
        }
      />
      <StrTypeFormItem
        label="名称字段"
        value={nameFieldKey}
        onChange={(e: any) =>
          setProp((props: any) => (props.nameFieldKey = e), 1000)
        }
      />
      <StrTypeFormItem
        label="ID字段"
        value={idFieldKey}
        onChange={(e: any) =>
          setProp((props: any) => (props.idFieldKey = e), 1000)
        }
      />
      {/* 接口参数 */}
      <QueryParamsConfig />
      {/* 接口请求头 */}
      <HeaderConfig />
    </div>
  );
};
