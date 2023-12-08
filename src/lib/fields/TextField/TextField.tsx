import { ProFormText } from "@ant-design/pro-components";

import { TextSettings } from "./TextSettings";

import { FieldWrap } from "../Field/FieldWrap";
import { pickFieldProps } from "../Field/pickFieldProps";

import { textFieldFormElementConfig } from "./textFieldFormElementConfig";

export const TextField = (props: any) => {
  const { fieldWrapProps, formItemProps } = pickFieldProps(props);
  return (
    <FieldWrap {...fieldWrapProps}>
      <ProFormText {...formItemProps} />
    </FieldWrap>
  );
};

TextField.craft = {
  ...textFieldFormElementConfig,

  related: {
    settings: TextSettings,
  },
};
