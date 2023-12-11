export type FormatTypeKey = "1" | "2" | "3" | "4" | "5";

export const formatTypeEnum: Record<FormatTypeKey, string> = {
  1: "YYYY",
  2: "YYYY-MM",
  3: "YYYY-MM-DD",
  4: "YYYY-MM-DD HH:mm",
  5: "YYYY-MM-DD HH:mm:ss",
};

export const formatTypeOptions = [
  {
    value: "1",
    label: "年",
  },
  {
    value: "2",
    label: "年-月",
  },
  {
    value: "3",
    label: "年-月-日",
  },
  {
    value: "4",
    label: "年-月-日 时:分",
  },
  {
    value: "5",
    label: "年-月-日 时:分:秒",
  },
];
