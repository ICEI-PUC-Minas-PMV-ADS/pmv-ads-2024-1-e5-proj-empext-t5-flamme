import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button/Button";
import { ButtonWhite } from "../../components/ButtonWhite/ButtonWhite";
import { SectionTitle } from "../../components/SectionTitle";
import Rectangle from "../../components/Rectangle/index.tsx"

function AddProduct() {
  function click() {
    console.log("teste");
  }
  return (
    <>
      <div className="AddProduct">

        <div className="flex justify-center items-center mt-4">
          <Title text="Adicionar Produto" />
        </div>

        <div className="mt-16 ml-7">
          <SectionTitle text="Imagens do produto" />
        </div>

        <Rectangle />

        <div className="mt-16 ml-7">
          <SectionTitle text="Nome do produto" />
          <input type="text" placeholder="Digite o nome do produto" />
        </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Descrição" />
          <input type="text" placeholder="Digite a descrição do produto" />
        </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Unidades a partir de" />
          <input type="text" placeholder="Digite o valor das unidades" />
        </div>


        {/* Tabela de preços */}

        <div className="pt-16 ml-7">
          <Title text="Tabela de preços" />
        </div>

        <div className="ml-7 mt-4">
          <SectionTitle text="Opção 1" />
        </div>

        <div className="flex justify-around">
          <div className="ml-7 mt-3">
            <Text text="Quantidade mínima" />
            <input type="text" placeholder="Ex: 20" />
          </div>

          <div className="ml-7 mt-3">
            <Text text="Valor p/ unidade" />
            <input type="text" placeholder="R$ 0,00" />
          </div>
        </div>

        <div className="ml-7 mt-10">
          <SectionTitle text="Opção 2" />
        </div>

        <div className="flex justify-around">
          <div className="ml-7 mt-3">
            <Text text="Quantidade mínima" />
            <input type="text" placeholder="Ex: 20" />
          </div>

          <div className="ml-7 mt-3">
            <Text text="Quantidade máxima" />
            <input type="text" placeholder="Ex: 40" />
          </div>
        </div>

        <div className="ml-7 mt-4">
          <Text text="Valor p/ unidade" />
          <input type="text" placeholder="R$ 0,00" />
        </div>

        <div className="flex justify-center items-center mt-7">
          <ButtonWhite label="+ Adicionar mais opções" onclick={click} />
        </div>


        {/* Personalização */}

        <div className="ml-7 mt-10">
          <Title text="Personalização" />
        </div>

        <div className="ml-7 mt-6">
          <SectionTitle text="Aroma" />
        </div>

        <div className="flex justify-around">
          <div className="ml-7 mt-3">
            <Text text="Opção 1" />
            <input type="text" placeholder="Ex: Lavanda" />
          </div>

          <div className="ml-7 mt-3">
            <Text text="Opção 2" />
            <input type="text" placeholder="Ex: Lavanda" />
          </div>
        </div>


        <div className="flex justify-center items-center mt-10">
          <ButtonWhite label="+ Adicionar mais aromas" onclick={click} />
        </div>


        {/* Acréscimo */}

        <div className="ml-7 mt-10">
          <SectionTitle text="Acréscimo" />
        </div>

        <div className="ml-7 mt-3">
          <Text text="Nome" />
          <input type="text" placeholder="Ex: Saquinho" />
        </div>

        <div className="ml-7 mt-3">
          <Text text="Valor" />
          <input type="text" placeholder="R$ 0,00" />
        </div>

        <div className="flex justify-center items-center mt-10">
          <ButtonWhite label="+ Adicionar mais acréscimos" onclick={click} />
        </div>


        {/* Tipo de fita */}

        <div className="ml-7 mt-10">
          <SectionTitle text="Tipo de fita" />
        </div>

        <div className="ml-7 mt-6">
          <Text text="Esse produto possui fita?" />
        </div>

        <div className="flex mt-2 text-xs">
          <div className="ml-7">
            <label>
              <input
                type="radio"
                name="tipo_fita"
                value="nao_possui"
              />
              Não possui
            </label>
          </div>

          <div className="ml-12">
            <label>
              <input
                type="radio"
                name="tipo_fita"
                value="possui"
              />
              Possui
            </label>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="ml-7 mt-6">
            <Text text="Opção 1" />
            <input type="text" placeholder="Ex: Cetim" />
          </div>

          <div className="ml-7 mt-6">
            <Text text="Opção 2" />
            <input type="text" placeholder="Ex: Junta" />
          </div>

        </div>

        <div className="flex justify-center items-center mt-10">
          <ButtonWhite label="+ Adicionar mais fitas" onclick={click} />
        </div>

        <div className="flex justify-around mt-16">
          <div className="p-4">
            <ButtonWhite label="Cancelar" onclick={click} />
          </div>

          <div className="p-4">
            <Button label="Salvar" onclick={click} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
