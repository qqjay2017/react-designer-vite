import { DesignerClient } from "./lib";

function App() {
  return (
    <DesignerClient
      busHandles={{
        getDictTypes: window.CoreServiceApi.dictTypes,
        dictQueryCode: window.CoreServiceApi.dictQueryCode,
      }}
    />
  );
}

export default App;
