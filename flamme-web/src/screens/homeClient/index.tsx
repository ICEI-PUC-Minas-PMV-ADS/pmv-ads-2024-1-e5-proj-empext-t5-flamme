import Logo from "../../assets/logo.svg";
import Product2 from "../../assets/product-img2.svg";
import { SectionTitle } from "../../components/SectionTitle/index.tsx";
import { Text } from "../../components/Text/index.tsx";
import BrownBorder from "../../components/BrownBorder/index.tsx";
import ButtonNavBarHome from "../../components/ButtonNavBarHome/index.tsx";
import CartIcon from "../../components/CartIcon2/index.tsx";
import { Link, useNavigate } from "react-router-dom";

//CARROSSEL
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../components/Carrossel/style.css";
import { useStoreContext } from "../../contexts/index.tsx";
import { IProduct } from "../../contexts/interface.ts";
import { transformPricePTBR } from "../../utils/scripts.ts";

function HomeClient() {
  //IMAGENS DO CARROSSEL
  const data = [
    { id: "1", image: "../../../public/img-carrossel.svg" },
    { id: "2", image: "../../../public/img-carrossel.svg" },
    { id: "3", image: "../../../public/img-carrossel.svg" },
  ];

  const { products, getProduct } = useStoreContext();
  const nav = useNavigate();

  async function handleProductDetails(item: IProduct) {
    await getProduct(item.id);
    return nav("/produto-cliente");
  }

  return (
    <>
      <div className="Home p-5">
        <div className="flex justify-center items-center mt-8">
          <img className="w-36" src={Logo} alt="Logo do Flamme" />
        </div>

        {/*CARROSSEL*/}
        <Swiper
          className="mt-10 h-48"
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Velas aromáticas"
                className="w-full rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center gap-x-4 mt-10 rounded-lg w-full px-5 py-4 text-sm bg-white text-brownbutton font-semibold border border-brownbutton">
          <CartIcon />
          <Link to="/informações-gerais" className="text-black">
            Clique aqui e veja como comprar
          </Link>
        </div>

        <div className="mt-14">
          <SectionTitle text="Conheça nossas velas" />
        </div>
        <BrownBorder />

        {/*Card - Produto*/}
        <div className="flex flex-wrap mt-8 gap-x-11">
          {products && products.length > 0 ? (
            products.map((candle: IProduct) => (
              <div
                className="w-40"
                onClick={() => handleProductDetails(candle)}
              >
                <div>
                  <img src={Product2} alt="Foto do Produto" className="w-48" />
                </div>

                <div className="mt-2">
                  <SectionTitle classes="text-center" text={candle.name} />

                  <div className="mt-2">
                    <Text text="Unidades a partir de" />
                    <SectionTitle text={transformPricePTBR(candle.price)} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <SectionTitle text="No momento não temos nenhum produto disponível." />
          )}
        </div>

        <ButtonNavBarHome />
      </div>
    </>
  );
}

export default HomeClient;
