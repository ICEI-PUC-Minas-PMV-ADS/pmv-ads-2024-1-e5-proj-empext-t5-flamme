export interface IProvider {
  children: React.ReactNode;
}

export interface IStoreContext {
  products: any;
  product: any;
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
  phone: string;
  aroma: Array<string>;
  model: string;
  price: number;
  quantity: number;
}
