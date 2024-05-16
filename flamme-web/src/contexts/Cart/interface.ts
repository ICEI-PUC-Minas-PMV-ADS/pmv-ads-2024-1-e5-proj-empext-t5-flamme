import { IProduct } from "../interface";

export interface ICartContext {
  cart: Array<IProduct>;
  addToCart: (item: IProduct) => void;
}
