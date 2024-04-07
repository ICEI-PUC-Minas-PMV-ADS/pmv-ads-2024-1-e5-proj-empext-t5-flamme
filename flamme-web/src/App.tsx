import { BrowserRouter } from "react-router-dom";
import Routes from "./router/app.routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
