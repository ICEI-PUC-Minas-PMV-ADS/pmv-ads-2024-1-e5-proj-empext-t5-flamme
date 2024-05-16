import { Routes as Switch, Route } from "react-router-dom";
import {
 Login,
 Cart,
 AddProduct,
 Catalog,
 CheckoutBudget,
 Profile,
 ViewProduct,
 ProductClient,
 AddCartClient,
 BuyClient,
 RegisterInformation,
 HomeBudgetAdm,
 HomeClient
} from "../screens";
import Forgotpassword from "../screens/Forgotpassword";
import Forgotemail from "../screens/Forgopasswordtemail";

export default function Routes() {
  
  return (
    <Switch>
      <>
        <Route path="/home-loja" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adicionar-produto" element={<AddProduct />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutBudget />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/visualizar-produto" element={<ViewProduct />} />
        <Route path="/produto-cliente" element={<ProductClient />} />
        <Route path="/carrinho-cliente" element={<AddCartClient />} />
        <Route path="/comprar-cliente" element={<BuyClient />} />
        <Route path="/informações-cadastro" element={<RegisterInformation />} />
        <Route path="/home-orçamentos" element={<HomeBudgetAdm />} />
        <Route path="/" element={<HomeClient />} />
        <Route path="/Esqueci-a-senha" element={<Forgotpassword />} />
        <Route path="/email-de-recuperacao" element={<Forgotemail />} />

      </>
    </Switch>
  );
}
