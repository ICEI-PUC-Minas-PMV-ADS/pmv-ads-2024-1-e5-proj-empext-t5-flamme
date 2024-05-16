import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Title } from "../../components/Title/index.tsx";
import { SectionTitle } from "../../components/SectionTitle/index.tsx";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import Product1 from "../../assets/product-img1.svg";
import Product2 from "../../assets/product-img2.svg";
import Product4 from "../../assets/product-img4.svg";
import Product5 from "../../assets/product-img5.svg";
import { Additional } from "../../components/Additional";
import { Aroma } from "../../components/Aroma";
import { Text } from "../../components/Text";
import AlertButton1 from "../../components/AlertButton1/index.tsx";
import AlertButton2 from "../../components/AlertButton2/index.tsx";
import GrayBorderUnid from "../../components/GrayBorderUnid/index.tsx";
import WhatsAppRectangle from "../../components/WhatsApp/index.tsx";
import AlertButton3 from "../../components/AlertButton3/index.tsx";
import ButtonNavBarCart from "../../components/ButtonNavBarCart/index.tsx";
import Whastsappcontato from "../../components/Whatsappcontato/index.tsx";
import { useStoreContext } from "../../contexts/index.tsx";
import { useNavigate } from "react-router-dom";
import { transformPricePTBR } from "../../utils/scripts.ts";

function ViewProduct() {
  const settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const { product } = useStoreContext();
  const arr = product ? product.aroma.filter((el) => el.length > 0) : [];

  function back() {
    const nav = useNavigate();
    nav("/");
  }

  return product ? (
    <>
      <div className="ViewProduct p-2">
        <div className="flex justify-center items-center mt-4">
          <Title text="" />
        </div>

        <GrayBorderTop />

        <div className="flex mt-2 w-full">
          <Swiper {...settings}>
            <SwiperSlide>
              <img
                src={Product4}
                alt="Product 4"
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Product1}
                alt="Product 1"
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Product2}
                alt="Product 2"
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Product5}
                alt="Product 5"
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="ml-2 mt-5">
          <SectionTitle text={product.name} />
          <Text text={product.description} />
        </div>

        <div className="ml-2 mt-5">
          <Text text="Unidades a partir de" />
          <SectionTitle text={transformPricePTBR(product.price)} />
        </div>

        <div className="flex gap-2">
          <div className="ml-1 mt-4">
            <AlertButton1 />
          </div>

          <div className="mt-4">
            <Text text="O prazo de confecção é de 1 a 7 dias úteis." />
          </div>
        </div>

        <GrayBorderTop />

        <div className="flex flex-col rounded-lg w-80 bg-white border border-brownborder mt-6 mx-auto">
          <button className="flex items-center gap-3 pt-3.5 pl-4 ">
            <AlertButton2 />
            <SectionTitle text="Sobre a arte do adesivo!" />
          </button>

          <div className="pb-3.5 pl-4 w-72 mt-3">
            <Text
              text="Para a definição das artes, entraremos em contato via WhatsApp. 
            Desenvolvemos a arte para adesivo após confirmação do pagamento de 50% do valor."
            />
          </div>
        </div>

        <div className="ml-2 mt-5">
          <SectionTitle text="Monte a sua vela" />
        </div>

        <div className="ml-2 mt-5">
          <Text text="Quantidade" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11 w-full"
            type="text"
            placeholder="Ex: 20 uni"
          />
        </div>

        <div className="flex justify-between ml-2 mt-5">
          <div className="">
            <Text text={`Até ${product.quantity} unidades`} />
          </div>

          <div className="mr-6">
            <Text text={`${transformPricePTBR(product.price)}/uni`} />
          </div>
        </div>
        {product.options?.map((item) => (
          <div className="flex justify-between ml-2 mt-5">
            <div className="">
              <Text text={`De ${item.min} à ${item.max} unidades`} />
            </div>

            <div className="mr-6">
              <Text text={`${transformPricePTBR(item.price)}/uni`} />
            </div>
          </div>
        ))}

        <GrayBorderUnid />

        <div className="ml-2 mt-8">
          <Text text="Aroma" />
          <Aroma data={arr} />
        </div>

        <div className="ml-2 mt-8">
          <Text text="Acréscimo" />
          {product.extras?.map((item) => (
            <Additional value={item.name} price={item.price} />
          ))}
        </div>

        <div className="mt-3">
          <WhatsAppRectangle />
        </div>

        <div className="flex gap-1">
          <div className="ml-2 mt-5">
            <AlertButton3 />
          </div>

          <div className="mt-5">
            <Text text="Em caso de dúvidas ou caso queira fazer um pedido diferente do que está no catálogo, entre em contato conosco através do nosso WhatsApp." />
          </div>
        </div>

        <div className="ml-2">
          <Whastsappcontato />
        </div>

        <ButtonNavBarCart />
      </div>
    </>
  ) : (
    <p>
      Ocorreu um erro, por favor retorne a página anterior.{" "}
      <button onClick={back}>Voltar</button>
    </p>
  );
}

export default ViewProduct;
