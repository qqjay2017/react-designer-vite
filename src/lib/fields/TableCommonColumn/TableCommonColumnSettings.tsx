import { useNode } from "@craftjs/core";
import { Radio } from "antd";
import { SettingFormItem } from "../../components/SettingFormItem";

export const TableCommonColumnSettings = () => {
  const {
    actions: { setProp },
    title,
    dataIndex,
    valueType,
    ellipsis,
    copyable,
    width,
  } = useNode((node) => ({
    colSpan: node.data.props.colSpan,
    title: node.data.props.title,
    dataIndex: node.data.props.dataIndex,
    width: node.data.props.width,
    valueType: node.data.props.valueType,
    ellipsis: node.data.props.ellipsis,
    copyable: node.data.props.copyable,
  }));
  return (
    <div>
      <SettingFormItem.StrTypeFormItem
        label="标题"
        value={title}
        onChange={(e) => setProp((props: any) => (props.title = e), 1000)}
      />
      <SettingFormItem.StrTypeFormItem
        label="接口字段"
        value={dataIndex}
        onChange={(e) => setProp((props: any) => (props.dataIndex = e), 1000)}
      />
      <SettingFormItem.NumTypeFormItem
        label="宽度"
        value={width}
        onChange={(e) => setProp((props: any) => (props.width = e), 1000)}
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
        onChange={(e) => setProp((props: any) => (props.valueType = e), 1000)}
      />
      <SettingFormItem.BoolSelectTypeFormItem
        label="过长省略"
        value={ellipsis}
        onChange={(e) => setProp((props: any) => (props.ellipsis = e), 1000)}
      />
      <SettingFormItem.BoolSelectTypeFormItem
        label="复制按钮"
        value={copyable}
        onChange={(e) => setProp((props: any) => (props.copyable = e), 1000)}
      />
    </div>
  );
};
