import React from "react";
import { Container, Text, Avatar, Wrapper1, Wrapper2 } from "./styles";
import { useGoogleLogout } from 'react-google-login'
import { useHistory } from 'react-router-dom';
import { NavLink } from '../../components/NavLink'

export function Header() {
  
  const { signOut, loaded } = useGoogleLogout({})

  const history = useHistory();
  const username = sessionStorage.getItem("givenName");
  const avatarUrl = sessionStorage.getItem("imageUrl");
  
  function handleClick(){
    return(
      signOut(), 
      history.push("/")
    )
  }
  return (
    <Container>
      <Wrapper1>
        <NavLink href='dashboard' title='Home' />
        <NavLink href='cadastrar' title='Cadastrar' />
        <NavLink href='requisicoes' title='Requisições' />
      </Wrapper1>
      <Wrapper2>
        <Text>Olá, {username}</Text>
        <button onClick={handleClick}>
          <Avatar src={avatarUrl} />
        </button>
      </Wrapper2>
    </Container>
  );
}
