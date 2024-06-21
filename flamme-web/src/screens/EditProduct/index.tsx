import { Button2 } from "../../components/Button2";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct";
import GrayBorder from "../../components/GrayBorder";
import GrayBorderTop from "../../components/GrayBorderTop";
import { SectionTitle } from "../../components/SectionTitle";
import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { IExtra, IOptions, IProduct } from "../../contexts/interface";
import { transformPricePTBR } from "../../utils/scripts";
import { useStoreContext } from "../../contexts";
import { useNavigate } from "react-router-dom";

interface IData {
  product: IProduct;
}

const EditProduct = ({ product }: IData) => {
  const { updateProduct } = useStoreContext();
  const navigate = useNavigate();
  async function update(data: IProduct) {
    const response = await updateProduct(data);

    return response !== false
      ? navigate("/catalogo-adm")
      : alert("Não foi possível remover o produto.");
  }

  function onSubmit(event: any) {
    event.preventDefault();
    const arr: Array<string> = [];
    if (
      event.target.ar1.value.length > 0 ||
      event.target.ar2.value.length > 0
    ) {
      if (event.target.ar1.value.length > 0) {
        arr.push(event.target.ar1.value);
      }
      if (event.target.ar2.value.length > 0) {
        arr.push(event.target.ar2.value);
      }
    }

    const tps: Array<string> = [];
    if (
      event.target.tape1.value.length > 0 ||
      event.target.tape2.value.length > 0
    ) {
      if (event.target.tape1.value.length > 0) {
        tps.push(event.target.tape1.value);
      }
      if (event.target.tape2.value.length > 0) {
        tps.push(event.target.tape2.value);
      }
    }

    const ex: IExtra = {} as IExtra;
    if (event.target.exName.value.length > 0) {
      ex.name = event.target.exName.value;
      if (event.target.exPrice.value.length > 0) {
        ex.price = event.target.exPrice.value;
      } else {
        alert("Por favor insira o preço do item extra.");
      }
    }

    const opt: IOptions = {} as IOptions;
    if (
      event.target.min.value.length > 0 ||
      event.target.max.value.length > 0 ||
      event.target.price2.value.length > 0
    ) {
      if (event.target.min.value.length > 0) {
        opt.min = event.target.min.value;
      }
      if (event.target.max.value.length > 0) {
        opt.max = event.target.max.value;
      }
      if (event.target.price2.value.length > 0) {
        opt.price = event.target.price2.value;
      }
    }

    const productItem: IProduct = {
      id: Math.round(Math.random()),
      name:
        event.target.name.value.length > 3
          ? event.target.name.value
          : product.name,
      description:
        event.target.description.value.length > 10
          ? event.target.description.value
          : product.description,
      aroma: arr.length > 0 ? arr : product.aroma,
      model: "ASV55",
      price:
        event.target.price.value.length > 0
          ? +event.target.price.value
          : product.price,
      extras: ex.name && ex.price ? [ex] : product.extras,
      options: opt.min && opt.max && opt.price ? [opt] : product.options,
      tapes: tps.length > 0 ? tps : product.tapes,
      quantity:
        event.target.quantity.value.length > 0
          ? +event.target.quantity.value
          : product.quantity,
    };

    update(productItem);
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="px-7">
        <div className="flex justify-center items-center mt-4">
          <Title text="Edição do produto" />
        </div>

        <GrayBorderTop />

        <div className="mt-10 ">
          <SectionTitle text="Nome do produto" />
          <input
            className="mt-2 w-80 border rounded-md text-xs px-3 h-11"
            name="name"
            type="text"
            placeholder={product.name}
          />
        </div>

        <div className=" mt-4">
          <SectionTitle text="Descrição" />
          <textarea
            className="mt-2 pt-3 w-80 border rounded-md text-xs px-3"
            placeholder={product.description}
            name="description"
            rows={4}
            cols={40}
          />
        </div>

        <div className=" mt-4">
          <SectionTitle text="Unidades a partir de" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            name="price"
            type="text"
            placeholder={`${transformPricePTBR(product.price)}`}
          />
        </div>

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
              placeholder={`${product.quantity}`}
            />
          </div>

          <div className=" mt-3">
            <Text text="Valor p/ unidade" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder={`${transformPricePTBR(product.price)}`}
            />
          </div>
        </div>

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
              name="min"
              placeholder={
                product.options && product.options.length > 0
                  ? `${product.options[0].min}`
                  : "0"
              }
            />
          </div>

          <div className=" mt-3">
            <Text text="Quantidade máxima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              name="max"
              placeholder={
                product.options && product.options.length > 0
                  ? `${product.options[0].max}`
                  : "0"
              }
            />
          </div>
        </div>

        <div className=" mt-4">
          <Text text="Valor p/ unidade" />
          <input
            className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
            type="text"
            name="price2"
            placeholder={
              product.options && product.options.length > 0
                ? `${transformPricePTBR(product.options[0].price)}`
                : "R$00,00"
            }
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
              name="ar1"
              placeholder={
                product.aroma && product.aroma.length ? product.aroma[0] : ""
              }
            />
          </div>

          <div className=" mt-3">
            <Text text="Opção 2" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              name="ar2"
              placeholder={
                product.aroma && product.aroma.length ? product.aroma[1] : ""
              }
            />
          </div>
        </div>

        {/* Acréscimo */}

        <div className=" mt-10">
          <SectionTitle text="Acréscimo" />
        </div>

        <div className=" mt-3">
          <Text text="Nome" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            name="exName"
            placeholder={
              product.extras && product.extras.length
                ? product.extras[0].name
                : ""
            }
          />
        </div>

        <div className=" mt-3">
          <Text text="Valor" />
          <input
            className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
            type="text"
            name="exPrice"
            placeholder={
              product.extras && product.extras.length
                ? `${product.extras[0].price}`
                : ""
            }
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
          <div className="flex justify-between w-full">
            <div className="mt-6">
              <Text text="Opção 1" />
              <input
                className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
                type="text"
                name="tape1"
                placeholder={
                  product.tapes && product.tapes.length ? product.tapes[0] : ""
                }
              />
            </div>

            <div className=" mt-6">
              <Text text="Opção 2" />
              <input
                className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
                type="text"
                name="tape2"
                placeholder={
                  product.tapes && product.tapes.length ? product.tapes[1] : ""
                }
              />
            </div>
          </div>
        </div>

        <div className="flex justify-around mt-10">
          <div className="p-4 h-20">
            <Button2 label="Salvar" type="submit" classes="my-0" />
          </div>
        </div>

        <ButtonNavBarAddProduct />
      </form>
    </div>
  );
};

export default EditProduct;
