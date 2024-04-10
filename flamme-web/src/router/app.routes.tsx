import { Routes as Switch, Route } from "react-router-dom";
import {
 Login,
 Cart,
 AddProduct,
 Catalog,
 CheckoutBudget,
 Profile,
 ViewProduct,
 ProductClient
} from "../screens";

export default function Routes() {
  
  return (
    <Switch>
      <>
        <Route path="/" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adicionar-produto" element={<AddProduct />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutBudget />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/visualizar-produto" element={<ViewProduct />} />
        <Route path="/produto-cliente" element={<ProductClient />} />
      </>
    </Switch>
  );
}
