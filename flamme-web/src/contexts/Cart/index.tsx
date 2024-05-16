import { createContext, useContext, useMemo, useState } from "react";
import { ICartContext } from "./interface";
import { IProduct, IProvider } from "../interface";

const CartStoreContext = createContext<ICartContext>({} as ICartContext);

export const CartStoreProvider: React.FC<IProvider> = ({ children }) => {
  const [cart, setCart] = useState<Array<IProduct>>([] as Array<IProduct>);

  function addToCart(item: IProduct) {
    setCart((prev: any) => [...prev, item]);
  }

  const value = useMemo(() => ({ cart, addToCart }), [cart, addToCart]);

  return (
    <CartStoreContext.Provider value={value}>{children}</CartStoreContext.Provider>
  );
};

export default CartStoreContext;

export const useCartStoreContext = () => useContext(CartStoreContext);
