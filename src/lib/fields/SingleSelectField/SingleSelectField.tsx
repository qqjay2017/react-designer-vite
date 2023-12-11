import { ProFormSelect } from "@ant-design/pro-components";

import { SingleSelectSettings } from "./SingleSelectSettings";

import { FieldWrap } from "../Field/FieldWrap";
import { pickFieldProps } from "../Field/pickFieldProps";

import { singleSelectFieldFormElementConfig } from "./singleSelectFieldFormElementConfig";

export const SingleSelectField = (props: any) => {
  const { fieldWrapProps, formItemProps: allFormItemProps } =
    pickFieldProps(props);
  const { ...formItemProps } = allFormItemProps;

  return (
    <FieldWrap {...fieldWrapProps}>
      <ProFormSelect
        {...formItemProps}
        fieldProps={{
          style: {
            width: "100%",
          },
        }}
      />
    </FieldWrap>
  );
};

SingleSelectField.craft = {
  ...singleSelectFieldFormElementConfig,
  custom: {
    group: singleSelectFieldFormElementConfig.group,
    designerBtnElement: singleSelectFieldFormElementConfig.designerBtnElement,
  },

  related: {
    settings: SingleSelectSettings,
  },
};
