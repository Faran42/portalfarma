import React, { useState } from "react";

import { Container, Card, Title, Wrapper } from "./styles";

import { useHistory } from "react-router-dom";

import { Inputs } from "./components/Inputs";
import { Header } from "../../components/Header";
import { Button } from 'reactstrap';


import api from '../../config/api';

export function Cadastro() {
  const history = useHistory();

   function handleClick() {
    
     api.post('requisicao', {
       medicamento: medicamento,
       medico: medico,
       quantidade: quantidade,
       id_login: sessionStorage.getItem('googleId'),
       create_date: reqDate
      }).then(response => {
        alert('Cadastro realizado com sucesso!');
        console.log(response)
        history.push("/dashboard");
    })
  }

  const [medicamento, setMedicamento] = useState("");
  const [medico, setMedico] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [reqDate, setReqDate] = useState(Date);
  const [phone, setPhone] = useState(0);
  return (
    <>
      <Header />
      <Container>
        <Card>
          <Title>CADASTRO DE REQUISIÇÃO</Title>
          <Inputs
            type="text"
            label="Medicamento"
            inputState={medicamento}
            setInputState={setMedicamento}
            ph="Nome do medicamento"
          />
          <Inputs
            type="text"
            label="Médico"
            inputState={medico}
            setInputState={setMedico}
            ph="Nome do Médico"
          />
          <Inputs
            type="number"
            label="Quantidade"
            inputState={quantidade}
            setInputState={setQuantidade}
            ph="1"
          />
          <Inputs
            type="date"
            label="Requisição"
            inputState={reqDate}
            setInputState={setReqDate}
            ph="Data da requisição"
          />
          <Inputs
            type="phone"
            label="Telefone"
            inputState={phone}
            setInputState={setPhone}
            ph="Informe seu telefone"
          />
          <Wrapper>
            
            <Button color="danger" style={{ fontSize: 30 }} onClick={() => alert("falta implementar a função de limpeza")}>Limpar</Button>
            <Button color="success" style={{ fontSize: 30 }} onClick={handleClick}>Cadastrar</Button>


            {/* <Button type='submit' title="Cadastrar" type={true} onClick={() => {alert('aaaaaaaaa')}}/>
            <Button title="Limpar" type={false} /> */}
          </Wrapper>
        </Card>
      </Container>
    </>
  );
}
