import { TextSettings } from "../TextField/TextSettings";

import { useNode } from "@craftjs/core";

export const SingleSelectSettings = () => {
  const {
    actions: { setProp },
    radioType = "default",
  } = useNode((node) => ({
    radioType: node.data.props.radioType,
  }));

  return (
    <TextSettings
      showDictConfigSetting
      // InitialValueConfig={InitialValueConfig}
    />
  );
};
