import { Title } from "../../components/Title/index.tsx";
import { Text } from "../../components/Text/index.tsx";
import { SectionTitle } from "../../components/SectionTitle/index.tsx";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import Product from "../../assets/product-img2.svg";
import GrayBorder from "../../components/GrayBorder/index.tsx";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct";
import { candlesController } from "../../services/request/candles.ts";
import { useEffect, useState } from "react";
import { IProduct } from "../../contexts/interface.ts";
import { transformPricePTBR } from "../../utils/scripts.ts";

export interface IOrder {
  client_name: string;
  userId: number;
  candles: Array<IProduct>;
}

function HomeBudgetAdm() {
  const { getOrders } = candlesController();
  const [orders, setOrders] = useState<Array<IOrder>>([] as Array<IOrder>);

  async function getOrder() {
    const data = await getOrders();
    if (data) {
      return setOrders(data);
    }

    setOrders([]);
  }

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <>
      <div className="HomeBudgetAdm">
        <div className="flex justify-center items-center mt-5 mb-4">
          <Title text="Orçamentos" />
        </div>
        <GrayBorderTop />

        {/*Card 1 - Orçamentos*/}
        {orders.length > 0 ? (
          orders.map((item: any) => (
            <>
              <div className="flex justify-around items-center mx-5 mt-14">
                <div>
                  <img src={Product} alt="Foto do Produto" className="w-32" />
                </div>

                <div className="ml-4">
                  <SectionTitle text={"Pedido #" + item.id} />

                  <div className="mt-2 font-medium">
                    <Text text={item.name} />
                    {item.candles.map((el: IProduct) => (
                      <div className="max-h-24 overflow-y-auto">
                        <Text text={el.name} />
                        <Text text={`Quantidade: ${el.quantity}`} />
                        <Text
                          text={`Preço unitário: ${transformPricePTBR(
                            el.price / el.quantity
                          )}`}
                        />
                        <Text text={`Preço: ${transformPricePTBR(el.price)}`} />
                      </div>
                    ))}
                    <Text text="Envio em até 7 dias úteis" />
                  </div>
                </div>
              </div>
              <GrayBorder />
            </>
          ))
        ) : (
          <p className="text-center">Nenhum orçamento cadastrado!</p>
        )}

        {/*EDITAR BARRA DE NAVEGAÇÃO*/}
        <ButtonNavBarAddProduct />
      </div>
    </>
  );
}

export default HomeBudgetAdm;
