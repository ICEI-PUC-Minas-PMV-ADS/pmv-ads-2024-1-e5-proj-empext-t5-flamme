import { Button } from "../../components/Button/Button";
import { Button2 } from "../../components/Button2/index.tsx";
import { ButtonWhite } from "../../components/ButtonWhite/ButtonWhite";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";
import Logo from "../../assets/logo.svg";
import Product1 from "../../assets/product-img1.svg";
import BrownBorder from "../../components/BrownBorder/index.tsx";
import ButtonNavBarCatalog from "../../components/ButtonNavBarCatalog/index.tsx";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contexts/index.tsx";
import { Title } from "../../components/Title/index.tsx";
import { IProduct } from "../../contexts/interface.ts";
import { useState } from "react";
import { transformPricePTBR } from "../../utils/scripts.ts";

function Catalog() {
  const { products, getProduct, updateProduct, deleteProduct } =
    useStoreContext();
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  function linkToAddProduct() {
    navigate("/adicionar-produto");
  }

  return products ? (
    <>
      <div className="Catalog w-full p-7 pb-32">
        <div className="flex justify-center items-center mt-8">
          <img className="flamme-logo" src={Logo} alt="Logo do Flamme" />
        </div>

        <div className="mt-14">
          <SectionTitle text="Catálogo de velas" />
        </div>

        <BrownBorder />

        <div className="flex justify-center items-center mt-8">
          <Button label="+ Adicionar produto" onclick={linkToAddProduct} />
        </div>

        {/* Produto */}
        {products.map((item: IProduct) => (
          <div className="flex flex-col mt-8">
            <div className="flex items-center justify-around">
              <div>
                <img src={Product1} alt="Foto do Produto" />
              </div>

              <div className="ml-2">
                <SectionTitle text={item.name} />

                <div className="mt-2">
                  <Text text="Unidades a partir de" />
                  <SectionTitle text={"R$ " + transformPricePTBR(item.price)} />
                </div>
              </div>
            </div>
            <div className="flex justify-around mt-6">
              <ButtonWhite
                label="Excluir"
                onclick={() => deleteProduct(item.id)}
              />
              <Button2
                label="Editar"
                onclick={() => {
                  getProduct(item.id);
                  setModal(!modal);
                }}
              />
            </div>
            {modal && (
              <div className="my-4 p-7">
                <Text text="Alterar nome do produto" />
                <input
                className="border-2 border-black rounded-lg my-4 p-2"
                  name="name"
                  title={item.name}
                  placeholder="Ex: Vela Suave "
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
                <Button
                  label="Alterar"
                  onclick={() => {
                    updateProduct({
                      id: item.id,
                      name,
                      description: item.description,
                      phone: item.phone,
                      aroma: item.aroma,
                      model: item.model,
                      price: item.price,
                      quantity: item.quantity,
                    });
                    window.location.reload();
                  }}
                />
              </div>
            )}
          </div>
        ))}

        <ButtonNavBarCatalog />
      </div>
    </>
  ) : (
    <Title text="Nenhuma produto cadastrado." />
  );
}

export default Catalog;
