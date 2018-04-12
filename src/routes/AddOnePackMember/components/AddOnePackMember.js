import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import {FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.min.css';
import Select from 'react-select';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import cookie from 'react-cookies';
import ReactPhoneInput from 'react-phone-input';

const mWidthStyle = {
  minWidth: '130px'
};


class AddOnePackMember extends React.Component {

  constructor() {
    super();
    this.state = {
      fname:'',
      lname:'',
      phonenumber:'',
      email:'',
      text:''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillMount(){
  if(cookie.load('FirstName')!=undefined){
    this.setState({ redirectToHome: true })
  }
  }

  handleFirstname(event) {
     this.setState({
         fname: event.target.value.substr(0,30)
       });
       console.log(event.target.value) ;

     }
  handleLastname(event) {
       this.setState({
         lname: event.target.value.substr(0,30)
       });
       console.log(event.target.value);
     }

  handleEmail(event) {
              this.setState({
                    email: event.target.value
                  });
                  console.log(event.target.value) ;

          }

          handleOnChange(number) {
             this.setState({
                phone: number
             });
             console.log(this.state.phone)
          }

   handleNext(event) {

     var phone = this.state.phone;
     var phoneNumber=phone.replace(/\D/g,'')
     var number=phoneNumber.substr(phoneNumber.length-10)
     var country=phoneNumber.slice(0, -10)

     var object = JSON.stringify([{"Email":this.state.email, "FirstName":this.state.fname, "LastName":this.state.lname,"PhoneNumber":number,"UserPackID":"0", "PhoneNumberCountryCode": country}]);
     console.log(object);

console.log(this.state.email);
console.log(this.state.fname);
console.log(this.state.lname);
console.log(cookie.load('Id'));
console.log(cookie.load('UserToken'));
console.log(country);
           const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/AddUpdateUserPack';


               fetch(BaseURL,
               {
                method: "POST",
                body: JSON.stringify({
                  "UserID":cookie.load('Id'),
                  "UserToken":cookie.load('UserToken'),
                  "PackMemberList":object

                }),
                 headers: new Headers({'content-type': 'application/json'}),
               })
           .then((Response)=> Response.json())
           .then((findresponse)=>{
             console.log(findresponse);

             this.setState({
                      status:findresponse.AddUpdateUserPackResult.ResultStatus.Status,
                      message:findresponse.AddUpdateUserPackResult.ResultStatus.StatusMessage
                        })

                        if(this.state.message == "Invalid Parameters")
                        {
                          console.log(this.state.status)
                          alert(this.state.message)
                        }
                        if(this.state.status == "1")
                        {
                          alert("Pack Member Successfully added")
                          this.setState({ redirectToReferrer: true })
                        }

           })
           }


  render() {

    const{redirectToHome}=this.state
    if(redirectToHome){
      return (
        <Redirect to="app/home" />
      )
    }


    const{redirectToMainLogin}=this.state
    if(redirectToMainLogin){
      return (
        <Redirect to={'/mainLogin'}/>
      )
    }

    const { redirectToReferrer} = this.state
      if(redirectToReferrer === true)
      {
        return (
          <Redirect to="AddHomeAddress" />
        )
      }



    return (
      <div className="body-inner">

      <div className="card bg-white registerCard">
        <div className="card-content regContent">

        {/*
            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>*/}

            <form className="form-horizontal">

            {/*
            <ul className="nav" ref={(c) => { this.nav = c; }}>
              <li className="nav-header"><span></span></li>
              <li><FlatButton href="#/app/register5"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
              </li>
              </ul>*/}


              <div className="regLeft">
               <p className="hero-title text-center registerHeader">Add Pack Member</p>
              </div>



              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="FIRST NAME"
                    type="text"
                    fullWidth
                    name="fname"
                     //value={this.state.value}
                     onChange={this.handleFirstname.bind(this)}
                  />
                  </div>

                  <div className="form-group">
                  <TextField
                    floatingLabelText="LAST NAME"
                    type="text"
                    fullWidth
                    name="lname"
                     //value={this.state.value}
                     onChange={this.handleLastname.bind(this)}
                  />
                  </div>

                  <div className="phone-number" style={{display:'flex'}}>
                  <ReactPhoneInput defaultCountry={'us'} value={this.state.phone} onChange={this.handleOnChange}/>
                  </div>

                    <div className="form-group">
                  <TextField
                    floatingLabelText="EMAIL ADDRESS"
                    type="text"
                    fullWidth
                    name="email"
                     //value={this.state.value}
                     onChange={this.handleEmail.bind(this)}
                  />
                </div>



              </fieldset>
              <div className="card-action no-border text-left">

              </div>

              {/*
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="NEXT -->" onClick={(e)=>this.handleNext(e)}/><div className="divider" />
            </div>*/}

            <div className="regButtons">
              <a style={mWidthStyle} className="howlRegBack" label="NEXT -->" href="#/app/register5">BACK</a>
              <div style={mWidthStyle} className="howlRegNext" label="NEXT -->" onClick={(e)=>this.handleNext(e)}>NEXT</div>
            </div>

            </form>
          </div>



        </div>

      </div>
   );
  }
}

const Page = () =>(
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <AddOnePackMember />
        </div>
      </QueueAnim>
    </div>
  </div>
)


module.exports = Page;
