import { DesignerClient } from "./lib";

function App() {
  return (
    <DesignerClient
      templateType="RelationData"
      busHandles={{
        getDictTypes: window.CoreServiceApi.dictTypes,
        dictQueryCode: window.CoreServiceApi.dictQueryCode,
      }}
    />
  );
}

export default App;
