import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button/Button";
import { SectionTitle } from "../../components/SectionTitle";
import Rectangle from "../../components/Rectangle/index.tsx"

function AddProduct() {
  function click() {
    console.log("teste");
  }
  return (
    <>
      <div className="AddProduct">

        <Title text="Adicionar Produto" />

        <SectionTitle text="Imagens do produto" />

        <Rectangle/>

        <div className="container">
          <div className="input-group">
            <div className="input-box">
              <SectionTitle text="Nome do produto" />
              <input type="text" placeholder="Digite o nome do produto" />
            </div>

            <div className="input-box">
              <SectionTitle text="Descrição" />
              <input type="text" placeholder="Digite a descrição do produto" />
            </div>

            <div className="input-box">
              <SectionTitle text="Unidades a partir de" />
              <input type="text" placeholder="Digite o valor das unidades" />
            </div>

            {/* Tabela de preços */}

            <Title text="Tabela de preços" />
            <SectionTitle text="Opção 1" />
            <div className="input-box">
              <Text text="Quantidade mínima" />
              <input type="text" placeholder="Ex: 20" />
            </div>

            <div className="input-box">
              <Text text="Valor p/ unidade" />
              <input type="text" placeholder="R$ 0,00" />
            </div>

            <SectionTitle text="Opção 2" />
            <div className="input-box">
              <Text text="Quantidade mínima" />
              <input type="text" placeholder="Ex: 20" />
            </div>

            <div className="input-box">
              <Text text="Quantidade máxima" />
              <input type="text" placeholder="Ex: 40" />
            </div>

            <div className="input-box">
              <Text text="Valor p/ unidade" />
              <input type="text" placeholder="R$ 0,00" />
            </div>

            <Button label="+ Adicionar mais opções" onclick={click} />

            {/* Personalização */}

            <Title text="Personalização" />
            <SectionTitle text="Aroma" />
            <div className="input-box">
              <Text text="Opção 1" />
              <input type="text" placeholder="Ex: Lavanda" />
            </div>

            <div className="input-box">
              <Text text="Opção 2" />
              <input type="text" placeholder="Ex: Lavanda" />
            </div>

            <Button label="+ Adicionar mais aromas" onclick={click} />

            {/* Acréscimo */}

            <SectionTitle text="Acréscimo" />
            <div className="input-box">
              <Text text="Nome" />
              <input type="text" placeholder="Ex: Saquinho" />
            </div>

            <div className="input-box">
              <Text text="Valor" />
              <input type="text" placeholder="R$ 0,00" />
            </div>

            <Button label="+ Adicionar mais acréscimos" onclick={click} />

            {/* Tipo de fita */}

            <SectionTitle text="Tipo de fita" />
            <Text text="Esse produto possui fita?" />

            <div>
              <label>
                <input
                  type="radio"
                  name="tipo_fita"
                  value="nao_possui"
                />
                Não possui
              </label>

              <label>
                <input
                  type="radio"
                  name="tipo_fita"
                  value="possui"
                />
                Possui
              </label>
            </div>

            <div className="input-box">
              <Text text="Opção 1" />
              <input type="text" placeholder="Ex: Cetim" />
            </div>

            <div className="input-box">
              <Text text="Opção 2" />
              <input type="text" placeholder="Ex: Junta" />
            </div>

            <Button label="+ Adicionar mais fitas" onclick={click} />

            <Button label="Cancelar" onclick={click} />

            <Button label="Salvar" onclick={click} />

          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
