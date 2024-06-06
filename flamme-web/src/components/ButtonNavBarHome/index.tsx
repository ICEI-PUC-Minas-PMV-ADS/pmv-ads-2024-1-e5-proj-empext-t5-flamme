import { SectionTitle } from "../SectionTitle/index.tsx";
import GrayBorderTop from "../GrayBorderTop/index.tsx";
import WhatsAppNavBar from "../WhatsAppNavBar/index.tsx";
import HomeFillNavBar from "../HomeFillNavBar/index.tsx";
import CartLightNavBar from "../CartLightNavBar/index.tsx";
import { useNavigate } from "react-router-dom";

const ButtonNavBarHome = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 inset-x-0 bg-white">
            <div>
                <GrayBorderTop />
            </div>

            <div className="flex items-center justify-around mt-3 mb-3">

                <div className="flex flex-col items-center">
                    <WhatsAppNavBar />
                    <div className="mt-1.5">
                        <SectionTitle text="Contato" />
                    </div>

                </div>

                <div className="flex flex-col items-center" onClick={() => navigate("/")}>
                    <HomeFillNavBar  />
                    <div className="mt-1.5">
                        <SectionTitle text="Início" />
                    </div>

                </div>

                <div className="flex flex-col items-center" onClick={() => navigate("/carrinho")}>
                    <CartLightNavBar />
                    <div className="mt-1.5">
                        <SectionTitle text="Carrinho" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonNavBarHome;