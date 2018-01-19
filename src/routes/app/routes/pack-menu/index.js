
import React from 'react';
import { Route } from 'react-router-dom';

import PackPage from './routes/components/'
import Howls_Me from './routes/howls_me/'
import Howls_Pack from './routes/howls_pack/'


const Pack = ({ match }) => (
  <div>
    <Route path={`${match.url}/components`} component={PackPage}/>
    <Route path={`${match.url}/howls_me`} component={Howls_Me}/>
    <Route path={`${match.url}/howls_pack`} component={Howls_Pack}/>
  </div>
)

export default Pack;
