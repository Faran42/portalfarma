import React from "react";
import { useEffect } from "react";

import { Container, Input, Label } from "./styles";

export function Inputs({ label, type, inputState, setInputState, ph }) {
  function handleOnChange(event) {
    setInputState(event.target.value);
  }

  useEffect(() => {
    console.log(`${label}: `, inputState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputState]);

  return (
    <Container>
      <Label>{label}:</Label>
      <Input type={type} onChange={(e) => handleOnChange(e)} placeholder={ph} />
    </Container>
  );
}
