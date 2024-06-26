import AlertButton1 from "../../components/AlertButton1";
import ButtonNavBarCart from "../../components/ButtonNavBarCart";
import Ellipse from "../../components/Ellipse";
import GrayBorderTop from "../../components/GrayBorderTop";
import { SectionTitle } from "../../components/SectionTitle";
import { Title } from "../../components/Title";
import { IProduct } from "../../contexts/interface";
import { transformPricePTBR } from "../../utils/scripts";
import { Text } from "../../components/Text";
import Product4 from "../../assets/product-img4.svg";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { candlesController } from "../../services/request/candles";

interface IProps {
  cart: Array<IProduct>;
  total: string;
  aditional: string;
  price: string;
}

export const CheckoutBudget = ({ cart, total, aditional, price }: IProps) => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cel, setCel] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [num, setNum] = useState("");
  const [comp, setComp] = useState("");
  const [dist, setDist] = useState("");
  const { orders } = candlesController();

  const prods = cart.map(
    (el: IProduct) =>
      `*produto*: ${el.name}, *preço*: ${el.price / el.quantity}, *fitas*: ${
        el.tapes
      }, *acrecimos*: ${(el.extras[0].name, el.extras[0].price)}, *total*: ${
        el.price
      }
        `
  );

  const msg = `Olá, me chamo ${name} e fiz um orçamento na Flamme Web App.
    Segue meus dados: 
    CPF - ${cpf}, Tel - ${cel}, Email - ${email}.
    Endereço - ${street} ${num}, ${dist} - ${city} / ${cep}
    Complemento - ${comp}

    Produtos selecionados: ${prods}
  `;

  async function orderC() {
    const data = {
      client_name: "Marina Penido",
      userId: 1,
      candles: cart,
    };

    const response = await orders(data);
    return response !== false
      ? (window.location.href = `https://wa.me/5531987136623?text=${msg}`)
      : "";
  }

  return (
    <>
      <div className="Cart pb-40 my-10 w-5/6 mx-auto w-max-full overflow-hidden">
        <div className="flex justify-center items-center mt-4 py-4">
          <Title text="Finalizar compra" />
        </div>

        <GrayBorderTop />

        <div className=" mt-7">
          <SectionTitle text="Itens adicionados" />
        </div>
        <div className="max-h-80 overflow-y-scroll">
          {cart.map((item: IProduct) => (
            <>
              <div className="flex justify-around my-4" key={item.id}>
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

              <div className="flex flex-col mt-3 ">
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
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="flex gap-2 ">
          <div className=" mt-4">
            <AlertButton1 />
          </div>

          <div className="mt-4">
            <Text text="O prazo de confecção é de 1 a 7 dias úteis." />
          </div>
        </div>

        <div className=" mt-10">
          <SectionTitle text="Resumo dos valores" />
        </div>

        <div className="flex justify-between mt-2">
          <div>
            <Text text="Produto" />
          </div>

          <div>
            <Text text={price} />
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <div>
            <Text text="Acréscimo" />
          </div>

          <div>
            <Text text={aditional} />
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <div>
            <SectionTitle text="Total" />
          </div>

          <div>
            <SectionTitle text={total} />
          </div>
        </div>

        <hr className="my-4 bg-primary" />
        <div>
          <SectionTitle text="Informações pessoais" />
          <Text text="Para quem vamos entregar o pedido?" classes="mt-2" />
        </div>

        <div className="flex flex-col gap-2 my-5">
          <label className="font-bold text-base" htmlFor="nome">
            Nome
          </label>
          <input
            className="p-2 border-2 rounded-md"
            onChange={(ev) => setName(ev.target.value)}
            type="text"
            placeholder="Digite seu Nome"
            value={name}
          />
          <label className="font-bold" htmlFor="cpf">
            CPF
          </label>
          <input
            className="p-2 border-2 rounded-md"
            onChange={(ev) => setCpf(ev.target.value)}
            type="text"
            placeholder="000.000.000-00"
            value={cpf}
          />
          <label className="font-bold" htmlFor="cel">
            Celular
          </label>
          <input
            className="p-2 border-2 rounded-md"
            onChange={(ev) => setCel(ev.target.value)}
            type="text"
            placeholder="Digite seu número de celular"
            value={cel}
          />
          <label className="font-bold" htmlFor="email">
            E-mail
          </label>
          <input
            className="p-2 border-2 rounded-md"
            onChange={(ev) => setEmail(ev.target.value)}
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
          />
        </div>
        <div>
          <SectionTitle text="Informações de entrega" />
        </div>
        <div className="flex flex-col gap-2 my-5">
          <div className="flex justify-between">
            <div className="flex flex-col ">
              <label className="font-bold text-base" htmlFor="cep">
                CEP
              </label>
              <input
                className="p-2 border-2 rounded-md w-44"
                onChange={(ev) => setCep(ev.target.value)}
                type="text"
                placeholder="00000-000"
                value={cep}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="city">
                Cidade
              </label>
              <input
                className="p-2 border-2 rounded-md w-44"
                onChange={(ev) => setCity(ev.target.value)}
                type="text"
                placeholder="Sete Lagoas"
                value={city}
              />
            </div>
          </div>
          <label className="font-bold" htmlFor="address">
            Endereço
          </label>
          <input
            className="p-2 border-2 rounded-md"
            onChange={(ev) => setStreet(ev.target.value)}
            type="text"
            placeholder="Digite seu endereço"
            value={street}
          />
          <div className="flex justify-between">
            <div className="flex flex-col ">
              <label className="font-bold text-base" htmlFor="cep">
                Número
              </label>
              <input
                className="p-2 border-2 rounded-md w-16"
                onChange={(ev) => setNum(ev.target.value)}
                type="text"
                placeholder="00"
                value={num}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="city">
                Complemento
              </label>
              <input
                className="p-2 border-2 rounded-md w-72"
                onChange={(ev) => setComp(ev.target.value)}
                type="text"
                placeholder="Próximo ao mercado geral"
                value={comp}
              />
            </div>
          </div>
          <label className="font-bold" htmlFor="street">
            Bairro
          </label>
          <input
            className="p-2 border-2 rounded-md"
            onChange={(ev) => setDist(ev.target.value)}
            type="text"
            placeholder="Jardim da Serra"
            value={dist}
          />
        </div>

        <Button
          label="Enviar orçamento"
          classes="w-full my-5 py-4"
          onclick={orderC}
        />

        <ButtonNavBarCart />
      </div>
    </>
  );
};
