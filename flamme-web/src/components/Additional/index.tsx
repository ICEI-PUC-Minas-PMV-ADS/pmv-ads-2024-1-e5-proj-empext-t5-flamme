import { IAroma } from "../../utils/interfaces";
import { transformPricePTBR } from "../../utils/scripts";
import { Text } from "../Text";

export const Additional = ({ value, price }: IAroma) => {
  return (
    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        className="w-3 h-3 bg-primary border-primary rounded focus:ring-primary ring-offset-primary focus:ring-2 accent-primary"
        value={value}
        title={value}
      />
      <div>
        <Text text={value} />
        <p className="text-sm font-semibold text-labels">R${transformPricePTBR(price)}<span className="font-normal">/uni</span></p>
      </div>
    </div>
  );
};
