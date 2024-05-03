import { Link, useNavigate } from 'react-router-dom';
import { ButtonWhite2 } from '../../components/ButtonWhite2/index';
import Frame166 from "../../assets/Frame166.svg";
import { Title } from "../../components/Title";
import ButtonNavBarAddProduct from '../../components/ButtonNavBarAddProduct'; 
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx"; 

function Profile() {
  const navigate = useNavigate();

  function handleLogout() {
    console.log("Sair");
    navigate('/login');
  }

  return (
    <div className="Profile">
      <div className="flex justify-center items-center mt-4">
        <Title text="Perfil" />
      </div>

      <GrayBorderTop />

      <div className="flex justify-center items-center mt-4">
        <img className="flamme-ADM" src={Frame166} alt="Logo ADM da Flamme" style={{ width: 200, height: 200 }} />
      </div>

      <div className="flex justify-between items-center mt-4 ml-7">
        <strong>Conta</strong>
      </div>

      <div className="flex justify-between items-center mt-4 ml-7">
      <Link to="/informações-cadastro">Informações de cadastro</Link> 
      </div>

      <div className="flex justify-center items-center mt-40">
        <ButtonWhite2
          label="Sair" 
          onclick={handleLogout} 
        />
      </div>

      <ButtonNavBarAddProduct />

    </div>
  );
}

export default Profile;