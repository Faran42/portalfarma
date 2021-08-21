import React, { useState } from "react";

import { Container, Card, Title } from "./styles";

import { Inputs } from "./components/Inputs";

export function Cadastro() {
  const [medicamento, setMedicamento] = useState("");
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
        <Inputs type="text" label="Médico" />
        <Inputs type="number" label="Quantidade" />
        <Inputs type="date" label="Requisição" />
        <Inputs type="phone" label="Telefone" />
      </Card>
    </Container>
  );
}
