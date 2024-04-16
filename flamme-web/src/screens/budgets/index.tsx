import { Link } from "react-router-dom";
import { Title } from "../../components/Title";
import ButtonNavBarCatalog from "../../components/ButtonNavBarCatalog";

export const Budgets = () => {
  return (
    <main className="w-full h-full p-7 pb-32">
      <header className="relative w-full py-4 flex items-center justify-center">
        <Title text="Orçamentos" />
        <Link to={"/"} className="absolute left-0 text-xl">
          <svg
            fill="#000000"
            height="24px"
            width="12px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 404.258 404.258"
          >
            <polygon points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 " />
          </svg>
        </Link>
      </header>
      <ButtonNavBarCatalog />
    </main>
  );
};
