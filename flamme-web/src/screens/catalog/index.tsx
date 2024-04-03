import { Button } from "../../components/Button/Button";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";
import Logo from "../../assets/logo.svg";
import Product1 from "../../assets/product-img1.svg";
import Product2 from "../../assets/product-img2.svg";
import Product3 from "../../assets/product-img3.svg";
import Product4 from "../../assets/product-img4.svg";
import Product5 from "../../assets/product-img5.svg";

function Catalog() {
  function click() {
    console.log("teste");
  }
  return (
    <>
      <div className="Catalog">
        <div className="header-logo">
          <img className="flamme-logo" src={Logo} alt="Logo do Flamme" />
        </div>

        <div className="container">
          <SectionTitle text="Catálogo de velas" />
          <Button label="+ Adicionar produto" onclick={click} />

          <div className="product-container">
            <div className="product-content">
              <div className="product-img">
                <img src={Product1} alt="Foto do Produto" />
              </div>

              <div className="product-description">
                <Text text="Potinho de vidro tampa de junta - 40g" />
                <Text text="Unidades a partir de" />
                <Text text="R$ 9,00" />

                <Button label="Excluir" onclick={click} />
                <Button label="Editar" onclick={click} />
              </div>
            </div>

            <div className="product-content">
              <div className="product-img">
                <img src={Product2} alt="Foto do Produto" />
              </div>

              <div className="product-description">
                <Text text="Potinho de vidro tampa de rolha - 40g" />
                <Text text="Unidades a partir de" />
                <Text text="R$ 8,50" />

                <Button label="Excluir" onclick={click} />
                <Button label="Editar" onclick={click} />
              </div>
            </div>

            <div className="product-content">
              <div className="product-img">
                <img src={Product3} alt="Foto do Produto" />
              </div>

              <div className="product-description">
                <Text text="Latinha personalizada - 15g" />
                <Text text="Unidades a partir de" />
                <Text text="R$ 3,50" />

                <Button label="Excluir" onclick={click} />
                <Button label="Editar" onclick={click} />
              </div>
            </div>

            <div className="product-content">
              <div className="product-img">
                <img src={Product4} alt="Foto do Produto" />
              </div>

              <div className="product-description">
                <Text text="Potinho de vidro tampa de tecido - 40g" />
                <Text text="Unidades a partir de" />
                <Text text="R$ 9,00" />

                <Button label="Excluir" onclick={click} />
                <Button label="Editar" onclick={click} />
              </div>
            </div>

            <div className="product-content">
              <div className="product-img">
                <img src={Product5} alt="Foto do Produto" />
              </div>

              <div className="product-description">
                <Text text="Potinho de vidro tampa de alumínio - 40g" />
                <Text text="Unidades a partir de" />
                <Text text="R$ 8,50" />

                <Button label="Excluir" onclick={click} />
                <Button label="Editar" onclick={click} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;