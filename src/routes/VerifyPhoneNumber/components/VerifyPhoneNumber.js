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
import Select from 'react-select';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import {FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.min.css';
import cookie from 'react-cookies';
import ReactPhoneInput from 'react-phone-input';

const mWidthStyle = {
  minWidth: '130px'
};
class VerifyPhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message:'',
      ResultStatus:'',
      phone:''
    }
      this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillMount(){
  if(cookie.load('Loggedin')!=undefined){
    this.setState({ redirectToHome: true })
  }
  }

  handlePhoneNo(phoneNumber){


    var phone = this.state.phone;
    console.log(phone.length);
    if(this.state.phone === '' || this.state.phone == undefined){
      alert("Please enter phone number")
      this.setState.phoneCkeck1="False"
    }
    else if(phone.length<15){
      alert("Please enter 10 digit phone number")
      this.setState.phoneCkeck1="False"
    }
    var numberMatch=phone.match(/[(]+[0-9]+[)]+[0-9]+[-]+[0-9]*/gi)
    var number=numberMatch[0].replace(/\D/g,'')
    var countryMatch=phone.match(/[0-9]+[(]/gi)
    var country=countryMatch[0].replace(/\D/g,'')
    console.log(phone);
    console.log("number");
    console.log(number);
    console.log("country");
    console.log(country);

console.log(number.length);
 if(this.setState.phoneCkeck1!="False"){
    if(country[0]!= 1 && country[0]!= 91){
       alert("HOWL is currently Only Available to users based in the U.S and INDIA")
       this.setState.phoneCkeck2="False"
     }
     else if(number.length>10){
       alert("Please enter only 10 digit phone number")
       this.setState.phoneCkeck2="False"
     }
   }
      if(this.state.phoneCkeck2!="False"){
       //const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ConfirmYourPhoneNumber';
       const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/ConfirmYourPhoneNumber';

          fetch(BaseURL,{
           method: "POST",
           body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'),'MobilePhoneCountryCode':country[0],'MobilePhoneNumber':number}),
         headers: new Headers({'content-type': 'application/json'})
         }).
       then((Response)=>Response.json()).
       then((findresponse)=>{
         this.setState({
           ResultStatus:findresponse.ConfirmYourPhoneNumberResult.ResultStatus,
         })
           console.log(findresponse);
           //Status:this.state.ResultStatus.Status;
           console.log(this.state.ResultStatus.Status);

           if(this.state.ResultStatus.Status==2 && number!='' && number.length==10){
              alert("This phone number is already taken by another account.");
            }
           if(this.state.ResultStatus.Status==0 && number!='' && number.length==10){
             alert("Sorry we cannot send verification code to this number. Please make sure you input the correct Mobile Number.");
           }
           if(this.state.ResultStatus.Status==1 && number!=''  && number.length==10){
             alert("Validate Phone Number");
             cookie.save('MobilePhoneNumber', number);
             this.setState({ redirectToReferrer: true })
              }
              else{
                 this.setState({ redirectToReferrer: false })
              }
       })
     }
     }

    handleOnChange(number) {
       this.setState({
          phone: number
       });
       console.log(this.state.phone)
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
            <Redirect to="ValidatePhoneCode" />
          )
        }

    return (

      <div className="body-inner">

      <div className="card bg-white registerCard">
        <div className="card-content regContent">
        {/*
            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>
*/}
{/*
            <ul className="nav" ref={(c) => { this.nav = c; }}>

              </ul>*/}

              <div className="regLeft">
               <p className="hero-title text-center registerHeader">Enter Your Phone Number</p>
              </div>

        <div className="phone-number" style={{display:'flex'}}>
        <ReactPhoneInput
            defaultCountry={'us'}
            preferredCountries={['us']}
            value={this.state.phone}
            onChange={this.handleOnChange}
         />
        </div>


        <div className="regButtons">
          <a style={mWidthStyle} className="howlRegBack" label="NEXT -->" href="/">CANCEL</a>
          <div style={mWidthStyle} className="howlRegNext" label="NEXT -->"  onClick={(e)=>this.handlePhoneNo(e)}>NEXT</div>
        </div>
        {/*

<div className="box-body text-center">
<RaisedButton style={mWidthStyle} label="NEXT -->" primary onClick={(e)=>this.handlePhoneNo(e)}/><div className="divider" />
</div>*/}

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
          <VerifyPhoneNumber />
        </div>
  </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
