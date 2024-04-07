import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IProduct, IProvider, IStoreContext } from "./interface";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider: React.FC<IProvider> = ({ children }) => {
  const [products, setProducts] = useState<any>();
  const [product, setProduct] = useState<any>();
  const getProducts = async () => {
    try {
      const response = await api.get("users/candles");

      if (response.status === 200) {
        return setProducts(response.data);
      }
    } catch (error) {
      console.error(error);
      return setProducts([]);
    }
  };
  const getProduct = async (id: number) => {
    try {
      const response = await api.get(`users/candles/${id}`);
      if (response.status === 200) {
        return setProduct(response.data);
      }
    } catch (error) {
      console.error(error);
      return setProduct([]);
    }
  };
  const createProduct = async (data: IProduct) => {
    try {
      const response = await api.post(`users/candles/1`, data);
      if (response.status === 200) {
        setProduct(response.data);
        return (window.location.href = "/");
      }
    } catch (error) {
      console.error(error);
      alert("Não foi possível alterar produto!");
      return setProduct(product);
    }
  };
  const updateProduct = async (data: IProduct) => {
    try {
      const response = await api.patch("users/candles/update", data);
      if (response.status === 200) {
        return setProduct(response.data);
      }
    } catch (error) {
      console.error(error);
      alert("Não foi possível alterar produto!");
      return setProduct(product);
    }
  };
  const deleteProduct = async (id: number) => {
    try {
      const response = await api.delete(`users/candles/${id}`);
      if (response.status === 200) {
        return (window.location.href = "/");
      }
    } catch (error) {
      console.error(error);
      return alert("Erro ao tentar excluir produto. Tente novamente!");
    }
  };

  useEffect(() => {
    if (!products) getProducts();
  }, [products]);

  const value = useMemo(
    () => ({
      products,
      product,
      setProduct,
      getProducts,
      getProduct,
      createProduct,
      updateProduct,
      deleteProduct,
    }),
    [
      products,
      product,
      setProduct,
      getProducts,
      getProduct,
      createProduct,
      updateProduct,
      deleteProduct,
    ]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreContext;

export const useStoreContext = () => useContext(StoreContext);
