import { formatTypeEnum } from ".";

export const getDatePickerCommonProps = ({ formatType = "3" }) => {
  return {
    showHour: formatType == "1",
    showToday: formatType == "3",
    showTime: formatType == "4" || formatType == "5",
    showNow: formatType == "4" || formatType == "5",
    showMinute: true,
    showSecond: true,
    style: {
      width: "100%",
    },
    format: formatTypeEnum[formatType],
  };
};
