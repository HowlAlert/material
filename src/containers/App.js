import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainApp from 'routes/app/'
import Page404 from 'routes/404/'
import Page500 from 'routes/500/'
import PageConfirmEmail from 'routes/confirm-email/'
import PageForgotPassword from 'routes/forgot-password/'
import PageFullscreen from 'routes/fullscreen/'
import PageLockScreen from 'routes/lock-screen/'
import PageLogin from 'routes/login/'
import PageWelcome from 'routes/welcome/'
import PageRegister from 'routes/register/'
import PageRegister1 from 'routes/register1/'
import PageRegister2 from 'routes/register2/'
import PageRegister3 from 'routes/register3/'
import PageRegister4 from 'routes/register4/'
import PageRegister5 from 'routes/register5/'
import PagePrintcode from 'routes/printcode/'
import PageSchedule from 'routes/schedule/'
import PageScheduling from 'routes/scheduling/'
import PagePack from 'routes/pack/'
import PageFeedback from 'routes/feedback/'
import PageEditprofile from 'routes/editprofile/'
import PageEditPhoneNumber from 'routes/editPhoneNumber/'
import PageVerifyPhoneCode from 'routes/verifyPhoneCode/'
import PageMainLogin from 'routes/mainLogin/'
import PageMotionDetection from 'routes/motion-detection/'
import 'styles/bootstrap.scss';
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';
import 'styles/app.scss';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import grayTheme from './themes/grayTheme';



class App extends Component {
  componentDidMount() {}

  render() {
    const { match, location, layoutBoxed, navCollapsed, navBehind, fixedHeader, sidebarWidth, theme } = this.props;
    let materialUITheme;
    switch (theme) {
      case 'gray':
        materialUITheme = grayTheme;
        break;
      case 'dark':
        materialUITheme = darkTheme;
        break;
      default:
        materialUITheme = lightTheme;
    }

    const isRoot = location.pathname === '/' ? true : false;
    if (isRoot) {
      return ( <Redirect to={'/app/mainLogin'}/> );
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(materialUITheme)}>
        <div id="app-inner">
          <div className="preloaderbar hide"><span className="bar" /></div>
          <div
            className={classnames('app-main full-height', {
              'fixed-header': fixedHeader,
              'nav-collapsed': navCollapsed,
              'nav-behind': navBehind,
              'layout-boxed': layoutBoxed,
              'theme-gray': theme === 'gray',
              'theme-dark': theme === 'dark',
              'sidebar-sm': sidebarWidth === 'small',
              'sidebar-lg': sidebarWidth === 'large'})
          }>
            <Route path={`${match.url}app`} component={MainApp} />
            <Route exact path="/404" component={Page404} />
           <Route exact path="/500" component={Page500} />
           <Route exact path="/login" component={PageLogin} />
           <Route exact path="/welcome" component={PageWelcome} />
            <Route exact path="/register" component={PageRegister} />
            <Route exact path="/register1" component={PageRegister1} />
            <Route exact path="/register2" component={PageRegister2} />
            <Route exact path="/register3" component={PageRegister3} />
            <Route exact path="/register4" component={PageRegister4} />
            <Route exact path="/register5" component={PageRegister5} />
            <Route exact path="/printcode" component={PagePrintcode} />
            <Route exact path="/scheduling" component={PageScheduling} />
            <Route exact path="/schedule" component={PageSchedule} />
            <Route exact path="/pack" component={PagePack} />
            <Route exact path="/feedback" component={PageFeedback} />
            <Route exact path="/editprofile" component={PageEditprofile} />
            <Route exact path="/editPhoneNumber" component={PageEditPhoneNumber} />
            <Route exact path="/verifyPhoneCode" component={PageVerifyPhoneCode} />
            <Route exact path="/mainLogin" component={PageMainLogin} />
            <Route exact path="/motionDetection" component={PageMotionDetection} />

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  layoutBoxed: state.settings.layoutBoxed,
  navCollapsed: state.settings.navCollapsed,
  navBehind: state.settings.navBehind,
  fixedHeader: state.settings.fixedHeader,
  sidebarWidth: state.settings.sidebarWidth,
  theme: state.settings.theme,
});

module.exports = connect(
  mapStateToProps
)(App);
