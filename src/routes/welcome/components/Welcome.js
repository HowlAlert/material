import React from 'react';
import APPCONFIG from 'constants/Config';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import {PostData} from '../../../services/PostData';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import cookie from 'react-cookies';
import createHistory from 'history/createHashHistory';
import App from '.../../containers/App';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route, Switch, Redirect, Router, BrowserRouter, browserHistory } from 'react-router-dom';
import { session,sessionReducer, sessionService } from 'redux-react-session';
import { createStore, combineReducers } from 'redux';
import Login from '../../app/routes/page/routes/login';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
const mWidthStyle = {
  minWidth: '130px'
};
class Welcome extends React.Component {
  state = {
  open: true,
};

handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};
  constructor(props) {

    super(props);
    this.state = {
      brand: APPCONFIG.brand,
      ResultStatus:'',
};
  }
handleLogout(event){
this.setState({open: false});
//alert("Are you sure you want to logout?");
sessionService.deleteSession(event);
  console.log(sessionService.deleteSession(event));
  console.log(cookie.load('Id'));
  console.log(cookie.load('UserToken'));
  const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/LogoutUser';

     fetch(BaseURL,{
      method: "POST",
      body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken')}),
    headers: new Headers({'content-type': 'application/json'})
    }).
  then((Response)=>Response.json()).
  then((findresponse)=>{
    this.setState({
      ResultStatus:findresponse.LogoutUserResult.ResultStatus,
      Status: this.state.ResultStatus.Status
    }),console.log(this.state.ResultStatus.Status)
    if(this.state.ResultStatus.Status==="1"){
      console.log("success"),
      cookie.remove('Id'),
      cookie.remove('UserToken')
      console.log("removed"),

   this.setState({ redirectToReferrer: true })
    }
    else{
       this.setState({ redirectToReferrer: false })
    }
  })
}

  render() {
    const { match, location } = this.props;
    const actions = [
         <FlatButton
           label="Yes"
           primary
           onClick={(e)=>this.handleLogout(e)}
         />,
         <FlatButton
           label="No"
           primary
           keyboardFocused
           onClick={this.handleClose}
         />,
       ];

const { redirectToReferrer} = this.state
       if (redirectToReferrer) {
         console.log(redirectToReferrer)
             return (
               <Route component={Login}/>
             )
           }
    return (


  <div className="body-inner">
        <div className="card bg-white">
          <div className="card-content">

          <form className="form-horizontal">
          <ul className="nav" ref={(c) => { this.nav = c; }}>
            <li className="nav-header"><span></span></li>

            </ul>
            <img src="assets/images/HOWL.png" alt="HOWL" />
            <p className="hero-title text-center">Welcome</p>
              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText={cookie.load('FirstName')}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText={cookie.load('LastName')}
                    />
                </div>

              </fieldset>
              <div className="card-action no-border text-left">

              </div>

              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="Logout -->"   onClick={this.handleOpen}/>
              <Dialog
                          title="Confirm"
                          actions={actions}
                          modal={false}
                          open={this.state.open}
                          onRequestClose={this.handleClose}
                        >
                          Are you sure you want to logout?
                        </Dialog>


              <div className="divider" />


            </div>


            </form>

          </div>
</div>
  </div>



    );
  }
}

const Page = () => (

  <div className="page-welcome">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <Welcome />
        </div>
      </QueueAnim>
    </div>
  </div>

);



module.exports = Page;
