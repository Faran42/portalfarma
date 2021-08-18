import React from 'react';

import { Container, Input, Label } from './styles'

export function Inputs({ label}) {
  return(
    <Container>
      <Label>
        {label}: 
      </Label>
     <Input />
    </Container>
  )

}