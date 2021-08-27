import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Cadastro } from '../pages/Cadastro';
import { Vizualizar } from '../pages/Vizualizar';
import { Login } from '../pages/Login';

function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/cadastrar" exact component={Cadastro} />
      <Route path="/vizualiziar" exact component={Vizualizar} />
      
    </Switch>
  );
} 

export default Routes;