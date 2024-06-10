import { Title } from "../../components/Title/index.tsx";
import { Text } from "../../components/Text/index.tsx";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import { Button2 } from "../../components/Button2/index.tsx";
import ButtonNavBarPerfil from "../../components/ButtonNavBarPerfil/index.tsx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userController } from "../../services/request/user.ts";
import { IUser } from "../../utils/interfaces.ts";
import { useStoreContext } from "../../contexts/index.tsx";

function EditInfo() {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const { user } = useStoreContext();
  const navigate = useNavigate();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordCheck === userData.password) {
      const updatedData = await patchUser(userData);
      if (updatedData) {
        setUserData(updatedData);
        navigate("/informações-cadastro");
      } else {
        alert("Atualização não efetuada");
      }
    } else {
      alert("Campos 'senha' e 'confirme sua senha' distintos");
    }
  };

  return (
    <div className="EditInfo">
      <div className="flex justify-center mt-4 mb-4">
        <Title text="Editar informações" />
      </div>
      <GrayBorderTop />

      <form onSubmit={handleSubmit} action="" className="mx-6 ">
        <div className="flex flex-col mt-10">
          <label htmlFor="">Nome</label>
          <input
            className="w-full px-4 py-4 mt-2 border rounded-md text-xs"
            type="text"
            name="name"
            value={userData?.name}
            placeholder={userData?.name}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        {/* FAZER INTERAÇÃO MOSTRAR/OCULTAR SENHA*/}
        <div className="flex flex-col mt-5">
          <label htmlFor="">Senha</label>
          <input
            className="w-full px-4 py-4 mt-2 border rounded-md text-xs"
            type="password"
            placeholder="********"
            name="password"
            value={userData?.password}
            onChange={handleChange}
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
              type="password"
              placeholder="********"
              name="passwordCheck"
              onChange={(ev) => setPasswordCheck(ev.target.value)}
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
            <Button2 type="submit" label="Salvar" />
          </div>
        </div>
      </form>

      <ButtonNavBarPerfil />
    </div>
  );
}

export default EditInfo;
