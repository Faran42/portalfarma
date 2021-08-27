import React from "react";

import { Container, Title, Link } from "./styles";

export function DashboardButton({ href, title }) {
  return (
    <Container>
      <Link href={href}>
        <Title>{title}</Title>
      </Link>
    </Container>
  );
}
