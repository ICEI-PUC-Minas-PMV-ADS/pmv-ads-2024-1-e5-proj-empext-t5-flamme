import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button/Button";
import { ButtonWhite2 } from "../../components/ButtonWhite2/index.tsx";
import { SectionTitle } from "../../components/SectionTitle";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import Product4 from "../../assets/product-img4.svg";
import Ellipse from "../../components/Ellipse/index.tsx";
import EditButton from "../../components/EditButton/index.tsx";
import DeleteButton from "../../components/DeleteButton/index.tsx";
import AlertButton1 from "../../components/AlertButton1/index.tsx";
import AlertButton2 from "../../components/AlertButton2/index.tsx";
import ButtonNavBarCart from "../../components/ButtonNavBarCart/index.tsx";
import { useCartStoreContext } from "../../contexts/Cart/index.tsx";
import { IProduct } from "../../contexts/interface.ts";
import { transformPricePTBR } from "../../utils/scripts.ts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate()
  const { cart, setCart } = useCartStoreContext();
  const [total, setTotal] = useState<number>(0);
  const [extra, setExtra] = useState<number>(0);

  function click() {
    console.log("teste");
  }

  function deleteItem(item: IProduct) {
    const data = cart.filter((el: IProduct) => el != item);
    setTotal(0);
    setExtra(0);
    setCart(data);
  }

  useEffect(() => {
    let tt = 0;
    let ee = 0;
    for (let i = 0; i < cart.length; i++) {
      tt += cart[i].price;
      ee =
        cart[i].extras && cart[i].extras[0].price
          ? ee + cart[i].extras[0].price * cart[i].quantity
          : 0;
    }
    setTotal(tt + total);
    setExtra(ee + extra);
  }, [cart]);

  return cart ? (
    <>
      <div className="Cart pb-40">
        <div className="flex justify-center items-center mt-4">
          <Title text="Carrinho" />
        </div>

        <GrayBorderTop />

        <div className="ml-7 mt-14">
          <SectionTitle text="Itens adicionados" />
        </div>
        {cart.map((item: IProduct) => (
          <>
            <div className="flex justify-around mx-7 mt-8" key={item.id}>
              <div>
                <img src={Product4} alt="Foto do Produto" />
              </div>

              <div className="ml-2">
                <SectionTitle text={item.name} />

                <div className="mt-2">
                  <SectionTitle text={transformPricePTBR(item.price)} />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-3 ml-7">
              <div className="flex gap-1 items-center">
                <Ellipse />
                <Text text={item.quantity + " unidades"} />
              </div>

              <div className="flex gap-1 items-center mt-1.5">
                <Ellipse />
                <Text text={item.aroma.slice().toString()} />
              </div>

              <div className="flex justify-between">
                <div className="flex gap-1 items-center mt-1.5">
                  <Ellipse />
                  <Text
                    text={
                      item.extras
                        ? item.extras[0].name +
                          " - " +
                          transformPricePTBR(item.extras[0].price)
                        : ""
                    }
                  />
                </div>

                <div className="flex gap-6 mr-7">
                  <EditButton />
                  <button onClick={() => deleteItem(item)}>
                    <DeleteButton />
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
        <div className="flex gap-2 ">
          <div className="ml-7 mt-4">
            <AlertButton1 />
          </div>

          <div className="mt-4">
            <Text text="O prazo de confecção é de 1 a 7 dias úteis." />
          </div>
        </div>

        <div className="flex flex-col rounded-lg w-80 bg-white border border-brownborder mt-6 mx-auto">
          <button className="flex items-center gap-3 pt-3.5 pl-4 ">
            <AlertButton2 />
            <SectionTitle text="Sobre as artes!" />
          </button>

          <div className="pb-3.5 pl-4 w-72 mt-3">
            <Text text="Lembramos que para a definição das artes, entraremos em contato com você via WhatsApp" />
          </div>
        </div>

        <div className="ml-7 mt-20">
          <SectionTitle text="Resumo dos valores" />
        </div>

        <div className="flex justify-between mt-2">
          <div className="ml-7">
            <Text text="Produto" />
          </div>

          <div className="mr-7">
            <Text text={transformPricePTBR(total)} />
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <div className="ml-7">
            <Text text="Acréscimo" />
          </div>

          <div className="mr-7">
            <Text text={transformPricePTBR(extra)} />
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <div className="ml-7">
            <SectionTitle text="Total" />
          </div>

          <div className="mr-7">
            <SectionTitle text={transformPricePTBR(total + extra)} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <Button label="Finalizar compra" onclick={click} />

          <div className="mt-4">
            <ButtonWhite2 label="Continuar comprando" onclick={() => navigate("/")} />
          </div>
        </div>

        <ButtonNavBarCart />
      </div>
    </>
  ) : (
    <div className="min-h-max flex flex-col justify-center items-center">
      <p>Carrinho vazio!</p>
    </div>
  );
}

export default Cart;
