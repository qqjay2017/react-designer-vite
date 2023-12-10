import { useNode } from "@craftjs/core";
import { Button, Input, Select, Table } from "antd";
import { SettingFormItem } from "@/lib/components/SettingFormItem";

import { nanoid } from "nanoid";

import { Label } from "../../components/ui/label";
import { SelectDictBtn } from "./SelectDictBtn";
import { useDesigner } from "@/lib/hooks";

export const TableCommonColumnSettings = () => {
  const {
    actions: { setProp },
    title,
    dataIndex,
    valueType,
    ellipsis,
    copyable,
    width,
    search,
    valueEnumArray = [],
    initialValue,
  } = useNode((node) => ({
    colSpan: node.data.props.colSpan,
    title: node.data.props.title,
    dataIndex: node.data.props.dataIndex,
    width: node.data.props.width,
    valueType: node.data.props.valueType,
    ellipsis: node.data.props.ellipsis,
    copyable: node.data.props.copyable,
    search: node.data.props.search,
    valueEnumArray: node.data.props.valueEnumArray,
    initialValue: node.data.props.initialValue,
  }));
  const { busHandles } = useDesigner();

  return (
    <div>
      <SettingFormItem.StrTypeFormItem
        label="标题"
        value={title}
        onChange={(e: any) => setProp((props: any) => (props.title = e), 1000)}
      />
      <SettingFormItem.StrTypeFormItem
        label="接口字段"
        value={dataIndex}
        onChange={(e: any) =>
          setProp((props: any) => (props.dataIndex = e), 1000)
        }
      />
      <SettingFormItem.NumTypeFormItem
        label="宽度"
        value={width}
        onChange={(e: any) => setProp((props: any) => (props.width = e), 1000)}
      />
      {/* password 密码输入框
      money 金额输入框
      textarea 文本域
      date 日期
      dateTime 日期时间
      dateWeek 周
      dateMonth 月
      dateQuarter 季度输入
      dateYear 年份输入
      dateRange 日期区间
      dateTimeRange 日期时间区间
      time 时间 timeRange
      时间区间
      text 文本框
      select 下拉框
      treeSelect 树形下拉框
      checkbox 多选框
      rate 星级组件 radio 单选框
      radioButton 按钮单选框
      progress 进度条
      percent 百分比组件
      digit 数字输入框
      second 秒格式化
      avatar 头像
      code 代码框
      switch 开关
      fromNow 相对于当前时间
      image 图片
      jsonCode 代码框，但是带了 json 格式化
      color 颜色选择器
      cascader 级联选择器
      segmented 分段器
      group 分组
      formList 表单列表
      formSet 表单集合
      divider 分割线
      dependency 依赖项 */}
      <SettingFormItem.SingleSelectTypeFormItem
        label="数据类型"
        options={[
          {
            label: "日期",
            value: "date",
          },
          {
            label: "日期时间",
            value: "dateTime",
          },
          {
            label: "文本",
            value: " text",
          },
          {
            label: "相对于当前时间",
            value: " fromNow",
          },
        ]}
        value={valueType}
        onChange={(e: any) =>
          setProp((props: any) => (props.valueType = e), 1000)
        }
      />
      <SettingFormItem.BoolSelectTypeFormItem
        label="过长省略"
        value={ellipsis}
        onChange={(e: any) =>
          setProp((props: any) => (props.ellipsis = e), 1000)
        }
      />
      <SettingFormItem.BoolSelectTypeFormItem
        label="复制按钮"
        value={copyable}
        onChange={(e: any) =>
          setProp((props: any) => (props.copyable = e), 1000)
        }
      />
      <SettingFormItem.CheckFormItem
        label="允许搜索"
        tooltip="是否允许搜索,开启后将会在表单生成一个对应字段的搜索选项,默认关闭。"
        value={search}
        onChange={(e: any) => setProp((props: any) => (props.search = e), 1000)}
      />
      {search ? (
        <SettingFormItem.StrTypeFormItem
          label="搜索默认值"
          tooltip="设置默认指后，默认值会显示在该模块的输入框中，填写者若不做修改，默认值将会作为填写者的数据提交。"
          value={initialValue}
          onChange={(e: any) =>
            setProp((props: any) => (props.initialValue = e), 1000)
          }
        />
      ) : null}

      {/* 枚举配置 */}
      <div className="p-3 my-2 border">
        <div className="flex items-center justify-between">
          <Label className="mb-2 flex-1">枚举键值对</Label>
          {busHandles?.getDictTypes && busHandles?.dictQueryCode ? (
            <SelectDictBtn
              getDictTypes={busHandles.getDictTypes}
              dictQueryCode={busHandles.dictQueryCode}
              setProp={setProp}
            />
          ) : null}

          <Button
            className="mb-2"
            type="link"
            size="small"
            onClick={() => {
              setProp(
                (props: any) =>
                  props.valueEnumArray.push({
                    id: nanoid(),
                    key: "key_" + nanoid(3),
                    value: "value_" + nanoid(3),
                  }),
                1000
              );
            }}
          >
            新增
          </Button>
        </div>
        {valueEnumArray && valueEnumArray.length ? (
          <Table
            rowKey={"id"}
            pagination={false}
            size="small"
            dataSource={valueEnumArray}
            columns={[
              {
                dataIndex: "key",
                title: "key",
                render: (_, record, index) => {
                  return (
                    <Input
                      value={record.key}
                      onChange={(e) => {
                        setProp(
                          (props: any) =>
                            (props.valueEnumArray[index]["key"] =
                              e.target.value),
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
                            (props.valueEnumArray[index]["value"] =
                              e.target.value),
                          1000
                        );
                      }}
                    />
                  );
                },
              },
              // {
              //   dataIndex: "status",
              //   title: "状态",
              //   render: (_, record, index) => {
              //     return (
              //       <Select
              //         value={record.status}
              //         options={[
              //           {
              //             label: "success",
              //             value: "Success",
              //           },
              //           {
              //             label: "error",
              //             value: "Error",
              //           },
              //           {
              //             label: "processing",
              //             value: "Processing",
              //           },
              //           {
              //             label: "warning",
              //             value: "Warning",
              //           },
              //           {
              //             label: "default",
              //             value: "Default",
              //           },
              //         ]}
              //         onChange={(e) => {
              //           setProp(
              //             (props: any) =>
              //               (props.valueEnumArray[index]["status"] = e),
              //             1000
              //           );
              //         }}
              //       />
              //     );
              //   },
              // },
              {
                dataIndex: "option",
                width: 55,
                title: "操作",
                render: (_, record, index) => {
                  return (
                    <a
                      className=" cursor-pointer"
                      onClick={() => {
                        setProp(
                          (props: any) => props.valueEnumArray.splice(index, 1),
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
