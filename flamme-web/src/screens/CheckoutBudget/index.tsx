import { Title } from "../../components/Title/index.tsx";
import { Text } from "../../components/Text/index.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { SectionTitle } from "../../components/SectionTitle/index.tsx";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import Product4 from "../../assets/product-img4.svg";
import Ellipse from "../../components/Ellipse/index.tsx";
import EditButton from "../../components/EditButton/index.tsx";
import DeleteButton from "../../components/DeleteButton/index.tsx";
import AlertButton1 from "../../components/AlertButton1/index.tsx";
import GrayBorder from "../../components/GrayBorder/index.tsx";

function CheckoutBudget() {
  function click() {
    console.log("teste");
  }
  return (
    <>
      <div className="Checkout">
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

        <div className="ml-7 mt-14">
          <SectionTitle text="Informações Pessoais" />
        </div>
        <GrayBorder/>


        <div className="mt-10 ml-7">
          <SectionTitle text="Nome" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe seu nome" />
        </div>
        <div className="mt-4 ml-7">
          <SectionTitle text="CPF" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe o seu CPF" />
        </div>

        <div className="mt-4 ml-7">
          <SectionTitle text="Celular" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe o número do celular com DDD" />
        </div>
        
        <div className="mt-4 ml-7">
          <SectionTitle text="E-mail" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe o e-mail" />
        </div>
        
        <div className="ml-7 mt-14">
          <SectionTitle text="Informações de Entrega" />
        </div>
        <GrayBorder/>


        <div className="mt-4 ml-7">
          <SectionTitle text="CEP" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe o CEP" />
        </div>

        <div className="mt-4 ml-7">
          <SectionTitle text="Endereço" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe o endereço" />
        </div>

        <div className="mt-4 ml-7">
          <SectionTitle text="Número" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe o número da residência" />
        </div>

        <div className="mt-4 ml-7">
          <SectionTitle text="Complemento" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe o complemento da residência" />
        </div>

        <div className="mt-4 ml-7">
          <SectionTitle text="Bairro" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe o bairro" />
        </div>

        <div className="mt-4 ml-7">
          <SectionTitle text="Cidade" />
          <input className="mt-2 w-80 border rounded-md text-xs px-3 h-11" type="text" placeholder="Informe a cidade" />
        </div>


        <div className="mt-8 flex justify-center">
       
        
        </div>
        

        <div className="flex flex-col items-center justify-center mt-10">
          <Button label="Finalizar Orçamento" onclick={click} />

        </div>
      </div>
    </>
  );
}

export default CheckoutBudget;