import React from 'react';

import { Container, Text } from './styles'


export function Header() {
  console.log('header: ',window.username)
  return(
    <Container>
      <Text>
        {window.username}
      </Text>
    </Container>
  )
}