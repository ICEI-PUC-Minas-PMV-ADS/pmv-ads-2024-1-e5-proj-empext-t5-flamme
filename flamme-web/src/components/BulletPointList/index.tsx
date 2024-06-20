import { IText } from "../../utils/interfaces";

export const BulletPointList = ({ text, classes }: IText) => {
  const textArray = Array.isArray(text) ? text : [text];

  return (
    <ul className={`${classes}`}>
      {textArray.map((item, index) => (
        <li className={`mb-2 mt-2`} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};
