import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Cadastro } from '../pages/Cadastro';
import { Login } from '../pages/Login';

function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Home} />
      <Route path="/cadastrar" exact component={Cadastro} />
      
    </Switch>
  );
} 

export default Routes;