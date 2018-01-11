"use strict";

import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter, HashRouter, NavLink,
    Switch, Route
} from 'react-router-dom';
// import { Router, HashRouter } from 'react-router';

// import PagesRouter from './pages/PagesRouter';

// import PagesLinks from './pages/PagesLinks';
import './pages/PagesLinks.css';

// is persistent during the all applications lifecycle
const Header = () => (
    <div>
        <NavLink to="/company"
                className="PageLink"
                activeClassName="ActivePageLink">
            О компании
        </NavLink>
        <NavLink to="/clients"
                className="PageLink"
                activeClassName="ActivePageLink">
            Клиенты
        </NavLink>
    </div>
);

import MobileClients from './components/MobileClients';
import appData from './appData';

const FullClients = ({ match }) => {
    console.info('MATCH FullClients:', match); // !debug only
    return (
        <div>
            <MobileClients
                name={appData.companyName}
                clients={appData.clientsArr}
            />
        </div>
    );
};
const Client = ({ match }) => {
    console.info('MATCH client:', match); // !debug only
    return (
        <div>
            Certain client
        </div>
    )
};

const Clients = ({ match }) => {
    return (
        <Switch>
            <Route exact path='/clients' component={FullClients}/>
            <Route path='/clients/:clid' component={Client}/>
        </Switch>
    )
};

import Home from './pages/Page_About';
import Company from './pages/Page_Company';

// is dynamic
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/clients' component={Clients}/>
            <Route path='/company' component={Company}/>
        </Switch>
    </main>
);

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);

render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('container') );

// <div>
      // <PagesLinks />
      // <PagesRouter />