import { IText } from "../../utils/interfaces";

export const SectionTitle = ({ text, classes }: IText) => {
  return <h2 className={`text-base font-semibold ${classes}`}>{text}</h2>;
};
