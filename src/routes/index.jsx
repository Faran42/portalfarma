import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Cadastro } from '../pages/Cadastro';
import { Requisicoes } from '../pages/Requisicoes';
import { Login } from '../pages/Login';

function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/cadastrar" exact component={Cadastro} />
      <Route path="/requisicoes" exact component={Requisicoes} />
      
    </Switch>
  );
} 

export default Routes;