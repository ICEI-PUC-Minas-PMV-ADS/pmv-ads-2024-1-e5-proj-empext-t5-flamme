import { ITextList } from "../../utils/interfaces";

export const BulletPointList = ({ items, classes }: ITextList) => {
  const textArray = Array.isArray(items) ? items : [items];

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
