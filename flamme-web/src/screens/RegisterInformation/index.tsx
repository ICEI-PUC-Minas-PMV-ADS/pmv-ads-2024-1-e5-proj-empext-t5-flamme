import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import ButtonNavBarPerfil from "../../components/ButtonNavBarPerfil";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../contexts/index.tsx";
import { userController } from "../../services/request/user.ts";
import { useEffect, useState } from "react";
import { IUser } from "../../utils/interfaces.ts";

function RegisterInformation() {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const { user } = useStoreContext();
  const { getForId: getUserId, patch: patchUser } = userController();

  async function fetchData() {
    const id = localStorage.getItem("id") ?? 0;
    const response = await getUserId(Number(id));
    const data: IUser = {
      id: response.id,
      name: response.name,
      email: response.email,
      password: user.password,
      phone: response.phone,
    };
    console.log(data);
    setUserData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
            name="name"
            value={userData?.name}
            placeholder={userData?.name}
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="">Whatsapp</label>
          <input
            className="w-full px-4 py-4 mt-2 border rounded-md text-xs"
            type="tel"
            name="phone"
            placeholder={userData?.phone}
            value={userData?.phone}
          />
        </div>

        <div className="flex flex-col mt-10">
          <label htmlFor="">E-mail</label>
          <input
            className="w-full px-4 py-4 mt-2 border rounded-md text-xs"
            type="email"
            name="email"
            placeholder={userData?.email}
            value={userData?.email}
          />
        </div>

        {/* FAZER INTERAÇÃO MOSTRAR/OCULTAR SENHA*/}
        <div className="flex flex-col mt-5">
          <label htmlFor="">Senha</label>
          <input
            disabled
            className="w-full px-4 py-4 mt-2 border rounded-md text-xs"
            type="password"
            placeholder="********"
          />
        </div>

        {/* <div className="mt-3 text-slate-500">
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
        </div> */}
      </form>

      <ButtonNavBarPerfil />
    </div>
  );
}

export default RegisterInformation;
