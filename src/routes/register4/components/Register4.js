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
import {PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber'
import Select from 'react-select';
import CallingCodes from './CallingCodes';
import {FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.min.css';
import cookie from 'react-cookies';
import PageRegister5 from 'routes/register5/';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import './phone-number.css';
const mWidthStyle = {
  minWidth: '130px'
};
class Register4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country:'',
      number:'',
      message:'',
      ResultStatus:''
    }
this.handleCountry = this.handleCountry.bind(this);
  }

  componentWillMount(){

  if(cookie.load('FirstName')!=undefined){
    this.setState({ redirectToHome: true })
  }
  }




  handlePhoneNo(phoneNumber){

    let valid = false;
    try {
      const phoneUtil = PhoneNumberUtil.getInstance();
      valid =  phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber));
    } catch(e) {
      valid = false;
    }
    if(valid) {
      this.setState({
        message:'Phone number '+this.getValidNumber(phoneNumber)+' is valid Number',
        color:'green'
      });
    } else {
        this.setState({
        //  message:'Phone number '+phoneNumber+' is not valid Number',
          color:'red'
        });
      }


      console.log(this.state.country);
      console.log(this.state.number);
    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ConfirmYourPhoneNumber';

       fetch(BaseURL,{
        method: "POST",
        body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'),'MobilePhoneCountryCode':this.state.country,'MobilePhoneNumber':this.state.number}),
      headers: new Headers({'content-type': 'application/json'})
      }).
    then((Response)=>Response.json()).
    then((findresponse)=>{
      this.setState({
        ResultStatus:findresponse.ConfirmYourPhoneNumberResult.ResultStatus,
      })

        console.log("status");
        //Status:this.state.ResultStatus.Status;
        console.log(this.state.ResultStatus.Status);
        console.log(this.state.number.length);
        if(this.state.ResultStatus.Status==2 && this.state.number!='' && this.state.country!='' && this.state.number.length==10 && this.handlePhoneNo){
           alert("This phone number is already taken by another account.");
         }
        if(this.state.ResultStatus.Status==0 && this.state.number!='' && this.state.country!='' && this.handlePhoneNo){
          alert("Sorry we cannot send verification code to this number. Please make sure you input the correct Mobile Number.");
        }
        if(this.state.ResultStatus.Status==1 && this.state.number!='' && this.state.country!='' && this.state.number.length==10 && this.handlePhoneNo){
          this.setState({ redirectToReferrer: true })
           }
           else{
              this.setState({ redirectToReferrer: false })
           }
    })
  }

  handleNumber(event) {
    this.setState({
      number:event.target.value
    });
    //this.handlePhoneNo('+'+this.state.country+' '+event.target.value);

      return event.target.value;
    }

    handleCountry(event) {
      this.setState({
      country:event.value
    });
  // this.handlePhoneNo('+'+event.value+' '+this.state.Number);
  return event.value;
    }


    getValidNumber(phoneNumber) {
      const phoneUtil = PhoneNumberUtil.getInstance();
      const parsedNumber = phoneUtil.parse(phoneNumber);
      return phoneUtil.format(parsedNumber, PhoneNumberFormat.INTERNATIONAL)
    }


  render() {

    const{redirectToHome}=this.state

    if(redirectToHome){
      return (
        <Redirect to="app/home" />
      )
    }


    const { redirectToReferrer} = this.state
    if (redirectToReferrer) {
          return (
            <Redirect to="Register5" />
          )
        }

    return (

      <div className="body-inner">

        <div className="card bg-white">
          <div className="card-content">
            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>


            <ul className="nav" ref={(c) => { this.nav = c; }}>
              <li className="nav-header"><span></span></li>
              <li><FlatButton href="#/Register"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
              </li>
              </ul>
              <img src="assets/images/HOWL2.png" alt="HOWL" />
              <p className="hero-title text-center">verify your phone number</p>
        <div className="phone-number" style={{display:'flex'}}>
          <div className="phone-number--country">
          <Select value={this.state.country} onChange={this.handleCountry} placeholder="country code"
             options={CallingCodes} labelKey="country" valueKey="value" valueRenderer={(country) => country.value}>
          </Select>
          </div>
          <div className="phone-number--number">
            <FormControl value={this.state.value} onChange={(e)=>this.handleNumber(e)} placeholder="phone number">
            </FormControl>
          </div>
        </div>
        <div className="message" style={{color:this.state.color}}>
          {this.state.message}
        </div>




<div className="box-body text-center">
<RaisedButton style={mWidthStyle} label="NEXT -->" primary onClick={(e)=>this.handlePhoneNo(e)}/><div className="divider" />
</div>

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
          <Register4 />
        </div>
  </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
