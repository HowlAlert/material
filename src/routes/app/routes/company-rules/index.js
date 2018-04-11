import React from 'react';
import { Route } from 'react-router-dom';

import Conditions from './routes/Terms/'
import Privacy from './routes/privacy-police/'


const PageLayout = ({ match }) => (
  <div>
    <Route path={`${match.url}/Terms`} component={Conditions}/>
    <Route path={`${match.url}/privacy-police`} component={Privacy}/>
  </div>
)

export default PageLayout;
