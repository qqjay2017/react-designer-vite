import React from "react";
import { TextSettings } from "../TextField/TextSettings";
import { SettingFormItem } from "@/lib/components/SettingFormItem";
import { useNode } from "@craftjs/core";
import { Button, Input, Table } from "antd";
import { nanoid } from "nanoid";

export const FileUploadSelectSettings = () => {
  const {
    actions: { setProp },
    maxSizeMb = 20,
    multipleFlag = true,
    acceptFlag = true,
    multiple = 5,
    acceptList = [],
    bucket = "scm",
    objectPathPre = "logistic1010",
    needDownload = false,
  } = useNode((node) => ({
    maxSizeMb: node.data.props.maxSizeMb,
    multipleFlag: node.data.props.multipleFlag,
    initialValue: node.data.props.initialValue,
    acceptFlag: node.data.props.acceptFlag,
    multiple: node.data.props.multiple,
    acceptList: node.data.props.acceptList,
    bucket: node.data.props.bucket,
    objectPathPre: node.data.props.objectPathPre,
    needDownload: node.data.props.needDownload,
  }));

  const CustomConfig = () => {
    return (
      <>
        <SettingFormItem.SingleSelectTypeFormItem
          label="bucket"
          tooltip="指定存储桶"
          value={bucket}
          onChange={(e: any) =>
            setProp((props: any) => (props.bucket = e), 1000)
          }
        />
        <SettingFormItem.SingleSelectTypeFormItem
          label="objectPathPre"
          tooltip="指定存储路径"
          value={objectPathPre}
          onChange={(e: any) =>
            setProp((props: any) => (props.objectPathPre = e), 1000)
          }
        />
        <SettingFormItem.BoolSelectTypeFormItem
          label="允许下载"
          tooltip="开启后,将会在文件夹列表展示下载按钮。"
          disabled
          value={needDownload}
          onChange={(e: any) =>
            setProp((props: any) => (props.needDownload = e), 1000)
          }
        />
        <SettingFormItem.BoolSelectTypeFormItem
          label="限制文件个数"
          tooltip="为保证系统安全,建议开启。"
          disabled
          value={multipleFlag}
          onChange={(e: any) =>
            setProp((props: any) => (props.multipleFlag = e), 1000)
          }
        />
        {multipleFlag && (
          <SettingFormItem.NumTypeFormItem
            addonAfter="个"
            value={multiple}
            onChange={(e: any) =>
              setProp((props: any) => (props.multiple = e), 1000)
            }
          />
        )}
        <SettingFormItem.BoolSelectTypeFormItem
          label="限制文件类型"
          tooltip="为保证系统安全,建议开启。"
          disabled
          value={acceptFlag}
          onChange={(e: any) =>
            setProp((props: any) => (props.acceptFlag = e), 1000)
          }
        />
        {acceptFlag && (
          <Table
            rowKey={"id"}
            pagination={false}
            size="small"
            dataSource={acceptList}
            columns={[
              {
                dataIndex: "name",
                title: "类型",
                render: (_, record, index) => {
                  return (
                    <Input
                      value={record.name}
                      onChange={(e) => {
                        setProp(
                          (props: any) =>
                            (props.acceptList[index]["name"] = e.target.value),
                          1000
                        );
                      }}
                    />
                  );
                },
              },

              {
                dataIndex: "option",
                width: 75,
                title: "操作",
                render: (_, record, index) => {
                  return (
                    <a
                      className=" cursor-pointer"
                      onClick={() => {
                        setProp(
                          (props: any) => props.acceptList.splice(index, 1),
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
        )}
        {acceptFlag && (
          <div className="p-2">
            <Button
              block
              type="primary"
              onClick={() => {
                setProp(
                  (props: any) =>
                    props.acceptList.push({
                      id: nanoid(),
                      name: "类型名称",
                    }),
                  1000
                );
              }}
            >
              新增
            </Button>
          </div>
        )}
      </>
    );
  };

  const AfterNameConfig = () => {
    return (
      <>
        <SettingFormItem.NumTypeFormItem
          label="上传文件最大体积"
          addonAfter="MB"
          precision={0}
          value={maxSizeMb}
          onChange={(e: any) =>
            setProp((props: any) => (props.maxSizeMb = e), 1000)
          }
        />
      </>
    );
  };

  return (
    <TextSettings
      AfterNameConfig={AfterNameConfig}
      InitialValueConfig={() => <></>}
      CustomConfig={CustomConfig}
    />
  );
};
