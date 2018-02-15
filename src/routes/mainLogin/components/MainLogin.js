import React from 'react';
import QueueAnim from 'rc-queue-anim';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {Redirect} from 'react-router-dom';
import APPCONFIG from 'constants/Config';
import cookie from 'react-cookies';
import { sessionReducer, sessionService } from 'redux-react-session';
import PageWelcome from 'routes/welcome/';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route, Switch, Router, BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
const Hero = () => (
  <div className="text-center">
  <img src="assets/images/HOWL.png" alt="HOWL" />
  <h6 className="hero-title"><b>Welcome</b></h6><div className="divider" /><div className="divider" />
  </div>
);
const mWidthStyle = {
  minWidth: '130px'
};

class MainLogin extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      brand: APPCONFIG.brand,
      Email:'',
      Fname:'',
      Lname:'',
      GoogleID:'',
      GetUser:'',
      ResultStatus:''
    };
  }

  handleGoogleLogin(response) {
    console.log(response);
    //first name
      console.log(response.w3.ofa);
      //last name
      console.log(response.w3.wea);
      console.log(response.googleId);
      console.log(response.profileObj.email);

      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/LoginWithGoogle';
      fetch(BaseURL,{
       method: "POST",
       body: JSON.stringify({'FirstName':response.w3.ofa,'LastName':response.w3.wea,'Email':response.profileObj.email,'GoogleID':response.googleId,'DeviceToken':'','InviteCode':'','TimeZone':''}),
      headers: new Headers({'content-type': 'application/json'})
      }).
      then((Response)=>Response.json()).
      then((findresponse)=>{
        this.setState({
          GetUser:findresponse.LoginWithGoogleResult.GetUser,
          ResultStatus:findresponse.LoginWithGoogleResult.ResultStatus,
        });console.log(this.state.GetUser);
        if(this.state.ResultStatus.Status==="1"){
          console.log("status"),
          cookie.save('Id', this.state.GetUser.ID);
          cookie.save('FirstName', response.w3.ofa);
          cookie.save('LastName', response.w3.wea);
          cookie.save('UserToken', this.state.GetUser.UserToken);
       this.setState({ redirectToReferrer: true })
        }
        else{
           this.setState({ redirectToReferrer: false })
        }

      });
    }


    handleFacebookLogin (response) {
      console.log(response);
      console.log(response.first_name);
      console.log(response.last_name);
      console.log(response.id);
      console.log(response.email);

      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/LoginWithFacebook';

         fetch(BaseURL,{
          method: "POST",
          body: JSON.stringify({'FirstName':response.first_name,'LastName':response.last_name,'Email':response.email,'FacebookID':response.id,'DeviceToken':'','InviteCode':'','TimeZone':''}),
        headers: new Headers({'content-type': 'application/json'})
        }).
      then((Response)=>Response.json()).
      then((findresponse)=>{
        this.setState({
          GetUser:findresponse.LoginWithFacebookResult.GetUser,
          ResultStatus:findresponse.LoginWithFacebookResult.ResultStatus,
        })
        if(this.state.ResultStatus.Status==="1"){
          console.log("status"),
          cookie.save('Id', this.state.GetUser.ID);
          cookie.save('FirstName', response.first_name);
          cookie.save('LastName', response.last_name);
          cookie.save('UserToken', this.state.GetUser.UserToken);
       this.setState({ redirectToReferrer: true })
        }
        else{
           this.setState({ redirectToReferrer: false })
        }

      });
    }




  render (){
    const reducers = {
      // ... your other reducers here ...
      session: sessionReducer
    };
    const reducer = combineReducers(reducers);
    const store = createStore(reducer);

    sessionService.initSessionService(store);
    const { redirectToReferrer} = this.state

    if (redirectToReferrer) {
      const options = { redirectToReferrer: true, redirectPath: '/', driver: 'COOKIES' };
      sessionService.initSessionService(store, options)
        .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
        .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));

      console.log(redirectToReferrer)
          return (
            <Redirect to="app/dashboard" />
          )
        }

    return(
      <div classNa  me="body-inner">
            <div className="card bg-white">
              <div className="card-content">
              <ul className="nav" ref={(c) => { this.nav = c; }}>
                <li className="nav-header"><span></span></li>
                </ul>
                <img src="assets/images/HOWL.png" alt="HOWL" />
                <div className="text-center">
                <GoogleLogin
                clientId="621859786392-868jmoqbehrbar9lk36i8rsbjo9762u3.apps.googleusercontent.com"
                buttonText="CONTINUE WITH GOOGLE"

                onSuccess={(e)=>this.handleGoogleLogin(e)}
                onFailure={(e)=>this.handleGoogleLogin(e)}
                /><div className="divider" />
                <FacebookLogin
                appId="1614436405260654"
                autoLoad={false}
                fields="first_name,last_name,email,id"
                onClick={(e)=>this.handleFacebookLogin(e)}
                callback={(e)=>this.handleFacebookLogin(e)}
                /><div className="divider" />

                <p>---------------- OR ----------------</p>

                <RaisedButton style={mWidthStyle} label="Create Account" primary href={"#/Register"}/><div className="divider" />
              </div>
              <div className="text-center">
              <p>Have an account?<span><a href="#/login" className="text-small"> Login</a></span></p>

              </div>

              <div className="text-center">
              <p className="text-small"><a href={"/#/printcode"}><u>Print Code</u></a></p>
            </div>


</div></div></div>
    )
  }
}

const Page = () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <MainLogin />
        </div>
      </QueueAnim>
    </div>
  </div>
);
module.exports = Page;
