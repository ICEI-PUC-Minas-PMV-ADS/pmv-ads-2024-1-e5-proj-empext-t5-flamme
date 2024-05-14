import Logo from "../../assets/logo.svg";
import Product1 from "../../assets/product-img1.svg";
import Product2 from "../../assets/product-img2.svg";
import { SectionTitle } from "../../components/SectionTitle/index.tsx";
import { Text } from "../../components/Text/index.tsx";
import BrownBorder from "../../components/BrownBorder/index.tsx";
import ButtonNavBarHome from "../../components/ButtonNavBarHome/index.tsx";
import CartIcon from "../../components/CartIcon2/index.tsx";
import { Link } from "react-router-dom"

//CARROSSEL
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../components/Carrossel/style.css';



function HomeClient() {
  //IMAGENS DO CARROSSEL
  const data = [
    { id: '1', image: '../../../public/img-carrossel.svg' },
    { id: '2', image: '../../../public/img-carrossel.svg' },
    { id: '3', image: '../../../public/img-carrossel.svg' },
  ]

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
              <img src={item.image} alt="Velas aromáticas" className="w-full" />
            </SwiperSlide>

          ))}
        </Swiper>

        <div className="flex items-center gap-x-4 mt-10 rounded-lg w-full px-5 py-4 text-sm bg-white text-brownbutton font-semibold border border-brownbutton">
          <CartIcon />
          <Link to="/informações-gerais" className="text-black">Clique aqui e veja como comprar</Link>
        </div>

        <div className="mt-14">
          <SectionTitle text="Conheça nossas velas" />
        </div>
        <BrownBorder />

        {/*FAZER INTEGRAÇÃO DOS CARDS DE PRODUTO*/}
        {/*Card - Produto*/}
        <div className="flex flex-wrap mt-8 gap-x-11">
          <div className="w-40">
            <Link to="/produto-cliente" className="text-black">
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
            </Link>
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
