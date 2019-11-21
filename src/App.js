import React from 'react';
import Heroes from './Components/Heroes/Heroes'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Heroes} />
          {/* <Route path="/hero/:id" component={Hero} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
