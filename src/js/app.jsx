import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './modules/home'
import Sobre from './modules/sobre'

let App = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(App, document.getElementById('app'));
