import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Trac from '../examples/trac';
import Round from '../examples/round';
//import Dark from '../examples/dark';
//import Spin from '../examples/spin';
//import TracTwo from '../examples/tractwo';
import Lockcam from '../examples/lockcam';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Trac} />
        <Route path="/two" component={Round} />
        <Route path="/threejs" component={Lockcam} />
      </Switch>
    </BrowserRouter>
  );
}