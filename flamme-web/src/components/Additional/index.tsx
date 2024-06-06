import { transformPricePTBR } from "../../utils/scripts";
import { Text } from "../Text";

interface IProps {
  value: string;
  price: number;
  onclick: (item: any) => void;
}

export const Additional = ({ value, price, onclick }: IProps) => {
  return (
    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        className="w-3 h-3 bg-primary border-primary rounded focus:ring-primary ring-offset-primary focus:ring-2 accent-primary"
        value={price}
        title={value}
        onChange={(ev) => onclick({price: +ev.target.value, value: value})}
      />
      <div>
        <Text text={value} />
        <p className="text-sm font-semibold text-labels">R${transformPricePTBR(price)}<span className="font-normal">/uni</span></p>
      </div>
    </div>
  );
};
