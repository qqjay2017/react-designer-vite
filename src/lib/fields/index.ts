import React from "react";
import { ElementsType, FormElement } from "./Field/interface";
import { TextField, textFieldFormElementConfig } from "./TextField";
import { ProFormContainerConfig } from "../components/Container/ProFormContainerConfig";
import { ProFormContainer, TableContainer } from "../components/Container";
import {
  TableCommonColumn,
  tableCommonColumnConfig,
} from "./TableCommonColumn";
import { TableContainerConfig } from "../components/Container/TableContainerConfig";
import { TextAreaField, textAreaFieldFormElementConfig } from "./TextAreaField";
import { numberFieldFormElementConfig } from "./NumberField/numberFieldFormElementConfig";
import { NumberField } from "./NumberField/NumberField";

type FormElementsType = {
  [key in ElementsType]: React.ElementType;
};

export const FormElements: FormElementsType = {
  TextField: TextField,
  ProFormContainer: ProFormContainer,
  TableCommonColumn: TableCommonColumn,
  TableContainer: TableContainer,
  TextAreaField,
  NumberField,
};

type FormElementConfigMapType = {
  [key in ElementsType]: FormElement;
};

export const FormElementConfigMap: FormElementConfigMapType = {
  TextField: textFieldFormElementConfig,
  ProFormContainer: ProFormContainerConfig,
  TableCommonColumn: tableCommonColumnConfig,
  TableContainer: TableContainerConfig,
  TextAreaField: textAreaFieldFormElementConfig,
  NumberField: numberFieldFormElementConfig,
};
