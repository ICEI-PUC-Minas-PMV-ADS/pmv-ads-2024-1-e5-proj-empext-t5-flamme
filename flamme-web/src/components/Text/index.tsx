import { IText } from "../../utils/interfaces";

export const Text = ({ text, classes }: IText) => {
  return <p className={`text-sm ${classes}`}>{text}</p>;
};