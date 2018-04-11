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
import PageRegister from 'routes/register/'
import PageRegister5 from 'routes/register5/'
import PagePrintcode from 'routes/printcode/'
import PagePack from 'routes/pack/'
import PageFeedback from 'routes/feedback/'
import PageVerifyPhoneCode from 'routes/verifyPhoneCode/'
import PageMainLogin from 'routes/mainLogin/'
import PageMotionDetection from 'routes/motion-detection/'
import PagePackcontact from 'routes/packcontact/'
import PageHomeAddress from 'routes/HomeAddress/'
import PageCancel from 'routes/cancel/'
import PageSilent from 'routes/silent/'
import PagePrivacy from 'routes/Privacy/'
import PageTerms from 'routes/Terms/'
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
return ( <Redirect to={'/mainLogin'}/> );
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
<Route exact path="/register5" component={PageRegister5} />
<Route exact path="/printcode" component={PagePrintcode} />
<Route exact path="/pack" component={PagePack} />
<Route exact path="/feedback" component={PageFeedback} />
<Route exact path="/verifyPhoneCode" component={PageVerifyPhoneCode} />
<Route exact path="/mainLogin" component={PageMainLogin} />
<Route exact path="/motionDetection" component={PageMotionDetection} />
<Route exact path="/forgot-password" component={PageForgotPassword} />
<Route exact path="/packcontact" component={PagePackcontact} />
<Route exact path="/HomeAddress" component={PageHomeAddress} />
<Route exact path="/cancel" component={PageCancel} />
<Route exact path="/silent" component={PageSilent} />
<Route exact path="/Terms" component={PageTerms} />
<Route exact path="/Privacy" component={PagePrivacy} />
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
