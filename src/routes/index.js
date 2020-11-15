import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


/* examples */
import Trac from '../examples/trac';
import Round from '../examples/round';
<<<<<<< HEAD
//import Dark from '../examples/dark';
//import Spin from '../examples/spin';
//import TracTwo from '../examples/tractwo';
import Lockcam from '../examples/lockcam';
=======
import Dark from '../examples/dark';
import Spin from '../examples/spin';
import TracTwo from '../examples/tractwo';
import Lockcam from '../examples/lockcam';
import multipleMashes from '../examples/multipleMashes'


/* component samples */

// import ControlOptions from '../components/ControlOptions'
// import MaterialOptions from '../components/Options/MaterialOptions'
>>>>>>> reform

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Trac} />
<<<<<<< HEAD
        <Route path="/two" component={Round} />
        <Route path="/threejs" component={Lockcam} />
=======
        <Route path="/one" component={Round} />
        <Route path="/two" component={Dark} />
        <Route path="/threejs" component={Spin} />
        <Route path="/four" component={TracTwo} />
        <Route path="/3d" component={multipleMashes} />
>>>>>>> reform
      </Switch>
    </BrowserRouter>
  );
}