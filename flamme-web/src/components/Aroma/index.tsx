import { Text } from "../Text";

interface IAroma {
  data: Array<string>;
}

export const Aroma = ({ data }: IAroma) => {
  return data.length > 0 ? (
    <div className="flex gap-2 item-center flex-wrap">
      {data.map((item: any) => (
        <input
          title={item}
          value={item}
          type="button"
          className="border border-primary rounded py-2 px-3 text-sm text-center"
        />
      ))}
    </div>
  ) : (
    <Text text="Nenhum aroma disponível para essa opção." />
  );
};
