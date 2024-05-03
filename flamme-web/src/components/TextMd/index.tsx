import { IText } from "../../utils/interfaces";

export const TextMd = ({ text, classes }: IText) => {
  return <p className={`text-md font-semibold ${classes}`}>{text}</p>;
};
