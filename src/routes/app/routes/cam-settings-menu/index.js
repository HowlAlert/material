import React from 'react';
import { Route } from 'react-router-dom';

import  History from './routes/camera-history/'
import  Settings from './routes/settings/'

const PageLayout = ({ match }) => (
  <div>
    <Route path={`${match.url}/camera-history`} component={History}/>
    <Route path={`${match.url}/settings`} component={Settings}/>
  </div>
)

export default PageLayout;
