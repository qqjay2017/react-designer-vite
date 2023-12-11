import { Label } from "@/lib/components/ui/label";
import { useDesigner } from "@/lib/hooks";
import React from "react";
import { SelectDictBtn } from "./SelectDictBtn";
import { useNode } from "@craftjs/core";
import { Button, Input, Table } from "antd";
import { nanoid } from "nanoid";

interface IDictConfigSettingPorps {
  optionsKey?: string;
  labelKey?: string;
  valueKey?: string;
}

export const DictConfigSetting = ({
  optionsKey = "valueEnumArray",
  valueKey = "key",
  labelKey = "value",
}: IDictConfigSettingPorps) => {
  const { busHandles } = useDesigner();
  const {
    actions: { setProp },
    valueEnumArray = [],
  } = useNode((node) => ({
    colSpan: node.data.props.colSpan,
    title: node.data.props.title,
    valueEnumArray: node.data.props[optionsKey],
  }));
  return (
    <div className="p-3 my-2 border">
      <div className="flex items-center justify-between">
        <Label className="mb-2 flex-1">枚举键值对</Label>
        {busHandles?.getDictTypes && busHandles?.dictQueryCode ? (
          <SelectDictBtn
            valueKey={valueKey}
            labelKey={labelKey}
            optionsKey={optionsKey}
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
            setProp((props: any) => {
              if (props[optionsKey]) {
                props[optionsKey].push({
                  id: nanoid(),
                  [valueKey]: "key_" + nanoid(3),
                  [labelKey]: "value_" + nanoid(3),
                });
              } else {
                props[optionsKey] = [
                  {
                    id: nanoid(),
                    [valueKey]: "key_" + nanoid(3),
                    [labelKey]: "value_" + nanoid(3),
                  },
                ];
              }
            }, 1000);
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
              dataIndex: valueKey,
              title: valueKey,
              render: (_, record, index) => {
                return (
                  <Input
                    value={record[valueKey]}
                    onChange={(e) => {
                      setProp(
                        (props: any) =>
                          (props[optionsKey][index][valueKey] = e.target.value),
                        1000
                      );
                    }}
                  />
                );
              },
            },
            {
              dataIndex: labelKey,
              title: labelKey,
              render: (_, record, index) => {
                return (
                  <Input
                    value={record[labelKey]}
                    onChange={(e) => {
                      setProp(
                        (props: any) =>
                          (props[optionsKey][index][labelKey] = e.target.value),
                        1000
                      );
                    }}
                  />
                );
              },
            },

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
                        (props: any) => props[optionsKey].splice(index, 1),
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
