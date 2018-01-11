import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
// import { Route, Switch } from 'react-router';

import Page_About from './Page_About';
import Page_Company from './Page_Company';
import PageClients from './Page_Clients';
import Page_Client from './Page_Client';

const PagesRouter =() => (
  <div>
      <Route exact path="/" component={Page_About} />
      <Route path="/clients" component={PageClients} />
      <Route path="/company" component={Page_Company} />
  </div>
);


// <Route path="/clients/:clid" component={Page_Client} />
//      <Switch>

export default PagesRouter;
