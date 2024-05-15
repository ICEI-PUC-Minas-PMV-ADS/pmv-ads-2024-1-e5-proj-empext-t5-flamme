import { Title } from "../../components/Title/index.tsx";
import { Text } from "../../components/Text/index.tsx";
import { SectionTitle } from "../../components/SectionTitle/index.tsx";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import Product from "../../assets/product-img2.svg";
import Product2 from "../../assets/product-img1.svg";
import GrayBorder from "../../components/GrayBorder/index.tsx";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct";

function HomeBudgetAdm() {
  return (
    <>
      <div className="HomeBudgetAdm">

        <div className="flex justify-center items-center mt-5 mb-4">
          <Title text="Orçamentos" />
        </div>
        <GrayBorderTop />


        {/*Card 1 - Orçamentos*/}
        <div className="flex justify-around items-center mx-5 mt-14">
          <div>
            <img src={Product} alt="Foto do Produto" className="w-32" />
          </div>

          <div className="ml-4">
            <SectionTitle text="Pedido #3465" />

            <div className="mt-2 font-medium">
              <Text text="Potinho de vidro tampa de rolha - 40g" />
              <Text text="Envio até 20/09" />
            </div>
          </div>
        </div>
        <GrayBorder />

        {/*Card 2 - Orçamentos*/}
        <div className="flex justify-around items-center mx-5 mt-10">
          <div>
            <img src={Product2} alt="Foto do Produto" className="w-32" />
          </div>

          <div className="ml-4">
            <SectionTitle text="Pedido #3466" />

            <div className="mt-2 font-medium">
              <Text text="Potinho de vidro tampa de junta - 40g" />
              <Text text="Envio até 20/09" />
            </div>
          </div>
        </div>

        {/*EDITAR BARRA DE NAVEGAÇÃO*/}
        <ButtonNavBarAddProduct />
      </div>
    </>
  );
}

export default HomeBudgetAdm;