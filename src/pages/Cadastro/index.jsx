import React, { useState } from "react";

import { Container, Card, Title, Wrapper } from "./styles";

import { Inputs } from "./components/Inputs";
import { Header } from "../../components/Header";
import { Button } from "./components/Button";

import api from '../../config/api';

export function Cadastro() {

   function handleClick() {
    
    api.post('requisicao', {
      id_cadastro: 77,
      medicamento: medicamento,
      medico: medico,
      quantidade: quantidade,
      id_login: sessionStorage.getItem('googleId'),
      create_date: reqDate
    }).then(response => {
      console.log(response)
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
            <button onClick={handleClick}>Teste</button>


            {/* <Button type='submit' title="Cadastrar" type={true} onClick={() => {alert('aaaaaaaaa')}}/>
            <Button title="Limpar" type={false} /> */}
          </Wrapper>
        </Card>
      </Container>
    </>
  );
}
