import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
// import Customizer from 'components/Customizer';


// import Dashboard from '../routes/home/'

import home from '../routes/home/';
function LoadingComponent() {
  return <div></div>;
}

let AsyncAlert = loadable({
  loader: () => import('../routes/Alerts/'),
  loading: LoadingComponent
})
let AsyncSettings = loadable({
  loader: () => import('../routes/appsettings/'),
  loading: LoadingComponent
})
let AsyncCameraSetting = loadable({
  loader: () => import('../routes/cam-settings-menu/'),
  loading: LoadingComponent
})
let Asynccameras = loadable({
  loader: () => import('../routes/cameras/'),
  loading: LoadingComponent
})
let Asyncdevices = loadable({
  loader: () => import('../routes/devices/'),
  loading: LoadingComponent
})
let AsyncHelp = loadable({
  loader: () => import('../routes/help/'),
  loading: LoadingComponent
})
let AsyncHome = loadable({
  loader: () => import('../routes/home/'),
  loading: LoadingComponent
})
let AsyncMap = loadable({
  loader: () => import('../routes/map/'),
  loading: LoadingComponent
})
let AsyncMonitor = loadable({
  loader: () => import('../routes/monitor/'),
  loading: LoadingComponent
})

let AsyncPack = loadable({
  loader: () => import('../routes/pack'),
  loading: LoadingComponent
})

// let AsyncPageLayout = loadable({
//   loader: () => import('../routes/page-layout/'),
//   loading: LoadingComponent
// })

let AsyncRules = loadable({
  loader: () => import('../routes/company-rules/'),
  loading: LoadingComponent
})

let AsyncCard = loadable({
  loader: () => import('../routes/card-details/'),
  loading: LoadingComponent
})

let AsyncAlpha = loadable({
  loader: () => import('../routes/alpha/'),
  loading: LoadingComponent
})

// let AsyncCameraAddDevices = loadable({
//   loader: () => import('../routes/cam-add-devices/'),
//   loading: LoadingComponent
// })
// let AsyncLogout = loadable({
//   loader: () => import('../routes/signout/'),
//   loading: LoadingComponent
// })


// let AsyncTable = loadable({
//   loader: () => import('../routes/table/'),
//   loading: LoadingComponent
// })
// let AsyncLogin = loadable({
//   loader: () => import('../routes/login/'),
//   loading: LoadingComponent
// })
// let AsyncPrintcode = loadable({
//   loader: () => import('../routes/printcode/'),
//   loading: LoadingComponent
// })
//
// let AsyncRegister = loadable({
//   loader: () => import('../routes/register/'),
//   loading: LoadingComponent
// })
// let AsyncRegister4 = loadable({
//   loader: () => import('../routes/register4/'),
//   loading: LoadingComponent
// })
// let AsyncRegister5 = loadable({
//   loader: () => import('../routes/register5/'),
//   loading: LoadingComponent
// })
// let AsyncTerms = loadable({
//   loader: () => import('../routes/Terms/'),
//   loading: LoadingComponent
// })
// let AsyncPrivacy = loadable({
//   loader: () => import('../routes/Privacy/'),
//   loading: LoadingComponent
// })
//
// let AsyncPackcontact = loadable({
//   loader: () => import('../routes/packcontact/'),
//   loading: LoadingComponent
// })
//
// let AsyncHomeAddress = loadable({
//   loader: () => import('../routes/HomeAddress/'),
//   loading: LoadingComponent
// })
//
// let AsyncCancel = loadable({
//   loader: () => import('../routes/cancel/'),
//   loading: LoadingComponent
// })
//
// let AsyncSilent= loadable({
//   loader: () => import('../routes/silent/'),
//   loading: LoadingComponent
// })

class MainApp extends React.Component {



  render() {
    const { match, location } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container" >

          <Header />
          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="full-height">
                  {/* <Route path={`${match.url}/dashboard`} component={Dashboard} /> */}
                  {/* <Route path="/" component={mainLogin} /> */}
                  {/* <Route path={`${match.url}/mainLogin`} component={mainLogin} />
                  <Route path={`${match.url}/login`} component={AsyncLogin} /> */}
                  {/* <Route path={`${match.url}/printcode`} component={AsyncPrintcode} /> */}
                  <Route path={`${match.url}/home`} component={AsyncHome} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/Alerts`} component={AsyncAlert} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/Cameras`} component={Asynccameras} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/camerasettings`} component={AsyncCameraSetting} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/Card-Details`} component={AsyncCard} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/Devices`} component={Asyncdevices} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/Pack`} component={AsyncPack} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/Monitoring`} component={AsyncMonitor} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/Help & Support`} component={AsyncHelp} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/Settings`} component={AsyncSettings} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/alpha`} component={AsyncAlpha} onEnter={this.requireAuth}/>
                  <Route path={`${match.url}/Company-Rules`} component={AsyncRules} onEnter={this.requireAuth}/>
                  {/* <Route path={`${match.url}/pglayout`} component={AsyncPageLayout} onEnter={this.requireAuth}/> */}
                  <Route path={`${match.url}/Map`} component={AsyncMap} onEnter={this.requireAuth}/>

                  {/* <Route path={`${match.url}/table`} component={AsyncTable} /> */}
                 {/* <Route path={`${match.url}/register`} component={AsyncRegister} />
                  <Route path={`${match.url}/register4`} component={AsyncRegister4} />
                   <Route path={`${match.url}/register5`} component={AsyncRegister5} />
                    <Route path={`${match.url}/Terms`} component={AsyncTerms} />
                     <Route path={`${match.url}/Privacy`} component={AsyncPrivacy} />
                     <Route path={`${match.url}/packcontact`} component={AsyncPackcontact} />
                     <Route path={`${match.url}/HomeAddress`} component={AsyncHomeAddress} />
                     <Route path={`${match.url}/Cancel`} component={AsyncCancel} />
                     <Route path={`${match.url}/Silent`} component={AsyncSilent} /> */}

              </div>
            </div>
              <Footer />

          </div>
        </section>


     </div>
    );
  }
}

module.exports = MainApp;
