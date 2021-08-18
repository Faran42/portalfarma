import React from 'react';
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