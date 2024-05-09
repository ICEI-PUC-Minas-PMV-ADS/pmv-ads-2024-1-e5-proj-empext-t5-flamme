import Logo from "../../assets/logo.svg";
import Product1 from "../../assets/product-img1.svg";
import Product2 from "../../assets/product-img2.svg";
import { SectionTitle } from "../../components/SectionTitle/index.tsx";
import { Text } from "../../components/Text/index.tsx";
import BrownBorder from "../../components/BrownBorder/index.tsx";
import ButtonNavBarHome from "../../components/ButtonNavBarHome/index.tsx";
import CartIcon from "../../components/CartIcon2/index.tsx";
import { Carousel } from "@material-tailwind/react";


function HomeClient() {
  return (
    <>
      <div className="Home p-5">
        <div className="flex justify-center items-center mt-8">
          <img className="w-36" src={Logo} alt="Logo do Flamme" />
        </div>

        {/*ADICIONAR CARROSSEL*/}


        {/*ADICIONAR LINK A PAG INFO IMPORTANTE*/}
        <div className="flex items-center gap-x-4 mt-10 rounded-lg w-full px-5 py-4 text-sm bg-white text-brownbutton font-semibold border border-brownbutton">
          <CartIcon />
          <p className="text-black">Clique aqui e veja como comprar</p>
        </div>

        <div className="mt-14">
          <SectionTitle text="Conheça nossas velas" />
        </div>
        <BrownBorder />

        {/*Card - Produto*/}
        <div className="flex flex-wrap mt-8 gap-x-11">
          <div className="w-40">
            <div>
              <img src={Product1} alt="Foto do Produto" className="w-48" />
            </div>

            <div className="mt-2">
              <SectionTitle text="Potinho de vidro tampa de junta - 40g" />

              <div className="mt-2">
                <Text text="Unidades a partir de" />
                <SectionTitle text="R$ 9,00" />
              </div>
            </div>
          </div>


          <div className="w-40">
            <div>
              <img src={Product2} alt="Foto do Produto" className="w-48" />
            </div>

            <div className="mt-2">
              <SectionTitle text="Potinho de vidro tampa de rolha - 40g" />

              <div className="mt-2">
                <Text text="Unidades a partir de" />
                <SectionTitle text="R$ 8,50" />
              </div>
            </div>
          </div>
        </div>


        <ButtonNavBarHome />
      </div>
    </>
  );
}

export default HomeClient;
