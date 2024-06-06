import { SectionTitle } from "../../components/SectionTitle";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import HomeNavBar from "../HomeNavBar/index.tsx";
import ProfileNavBar from "../ProfileNavBar/index.tsx";
import BudgetNavBar from "../BudgetNavBar/index.tsx";
import { Link } from "react-router-dom"

const ButtonNavBarCatalog = () => {
    return (
        <div className="fixed bottom-0 inset-x-0 bg-white">
            <div className="mt-11">
                <GrayBorderTop />
            </div>

            <div className="flex items-center justify-around mt-3 mb-3">

                <div className="flex flex-col items-center">
                <Link to="/perfil" className="flex flex-col items-center">
                    <ProfileNavBar />
                    <div className="mt-1.5">
                        <SectionTitle text="Perfil" />
                    </div>
                    </Link>

                </div>

                <div className="flex flex-col items-center">
                <Link to="/home-orçamentos" className="flex flex-col items-center">
                    <BudgetNavBar />
                    <div className="mt-1.5">
                        <SectionTitle text="Orçamento" />
                    </div>
                    </Link>

                </div>

                <div className="flex flex-col items-center">
                <Link to="/catalogo-adm" className="flex flex-col items-center">
                    <HomeNavBar />
                    <div className="mt-1.5">
                        <SectionTitle text="Catálogo" />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ButtonNavBarCatalog;