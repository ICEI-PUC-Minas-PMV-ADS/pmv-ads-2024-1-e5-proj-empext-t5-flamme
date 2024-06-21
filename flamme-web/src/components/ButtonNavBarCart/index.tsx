import WhatsAppNavBar from "../WhatsAppNavBar/index.tsx";
import HomeNavBar from "../HomeNavBar/index.tsx";
import CartNavBar from "../CartNavBar/index.tsx";
import { SectionTitle } from "../SectionTitle/index.tsx";
import GrayBorderTop from "../GrayBorderTop/index.tsx";
import { useNavigate } from "react-router-dom";
import { linkStaticWpp } from "../../utils/constants.ts";

const ButtonNavBarCart = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 inset-x-0 z-10 bg-white">
      <div>
        <GrayBorderTop />
      </div>

      <div className="flex items-center justify-around mt-3 mb-3">
        <div className="flex flex-col items-center">
          <WhatsAppNavBar />
          <div className="mt-1.5">
            <a href={linkStaticWpp}>
              <SectionTitle text="Contato" />
            </a>
          </div>
        </div>

        <div
          className="flex flex-col items-center"
          onClick={() => navigate("/")}
        >
          <HomeNavBar />
          <div className="mt-1.5">
            <SectionTitle text="Início" />
          </div>
        </div>

        <div
          className="flex flex-col items-center"
          onClick={() => navigate("/carrinho")}
        >
          <CartNavBar />
          <div className="mt-1.5">
            <SectionTitle text="Carrinho" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonNavBarCart;
