import React from "react";
import { Container, Text, Avatar, Wrapper1, Wrapper2 } from "./styles";

import { NavLink } from '../../components/NavLink'

export function Header() {
  const username = sessionStorage.getItem("givenName");
  const avatarUrl = sessionStorage.getItem("imageUrl");
  
  return (
    <Container>
      <Wrapper1>
        <NavLink href='dashboard' title='Home'/>
        <NavLink href='cadastrar' title='Cadastrar'/>
        <NavLink href='requisicoes' title='Requisições'/>
      </Wrapper1>
      <Wrapper2>
        <Text>Olá, {username}</Text>
        <Avatar src={avatarUrl} />
      </Wrapper2>
    </Container>
  );
}
