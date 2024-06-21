import { IData } from "../utils/interfaces";

export interface IProvider {
  children: React.ReactNode;
}

export interface IStoreContext {
  id: number;
  setId: any;
  products: Array<IProduct>;
  product: IProduct;
  user: IData;
  setUser: any;
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
  options?: Array<IOptions>;
  extras: Array<IExtra>;
  tapes?: Array<string>;
  quantity: number;
}

export interface IExtra {
  name: string;
  price: number;
}

export interface IOptions {
  min: number;
  max?: number;
  price: number;
}
