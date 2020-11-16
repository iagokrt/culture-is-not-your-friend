import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


/* examples */
import Trac from '../examples/trac'
import TracTwo from '../examples/tractwo'
import Spin from '../examples/spin'

/* component samples */

// import ControlOptions from '../components/ControlOptions'
// import MaterialOptions from '../components/Options/MaterialOptions'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Spin} />
        <Route path="/two" component={TracTwo} />
      </Switch>
    </BrowserRouter>
  );
}