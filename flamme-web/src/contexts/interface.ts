export interface IProvider {
  children: React.ReactNode;
}

export interface IStoreContext {
  products: Array<IProduct>;
  product: IProduct;
  setProduct: any;
  getProducts: any;
  getProduct: any;
  createProduct: any;
  updateProduct: any;
  deleteProduct: any;
}

export interface IProduct {
  id?: number;
  name: string;
  description: string;
  aroma: Array<string>;
  model: string;
  price: number;
  options?: Array<{
    min: number;
    max?: number;
    price: number;
  }>;
  extras: Array<{
    name: string;
    price: number;
  }>;
  tapes?: Array<string>;
  quantity: number;
}
