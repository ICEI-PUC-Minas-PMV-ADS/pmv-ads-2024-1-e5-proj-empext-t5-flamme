import WhatsAppNavBar from "../WhatsAppNavBar/index.tsx";
import HomeNavBar from "../HomeNavBar/index.tsx";
import CartNavBar from "../CartNavBar/index.tsx";
import { SectionTitle } from "../SectionTitle/index.tsx";
import GrayBorderTop from "../GrayBorderTop/index.tsx";

const ButtonNavBarCart = () => {
    return (
        <div className="relative">
            <div className="mt-11">
                <GrayBorderTop />
            </div>

            <div className="flex items-center justify-around mt-3 mb-3">

                <div className="flex flex-col items-center">
                    <WhatsAppNavBar />
                    <div className="mt-1.5">
                        <SectionTitle text="Contato" />
                    </div>

                </div>

                <div className="flex flex-col items-center">
                    <HomeNavBar />
                    <div className="mt-1.5">
                        <SectionTitle text="Início" />
                    </div>

                </div>

                <div className="flex flex-col items-center">
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