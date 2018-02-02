import React from 'react';
import { Route } from 'react-router-dom';

import EditProfile from './routes/editprofile/'
import Notify from './routes/notify/'
import Home from './routes/address/'
import Address from './routes/searchaddress/'
import Cancel from './routes/cancel/'
import VerifyCancelCode from './routes/verifycancel/'
import Silent from './routes/silent/'
import VerifyCode from './routes/verifysilent/'
import Print from './routes/print/'
import Feedback from './routes/feedback/'
import Contact from './routes/contact/'
import Conditions from './routes/Terms/'

const PageLayout = ({ match }) => (
  <div>
    <Route path={`${match.url}/editprofile`} component={EditProfile}/>
    <Route path={`${match.url}/notify`} component={Notify}/>
    <Route path={`${match.url}/address`} component={Home}/>
      <Route path={`${match.url}/searchaddress`} component={Address}/>
    <Route path={`${match.url}/cancel`} component={Cancel}/>
       <Route path={`${match.url}/verifycancel`} component={VerifyCancelCode}/>
    <Route path={`${match.url}/silent`} component={Silent}/>
        <Route path={`${match.url}/verifysilent`} component={VerifyCode}/>
    <Route path={`${match.url}/print`} component={Print}/>
    <Route path={`${match.url}/feedback`} component={Feedback}/>
    <Route path={`${match.url}/contact`} component={Contact}/>
    <Route path={`${match.url}/Terms`} component={Conditions}/>



  </div>
)

export default PageLayout;
