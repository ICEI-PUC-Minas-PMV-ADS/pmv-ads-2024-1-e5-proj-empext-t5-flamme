import "../../styles/Login.css";
import logoFlameLog from "../../../public/logoFlameLog.svg";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import auth from "../../services/request/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../contexts";
import { IData } from "../../utils/interfaces";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useStoreContext();
  const navigate = useNavigate();

  function handleForgotPassword() {
    navigate("/email-de-recuperacao");
  }

  const handleLogin = async () => {
    const resp = await auth({ email, password });

    if (resp !== null) {
      const data: IData = {
        email,
        password,
      };
      setUser(data);
      return navigate("/catalogo-adm");
    }

    return alert("Usuário não encontrado!");
  };

  return (
    <>
      <div>
        <div className="container-login">
          <div className="input-group-login">
            <div className="logo-img">
              <img src={logoFlameLog} alt="Logo da marca"></img>
            </div>

            <div className="input-box-login">
              <label htmlFor="email">E-mail</label>
              <input
                onChange={(ev) => setEmail(ev.target.value)}
                type="text"
                placeholder="Digite seu e-mail"
                value={email}
              />
            </div>

            <div className="input-box-login">
              <label htmlFor="password">Senha</label>
              <input
                onChange={(ev) => setPassword(ev.target.value)}
                type="password"
                placeholder="Digite sua senha"
                value={password}
              />
              <a
                className="forgot-password-login"
                onClick={handleForgotPassword}
              >
                Esqueceu a senha?
              </a>
            </div>

            <Button label="Entrar" onclick={handleLogin} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
