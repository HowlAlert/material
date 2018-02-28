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
import CallingCodes from './CallingCodes';

const mWidthStyle = {
  minWidth: '130px'
};


class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      fname:'',
      lname:'',
      phonenumber:'',
      email:''
    };
    this.handleCountry = this.handleCountry.bind(this);
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

         handlePhoneNumber(event) {
            console.log(event.target.value);
            this.setState({
            phonenumber: event.target.value.substr(0,10)
                    });
           }

           handleCountry(event) {
             this.setState({
             country:event.value
           });
         // this.handlePhoneNo('+'+event.value+' '+this.state.Number);
         return event.value;
           }



   handleNext(event) {


     var object = JSON.stringify([{"Email":this.state.email, "FirstName":this.state.fname, "LastName":this.state.lname,"PhoneNumber":this.state.phonenumber,"UserPackID":"0", "PhoneNumberCountryCode": this.state.country}]);
     console.log(object);

console.log(this.state.email);
console.log(this.state.fname);
console.log(this.state.lname);
console.log(this.state.phonenumber);
console.log(this.state.country);
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

                        // console.log(this.state.status);
                        // console.log(this.state.message);
                        if(this.state.status === "0")
                        {
                          alert(this.state.message);
                          this.setState({ redirectToReferrer: true })
                        }

                        else {

                            alert("Would you like to add another pack member?");
                            this.setState({ redirectToReferrer: true })
                        }

           })





           }


  render() {

    const { redirectToReferrer} = this.state
      if(redirectToReferrer === true)
      {
        return (
          <Redirect to="HomeAddress" />
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
              <li><FlatButton href="#/app/register5"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
              </li>
              </ul>
              <center><img src="assets/images/HOWL2.png" alt="HOWL" /></center>
              <p className="hero-title text-center">ADD PACK MEMBER</p>
              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="FIRST NAME"
                    type="text"
                    fullWidth
                    name="fname"
                     value={this.state.value}
                     onChange={this.handleFirstname.bind(this)}
                  />
                  </div>

                  <div className="form-group">
                  <TextField
                    floatingLabelText="LAST NAME"
                    type="text"
                    fullWidth
                    name="lname"
                     value={this.state.value}
                     onChange={this.handleLastname.bind(this)}
                  />
                  </div>
                  <br></br>

                  <div className="phone-number" style={{display:'flex'}}>
                    <div className="phone-number--country">
                    <Select value={this.state.country} onChange={this.handleCountry} placeholder="country code"
                       options={CallingCodes} labelKey="country" valueKey="value" valueRenderer={(country) => country.value}>
                    </Select>
                    </div>

                  <div className="phone-number--number">
                    <FormControl value={this.state.value} onChange={this.handlePhoneNumber.bind(this)} placeholder="phone number">
                    </FormControl>
                  </div>

                  </div>

                    <div className="form-group">
                  <TextField
                    floatingLabelText="EMAIL ADDRESS"
                    type="text"
                    fullWidth
                    name="email"
                     value={this.state.value}
                     onChange={this.handleEmail.bind(this)}
                  />
                </div>



              </fieldset>
              <div className="card-action no-border text-left">

              </div>
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="NEXT -->" onClick={(e)=>this.handleNext(e)}/><div className="divider" />
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
          <Contact />
        </div>


      </QueueAnim>
    </div>
  </div>
)


module.exports = Page;
