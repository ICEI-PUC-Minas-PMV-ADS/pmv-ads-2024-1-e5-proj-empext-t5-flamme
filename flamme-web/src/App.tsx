import { Button } from "./components/Button/Button";
import { SectionTitle } from "./components/SectionTitle";
import { Text } from "./components/Text";
import { Title } from "./components/Title";

function App() {
  function click() {
    console.log("teste");
  }
  return (
    <>
      {/* Exemplo de como utilizar os componentes sustomizados */}
      <Title text="Potinho de vidro tampa de tecido - 40g" />
      <Text
        text="As velas perfumadas no potinho de vidro são personalizadas com adesivo e tampa de tecido.
São feitas com cera vegetal de coco ou soja e pavio de algodão, proporcionando aproximadamente 5 horas  de queima.
Tem o tamanho de 4x4,5 e peso de 40g."
      />

      <SectionTitle text="Detalhes do produto" />
      <Button label="Adicionar ao carrinho" onclick={click} />
    </>
  );
}

export default App;
