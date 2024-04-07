import { SectionTitle } from "../../components/SectionTitle";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import CatalogNavBar2 from "../CatalogNavBar2/index.tsx";
import ProfileNavBar from "../ProfileNavBar/index.tsx";
import BudgetNavBar from "../BudgetNavBar/index.tsx";

const ButtonNavBarCatalog = () => {
    return (
        <div className="relative">
            <div className="mt-11">
                <GrayBorderTop />
            </div>

            <div className="flex items-center justify-around mt-3 mb-3">

                <div className="flex flex-col items-center">
                    <ProfileNavBar />
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

export default ButtonNavBarCatalog;