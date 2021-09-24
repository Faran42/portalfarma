import React from "react";
import LoginComponent from "../../components/LoginComponent";

import { Container, Card, Title } from "./styles";

export function Login() {
  return (
    <Container>
      <Card>
        <Title>Portal web paciente</Title>
        <LoginComponent />
      </Card>
    </Container>
  );
}