import React from 'react'
import Hero from './Components/Hero/Hero'

import { createBrowserHistory } from 'history'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import {
  Router,
  Route,
  Switch
} from "react-router-dom"

import rootReducer from './Reducers'
import HeroesContainer from './Containers/HeroesContainer'

const store = createStore(rootReducer, applyMiddleware(logger, thunk))
const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HeroesContainer} />
            <Route path="/hero/:id" component={Hero} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App
