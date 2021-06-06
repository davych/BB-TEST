import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from './Detail';

export default function Eposide() {
  return (
    <Switch>
      <Route exact path="/eposide/:id">
        <Detail />
      </Route>
    </Switch>
  );
}
