import React from 'react';
import { Route } from 'react-router-dom';


import PackContact from './routes/packcontact/'
import OtherDevices from './routes/other-devices/'
import Terms from './routes/terms-service/'
import Privacy from './routes/privacy-police/'
import AmazonDevices from './routes/amazon-device/'
import GoogleDevices from './routes/google-device/'
const PageLayout = ({ match }) => (
  <div>
    <Route path={`${match.url}/packcontact`} component={PackContact}/>
    <Route path={`${match.url}/other-devices`} component={OtherDevices}/>
    <Route path={`${match.url}/terms-service`} component={Terms}/>
    <Route path={`${match.url}/privacy-police`} component={Privacy}/>
    <Route path={`${match.url}/amazon-device`} component={AmazonDevices}/>
    <Route path={`${match.url}/google-device`} component={GoogleDevices}/>
  </div>
)

export default PageLayout;
