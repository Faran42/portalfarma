import React, { useState } from "react";

import { Container, Card, Title } from "./styles";

import { Inputs } from "./components/Inputs";
import { Header } from "../../components/Header";

export function Cadastro() {
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
        </Card>
      </Container>
    </>
  );
}
