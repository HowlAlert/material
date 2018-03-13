import React from 'react';
import { Route } from 'react-router-dom';

import  History from './routes/camera-history/'
import  MotionDetection from './routes/motion-detection/'
// import  SettingsList from './routes/settings-menu/'
// import  TimeChange from './routes/time-change/'
import  Schedule from './routes/schedule/'
import  Devices from './routes/add-devices/'
import  Connect from './routes/purchase/'
const PageLayout = ({ match }) => (
  <div>
    <Route path={`${match.url}/camera-history`} component={History}/>
    <Route path={`${match.url}/motion-detection`} component={MotionDetection}/>
    {/* <Route path={`${match.url}/settings-menu`} component={SettingsList}/>
    <Route path={`${match.url}/time-change`} component={TimeChange}/> */}
    <Route path={`${match.url}/schedule`} component={Schedule}/>
    <Route path={`${match.url}/add-devices`} component={Devices}/>
    <Route path={`${match.url}/purchase`} component={Connect}/>
  </div>
)

export default PageLayout;
