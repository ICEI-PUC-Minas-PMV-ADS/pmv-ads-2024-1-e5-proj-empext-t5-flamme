import { IText } from "../../utils/interfaces";

export const Text = ({ text, classes }: IText) => {
  return <p className={`text-xs ${classes}`}>{text}</p>;
};