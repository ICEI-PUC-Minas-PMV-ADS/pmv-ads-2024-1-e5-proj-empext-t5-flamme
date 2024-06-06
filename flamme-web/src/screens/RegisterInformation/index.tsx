import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import ButtonNavBarPerfil from "../../components/ButtonNavBarPerfil";
import { Link } from "react-router-dom";

function RegisterInformation() {
  return (
    <div className="RegisterInformation">
      <div className="flex justify-center mt-4 mb-4">
        <Title text="Informações de cadastro" />
      </div>
      <GrayBorderTop />

      <div className="m-6">
        <Link to="/editar-info">
          <button className="w-full py-3.5 mb-1 rounded-lg border border-brownbutton bg-white text-sm text-brownbutton font-semibold ">
            Editar informações
          </button>
        </Link>
      </div>


      <form action="" className="mx-6">
        <div className="flex flex-col mt-10">
          <label htmlFor="">Nome</label>
          <input
            className="w-full px-4 py-4 mt-2 border rounded-md text-xs"
            type="text"
            placeholder="Usuário da Silva"
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="">Whatsapp</label>
          <input
            className="w-full px-4 py-4 mt-2 border rounded-md text-xs"
            type="tel"
            placeholder="(31) 91234-5678"
          />
        </div>

        <div className="flex flex-col mt-10">
          <label htmlFor="">E-mail</label>
          <input
            className="w-full px-4 py-4 mt-2 border rounded-md text-xs"
            type="email"
            placeholder="email.do.usuario@gmail.com"
          />
        </div>

        {/* FAZER INTERAÇÃO MOSTRAR/OCULTAR SENHA*/}
        <div className="flex flex-col mt-5">
          <label htmlFor="">Senha</label>
          <input
            className="w-full px-4 py-4 mt-2 border rounded-md text-xs"
            type="password"
            placeholder="********"
          />
        </div>

        <div className="mt-3 text-slate-500">
          <strong>
            <Text text="Sua senha deve conter:" />
          </strong>
          <ul className="mt-2 text-xs">
            <li className="mb-0.5">No minimo 8 caracteres</li>
            <li className="mb-0.5">Letras minúsculas</li>
            <li className="mb-0.5">Pelo menos uma letra maiúscula </li>
          </ul>

          <div className="flex flex-col mt-5">
            <label htmlFor="">Confirme sua senha</label>
            <input
              className="w-full px-4 py-4 mt-2 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder="********"
            />
          </div>
        </div>
      </form>

      <ButtonNavBarPerfil />
    </div>
  );
}

export default RegisterInformation;