interface IText {
  text: string;
  classes?: string;
}

interface IButton {
  label: string;
  onclick?: () => {} | void;
  classes?: string;
  type?: "button" | "submit" | "reset";
}

interface IAroma {
  value: string;
  price: number;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface IData {
  email: string;
  password: string;
}

export type { IText, IButton, IAroma, IUser, IData };
