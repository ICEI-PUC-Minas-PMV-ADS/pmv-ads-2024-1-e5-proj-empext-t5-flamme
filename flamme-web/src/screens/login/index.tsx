import "../../styles/Login.css";
import logoFlameLog from "../../../public/logoFlameLog.svg";
import { useState } from "react";
import { Button } from "../../components/Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {};

  // const login = async () => {
  //   const auth = await loginUser(email, password);

  //   if (auth && auth.token) {
  //     window.location.href = "/inicio";
  //     return localStorage.setItem("token", auth.token);
  //   }

  //   return  alert("Usuário não encontrado!");
  // };

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
              <a className="forgot-password-login" href="#">
                Esqueceu a senha?
              </a>
            </div>

            <Button label="Entrar" onclick={login} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
