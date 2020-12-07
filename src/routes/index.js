import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


/* examples */
import Trac from '../examples/trac';
import Round from '../examples/round';
import Dark from '../examples/dark';
import Spin from '../examples/spin';
import TracTwo from '../examples/tractwo';
import Lockcam from '../examples/lockcam';
import multipleMashes from '../examples/multipleMashes'


/* component samples */

// import ControlOptions from '../components/ControlOptions'
// import MaterialOptions from '../components/Options/MaterialOptions'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Trac} />
        <Route path="/edition-v1" component={Round} />
        <Route path="/edition-v2" component={Dark} />
        <Route path="/edition-v3" component={Spin} />
        <Route path="/edition-v4" component={TracTwo} />
        <Route path="/edition-v5" component={Lockcam} />
        <Route path="/edition-v6" component={multipleMashes} />


      </Switch>
    </BrowserRouter>
  );
}