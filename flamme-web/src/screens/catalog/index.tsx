import { Button } from "../../components/Button/Button";
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
import { transformPricePTBR } from "../../utils/scripts.ts";

function Catalog() {
  const { products, setProduct } =
    useStoreContext();
  const navigate = useNavigate();

  function linkToAddProduct() {
    navigate("/adicionar-produto");
  }

  function handleProduct(item: IProduct) {
    setProduct(item);
    navigate("/visualizar-produto");
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
          <div className="flex flex-col mt-8" key={item.id}>
            <div
              className="flex items-center justify-around"
              onClick={() => handleProduct(item)}
            >
              <div>
                <img src={Product1} alt="Foto do Produto" />
              </div>

              <div className="ml-2">
                <SectionTitle text={item.name} />

                <div className="mt-2">
                  <Text text="Unidades a partir de" />
                  <SectionTitle text={transformPricePTBR(item.price)} />
                </div>
              </div>
            </div>
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
