import React from "react";
import { useEffect } from "react";

import { Container, Input, Label } from "./styles";

export function Inputs({ label, type, inputState, setInputState, ph }) {
  function handleOnChange(event) {
    setInputState(event.target.value);
  }

  useEffect(()=> {
    console.log(`${label}: `, inputState )
  }, [inputState])

  return (
    <Container>
      <Label>{label}:</Label>
      <Input type={type} onChange={(e) => handleOnChange(e)} placeholder={ph} />
    </Container>
  );
}
