import { ProFormCheckbox, ProFormSelect } from "@ant-design/pro-components";

import { MultSelectSettings } from "./MultSelectSettings";

import { FieldWrap } from "../Field/FieldWrap";
import { pickFieldProps } from "../Field/pickFieldProps";

import { multSelectFieldFormElementConfig } from "./multSelectFieldFormElementConfig";

export const MultSelectField = (props: any) => {
  const { fieldWrapProps, formItemProps: allFormItemProps } =
    pickFieldProps(props);
  const { selectType = "checkbox", ...formItemProps } = allFormItemProps;

  return (
    <FieldWrap {...fieldWrapProps}>
      {selectType === "checkbox" ? (
        <ProFormCheckbox.Group
          {...formItemProps}
          fieldProps={{
            style: {
              width: "100%",
            },
          }}
        />
      ) : (
        <ProFormSelect
          {...formItemProps}
          fieldProps={{
            mode: "multiple",
            style: {
              width: "100%",
            },
          }}
        />
      )}
    </FieldWrap>
  );
};

MultSelectField.craft = {
  ...multSelectFieldFormElementConfig,
  custom: {
    group: multSelectFieldFormElementConfig.group,
    designerBtnElement: multSelectFieldFormElementConfig.designerBtnElement,
  },

  related: {
    settings: MultSelectSettings,
  },
};
