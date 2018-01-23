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
const mWidthStyle = {
  minWidth: '130px'
};
class Register4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country:'',
      number:'',
      message:''
    };

  }

  handlePhoneNo(event){

    let valid = false;
    try {
      const phoneUtil = PhoneNumberUtil.getInstance();
      valid =  phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber));
    } catch(e) {
      valid = false;
    }
    if(valid) {
      this.setState({
        message:'Phone number '+this.getValidNumber(phoneNumber)+' is valid',
        color:'green'
      });
    } else {
      this.setState({
        message:'Phone number '+phoneNumber+' is not valid',
        color:'red'
      });
    }
      console.log(this.state.Country);
      console.log(this.state.Number);
    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ValidateMobilePhoneConfirmationCode';

       fetch(BaseURL,{
        method: "POST",
        body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'),'MobilePhoneCountryCode':this.state.Country,'MobilePhoneNumber':this.state.Number}),
      headers: new Headers({'content-type': 'application/json'})
      }).
    then((Response)=>Response.json()).
    then((findresponse)=>{
      this.setState({
      GetUser:findresponse.RegisterUserResult.GetUser,
      })
      if(this.state.GetUser.ID!==null){
        console.log("status"),
        //cookie.save('Id', cookie.load('Id'), '/')
        //cookie.save('UserToken', this.state.GetUser.UserToken, '/')
        console.log(this.state.GetUser.ID)
        console.log(this.state.GetUser.UserToken)
        console.log(findresponse)
        console.log("status")
        this.setState({ redirectToReferrer: true })
         }
         else{
            this.setState({ redirectToReferrer: false })
         }
    })
  }

  handleNumber(event) {
    event.preventDefault();
    const target = event.target;
  const value = target.type === target.value;
  const name = target.name;

  this.setState({
        Number: target.value
      });

      console.log(target.value)

      return target.value;
    }

    handleCountry(event) {
      event.preventDefault();
      const target = event.target;
    const value = target.type === target.value;
    const name = target.name;

    this.setState({
          Country: target.value
        });

        console.log(target.value) ;

        return target.value;
    }


    getValidNumber(phoneNumber) {
      const phoneUtil = PhoneNumberUtil.getInstance();
      const parsedNumber = phoneUtil.parse(phoneNumber);
      return phoneUtil.format(parsedNumber, PhoneNumberFormat.INTERNATIONAL)
    }


  render() {

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
            <Select value={this.state.value} onChange={(e)=>this.handleCountry(e)} placeholder="country code"
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
