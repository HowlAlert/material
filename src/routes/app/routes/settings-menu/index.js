import React from 'react';
import { Route } from 'react-router-dom';

import EditProfile from './routes/editprofile/'
import Notify from './routes/notify/'
import Home from './routes/address/'
import Cancel from './routes/cancel/'
import Silent from './routes/silent/'
import Print from './routes/print/'
import Feedback from './routes/feedback/'
import Contact from './routes/contact/'

const PageLayout = ({ match }) => (
  <div>
    <Route path={`${match.url}/editprofile`} component={EditProfile}/>
    <Route path={`${match.url}/notify`} component={Notify}/>
    <Route path={`${match.url}/address`} component={Home}/>
    <Route path={`${match.url}/cancel`} component={Cancel}/>
    <Route path={`${match.url}/silent`} component={Silent}/>
    <Route path={`${match.url}/print`} component={Print}/>
    <Route path={`${match.url}/feedback`} component={Feedback}/>
    <Route path={`${match.url}/contact`} component={Contact}/>

  </div>
)

export default PageLayout;
