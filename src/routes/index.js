import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Trac from '../examples/trac';
//import Round from '../examples/round';
//import Dark from '../examples/dark';
//import Spin from '../examples/spin';
//import TracTwo from '../examples/tractwo';
//import Lockcam from '../examples/lockcam';
import Sample from '../examples/aanewbie';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Trac} />
        <Route path="/n00b" component={Sample} />
      </Switch>
    </BrowserRouter>
  );
}