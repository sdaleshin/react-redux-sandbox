import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import {Provider} from 'react-redux';
import {Router, Redirect, Route, browserHistory} from 'react-router';
import {defaultRoute} from '../config/config'

import App from '../containers/App';
import configureStore from '../store/configureStore';

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
injectTapEventPlugin();

const store = configureStore();

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Redirect from="/" to={defaultRoute}/>
            <Route path="/:filter" component={App}/>
        </Router>
    </Provider>,
    document.getElementById("root")
);
