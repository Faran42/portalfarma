import React from "react";

import { Container, Title, Link } from "./styles";

export function Button({ href, title, type }) {
  return (
    <Container buttonbgc={type} >      
        <Title>{title}</Title>
    </Container>
  );
}
