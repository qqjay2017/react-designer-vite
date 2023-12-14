import { TemplateType } from "../components/Editor/interface";
import { RelationDataDefaultJson } from "./RelationDataDefaultJson";

export const defaultJson: Record<TemplateType, typeof RelationDataDefaultJson> =
  {
    RelationData: RelationDataDefaultJson,
  };
