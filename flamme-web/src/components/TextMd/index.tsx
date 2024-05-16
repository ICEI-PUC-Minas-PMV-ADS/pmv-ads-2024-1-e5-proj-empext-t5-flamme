import { IText } from "../../utils/interfaces";

export const TextMd = ({ text, classes }: IText) => {
  return <p className={`text-base font-semibold ${classes}`}>{text}</p>;
};
