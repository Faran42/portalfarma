import React from "react";

import { Container, Input, Label } from "./styles";

export function Inputs({ label, type, inputState, setInputState }) {
  
  return (
    <Container>
      <Label>{label}:</Label>
      <Input type={type} onChange={(e) => console.log(e.target.value)}/>
    </Container>
  );
}
