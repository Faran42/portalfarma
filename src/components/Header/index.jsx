import React, { useContext } from 'react';
import { AuthContext } from '../../providers/auth';

import { Container, Text } from './styles'


export function Header() {
  const { user } = useContext(AuthContext)

  console.log('User.name: ', user.name)

  return(
    <Container>
      <Text>
        {user.name}
      </Text>
    </Container>
  )
}