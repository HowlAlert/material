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
import {FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.min.css';
import cookie from 'react-cookies';
// import PageRegister5 from 'routes/register5/';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import ReactPhoneInput from 'react-phone-input';




const mWidthStyle = {
  minWidth: '130px'
};
class EditPhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country:'',
      number:'',
      message:'',
      ResultStatus:'',
      Cancel_disabled: true,
      phoneNumberdisabled:true,
    }
this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(number) {
        this.setState({
           phone: number,
           phoneNumberdisabled:false,
           Cancel_disabled: false,
        });
        console.log(this.state.phone)
     }

  handlePhoneNo(phoneNumber){



    if(this.state.phone === undefined)
    {
      alert("Please enter phone number")
    }


    var phone = this.state.phone;
      var phoneNumber=phone.replace(/\D/g,'')
      var number=phoneNumber.substr(phoneNumber.length-10)
      var country=phoneNumber.slice(0, -10)
    //   ereg_replace("[^0-9]", "", phone)
     console.log(phoneNumber);
     console.log(number);
     console.log(country);


    if(number.length!=10){
      alert("Please enter only 10 digit phone number")
    }

     else if(country!= 1 && country!= 91){
       alert("HOWL is currently Only Available to users based in the U.S and INDIA")
     }
     else if(number.length==0){
       alert("Please enter 10 digit phone number")
     }
     else if(number.length!=10){
       alert("Please enter only 10 digit phone number")
     }
     else{
    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ConfirmYourPhoneNumber';

       fetch(BaseURL,{
        method: "POST",
        body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'),'MobilePhoneCountryCode':country,'MobilePhoneNumber':number}),
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
        console.log(number.length);
        if(this.state.ResultStatus.Status==2 && number!=''  && number.length==10){
           alert("This phone number is already taken by another account.");
         }
        if(this.state.ResultStatus.Status==0 && number!=''){
          alert("Sorry we cannot send verification code to this number. Please make sure you input the correct Mobile Number.");
        }
        if(this.state.ResultStatus.Status==1 && number!='' && number.length==10){
          this.setState({ redirectToReferrer: true })
          cookie.save('MobilePhoneNumber', number);
           }
           else{
              this.setState({ redirectToReferrer: false })
           }
    })
  }
}
handleBack(event) {
      window.location.reload();
    }





  render() {

//     const { redirectToReferrer} = this.state
//     if (redirectToReferrer) {
// console.log(redirectToReferrer);
//           return (
//           <div>
//             CHANGE PHONE NUMBER
//             <ReactPhoneInput defaultCountry={'us'} value={this.state.phone} onChange={this.handleOnChange}/>
//             <PhoneVerifyCode />
//           </div>
//           )
    //    }

    return (

      <form name="EditProfileForm">

       <p>FIRST NAME
        <input
         value={this.state.Fname}
         onChange={this.handleFname}
        />
        </p>

           <p>LAST NAME
             <input
              value={this.state.Lname}
              onChange={this.handleLname}
             />
           </p>
             <p>EMAIL ADDRESS
               <input
                value={this.state.Email}
                onChange={this.handleEmail}
               />
            </p>

             {/* <ReactPhoneInput defaultCountry={'us'} value={this.state.phonenumber} onChange={this.handleEmail} />*/}

            CHANGE PHONE NUMBER
               <ReactPhoneInput defaultCountry={'us'} value={this.state.phonenumber} onChange={this.handleOnChange}/>
            4 - DIGIT CODE
               <TextField
               type="text"
               fullWidth
               name="Code"
                value={this.state.value}
                onChange={(e)=>this.handleCode(e)}
               />




           <div className="divider" />
           <div className="row">
             <div className="col-lg-6 noPadRight">
               <RaisedButton onClick={(e)=>this.handleBack(e)} primary label="Cancel"  disabled={this.state.Cancel_disabled}/>

             </div>
             <div className="col-lg-6 noPadLeft">
               <RaisedButton primary label="SAVE" onClick={(e)=>this.handleSave(e)} disabled={this.state.disabled}/>

             </div>
           </div>

        </form>





    );
  }
}


class PhoneVerifyCode extends React.Component {
  constructor() {
    super();
    this.state = {
      Code:'',
      ResultStatus:'',
      disabled: true,
      Cancel_disabled: true,
    };
  }

  handleCode(event) {
    event.preventDefault();
    const target = event.target;
  const value = target.type === target.value;
  const name = target.name;

  this.setState({
        Code: target.value,
        disabled: false,
        Cancel_disabled: false
      });

      console.log(target.value) ;
      return target.value;
    }
  handleVerifyCode(event){

      console.log(this.state.Code);
      let re = /^[0-9]{4}$/;
    if(re.test(this.state.Code)=='' || this.state.Code.length!=4 || this.state.Code.length>4)
    {
      alert("The verification code you entered is invalid. Please try again.");

    }

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

            alert("Updated Mobile Number!");
            this.setState({
                disabled: true
            });
           window.location.reload();


        }
        else{
           this.setState({ redirectToReferrer: false })
           alert(this.state.message);
        }
      })



    }

    handleBack(event) {
      window.location.reload();
    }


  render() {


    return (
      <div>


              4 - DIGIT CODE
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
                <div className="row">
                  <div className="col-lg-6 noPadRight">
                    <RaisedButton onClick={(e)=>this.handleBack(e)} primary label="Cancel"  disabled={this.state.Cancel_disabled}/>

                  </div>
                  <div className="col-lg-6 noPadLeft">
                    <RaisedButton primary label="SAVE"  onClick={(e)=>this.handleVerifyCode(e)} disabled={this.state.disabled}/>

                  </div>
                </div>



          </fieldset>



      </div>
    );
  }
}






const Page = () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <EditPhoneNumber />
        </div>

  </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
