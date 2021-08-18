import React from 'react';

import { Container } from './styles'

import { Inputs } from './components/Inputs'

export function Cadastro() {
  return(
    <Container>
      <Inputs  label='Medicamento' />
      <Inputs  label='Médico' />
      <Inputs  label='Quantidade' />
      <Inputs  label='Data (Requisição)' />
      <Inputs  label='Telefone' />
      
    </Container>
  )

}