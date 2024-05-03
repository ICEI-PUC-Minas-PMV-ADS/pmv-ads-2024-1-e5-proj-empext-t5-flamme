import Logo from "../../assets/logo.svg";
import { SectionTitle } from "../../components/SectionTitle";
import BrownBorder from "../../components/BrownBorder/index.tsx";
import { TextMd } from "../../components/TextMd";
import { Text } from "../../components/Text";

function Info() {
  return (
    <>
      <div className="Catalog w-full p-7 pb-32">
        <div className="flex justify-center items-center mt-8">
          <img className="flamme-logo" src={Logo} alt="Logo do Flamme" />
        </div>

        <div className="mt-14">
          <SectionTitle text="Informações Importantes!" classes="text-center" />
        </div>

        <BrownBorder />

        <div className="items-center">
          <TextMd text="Sobre a arte dos adesivos" classes="text-center" />
          <Text
            text="Para a definição das artes entraremos em contato via WhatsApp."
            classes="text-center"
          />
        </div>
      </div>
    </>
  );
}

export default Info;
