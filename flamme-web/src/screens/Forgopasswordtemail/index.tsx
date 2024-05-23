import { Title } from "../../components/Title";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct";
import GrayBorderTop from "../../components/GrayBorderTop/index.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";
import React, { useState } from 'react';
import axios from 'axios';
import logoFlameLog from "../../../public/logoFlameLog.svg";

function Forgotemail() {
  const click = async () => {
    console.log("teste");

    const to="flammevelas95@gmail.com";
    const subject="Recuperação de Senha";
    const text="Sua senha é: ";
      //  const [, setTo] = useState('');
      //  const [subject, setSubject] = useState('');
        //const [text, setText] = useState('');
    
       
            const payload = {
                to,
                subject,
                text,
            };
    
            try {
              //?fabiana.alkmim@gmail.com&subject=Assunto&text=Mensagem
              var url='http://localhost:5432/sendEmail?to=flammevelas95@gmail.com&subject=Recuperação%20de%20Senha&text=Sua%20senha%20é:%20Flamme@2024!';
              //alert (url);

              const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
/*
               const response = await axios.post('http://localhost:5432/sendEmail', payload, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                
 */   
                alert(response.data);
            } catch (error) {
                alert('Erro ao enviar email: '+error);
            }
        

  };
  return (
    <div className="Forgotpassword">
      <div className="flex justify-center items-center mt-4 mb-4">
        <Title text="Esqueceu a senha?" />
      </div>

      <div className="logo-img">
              <img src={logoFlameLog} alt="Logo da marca"></img>
      </div>

      <GrayBorderTop />

      

      <div className="flex flex-col items-center justify-center mt-10">
          <Button label="Enviar e-mail" onclick={click} />

        </div>


    </div>
  );
}

export default Forgotemail;