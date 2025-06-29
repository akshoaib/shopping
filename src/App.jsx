import { ConfigProvider } from "antd";
import "./App.css";
import AllRoutes from "./routes";
import themes from "./theme";

function App() {
  return (
    <>
      <ConfigProvider theme={themes}>
        <AllRoutes />
      </ConfigProvider>
    </>
  );
}

export default App;
