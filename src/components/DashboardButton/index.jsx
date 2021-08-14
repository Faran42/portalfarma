import React from 'react';

import { Container } from './styles';

export function DashboardButton({ href, title }) {
  return (
    <Container>
      <a href={href} >
        {title}
      </a>
    </Container>
  )  
}

