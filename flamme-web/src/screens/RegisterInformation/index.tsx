import { Title } from "../../components/Title";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import { ButtonWhite } from "../../components/ButtonWhite/ButtonWhite";
import { Button2 } from "../../components/Button2/index.tsx";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";

function RegisterInformation() {
  function click() {
    console.log("teste");
  }
  return (
    <div className="RegisterInformation">
      <div className="flex justify-center items-center mt-4">
        <Title text="Informações de cadastro" />
      </div>

      <GrayBorderTop />

      <div className="mt-10 ml-7">
          <SectionTitle text="Nome" />
          <input
            className="mt-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="Nome atual do usuário"
          />
        </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Whatsapp" />
          <textarea
            className="mt-2 pt-3 w-80 border rounded-md text-xs px-3"
            placeholder="(31) 91234-5678"
          />
        </div>

        <div className="ml-7 mt-10">
          <SectionTitle text="E-mail" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="email.do.usuario@gmail.com"
          />
        </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Senha" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="********"
          />
        </div>

        <div className="ml-7 mt-2">
        <strong>
        <Text text="Sua senha deve conter:" />
        </strong>
        </div>

        <div className="ml-7 mt-2">
            <Text text="Crie uma senha no minimo 8 caracteres" />
            <Text text="Adicione letras minúsculas" />
            <Text text="Adicione pelo menos uma letra maiúscula" />
          </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Confirme sua senha" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder="********"
          />
        </div>
        

      <div className="flex justify-around mt-10">
          <div className="p-4">
            <ButtonWhite label="Cancelar" onclick={() => {}} />
          </div>

          <div className="p-4">
            <Button2 label="Salvar" onclick={click} />
          </div>
        </div>

      <ButtonNavBarAddProduct />
    </div>
  );
}

export default RegisterInformation;