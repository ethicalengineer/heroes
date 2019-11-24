import React from 'react';
import Container from '@material-ui/core/Container';
import {Route, Router, Switch} from 'react-router-dom';
import Heroes from './Components/Heroes/Heroes';
import Hero from './Components/Hero/Hero';
import {createBrowserHistory} from 'history';
import './app.css';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    container: {
        padding: theme.spacing(2),
    }
});

const history = createBrowserHistory();

class App extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Container className={classes.container}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Heroes}/>
                        <Route path="/hero/:id" component={Hero}/>
                    </Switch>
                </Router>
            </Container>
        );
    }

}

export default withStyles(styles)(App);
