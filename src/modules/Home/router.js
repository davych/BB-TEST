import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from './Detail';

export default function Home() {
  return (
    <Switch>
      <Route exact path="/:id">
        <Detail />
      </Route>
    </Switch>
  );
}
