import { Button } from "../../components/Button/Button";
import { Button2 } from "../../components/Button2/index.tsx";
import { ButtonWhite } from "../../components/ButtonWhite/ButtonWhite";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";
import Logo from "../../assets/logo.svg";
import Product1 from "../../assets/product-img1.svg";
import Product2 from "../../assets/product-img2.svg";
import Product3 from "../../assets/product-img3.svg";
import Product4 from "../../assets/product-img4.svg";
import Product5 from "../../assets/product-img5.svg";
import BrownBorder from "../../components/BrownBorder/index.tsx"
import GrayBorder from "../../components/GrayBorder/index.tsx"
import ButtonNavBarCatalog from "../../components/ButtonNavBarCatalog/index.tsx";

function Catalog() {
  function click() {
    console.log("teste");
  }
  return (
    <>
      <div className="Catalog">
        <div className="flex justify-center items-center mt-8">
          <img className="flamme-logo" src={Logo} alt="Logo do Flamme" />
        </div>

        <div className="ml-7 mt-14">
          <SectionTitle text="Catálogo de velas" />
        </div>

        <BrownBorder />

        <div className="flex justify-center items-center mt-8">
          <Button label="+ Adicionar produto" onclick={click} />
        </div>

        {/* Produto */}
        <div className="flex justify-around mx-7 mt-8">
          <div>
            <img src={Product1} alt="Foto do Produto" />
          </div>

          <div className="ml-2">
            <SectionTitle text="Potinho de vidro tampa de junta - 40g" />

            <div className="mt-2">
              <Text text="Unidades a partir de" />
              <SectionTitle text="R$ 9,00" />
            </div>
          </div>
        </div>

        <div className="flex justify-around mt-6">
          <ButtonWhite label="Excluir" onclick={click} />
          <Button2 label="Editar" onclick={click} />
        </div>

        <GrayBorder />

        <div className="flex justify-around mx-7 mt-8">
          <div>
            <img src={Product2} alt="Foto do Produto" />
          </div>

          <div className="ml-2">
            <SectionTitle text="Potinho de vidro tampa de rolha - 40g" />

            <div className="mt-2">
              <Text text="Unidades a partir de" />
              <SectionTitle text="R$ 8,50" />
            </div>
          </div>
        </div>

        <div className="flex justify-around mt-6">
          <ButtonWhite label="Excluir" onclick={click} />
          <Button2 label="Editar" onclick={click} />
        </div>

        <GrayBorder />

        <div className="flex justify-around mx-7 mt-8">
          <div>
            <img src={Product3} alt="Foto do Produto" />
          </div>

          <div className="ml-2">
            <SectionTitle text="Latinha personalizada - 15g" />

            <div className="mt-2">
              <Text text="Unidades a partir de" />
              <SectionTitle text="R$ 3,50" />
            </div>
          </div>
        </div>

        <div className="flex justify-around mt-6">
          <ButtonWhite label="Excluir" onclick={click} />
          <Button2 label="Editar" onclick={click} />
        </div>

        <GrayBorder />

        <div className="flex justify-around mx-7 mt-8">
          <div>
            <img src={Product4} alt="Foto do Produto" />
          </div>

          <div className="ml-2">
            <SectionTitle text="Potinho de vidro tampa de tecido - 40g" />

            <div className="mt-2">
              <Text text="Unidades a partir de" />
              <SectionTitle text="R$ 9,00" />
            </div>
          </div>
        </div>

        <div className="flex justify-around mt-6">
          <ButtonWhite label="Excluir" onclick={click} />
          <Button2 label="Editar" onclick={click} />
        </div>

        <GrayBorder />

        <div className="flex justify-around mx-7 mt-8">
          <div>
            <img src={Product5} alt="Foto do Produto" />
          </div>

          <div className="ml-2">
            <SectionTitle text="Potinho de vidro tampa de alumínio - 40g" />

            <div className="mt-2">
              <Text text="Unidades a partir de" />
              <SectionTitle text="R$ 8,50" />
            </div>
          </div>
        </div>

        <div className="flex justify-around mt-6">
          <ButtonWhite label="Excluir" onclick={click} />
          <Button2 label="Editar" onclick={click} />
        </div>

        <ButtonNavBarCatalog />
      </div>
    </>
  );
}

export default Catalog;