import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


/* examples */

import Dark from '../examples/dark';
import Lockcam from '../examples/lockcam';
import multipleMashes from '../examples/multipleMashes'

/* component samples */

// import ControlOptions from '../components/ControlOptions'
// import MaterialOptions from '../components/Options/MaterialOptions'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dark} />
        <Route path="/3d" component={multipleMashes} />
      </Switch>
    </BrowserRouter>
  );
}