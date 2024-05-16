import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IProduct, IProvider, IStoreContext } from "./interface";
import { candlesController } from "../services/request/candles";

const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider: React.FC<IProvider> = ({ children }) => {
  const [products, setProducts] = useState<Array<IProduct>>(
    [] as Array<IProduct>
  );
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const {
    get: getCandles,
    getForId: getCandleId,
    post: postCandle,
    patch: patchCandle,
    del: deleteCandle,
  } = candlesController();

  const getProducts = async () => {
    const response = await getCandles();
    setProducts(response);
  };

  const getProduct = async (id: number) => {
    const response = await getCandleId(id);
    setProduct(response);
  };

  const createProduct = async (data: IProduct) => {
    const response = await postCandle(data);
    if (!response) return;
    window.location.href = "/";
  };

  const updateProduct = async (data: IProduct) => {
    const response = await patchCandle(data);
    if (!response) return;
    window.location.href = "/";
  };

  const deleteProduct = async (id: number) => {
    const response = await deleteCandle(id);
    if (!response) return;
    window.location.reload();
  };

  useEffect(() => {
    if (products.length === 0) getProducts();
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
