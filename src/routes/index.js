import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


/* examples */
import Trac from '../examples/trac'


/* component samples */

// import ControlOptions from '../components/ControlOptions'
// import MaterialOptions from '../components/Options/MaterialOptions'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Trac} />
      </Switch>
    </BrowserRouter>
  );
}