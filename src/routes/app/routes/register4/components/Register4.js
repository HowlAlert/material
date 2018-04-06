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

import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';

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
checkboxState: true
    };
  }


    handleNext(event){
    event.preventDefault();
    if(this.state.Fname==''){
      alert("Please enter your first name");
    }
    if(this.state.Lname==''  && this.state.Fname!=''){
      alert("Please enter your last name");
    }
    if(this.state.Email=='' && this.state.Fname!='' && this.state.Lname!=''){
      alert("Please enter your email address");
    }
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(this.state.Email)=='' && this.state.Email!='' && this.state.Fname!='' && this.state.Lname!=''){
      alert("Please enter a valid email");
    }
    if(this.state.Password=='' && this.state.Email!='' && re.test(this.state.Email)!='' && this.state.Fname!='' && this.state.Lname!=''){
      alert("Please enter a password");
    }


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
        })
        if(this.state.GetUser.ID!==null){
          console.log("status"),
          cookie.save('Id', this.state.GetUser.ID, '/')
          cookie.save('UserToken', this.state.GetUser.UserToken, '/')
          console.log(this.state.GetUser.ID)
          console.log(this.state.GetUser.UserToken)
          console.log(findresponse)
          console.log("status")
          this.setState({ redirectToReferrer: true })
           }
           else if(this.state.GetUser.ID===null){
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


        handleShowPassword(event) {
          this.setState((oldState) => {
            ShowPassword:!oldState.checked
              console.log("checked or not")
              console.log(!oldState.checked)
              console.log(!oldState.checked? 'checked' : 'UnChecked')
              if(!oldState.checked===true){
                console.log("redirectToCheck")
              console.log(this.state.Password)
              this.setState({ pwd:this.state.Password })

              console.log(this.state.pwd)
              }else if(!oldState.checked===false){
                console.log("redirectToCheck == no")
                this.setState({ redirectToCheck: false })
              }

      return {
        checked: !oldState.checked,
      };

    });
          }

  render() {
    const { redirectToReferrer} = this.state
    if (redirectToReferrer==true) {

      console.log(redirectToReferrer)
          return (
            <Redirect to="register4" />
          )
        }else if (redirectToReferrer==false){
          return (
            alert("user already registered")
          )
        }


  //       const { redirectToCheck} = this.state
  //       if (redirectToCheck==true) {
  //
  //         console.log(redirectToCheck)
  //         var pwd;
  //         pwd=this.state.Password,
  // console.log("pwd")
  // console.log(pwd)

            //}

    return (
      <div className="body-inner">

        <div className="card bg-white registerCard">
          <div className="card-content regContent">
          { /*<section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>*/}

            <form className="form-horizontal">

            {/*
              <div className="regLeft">
                <ul className="nav registerBack" ref={(c) => { this.nav = c; }}>
                  <li>
                    <a href="mainLogin"><i className="nav-icon material-icons largeIcon">keyboard_backspace</i>
                    </a>
                  </li>
                </ul>
              </div>*/}


              <div className="regLeft">
               <p className="hero-title text-center registerHeader">Create Account</p>
              </div>


              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="FIRST NAME"
                    multiline='true'

                    floatingLabelShrinkStyle={'opacity','0'}
                    value={this.state.text}
                    type="text"
                    fullWidth
                    name="Fname"
                    value={this.state.value}
                    onChange={(e)=>this.handleFname(e)}
                  />

                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="LAST NAME"
                    type="text"
                    fullWidth
                    name="Lname"
                     value={this.state.value}
                     onChange={(e)=>this.handleLname(e)}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="EMAIL ADDRESS"
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
                  //disabled={this.state.disabled}

                  value={this.state.ShowPassword}
                  onCheck={this.handleShowPassword.bind(this)}
                />
                  </div>

              </fieldset>
              <div className="card-action no-border text-left">

              </div>

              <div className="regButtons">
                <a style={mWidthStyle} className="howlRegBack" label="NEXT -->" href="/#/app/mainLogin">BACK</a>
                <div style={mWidthStyle} className="howlRegNext" label="NEXT -->" onClick={(e)=>this.handleNext(e)}>NEXT</div>
              </div>

                <div className="divider" />


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
