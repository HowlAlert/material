import React from 'react';
import { Route } from 'react-router-dom';


import PackContact from './routes/packcontact/'
import OtherDevices from './routes/other-devices/'
import Terms from './routes/terms-service/'
import Privacy from './routes/privacy-police/'
const PageLayout = ({ match }) => (
  <div>
    <Route path={`${match.url}/packcontact`} component={PackContact}/>
    <Route path={`${match.url}/other-devices`} component={OtherDevices}/>
    <Route path={`${match.url}/terms-service`} component={Terms}/>
    <Route path={`${match.url}/privacy-police`} component={Privacy}/>
  </div>
)

export default PageLayout;
