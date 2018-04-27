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
import PageLogin from 'routes/login/';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import PasswordField from 'material-ui-password-field';


const mWidthStyle = {
  minWidth: '130px'
};
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      Fname:'',
      Lname:'',
      Email:'',
      Password:'',
      GetUser:'',
      text:'',
      resultStatus:''
    };
    //input Highlighting code start
          this.textInput = null;

            this.setTextInputRef = element => {
              this.textInput = element;
            };

            this.focusTextInput = () => {
              // Focus the text input using the raw DOM API
              if (this.textInput) this.textInput.focus();
            };
    //input Highlighting code end
  }

  componentWillMount(){
  console.log(cookie.load('Detection'))
    if(cookie.load('Detection')!=undefined){

      this.setState({ redirectToHome: true })
    }
  }

  componentDidMount() {
     // autofocus the input on mount for input Highlighting
     this.focusTextInput();
   }


    handleNext(event){
      var password = this.state.Password;
      var PasswordLength = password.length;

    event.preventDefault();
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let names = /^[A-z]+$/;
    if(this.state.Fname==''){
      alert("Please enter your first name");
      this.setState.noOfSuperValidation="False"
    }
    else if(names.test(this.state.Fname)==''){
      alert("Please enter only alphabets for First Name");
      this.setState.noOfSuperValidation="False"
    }
    else if(this.state.Lname==''){
      alert("Please enter your last name");
      this.setState.noOfSuperValidation="False"
    }
    else if(names.test(this.state.Lname)==''){
      alert("Please enter only alphabets for Last Name");
      this.setState.noOfSuperValidation="False"
    }
    else if(this.state.Email==''){
      alert("Please enter your email address");
      this.setState.noOfSuperValidation="False"
    }

    else if(email.test(this.state.Email)==''){
      alert("Please enter a valid email");
      this.setState.noOfSuperValidation="False"
    }
    else if(this.state.Password==''){
      alert("Please enter a password");
      this.setState.noOfSuperValidation="False"
    }
    else if(PasswordLength<6){
      alert("Password must be at least 6 characters");
      this.setState.noOfSuperValidation="False"
    }

    if(this.state.noOfSuperValidation!="False"){
      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/RegisterUser';
         fetch(BaseURL,{
          method: "POST",
          body: JSON.stringify({'FirstName':this.state.Fname,'LastName':this.state.Lname,'Email':this.state.Email,'Password':this.state.Password,'InviteCode':cookie.load('InviteCode')}),
        headers: new Headers({'content-type': 'application/json'})
        }).
      then((Response)=>Response.json()).
      then((findresponse)=>{
        this.setState({
        GetUser:findresponse.RegisterUserResult.GetUser,
        resultStatus:findresponse.RegisterUserResult.ResultStatus,
        })

        if(this.state.GetUser.ID!==null){
          console.log("status"),
          cookie.save('Id', this.state.GetUser.ID, '/'),
          cookie.save('UserToken', this.state.GetUser.UserToken, '/'),
          cookie.save('FirstName', this.state.Fname),
          cookie.save('LastName', this.state.Lname),
          cookie.save('Email', this.state.Email),
          console.log(this.state.GetUser.ID),
          console.log(this.state.GetUser.UserToken),
          console.log(findresponse),
          console.log("status"),

          this.setState({ redirectToReferrer: true })
           }
           else if(this.state.GetUser.ID===null){
              this.setState({ redirectToReferrer: false })
           }
           if(this.state.resultStatus.StatusMessage == "This email already exists."){
             alert(this.state.resultStatus.StatusMessage)
           }

      })
    }
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

    handleFname(event) {
      event.preventDefault();
      const target = event.target;
    const value = target.type === target.value;
    const name = target.name;

    this.setState({
          Fname: target.value
        });
    console.log("here");
         return target.value;
      }

      handleLname(event) {
        event.preventDefault();
        const target = event.target;
      const value = target.type === target.value;
      const name = target.name;

      this.setState({
            Lname: target.value
          });
      console.log("here");
           return target.value;
        }

  render() {

    const{redirectToHome}=this.state

    if(redirectToHome){
      return (
        <Redirect to="app/home" />
      )
    }

    const { redirectToReferrer} = this.state
    if (redirectToReferrer==true) {

      console.log(redirectToReferrer)
          return (
            <Redirect to="VerifyPhoneNumber" />
          )
        }

    return (
      <div className="body-inner">

      <div className="card bg-white registerCard">
        <div className="card-content regContent">
          {/* <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>*/}



            <form className="form-horizontal">


            <div className="regLeft">
             <p className="hero-title text-center registerHeader">Create Account</p>
            </div>

              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="FIRST NAME"
                    type="text"
                    fullWidth
                    name="Fname"
                     //value={this.state.value}
                     onChange={(e)=>this.handleFname(e)}
                     ref={this.setTextInputRef} //for input Highlighting
                      onClick={this.focusTextInput} //for input Highlighting
                  />

                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="LAST NAME"
                    type="text"
                    fullWidth
                    name="Lname"
                     //value={this.state.value}
                     onChange={(e)=>this.handleLname(e)}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="EMAIL ADDRESS"
                    type="text"
                    fullWidth
                    name="Email"
                     //value={this.state.value}
                     onChange={(e)=>this.handleEmail(e)}
                  />
                </div>

                  <PasswordField
                  fullWidth
                  type="password"
                  name="Password"
                  //value={this.state.value}
                  hintText="Password must be at least 6 characters"
                  floatingLabelText="Password"
                  onChange={(e)=>this.handlePassword(e)}
                  //errorText="Your password is too short"
                  />
              </fieldset>
              <div className="card-action no-border text-left">

              </div>

              <div className="regButtons">
                <a style={mWidthStyle} className="howlRegBack" label="NEXT -->" href="/">BACK</a>
                <div style={mWidthStyle} className="howlRegNext" label="NEXT -->" onClick={(e)=>this.handleNext(e)}>NEXT</div>
              </div>

{/*
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="NEXT -->" primary href={"#/Register2"} onClick={(e)=>this.handleNext(e)}/><div className="divider" />
            </div>*/}

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
          <Register />
        </div>


      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
