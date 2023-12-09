export interface IHeaderAction {
  save?: (json: any) => void;
  load?: (json: any) => void;
  back?: (json: any) => void;
}

export interface IHeaderProps {
  headerActions?: IHeaderAction;
  defaultJson?: any;
  headerName?: string;
}
