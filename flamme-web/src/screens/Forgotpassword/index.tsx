import { Title } from "../../components/Title";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";

function Forgotpassword() {
  function click() {
    console.log("teste");
  }
  return (
    <div className="Forgotpassword">
      <div className="flex justify-center items-center mt-4 mb-4">
        <Title text="Redefinir senha
        " />
      </div>

      <div className="ml-2 mt-5">

          <Text text="Digite a nova senha agora."
      />
        </div>

      <GrayBorderTop />
      
      <div className="ml-7 mt-10">
        <SectionTitle text="Senha" />
        <input
          className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
          type="text"
          placeholder="email.do.usuario@gmail.com"
        />
      </div>

      <div className="ml-7 mt-4">
        <SectionTitle text="Confirme a sua senha" />
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

      <div className="flex flex-col items-center justify-center mt-10">
          <Button label="Finalizar compra" onclick={click} />

        </div>

    </div>
  );
}

export default Forgotpassword;