import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import cookie from 'react-cookies';
// import PageLogin from '../../app/routes/dashboard/';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';


const mWidthStyle = {
  minWidth: '130px'
};
class PhoneVerifyCode extends React.Component {
  constructor() {
    super();
    this.state = {
      Code:'',
      ResultStatus:''
    };
  }

  handleCode(event) {
    event.preventDefault();
    const target = event.target;
  const value = target.type === target.value;
  const name = target.name;

  this.setState({
        Code: target.value
      });

      console.log(target.value) ;
      return target.value;
    }

    handleVerifyCode(event){
      console.log("hi") ;
      console.log(this.state.Code);
      let re = /^[0-9]{4}$/;
    if(re.test(this.state.Code)=='' || this.state.Code.length!=4 || this.state.Code.length>4)
    {
      alert("The verification code you entered is invalid. Please try again.");
      console.log("hi alert")
    }


console.log(cookie.load('Id')),
console.log(cookie.load('UserToken'));
      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ValidateMobilePhoneConfirmationCode';

         fetch(BaseURL,{
          method: "POST",
          body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'), 'MobilePhoneConfirmationCode':this.state.Code}),
         headers: new Headers({'content-type': 'application/json'})
        }).
      then((Response)=>Response.json()).
      then((findresponse)=>{
        console.log(findresponse)
        this.setState({
          ResultStatus:findresponse.ValidateMobilePhoneConfirmationCodeResult.ResultStatus,
          message:findresponse.ValidateMobilePhoneConfirmationCodeResult.ResultStatus.StatusMessage
        });
        if(this.state.ResultStatus.Status==="1"){

           this.setState({ redirectToReferrer: true })

            alert("Updated Mobile Number!");

        }
        else{
           this.setState({ redirectToReferrer: false })
           alert(this.state.message);
        }
      })



    }



  render() {

    const { redirectToReferrer} = this.state
    if (redirectToReferrer === true) {
      return (
        <Redirect to="../Settings"/>
        //  <settings />
       )
        }


    return (
      <div className="body-inner">

        <div className="card bg-white">
          <div className="card-content">
            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>

            <form className="form-horizontal">
            <ul className="nav" ref={(c) => { this.nav = c; }}>
              <li className="nav-header"><span></span></li>
              {/* <li><FlatButton href="#/register4"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
              </li> */}
              </ul>
              {/* <img src="assets/images/HOWL2.png" alt="HOWL" /> */}
              <p className="hero-title text-center">4 - DIGIT CODE</p>
              <fieldset>
                <div className="form-group">
                  <TextField
                  type="text"
                  fullWidth
                  name="Code"
                   value={this.state.value}
                   onChange={(e)=>this.handleCode(e)}
                  />
                </div>



                <div className="divider" />

              </fieldset>
              <div className="card-action no-border text-left">

              </div>
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="NEXT -->" onClick={(e)=>this.handleVerifyCode(e)}/><div className="divider" />
            </div>

            </form>
          </div>



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
          <PhoneVerifyCode />
        </div>
      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;