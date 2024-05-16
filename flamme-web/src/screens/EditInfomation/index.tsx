import { Title } from "../../components/Title/index.tsx";
import { Text } from "../../components/Text/index.tsx";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import { Button2 } from "../../components/Button2/index.tsx";
import ButtonNavBarPerfil from "../../components/ButtonNavBarPerfil/index.tsx";
import { Link } from "react-router-dom";

function EditInfo() {
  return (
    <div className="EditInfo">
      <div className="flex justify-center mt-4 mb-4">
        <Title text="Editar informações" />
      </div>
      <GrayBorderTop />


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

        <div className="mt-3">
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

        <div className="flex justify-around items-center mt-10">
          <Link to="/informações-cadastro">
            <button className="w-36 px-2.5 py-3 rounded-lg border border-brownbutton bg-white text-sm text-brownbutton font-semibold ">
              Cancelar
            </button>
          </Link>

          <div className="p-4">
            <Button2 label="Salvar" onclick={() => { }} />
          </div>
        </div>
      </form>

      <ButtonNavBarPerfil />
    </div>
  );
}

export default EditInfo;