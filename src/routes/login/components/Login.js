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
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import cookie from 'react-cookies';
import PageWelcome from 'routes/welcome/';
import createHistory from 'history/createHashHistory';
import App from '.../../containers/App';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import { sessionReducer, sessionService } from 'redux-react-session';
import { createStore, combineReducers } from 'redux';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
const mWidthStyle = {
  minWidth: '130px'
};

class Login extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      brand: APPCONFIG.brand,
      Email:'',
      Password:'',
      GetUser:'',
      ResultStatus:'',
      GetUserHomeAddress:''
    };
  }

  componentWillMount(){
  if(cookie.load('Id')!=undefined && cookie.load('UserToken')!=undefined){
    console.log(cookie.load('Id')),
    console.log(cookie.load('UserToken')),
    this.setState({ redirectToHome: true })
  }
  }

  handleLogin(event){
  event.preventDefault();
  if(this.state.Email==''){
    alert("Please enter your email address");
  }
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(this.state.Email)=='' && this.state.Email!=''){
    alert("Please enter a valid email");
  }
  if(this.state.Password=='' && this.state.Email!='' && re.test(this.state.Email)!=''){
    alert("Please enter a password");
  }



    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/Login';

       fetch(BaseURL,{
        method: "POST",
        body: JSON.stringify({'Email':this.state.Email,'Password':this.state.Password}),
      headers: new Headers({'content-type': 'application/json'})
      }).
    then((Response)=>Response.json()).
    then((findresponse)=>{
      this.setState({
        GetUser:findresponse.LoginResult.GetUser,
        ResultStatus:findresponse.LoginResult.ResultStatus,
        GetUserHomeAddress:findresponse.LoginResult.GetUserHomeAddress,
        GetUserPack:findresponse.LoginResult.GetUserPack,
      });


      if(this.state.ResultStatus.StatusMessage==="No user registered with this email."){
        alert(this.state.ResultStatus.StatusMessage)
      }

      if(this.state.ResultStatus.StatusMessage==="Please enter correct password."){
        alert(this.state.ResultStatus.StatusMessage)
      }

      if(this.state.ResultStatus.StatusMessage==="Your account has been suspended, please contact to authorized person"){
        alert(this.state.ResultStatus.StatusMessage)
      }

      if(this.state.ResultStatus.StatusMessage==="Success"){

        console.log(this.state.GetUserPack.length);
        if(this.state.GetUserPack.length==0){
          alert("Please enter atleast one Pack member"),
         this.setState({ redirectToGetUserPack: true })
        }

        else if(this.state.GetUserHomeAddress.Address1==null){
          alert("Please enter your Home Address"),
         this.setState({ redirectToAddress: true })
        }

        else if(this.state.GetUser.CancellationCode==null){
          alert("Please enter your Cancel Code"),
          this.setState({ redirectToCancellationCode: true })
        }
        else if(this.state.GetUser.SilenceCode==null){
          alert("Please enter your Silent Code"),
          this.setState({ redirectToSilenceCode: true })
        }

      //  const expires = new Date()
        //expires.setDate(now.getDate() + 14)
        console.log(this.state.GetUser);
        console.log("status"),
        cookie.save('Email', this.state.GetUser.Email);
        cookie.save('MobilePhoneNumber', this.state.GetUser.MobilePhoneNumber);
        cookie.save('Id', this.state.GetUser.ID);
        cookie.save('FirstName', this.state.GetUser.FirstName);
        cookie.save('LastName', this.state.GetUser.LastName);
        cookie.save('UserToken', this.state.GetUser.UserToken);
        //cookie.save('Status', this.state.ResultStatus.Status, '/')
        cookie.save('SilenceCode', this.state.GetUser.SilenceCode);
        cookie.save('CancellationCode', this.state.GetUser.CancellationCode);
        cookie.save('ShouldReceiveCameraAlertPush', this.state.GetUser.ShouldReceiveCameraAlertPush);
        cookie.save('ShouldReceiveCameraAlertSMS', this.state.GetUser.ShouldReceiveCameraAlertSMS);
        //return ( <Redirect to="#/Register1"/> );
        cookie.save('Address1', this.state.GetUserHomeAddress.Address1);
        cookie.save('Address2', this.state.GetUserHomeAddress.Address2);
        cookie.save('City', this.state.GetUserHomeAddress.City);
        cookie.save('Latitude', this.state.GetUserHomeAddress.Latitude);
        cookie.save('Longitude', this.state.GetUserHomeAddress.Longitude);
        cookie.save('State', this.state.GetUserHomeAddress.State);
        cookie.save('Zip', this.state.GetUserHomeAddress.Zip);
        //console.log(PageRegister1)
    //  console.log(App)
     this.setState({ redirectToReferrer: true })
      }
      else{
         this.setState({ redirectToReferrer: false })
      }
    })
  }


  handleEmail(event) {
    event.preventDefault();
    const target = event.target;
  const value = target.type === target.value;
  const name = target.name;

  this.setState({
        Email: target.value
      });

      console.log(target.value) ;
      return target.value;
    }

handlePassword(event) {
  event.preventDefault();
  const target = event.target;
const value = target.type === target.value;
const name = target.name;

console.log(this.state.ShowPassword)

this.setState({

      Password: target.value
    });
console.log("here");
     return target.value;
  }


handlePasswordEvent(event) {
  if(event==true){
    console.log("here3")
    //{this.state.Password}
    var text=this.state.Password
    if(!text)
    alert("Please enter a password")
  }
else
this.state.Password.target=this.state.Password
console.log(this.state.Password)
}

handleShowPassword(event) {
  event.preventDefault();
  const target = event.target;
const value = target.type === target.checked;
const name = target.name;
console.log(target.checked)
//this.handlePassword(event)

console.log("handleShowPassword")

this.setState({

      ShowPassword: target.checked

    });
  //  return target.checked
    console.log("here2");
    if(target.checked==true){
      //return target.checked
      this.handlePasswordEvent(target.checked)
    }

}


  render() {

    const{redirectToHome}=this.state
    if(redirectToHome){
      return (
        <Redirect to="app/home" />
      )
    }

    const reducers = {
      // ... your other reducers here ...
      session: sessionReducer
    };
    const reducer = combineReducers(reducers);
    const store = createStore(reducer);

  //  sessionService.initSessionService(store);

    const { redirectToReferrer} = this.state

    if (redirectToReferrer) {
      const options = { refreshOnCheckAuth: true, redirectPath: '../../app/home', driver: 'COOKIES' };
      sessionService.initSessionService(options)
        .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
        .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));

      console.log(redirectToReferrer)
          return (
            <Redirect to="../../app/home" />
          )
        }

        const { redirectToGetUserPack   } = this.state
        if(redirectToGetUserPack){
          return (
            <Redirect to="packcontact" />
          )
        }

        const { redirectToAddress   } = this.state
        if(redirectToAddress){
          return (
            <Redirect to="HomeAddress" />
          )
        }

        const { redirectToCancellationCode  } = this.state
        if(redirectToCancellationCode){
          return (
            <Redirect to="cancel" />
          )
        }

        const { redirectToSilenceCode } = this.state
        if(redirectToSilenceCode){
          return (
            <Redirect to="silent" />
          )
        }


    return (

  <div className="body-inner">
        <div className="card bg-white">
          <div className="card-content">

          <form className="form-horizontal">
          <ul className="nav" ref={(c) => { this.nav = c; }}>
            <li className="nav-header"><span></span></li>
            <li><FlatButton href="/mainLogin"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
            </li>
            </ul>
            <img src="assets/images/HOWL.png" alt="HOWL" />

              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="Email"
                    type="text"
                    fullWidth
                    name="Email"
                     value={this.state.value}
                     onChange={(e)=>this.handleEmail(e)}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="Password"
                    fullWidth
                    value={this.state.value}
                    onChange={(e)=>this.handlePassword(e)}
                    />
                </div>

                <div className="col-lg-6">
                <Checkbox
                  label="Show Password"
                  type="checkbox"
                  name="ShowPassword"
                  checked={this.state.checked}
                    value={this.state.value}
                  onClick={(e)=>this.handleShowPassword(e)}
                />
                  </div>
              </fieldset>
              <div className="card-action no-border text-left">

              </div>

              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="SIGN IN -->" primary onClick={(e)=>this.handleLogin(e)}/>



              <div className="divider" />


            </div>


            </form>

          </div>
</div>



        <div className="additional-info">
          <a href="#/forgot-password">Forgot password?</a>

          <p>Don't have an account? <a href="#/register1ß">Register</a></p>
        </div>
      </div>
    );
  }
}
const Page = () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <Login />
        </div>
      </QueueAnim>
    </div>
  </div>
);
module.exports = Page;
