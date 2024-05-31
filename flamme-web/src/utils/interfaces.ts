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

export type { IText, IButton, IAroma };
