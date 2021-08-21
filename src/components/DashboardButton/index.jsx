import React from "react";

import { Container, Title, Link } from "./styles";

export function DashboardButton({ href, title }) {
  return (
    <Link href={href}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </Link>
  );
}
