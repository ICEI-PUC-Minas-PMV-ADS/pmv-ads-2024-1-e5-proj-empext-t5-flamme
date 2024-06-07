import { Title } from "../../components/Title/index.tsx";
import { Text } from "../../components/Text/index.tsx";
import { SectionTitle } from "../../components/SectionTitle/index.tsx";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import Product from "../../assets/product-img2.svg";
import GrayBorder from "../../components/GrayBorder/index.tsx";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct";
import { candlesController } from "../../services/request/candles.ts";
import { useEffect, useState } from "react";

function HomeBudgetAdm() {
  const { getOrders } = candlesController();
  const [orders, setOrders] = useState<Array<any>>([] as Array<any>);

  async function getOrder() {
    const id = localStorage.getItem("id") ?? 0;
    try {
      const data = await getOrders();
      const ord = data.filter((el: any) => el.user === id);
      setOrders(ord);
    } catch (error) {
      setOrders([]);
    }
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
