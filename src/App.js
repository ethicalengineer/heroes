import React from 'react';
import Heroes from './Components/Heroes/Heroes'
import Hero from './Components/Hero/Hero'

import { createBrowserHistory } from 'history'

import {
  Router,
  Route,
  Switch
} from "react-router-dom";

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Heroes} />
          <Route path="/hero/:id" component={Hero} />
        </Switch>
      </Router>
    );
  }
}

export default App;
