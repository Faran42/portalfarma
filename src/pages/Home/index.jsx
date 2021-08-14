import React from 'react';

import { Container, Wrapper1, Wrapper2 } from './styles'

import { Header } from '../../components/Header'
import { StatsPanel } from '../../components/StatsPanel'
import { DashboardButton } from '../../components/DashboardButton';

export function Home() {
  return(
    <Container>
      <Header />
      <Wrapper1>
        <StatsPanel />
        <Wrapper2>
          <DashboardButton href="cadastrar" title="Cadastrar" />
          <DashboardButton href="vizualizar" title="Vizualizar" />
        </Wrapper2>
      </Wrapper1>
    </Container>
  )
}