import { IProduct } from "../interface";

export interface ICartContext {
  cart: Array<IProduct>;
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  addToCart: (item: IProduct) => void;
}
