import { BrowserRouter } from "react-router-dom";
import Routes from "./router/app.routes";
import { StoreProvider } from "./contexts";
import { CartStoreProvider } from "./contexts/Cart";

function App() {
  return (
    <>
      <CartStoreProvider>
        <StoreProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </StoreProvider>
      </CartStoreProvider>
    </>
  );
}

export default App;
