import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { ButtonWhite } from "../../components/ButtonWhite/ButtonWhite";
import { ButtonWhite2 } from "../../components/ButtonWhite2/index.tsx";
import { SectionTitle } from "../../components/SectionTitle";
import Rectangle from "../../components/Rectangle/index.tsx";
import GrayBorder from "../../components/GrayBorder/index.tsx";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import { Button2 } from "../../components/Button2/index.tsx";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct/index.tsx";
import { useState } from "react";
import { useStoreContext } from "../../contexts/index.tsx";
import { Link } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [aroma, setAroma] = useState<Array<string>>([] as Array<string>);
  const [model, setModel] = useState("ASV55");
  const [price, setPrice] = useState<string>("0");
  const [quantity, setQuantity] = useState(0);
  const [extras, setExtras] = useState<Array<{}>>([]);
  const [options, setOptions] = useState<Array<{}>>([]);
  const [tapes, setTapes] = useState<Array<string>>([] as Array<string>);
  const { createProduct } = useStoreContext();

  const arr = {
    min: 0,
    max: 0,
    price: 0,
  };

  const arr2 = {
    name: "",
    price: 0,
  };

  const click = async () => {
    setModel("ASV55");
    return await createProduct({
      name: name,
      description: description,
      aroma: aroma,
      model: model,
      price: +price,
      extras: extras,
      options: options,
      tapes: tapes,
      quantity: quantity,
    });
  };

  return (
    <>
      <div className="AddProduct">
        <div className="flex justify-center items-center mt-4">
          <Title text="Adicionar Produto" />
        </div>

        <GrayBorderTop />

        <div className="mt-16 ml-7">
          <SectionTitle text="Imagens do produto" />
        </div>

        <Rectangle />

        <div className="mt-10 ml-7">
          <SectionTitle text="Nome do produto" />
          <input
            className="mt-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="Digite o nome do produto"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Descrição" />
          <textarea
            className="mt-2 pt-3 w-80 border rounded-md text-xs px-3"
            placeholder="Digite a descrição do produto"
            rows={4}
            cols={40}
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Unidades a partir de" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="Digite o valor das unidades"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
        </div>

        {/* Tabela de preços */}

        <div className="mt-10 ml-7">
          <Title text="Tabela de preços" />
        </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Opção 1" />
        </div>

        <div className="flex justify-around">
          <div className="mt-3">
            <Text text="Quantidade mínima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: 20"
              value={quantity}
              onChange={(ev) => setQuantity(+ev.target.value)}
            />
          </div>

          <div className="ml-7 mt-3">
            <Text text="Valor p/ unidade" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="R$ 0,00"
              value={price}
              onChange={(ev) => {
                setPrice(ev.target.value);
                setOptions([
                  ...options,
                  { min: quantity, max: 0, price: price },
                ]);
              }}
            />
          </div>
        </div>

        <GrayBorder />

        <div className="ml-7 mt-4">
          <SectionTitle text="Opção 2" />
        </div>

        <div className="flex justify-around">
          <div className=" mt-3">
            <Text text="Quantidade mínima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: 20"
              onBlur={(ev) => (arr.min = +ev.target.value)}
            />
          </div>

          <div className="ml-7 mt-3">
            <Text text="Quantidade máxima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: 40"
              onBlur={(ev) => (arr.max = +ev.target.value)}
            />
          </div>
        </div>

        <div className="ml-7 mt-4">
          <Text text="Valor p/ unidade" />
          <input
            className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="R$ 0,00"
            onBlur={(ev) => {
              arr.price = +ev.target.value;
              setOptions([...options, arr]);
            }}
          />
        </div>

        <div className="flex justify-center items-center mt-10">
          <ButtonWhite2 label="+ Adicionar mais opções" onclick={click} />
        </div>

        {/* Personalização */}

        <div className="ml-7 mt-10">
          <Title text="Personalização" />
        </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Aroma" />
        </div>

        <div className="flex justify-around">
          <div className="mt-3">
            <Text text="Opção 1" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: Lavanda"
              onBlur={(ev) => setAroma([...aroma, ev.target.value])}
            />
          </div>

          <div className="ml-7 mt-3">
            <Text text="Opção 2" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: Lavanda"
              onBlur={(ev) => setAroma([...aroma, ev.target.value])}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <ButtonWhite2 label="+ Adicionar mais aromas" onclick={click} />
        </div>

        {/* Acréscimo */}

        <div className="ml-7 mt-10">
          <SectionTitle text="Acréscimo" />
        </div>

        <div className="ml-7 mt-3">
          <Text text="Nome" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="Ex: Saquinho"
            onBlur={(ev) => (arr2.name = ev.target.value)}
          />
        </div>

        <div className="ml-7 mt-3">
          <Text text="Valor" />
          <input
            className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="R$ 0,00"
            onBlur={(ev) => {
              arr2.price = +ev.target.value;

              setExtras([...extras, arr2]);
            }}
          />
        </div>

        <div className="flex justify-center items-center mt-10">
          <ButtonWhite2 label="+ Adicionar mais acréscimos" onclick={click} />
        </div>

        {/* Tipo de fita */}

        <div className="ml-7 mt-10">
          <SectionTitle text="Tipos de fita" />
        </div>

        <div className="ml-7 mt-3">
          <Text text="Esse produto possui fita?" />
        </div>

        <div className="flex mt-2 text-xs">
          <div className="flex ml-7">
            <input
              placeholder="ex"
              type="radio"
              name="tipo_fita"
              value="nao_possui"
            />
            <label className="ml-2">Não possui</label>
          </div>

          <div className="flex ml-12">
            <input
              placeholder="ex"
              type="radio"
              name="tipo_fita"
              value="possui"
            />
            <label className="ml-2">Possui</label>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="mt-6">
            <Text text="Opção 1" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: Cetim"
              onBlur={(ev) => setTapes([...tapes, ev.target.value])}
            />
          </div>

          <div className="ml-7 mt-6">
            <Text text="Opção 2" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: Junta"
              onBlur={(ev) => setTapes([...tapes, ev.target.value])}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <ButtonWhite2 label="+ Adicionar mais fitas" onclick={() => {}} />
        </div>

        <div className="flex justify-around mt-10">
          <Link to="/home-loja" className="text-black">
            <div className="p-4">
              <ButtonWhite label="Cancelar" onclick={() => {}} />
            </div>
          </Link>

          <Link to="/home-loja" className="text-black">
            <div className="p-4">
              <Button2 label="Salvar" onclick={click} />
            </div>
          </Link>
        </div>

        <ButtonNavBarAddProduct />
      </div>
    </>
  );
}

export default AddProduct;
