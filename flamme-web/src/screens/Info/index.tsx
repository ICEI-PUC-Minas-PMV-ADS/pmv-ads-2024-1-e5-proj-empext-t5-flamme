import Logo from "../../assets/logo.svg";
import { SectionTitle } from "../../components/SectionTitle";
import BrownBorder from "../../components/BrownBorder/index.tsx";
import { TextMd } from "../../components/TextMd";
import { BulletPointList } from "../../components/BulletPointList/index.tsx";
import WhatsAppcontato from "../../components/Whatsappcontato/index.tsx";
import ButtonNavBarCart from "../../components/ButtonNavBarCart/index.tsx";

function Info() {
  return (
    <>
      <div className="Catalog w-full p-7 pb-4">
        <div className="flex justify-center items-center mt-8">
          <img className="flamme-logo" src={Logo} alt="Logo do Flamme" />
        </div>

        <div className="mt-14">
          <SectionTitle
            text="Informações Importantes!"
            classes="text-center text-lg"
          />
        </div>

        <BrownBorder />
      </div>
      <div className="p-7 pb-40">
        <div className=" flex flex-col items-center justify-center mb-8">
          <div className="flex-initial max-w-md">
            <TextMd text="Sobre a arte dos adesivos" classes="text-base -" />
            <BulletPointList
              items={[
                "Para a definição das artes, entraremos em contato via WhatsApp.",
                "Desevolvemos a arte para adesivo após confirmação do pagamento de 50% do valor.",
              ]}
              classes="list-disc text-base marker:text-amber-600 translate-x-4"
            />
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center mb-8">
          <div className="flex-initial max-w-md">
            <TextMd text="Prazo de confecção" classes="text-base" />
            <BulletPointList
              items={[
                "O prazo de confecção pe de 1 a 7 dias úteis a depender do tamanho e complexidade do pedido",
              ]}
              classes="list-disc text-base marker:text-amber-600 translate-x-4"
            />
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center mb-8">
          <div className="flex-initial max-w-md">
            <TextMd text="Prazo de confecção" classes="text-base " />
            <BulletPointList
              items={[
                "O prazo de confecção pe de 1 a 7 dias úteis a depender do tamanho e complexidade do pedido",
              ]}
              classes="list-disc text-base marker:text-amber-600 translate-x-4"
            />
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center mb-8">
          <div className="flex-initial max-w-md">
            <TextMd text="Tipos de envio/entrega" classes="text-base " />
            <BulletPointList
              items={[
                "Entrega por aplicativo de delivery para Sete Lagoas, MG.",
                "Envio por Correios.",
              ]}
              classes="list-disc text-base marker:text-amber-600 translate-x-4"
            />
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center mb-8">
          <div className="flex-initial max-w-md">
            <TextMd text="Pagamento" classes="text-base " />
            <BulletPointList
              items={[
                "A encomenda é confirmada mediante pagamento de 50% do valor.",
                "Após a finalização do pedido, entraremos em contato via WhatsApp para mandar o link de pagamento.",
                "O pagamento por ser feito das seguintes formas: PIX, cartão de crédito ou débito, boleto (aprovação em até 48h).",
              ]}
              classes="list-disc text-base marker:text-amber-600 translate-x-4"
            />
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center mb-8">
          <div className="flex-initial max-w-md">
            <TextMd text="Nosso WhatsApp" classes="text-base " />
            <BulletPointList
              items={[
                "Em caso de dúvidas ou caso queira fazer um pedido diferente do que está no catálogo, entre em contato conosco através do nosso WhatsApp",
              ]}
              classes="list-disc text-base marker:text-amber-600 translate-x-4"
            />
            <WhatsAppcontato />
          </div>
        </div>
      </div>
      <ButtonNavBarCart />
    </>
  );
}

export default Info;
