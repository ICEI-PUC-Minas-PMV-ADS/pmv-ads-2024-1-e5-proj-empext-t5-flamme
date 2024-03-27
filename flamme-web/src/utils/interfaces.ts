export interface IText {
  text: string;
  classes?: string;
}

export interface IButton {
  label: string;
  onclick: () => {} | void;
  classes?: string;
}
