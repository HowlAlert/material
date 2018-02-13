import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
//import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import Customizer from 'components/Customizer';


import Dashboard from '../routes/home/'
function LoadingComponent() {
  return <div></div>;
}
let AsyncHome = loadable({
  loader: () => import('../routes/home/'),
  loading: LoadingComponent
})
let AsyncAlert = loadable({
  loader: () => import('../routes/Alerts/'),
  loading: LoadingComponent
})

let Asyncdevices = loadable({
  loader: () => import('../routes/devices/'),
  loading: LoadingComponent
})
let Asynccameras = loadable({
  loader: () => import('../routes/cameras/'),
  loading: LoadingComponent
})
let AsyncPack = loadable({
  loader: () => import('../routes/pack/'),
  loading: LoadingComponent
})
let AsyncHelp = loadable({
  loader: () => import('../routes/help/'),
  loading: LoadingComponent
})
let AsyncMonitor = loadable({
  loader: () => import('../routes/monitor/'),
  loading: LoadingComponent
})
let AsyncSettings = loadable({
  loader: () => import('../routes/appsettings/'),
  loading: LoadingComponent
})
let AsyncLogout = loadable({
  loader: () => import('../routes/signout/'),
  loading: LoadingComponent
})
let AsyncPageLayout = loadable({
  loader: () => import('../routes/page-layout/'),
  loading: LoadingComponent
})
let AsyncTable = loadable({
  loader: () => import('../routes/table/'),
  loading: LoadingComponent
})


class MainApp extends React.Component {

  render() {
    const { match, location } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">


          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="full-height">
                  <Route path={`${match.url}/dashboard`} component={Dashboard} />
                  <Route path={`${match.url}/home`} component={AsyncHome} />
                  <Route path={`${match.url}/Alerts`} component={AsyncAlert} />
                  <Route path={`${match.url}/Cameras`} component={Asynccameras} />
                  <Route path={`${match.url}/Devices`} component={Asyncdevices} />
                  <Route path={`${match.url}/Pack`} component={AsyncPack} />
                  <Route path={`${match.url}/Monitoring`} component={AsyncMonitor} />
                  <Route path={`${match.url}/Help & Support`} component={AsyncHelp} />
                  <Route path={`${match.url}/Settings`} component={AsyncSettings} />
                  <Route path={`${match.url}/Logout`} component={AsyncLogout} />
                  <Route path={`${match.url}/pglayout`} component={AsyncPageLayout} />
                  <Route path={`${match.url}/table`} component={AsyncTable} />

              </div>
            </div>

          
          </div>
        </section>

        <Customizer />
      </div>
    );
  }
}

module.exports = MainApp;
