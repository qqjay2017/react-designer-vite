import { ElementsType, FormElement, fieldDefaultPorps } from "../Field";
import { MdOutlineFileUpload } from "react-icons/md";

export const fileUploadFieldType: ElementsType = "FileUploadField";
export const fileUploadDefaultPorps = {
  ...fieldDefaultPorps,
  label: "附件上传",
  initialValue: null,
  maxSizeMb: 20,
  multipleFlag: true,
  needDownload: false,
  bucket: "scm",
  objectPathPre: "logistic1010",
  multiple: 5,
  acceptFlag: true,
  acceptList: [
    {
      id: "1",
      name: "jpg",
    },
    {
      id: "2",
      name: "png",
    },
    {
      id: "3",
      name: "doc",
    },
    {
      id: "4",
      name: "docx",
    },
    {
      id: "5",
      name: "pdf",
    },
    {
      id: "6",
      name: "xls",
    },
    {
      id: "7",
      name: "xlsx",
    },

    {
      id: "8",
      name: "rar",
    },
    {
      id: "9",
      name: "zip",
    },
  ],
};

export const fileUploadFieldFormElementConfig: FormElement = {
  displayName: fileUploadFieldType,
  group: "formField",
  construct: (id: string) => ({
    id,
    type: fileUploadFieldType,
    extraAttributes: {
      ...fileUploadDefaultPorps,
    },
  }),
  props: {
    ...fileUploadDefaultPorps,
  },
  designerBtnElement: {
    icon: MdOutlineFileUpload,
    label: "附件上传",
    description:
      "上传文件组件，可以自定义上传说明，指导填写者上传文件、图片等，可添加多个附件。",
  },
};
