import { Text } from "../Text";

interface IAroma {
  data: Array<string>;
  newData: (item: string) => void;
  aroma: Array<string>;
}

export const Aroma = ({ data, newData, aroma }: IAroma) => {
  return data.length > 0 ? (
    <div className="flex gap-2 item-center flex-wrap">
      {data.map((item: any) => (
        <input
          title={item}
          value={item}
          type="button"
          className={`border border-primary rounded py-2 px-3 text-sm text-center ${
            aroma.find((el: string) => el === item)
              ? "bg-primary text-white"
              : ""
          }`}
          onClick={() => newData(item)}
        />
      ))}
    </div>
  ) : (
    <Text text="Nenhum aroma disponível para essa opção." />
  );
};
