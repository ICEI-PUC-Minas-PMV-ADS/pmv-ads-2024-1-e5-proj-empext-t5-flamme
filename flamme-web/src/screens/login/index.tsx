import "../../styles/Login.css";
import logoFlameLog from "../../../public/logoFlameLog.svg";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import auth  from "../../services/request/auth";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const resp = await auth({ email, password });

    if (resp !== null) {
      return navigate("/");
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
              <a className="forgot-password-login" href="/email-de-recuperacao">
                Esqueceu a senha?
              </a>
            </div>
            <Link to="/catalogo-adm">
            <Button label="Entrar" onclick={handleLogin} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
