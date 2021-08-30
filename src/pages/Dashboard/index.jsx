import React from 'react';

import { Container, Wrapper1, Wrapper2 } from './styles'

import { Header } from '../../components/Header'
import { StatsPanel } from '../../components/StatsPanel'

export function Dashboard() {
  return(
    <Container>
      <Header />
      <Wrapper1>
        <Wrapper2>
         
        </Wrapper2>
        <StatsPanel />
      </Wrapper1>
    </Container>
  )
}