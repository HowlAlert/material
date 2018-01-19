import React from 'react';
import { Route } from 'react-router-dom';

import Purchase from './routes/buy-camera/'
import Devices from './routes/add-devices/'
import Connect from './routes/connect/'
import Serial_No from './routes/serial/'
import Wifi from './routes/wifi/'

const CameraDevices = ({ match }) => (
  <div>
    <Route path={`${match.url}/buy-camera`} component={Purchase}/>
    <Route path={`${match.url}/add-devices`} component={Devices}/>
    <Route path={`${match.url}/connect`} component={Connect}/>
    <Route path={`${match.url}/serial`} component={Serial_No}/>
    <Route path={`${match.url}/wifi`} component={Wifi}/>
  </div>
)

export default CameraDevices;
