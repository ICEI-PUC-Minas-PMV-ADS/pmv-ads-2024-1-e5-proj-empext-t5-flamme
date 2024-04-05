import { Title } from "../../components/Title";
import { Additional } from "../../components/Additional";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button/Button";
import { ButtonWhite } from "../../components/ButtonWhite/ButtonWhite";
import { SectionTitle } from "../../components/SectionTitle";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import Product4 from "../../assets/product-img4.svg";
import Ellipse from "../../components/Ellipse/index.tsx";
import EditButton from "../../components/EditButton/index.tsx";
import DeleteButton from "../../components/DeleteButton/index.tsx";
import AlertButton1 from "../../components/AlertButton1/index.tsx";
import AlertButton2 from "../../components/AlertButton2/index.tsx";

function Cart() {
  function click() {
    console.log("teste");
  }
  return (
    <>
      <div className="Cart">
        <div className="flex justify-center items-center mt-4">
          <Title text="Carrinho" />
        </div>

        <GrayBorderTop />

        <div className="ml-7 mt-14">
          <SectionTitle text="Itens adicionados" />
        </div>

        <div className="flex justify-around mx-7 mt-8">
          <div>
            <img src={Product4} alt="Foto do Produto" />
          </div>

          <div className="ml-2">
            <SectionTitle text="Potinho de vidro tampa de tecido - 40g" />

            <div className="mt-2">
              <SectionTitle text="R$253,50" />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-3 ml-7">
          <div className="flex gap-1 items-center">
            <Ellipse />
            <Text text="23 unidades" />
          </div>

          <div className="flex gap-1 items-center mt-1.5">
            <Ellipse />
            <Text text="Aroma Lavanda" />
          </div>

          <div className="flex justify-between">
            <div className="flex gap-1 items-center mt-1.5">
              <Ellipse />
              <Text text="Saquinho de organza - R$ 11,50" />
            </div>

            <div className="flex gap-6 mr-7">
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        </div>

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
            <Text text="R$253,50" />
          </div>
        </div>

        <div className="flex justify-between mt-2">

          <div className="ml-7">
            <Text text="Acréscimo" />
          </div>

          <div className="mr-7">
            <Text text="R$11,50" />
          </div>
        </div>

        <div className="flex justify-between mt-2">

          <div className="ml-7">
            <SectionTitle text="Total" />
          </div>

          <div className="mr-7">
            <SectionTitle text="R$264,50" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <ButtonWhite label="Finalizar compra" onclick={click} />

          <div className="mt-4">
            <Button label="Continuar comprando" onclick={click} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;