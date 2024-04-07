import { BrowserRouter } from "react-router-dom";
import Routes from "./router/app.routes";
import { StoreProvider } from "./contexts";

function App() {
  return (
    <>
      <StoreProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </StoreProvider>
    </>
  );
}

export default App;
