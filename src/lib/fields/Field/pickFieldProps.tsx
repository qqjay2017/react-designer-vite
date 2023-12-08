import React from "react";

export const pickFieldProps = (props: any = {}) => {
  const { colSpan = 12, ...restPorps } = props;
  return {
    fieldWrapProps: {
      colSpan,
    },
    formItemProps: {
      ...restPorps,
    },
  };
};
