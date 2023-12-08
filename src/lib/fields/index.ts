import React from "react";
import { ElementsType, FormElement } from "./Field/interface";
import { TextField, textFieldFormElementConfig } from "./TextField";
import { ProFormContainerConfig } from "../components/Container/ProFormContainerConfig";
import { ProFormContainer } from "../components/Container";

type FormElementsType = {
  [key in ElementsType]: React.ElementType;
};

export const FormElements: FormElementsType = {
  TextField: TextField,
  ProFormContainer: ProFormContainer,
};

type FormElementConfigMapType = {
  [key in ElementsType]: FormElement;
};

export const FormElementConfigMap: FormElementConfigMapType = {
  TextField: textFieldFormElementConfig,
  ProFormContainer: ProFormContainerConfig,
};
