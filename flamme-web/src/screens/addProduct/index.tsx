import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { ButtonWhite } from "../../components/ButtonWhite/ButtonWhite";
import { SectionTitle } from "../../components/SectionTitle";
import GrayBorder from "../../components/GrayBorder/index.tsx";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import { Button2 } from "../../components/Button2/index.tsx";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct/index.tsx";
import { useState } from "react";
import { useStoreContext } from "../../contexts/index.tsx";
import { Link, useNavigate } from "react-router-dom";
import { IExtra, IOptions, IProduct } from "../../contexts/interface.ts";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [aroma, setAroma] = useState<Array<string>>([] as Array<string>);
  const [price, setPrice] = useState<string>("0");
  const [quantity, setQuantity] = useState(0);
  const [extras, setExtras] = useState<Array<IExtra>>({} as Array<IExtra>);
  const [options, setOptions] = useState<Array<IOptions>>(
    {} as Array<IOptions>
  );
  const [tapes, setTapes] = useState<Array<string>>({} as Array<string>);
  const [ft, setFt] = useState<boolean>(false);
  const [errName, setErrName] = useState<boolean>(false);
  const [errDesc, setErrDesc] = useState<boolean>(false);
  const [errPrice, setErrPrice] = useState<boolean>(false);
  const [errQtt, setErrQtt] = useState<boolean>(false);
  const [errAroma, setErrAroma] = useState<boolean>(false);
  const { createProduct } = useStoreContext();
  const navigate = useNavigate();

  const arr = {
    min: 0,
    max: 0,
    price: 0,
  };

  const arr2 = {
    name: "",
    price: 0,
  };

  const click = async (data: IProduct) => {
    const response = await createProduct(data);

    return response !== false ? navigate("/catalogo-adm") : "";
  };

  function onSubmit(event: any) {
    event.preventDefault();
    setErrName(false);
    setErrDesc(false);
    setErrAroma(false);
    setErrPrice(false);
    setErrQtt(false);

    if (
      event.target.name.value.length < 3 ||
      event.target.description.value.length < 10 ||
      aroma.length < 1 ||
      +event.target.price.value < 1 ||
      event.target.quantity.value < 1
    ) {
      if (event.target.name.value.length < 3) {
        console.log(event.target.name.value);
        setErrName(true);
      }
      if (event.target.description.value.length < 10) {
        setErrDesc(true);
      }
      if (aroma.length < 1) {
        setErrAroma(true);
      }
      if (+event.target.price.value < 1) {
        setErrPrice(true);
      }
      if (event.target.quantity.value < 1) {
        setErrQtt(true);
      }

      return alert("Informe todos os dados necessários.");
    }

    const opt =
      options.length > 0
        ? options
        : [
            {
              min: 0,
              max: 0,
              price: 0,
            },
          ];

    const ext = extras.length > 0 ? extras : [{ name: "", price: 0 }];
    const tp = tapes.length > 0 ? tapes : [""];

    const productItem: IProduct = {
      id: Math.round(Math.random()),
      name: event.target.name.value,
      description: event.target.description.value,
      aroma: aroma,
      model: "ASV55",
      price: +event.target.price.value,
      extras: ext,
      options: opt,
      tapes: tp,
      quantity: +event.target.quantity.value,
    };

    click(productItem);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="AddProduct  pb-40 px-7">
        <div className="flex justify-center items-center mt-4">
          <Title text="Adicionar Produto" />
        </div>

        <GrayBorderTop />

        <div className="mt-10 ">
          <SectionTitle text="Nome do produto" />
          <input
            className="mt-2 w-80 border rounded-md text-xs px-3 h-11"
            name="name"
            type="text"
            placeholder="Digite o nome do produto"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        {errName && (
          <i className="text-primary text-sm">
            Preencha o nome com mais de 3 caracteres.
          </i>
        )}

        <div className=" mt-4">
          <SectionTitle text="Descrição" />
          <textarea
            className="mt-2 pt-3 w-80 border rounded-md text-xs px-3"
            placeholder="Digite a descrição do produto"
            name="description"
            rows={4}
            cols={40}
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </div>
        {errDesc && (
          <i className="text-primary text-sm">
            Preencha a descrição com mais de 10 caracteres.
          </i>
        )}

        <div className=" mt-4">
          <SectionTitle text="Unidades a partir de" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            name="price"
            type="text"
            placeholder="Digite o valor das unidades"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
        </div>
        {errPrice && (
          <i className="text-primary text-sm">
            Insira o valor base do produto.
          </i>
        )}

        {/* Tabela de preços */}

        <div className="mt-10 ">
          <Title text="Tabela de preços" />
        </div>

        <div className=" mt-4">
          <SectionTitle text="Opção 1" />
        </div>

        <div className="flex justify-between">
          <div className="mt-3">
            <Text text="Quantidade mínima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              name="quantity"
              type="text"
              placeholder="Ex: 20"
              value={quantity}
              onChange={(ev) => setQuantity(+ev.target.value)}
            />
          </div>

          <div className=" mt-3">
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
                  { min: quantity, max: 0, price: +price },
                ]);
              }}
            />
          </div>
        </div>
        {errQtt && (
          <i className="text-primary text-sm">
            Preencha no mínimo uma opção de tabela de preço.
          </i>
        )}

        <GrayBorder />

        <div className=" mt-4">
          <SectionTitle text="Opção 2" />
        </div>

        <div className="flex justify-between">
          <div className=" mt-3">
            <Text text="Quantidade mínima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: 20"
              onBlur={(ev) => (arr.min = +ev.target.value)}
            />
          </div>

          <div className=" mt-3">
            <Text text="Quantidade máxima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: 40"
              onBlur={(ev) => (arr.max = +ev.target.value)}
            />
          </div>
        </div>

        <div className=" mt-4">
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

        {/* Personalização */}

        <div className=" mt-10">
          <Title text="Personalização" />
        </div>

        <div className=" mt-4">
          <SectionTitle text="Aroma" />
        </div>

        <div className="flex justify-between">
          <div className="mt-3">
            <Text text="Opção 1" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: Lavanda"
              onBlur={(ev) => setAroma([...aroma, ev.target.value])}
            />
          </div>

          <div className=" mt-3">
            <Text text="Opção 2" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="Ex: Lavanda"
              onBlur={(ev) => setAroma([...aroma, ev.target.value])}
            />
          </div>
        </div>
        {errAroma && (
          <i className="text-primary text-sm">
            Insira pelo menos um aroma para sua vela.
          </i>
        )}

        {/* Acréscimo */}

        <div className=" mt-10">
          <SectionTitle text="Acréscimo" />
        </div>

        <div className=" mt-3">
          <Text text="Nome" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="Ex: Saquinho"
            onBlur={(ev) => (arr2.name = ev.target.value)}
          />
        </div>

        <div className=" mt-3">
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

        {/* Tipo de fita */}

        <div className=" mt-10">
          <SectionTitle text="Tipos de fita" />
        </div>

        <div className=" mt-3">
          <Text text="Esse produto possui fita?" />
        </div>

        <div className="flex mt-2 text-xs">
          <div className="flex ">
            <input
              placeholder="ex"
              type="radio"
              name="tipo_fita"
              value="nao_possui"
              onClick={() => setFt(false)}
            />
            <label className="ml-2">Não possui</label>
          </div>

          <div className="flex ml-12">
            <input
              placeholder="ex"
              type="radio"
              name="tipo_fita"
              value="possui"
              onClick={() => setFt(!ft)}
            />
            <label className="ml-2">Possui</label>
          </div>
        </div>

        {ft && (
          <div className="flex justify-between">
            <div className="mt-6">
              <Text text="Opção 1" />
              <input
                className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
                type="text"
                placeholder="Ex: Cetim"
                onBlur={(ev) => setTapes([...tapes, ev.target.value])}
              />
            </div>

            <div className=" mt-6">
              <Text text="Opção 2" />
              <input
                className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
                type="text"
                placeholder="Ex: Junta"
                onBlur={(ev) => setTapes([...tapes, ev.target.value])}
              />
            </div>
          </div>
        )}

        <div className="flex justify-around mt-10">
          <Link to="/catalogo-adm" className="text-black">
            <div className="p-4">
              <ButtonWhite label="Cancelar" onclick={() => {}} />
            </div>
          </Link>

          <div className="p-4">
            <Button2 label="Salvar" type="submit" />
          </div>
        </div>

        <ButtonNavBarAddProduct />
      </form>
    </>
  );
}

export default AddProduct;
