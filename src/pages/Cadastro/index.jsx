import React, { useState } from "react";

import { Container, Card, Title } from "./styles";

import { Inputs } from "./components/Inputs";

export function Cadastro() {
  const [medicamento, setMedicamento] = useState("");
  const [medico, setMedico] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [reqDate, setReqDate] = useState(Date);
  const [phone, setPhone] = useState(0);
  return (
    <Container>
      <Card>
        <Title>CADASTRO DE REQUISIÇÃO</Title>
        <Inputs
          type="text"
          label="Medicamento"
          inputState={medicamento}
          setInputState={setMedicamento}
        />
        <Inputs
          type="text"
          label="Médico"
          inputState={medico}
          setInputState={setMedico}
        />
        <Inputs
          type="number"
          label="Quantidade"
          inputState={quantidade}
          setInputState={setQuantidade}
        />
        <Inputs
          type="date"
          label="Requisição"
          inputState={reqDate}
          setInputState={setReqDate}
        />
        <Inputs
          type="phone"
          label="Telefone"
          inputState={phone}
          setInputState={setPhone}
        />
      </Card>
    </Container>
  );
}
