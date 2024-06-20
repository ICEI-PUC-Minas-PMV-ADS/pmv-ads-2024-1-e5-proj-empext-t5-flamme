import { Title } from "../../components/Title";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";

function Forgotemail() {
  function click() {
    console.log("teste");
  }
  return (
    <div className="Forgotpassword">
      <div className="flex justify-center items-center mt-4 mb-4">
        <Title text="Esqueceu a senha?" />
      </div>

      <div className="ml-2 mt-5">

          <Text text="Digite o e-mail cadastrado que iremos enviar a senha por e-mail."
      />
        </div>

      <GrayBorderTop />
      
      <div className="ml-7 mt-10">
        <SectionTitle text="Digite o e-mail cadastrado" />
        <input
          className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
          type="text"
          placeholder="email.do.usuario@gmail.com"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
          <Button label="Recuperar Senha" onclick={click} />

        </div>


    </div>
  );
}

export default Forgotemail;