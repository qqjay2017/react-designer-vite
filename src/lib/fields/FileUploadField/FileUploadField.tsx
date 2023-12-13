import { FieldWrap, pickFieldProps } from "../Field";
import { CsmFileUpload } from "@core/rc-components";
import { fileUploadFieldFormElementConfig } from "./fileUploadFieldFormElementConfig";
import { FileUploadSelectSettings } from "./FileUploadSelectSettings";
import { ProFormItem } from "@ant-design/pro-components";

export const FileUploadField = (props: any) => {
  const { fieldWrapProps, formItemProps: allFormItemProps } =
    pickFieldProps(props);
  const {
    maxSizeMb = 20,
    multipleFlag,
    multiple,
    acceptFlag,
    acceptList = [],
    needDownload = false,
    bucket = "",
    objectPathPre = "",
    ...formItemProps
  } = allFormItemProps;
  return (
    <FieldWrap {...fieldWrapProps}>
      <ProFormItem {...formItemProps}>
        <CsmFileUpload
          maxSize={maxSizeMb * 1024 * 1024}
          typeText={
            acceptFlag
              ? `支持文件格式 ${acceptList.map((a) => "." + a.name).join(" ")}`
              : "请选择文件"
          }
          accept={acceptList.map((a) => "." + a.name).join(",")}
          multiple={multipleFlag ? multiple : 99}
          apiData={{ bucket, objectPathPre }}
          needDownload={false}
          {...formItemProps}
        />
      </ProFormItem>
    </FieldWrap>
  );
};

FileUploadField.craft = {
  ...fileUploadFieldFormElementConfig,
  custom: {
    group: fileUploadFieldFormElementConfig.group,
    designerBtnElement: fileUploadFieldFormElementConfig.designerBtnElement,
  },
  related: {
    settings: FileUploadSelectSettings,
  },
};
