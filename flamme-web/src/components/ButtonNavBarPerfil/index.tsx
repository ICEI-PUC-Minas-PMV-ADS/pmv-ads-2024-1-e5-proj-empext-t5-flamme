import { SectionTitle } from "../SectionTitle/index.tsx";
import GrayBorderTop from "../GrayBorderTop/index.tsx";
import CatalogNavBar2 from "../CatalogNavBar2/index.tsx";
import PerfilFillNavBar from "../PerfilFillNavBar/index.tsx";
import BudgetNavBar from "../BudgetNavBar/index.tsx";

const ButtonNavBarPerfil = () => {
    return (
        <div className="fixed bottom-0 inset-x-0 bg-white">
            <div>
                <GrayBorderTop />
            </div>

            <div className="flex items-center justify-around mt-3 mb-3">

                <div className="flex flex-col items-center">
                    <PerfilFillNavBar />
                    <div className="mt-1.5">
                        <SectionTitle text="Perfil" />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <BudgetNavBar />
                    <div className="mt-1.5">
                        <SectionTitle text="Orçamento" />
                    </div>

                </div>

                <div className="flex flex-col items-center">
                    <CatalogNavBar2 />
                    <div className="mt-1.5">
                        <SectionTitle text="Catálogo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonNavBarPerfil;