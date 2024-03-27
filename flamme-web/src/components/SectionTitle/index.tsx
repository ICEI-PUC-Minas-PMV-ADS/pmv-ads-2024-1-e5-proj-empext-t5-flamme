import { IText } from "../../utils/interfaces";

export const SectionTitle = ({ text, classes }: IText) => {
  return <h2 className={`text-base ${classes}`}>{text}</h2>;
};
