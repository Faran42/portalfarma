import React from "react";

import { Container, Title, Link } from "./styles";

export function GenericButton({ href, title, type }) {
  return (
    <Container buttonbgc={type} >
      <Link href={href}>
        <Title>{title}</Title>
      </Link>
    </Container>
  );
}
