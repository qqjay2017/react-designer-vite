import { ProFormText, ProFormTextArea } from "@ant-design/pro-components";

import { FieldWrap } from "../Field/FieldWrap";
import { pickFieldProps } from "../Field/pickFieldProps";
import { textFieldFormElementConfig } from "../TextField";
import { TextSettings } from "../TextField/TextSettings";

export const TextAreaField = (props: any) => {
  const { fieldWrapProps, formItemProps } = pickFieldProps(props);
  return (
    <FieldWrap {...fieldWrapProps}>
      <ProFormTextArea {...formItemProps} />
    </FieldWrap>
  );
};

TextAreaField.craft = {
  ...textFieldFormElementConfig,
  custom: {
    ...textFieldFormElementConfig,
  },
  related: {
    settings: TextSettings,
  },
};
