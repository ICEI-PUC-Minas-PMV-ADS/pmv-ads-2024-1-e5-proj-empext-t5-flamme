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
import { Button4 } from "../../components/Button4/index.tsx";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct/index.tsx";
import { useState } from "react";
import { useCartStoreContext } from "../../contexts/Cart/index.tsx";
import { ButtonWhite } from "../../components/ButtonWhite/ButtonWhite.tsx";
import { Button2 } from "../../components/Button2/index.tsx";
import EditProduct from "../EditProduct/index.tsx";
import { linkStaticWpp } from "../../utils/constants.ts";
interface IProps {
  isAdmin: Boolean;
}

function ViewProduct({ isAdmin }: IProps) {
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
  const navigate = useNavigate();
  const { product, deleteProduct } = useStoreContext();
  const { addToCart } = useCartStoreContext();
  const arr =
    product && product.aroma ? product.aroma.filter((el) => el.length > 0) : [];
  const [total, setTotal] = useState<number>(0);
  const [qtty, setQtty] = useState<number>(0);
  const [ex, setEx] = useState<boolean>(false);
  const [aroma, setAroma] = useState<Array<string>>([] as Array<string>);
  const [newExtra, setNewExtra] = useState<any>();
  const [page, setPage] = useState<boolean>(false);
  const nav = useNavigate();

  function back() {
    nav("/");
  }

  async function deleteItem(id: number = 0) {
    const response = await deleteProduct(id);
    return response !== false
      ? navigate("/catalogo-adm")
      : alert("Não foi possível atualizar os dados.");
  }

  function calculate(qtt: number) {
    let val = 0;
    if (product.options && product.options[0].min > 0 && qtt) {
      setQtty(qtt);

      if (qtt < product.options[0].min) {
        val = product.price * qtt;
        return setTotal(val);
      }

      val = product.options[0].price * qtt;
      return setTotal(val);
    } else {
      setQtty(qtt);
      setTotal(product.price * qtt);
      return;
    }
    setQtty(0);
    return setTotal(0);
  }

  function extras(item: any) {
    if (ex) {
      setEx(!ex);
      setNewExtra([]);
      return setTotal(total - item.price * qtty);
    }
    setEx(!ex);
    setNewExtra({ value: item.value, price: item.price });
    return setTotal(total + item.price * qtty);
  }

  function addAroma(item: string) {
    if (aroma.find((el: string) => el === item)) {
      const newAroma = aroma.filter((el: string) => el != item);
      return setAroma(newAroma);
    }

    return setAroma([...aroma, item]);
  }

  return product ? (
    <>
      <div className="pb-40">
        <div className="ViewProduct p-2">
          <div className="flex justify-center items-center mt-4">
            <Title text="" />
          </div>

          <GrayBorderTop />

          <div className="flex mt-2 w-full">
            <Swiper {...settings}>
              <SwiperSlide>
                <img src={Product4} alt="Product 4" className="w-full h-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Product1} alt="Product 1" className="w-full h-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Product2} alt="Product 2" className="w-full h-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Product5} alt="Product 5" className="w-full h-auto" />
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
              onChange={(ev) => {
                calculate(Number(ev.target.value));
              }}
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
            <Aroma data={arr} newData={addAroma} aroma={aroma} />
          </div>

          <div className="ml-2 mt-8">
            <Text text="Acréscimo" />
            {product.extras?.map((item) => (
              <Additional
                value={item.name}
                price={item.price}
                onclick={extras}
              />
            ))}
          </div>

          {page && <EditProduct product={product} />}

          {isAdmin && (
            <div className="flex flex-col gap-2 mt-10">
              <ButtonWhite
                label={!page ? "Editar produto" : "Cancelar edição"}
                classes="w-full"
                onclick={() => setPage(!page)}
              />
              <Button2
                label="Excluir produto"
                classes="w-full"
                onclick={() => deleteItem(product.id)}
              />
            </div>
          )}

          {isAdmin && <ButtonNavBarAddProduct />}

          {!isAdmin && (
            <>
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
                <a href={linkStaticWpp}>
                  <Whastsappcontato />
                </a>
              </div>

              <div className="max-w-screen-lg mx-2">
                <div className="flex justify-around mt-5 border">
                  <div className="p-3">
                    <Text text="Valor" />
                    <SectionTitle text={transformPricePTBR(total)} />
                  </div>

                  <div className="p-3">
                    <Button4
                      label="Adicionar ao carrinho"
                      onclick={() => {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          description: product.description,
                          aroma: aroma,
                          model: product.model,
                          price: total,
                          extras: [
                            {
                              name: newExtra.value,
                              price: newExtra.price,
                            },
                          ],
                          tapes: product.tapes,
                          quantity: qtty,
                        });
                        navigate("/");
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {!isAdmin && <ButtonNavBarCart />}
    </>
  ) : (
    <p>
      Ocorreu um erro, por favor retorne a página anterior.{" "}
      <button onClick={back}>Voltar</button>
    </p>
  );
}

export default ViewProduct;
