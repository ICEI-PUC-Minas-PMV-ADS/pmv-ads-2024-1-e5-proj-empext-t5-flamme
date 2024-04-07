import { Routes as Switch, Route } from "react-router-dom";
import {
 Login,
 Cart,
 AddProduct,
 Catalog,
 CheckoutBudget
} from "../screens";

export default function Routes() {
  const auth = window.localStorage.getItem("token");
  return (
    <Switch>
      <>
        <Route path="/" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adicionar-produto" element={<AddProduct />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutBudget />} />
      </>
    </Switch>
  );
}
