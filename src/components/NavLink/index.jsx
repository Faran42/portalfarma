import React from 'react';

import { Container, Link } from './styled';

export function NavLink({ href, title }) {
  return(
    <Container>
      <Link href={href}>
        {title}
      </Link>
    </Container>
  )
}