import React, { useContext } from 'react';
import { AuthContext } from '../../providers/auth';

import { Container, Text, Avatar } from './styles'


export function Header() {
  const username = sessionStorage.getItem('givenName')
  const avatarUrl = sessionStorage.getItem('imageUrl')


  console.log(avatarUrl)
  return(
    <Container>
      <Text>
        {username}
      </Text>
      <Avatar src={avatarUrl}/>
    </Container>
  )
}