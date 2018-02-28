import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
// import Customizer from 'components/Customizer';


// import Dashboard from '../routes/home/'

import mainLogin from '../routes/mainLogin/';
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
let AsyncCameraSetting = loadable({
  loader: () => import('../routes/cam-settings-menu/'),
  loading: LoadingComponent
})
let AsyncCameraAddDevices = loadable({
  loader: () => import('../routes/cam-add-devices/'),
  loading: LoadingComponent
})
let AsyncPack = loadable({
  loader: () => import('../routes/pack/'),
  loading: LoadingComponent
})
let AsyncPackMenu = loadable({
  loader: () => import('../routes/pack-menu/'),
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

let AsyncMap = loadable({
  loader: () => import('../routes/map/'),
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
let AsyncSettingsMenu = loadable({
  loader: () => import('../routes/settings-menu/'),
  loading: LoadingComponent
})
// let AsyncTable = loadable({
//   loader: () => import('../routes/table/'),
//   loading: LoadingComponent
// })
let AsyncLogin = loadable({
  loader: () => import('../routes/login/'),
  loading: LoadingComponent
})
let AsyncPrintcode = loadable({
  loader: () => import('../routes/printcode/'),
  loading: LoadingComponent
})

let AsyncRegister = loadable({
  loader: () => import('../routes/register/'),
  loading: LoadingComponent
})
let AsyncRegister4 = loadable({
  loader: () => import('../routes/register4/'),
  loading: LoadingComponent
})
let AsyncRegister5 = loadable({
  loader: () => import('../routes/register5/'),
  loading: LoadingComponent
})
let AsyncTerms = loadable({
  loader: () => import('../routes/Terms/'),
  loading: LoadingComponent
})
let AsyncPrivacy = loadable({
  loader: () => import('../routes/Privacy/'),
  loading: LoadingComponent
})

let AsyncPackcontact = loadable({
  loader: () => import('../routes/packcontact/'),
  loading: LoadingComponent
})

let AsyncHomeAddress = loadable({
  loader: () => import('../routes/HomeAddress/'),
  loading: LoadingComponent
})

let AsyncCancel = loadable({
  loader: () => import('../routes/cancel/'),
  loading: LoadingComponent
})

let AsyncSilent= loadable({
  loader: () => import('../routes/silent/'),
  loading: LoadingComponent
})

class MainApp extends React.Component {

  render() {
    const { match, location } = this.props;

    return (
      // <div className="main-app-container">
      //   <Sidenav />
      //
      //   <section id="page-container" className="app-page-container" >
      //
      //     <Header />
          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="full-height">
                  {/* <Route path={`${match.url}/dashboard`} component={Dashboard} /> */}
                  <Route path={`${match.url}/mainLogin`} component={mainLogin} />
                  <Route path={`${match.url}/login`} component={AsyncLogin} />
                  <Route path={`${match.url}/printcode`} component={AsyncPrintcode} />
                  <Route path={`${match.url}/home`} component={AsyncHome} />
                  <Route path={`${match.url}/Alerts`} component={AsyncAlert} />
                  <Route path={`${match.url}/Cameras`} component={Asynccameras} />
                  <Route path={`${match.url}/camerasettings`} component={AsyncCameraSetting} />
                  <Route path={`${match.url}/cameraDevices`} component={AsyncCameraAddDevices} />
                  <Route path={`${match.url}/Devices`} component={Asyncdevices} />
                  <Route path={`${match.url}/Pack`} component={AsyncPack} />
                  <Route path={`${match.url}/PackMenu`} component={AsyncPackMenu} />
                  <Route path={`${match.url}/Monitoring`} component={AsyncMonitor} />
                  <Route path={`${match.url}/Help & Support`} component={AsyncHelp} />
                  <Route path={`${match.url}/Settings`} component={AsyncSettings} />
                  <Route path={`${match.url}/settingsmenu`} component={AsyncSettingsMenu} />
                  <Route path={`${match.url}/Logout`} component={AsyncLogout} />
                  <Route path={`${match.url}/pglayout`} component={AsyncPageLayout} />
                  <Route path={`${match.url}/Map`} component={AsyncMap} />

                  {/* <Route path={`${match.url}/table`} component={AsyncTable} /> */}
                 <Route path={`${match.url}/register`} component={AsyncRegister} />
                  <Route path={`${match.url}/register4`} component={AsyncRegister4} />
                   <Route path={`${match.url}/register5`} component={AsyncRegister5} />
                    <Route path={`${match.url}/Terms`} component={AsyncTerms} />
                     <Route path={`${match.url}/Privacy`} component={AsyncPrivacy} />
                     <Route path={`${match.url}/packcontact`} component={AsyncPackcontact} />
                     <Route path={`${match.url}/HomeAddress`} component={AsyncHomeAddress} />
                     <Route path={`${match.url}/Cancel`} component={AsyncCancel} />
                     <Route path={`${match.url}/Silent`} component={AsyncSilent} />

              </div>
            </div>


          </div>
      //   </section>
      //
      //   {/* <Customizer /> */}
      // </div>
    );
  }
}

module.exports = MainApp;
