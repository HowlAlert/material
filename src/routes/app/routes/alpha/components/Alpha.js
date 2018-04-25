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
import ReactPhoneInput from 'react-phone-input';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';




const mWidthStyle = {
  minWidth: '130px'
};

class Alpha extends React.Component {
  constructor() {
    super();
    this.state = {

      Fname:'',
      Lname:'',
      Email:'',
      phonenumber:'',
      address: ' ',


    };
    this.onChange = (address) => this.setState({ address })

  }

  handleFname= (e) => {                           //To handle change in the First Name field
     this.setState({
           Fname: e.target.value,

         });
         console.log(this.state.Fname) ;

       }

  handleLname= (e) => {                             //To handle change in the Last Name field
    this.setState({
          Lname: e.target.value,

              });
              console.log(this.state.Lname) ;

            }

    handleEmail= (e) => {                         //To handle change in the Email Name field
      this.setState({
           Email: e.target.value,

         });
         console.log(this.state.Email) ;

       }



       handlePhoneNumber= (number) => {                    //To handle change in the Phone Number field

                        this.setState({
                           phonenumber: number,


                        });
                        console.log(this.state.phonenumber)
                 }







  handleOnChange= (e) =>  {
     event.preventDefault()

     geocodeByAddress(this.state.address)
       .then(results =>{
         this.setState({
               address_com:results[0],
               street_no:results[0].address_components[0].long_name,
               street_name:results[0].address_components[1].long_name,
               city:results[0].address_components[3].long_name,
               state:results[0].address_components[5].long_name,
               // country:results[0].address_components[6].long_name,
               zipcode:results[0].address_components[7].long_name,


            })


       })
       .then(results => getLatLng(this.state.address_com))
       .then(latLng => {

          this.setState({
              Latitude:latLng.lat,
              Longitude:latLng.lng
          })


            console.log(this.state.Latitude);
            console.log(this.state.street_no+" "+this.state.street_name)
            console.log(this.state.city)

          })
}

handleFormSubmit = (event) => {
  const form = document.forms['submit-to-google-sheet']

  event.preventDefault()
     fetch('http://localhost:3000/cam-settings-menu#/app/Alpha',
       { method: 'POST', body: new FormData(form)})
       .then(response => console.log('Success!', response))
       .catch(error => console.error('Error!', error.message))

  fetch('http://api.spotcrime.com/crimes/107908461.json?key=17e9771d2c12fbe024563b0a77ee9f9976c3bea0eb30337a27dcb6c2e4ce'


                     ).then(response => {
                   if(response.ok){
                       response.json().then(json => {
                           this.setState({jsonData: JSON.parse(json)});
                       });
                   }
                   else{
                       this.setState({jsonData: ""});
                   }
               });


}









  render() {



    const inputProps = {
    value: this.state.address,
    onChange: this.onChange,
     }

    return (
      <div className="body-inner">

      <div className="card bg-white registerCard">
        <div className="card-content regContent">


              <form name="submit-to-google-sheet">


                <div className="regLeft">
                    <div className="hero-title text-center registerHeader">Admin Registration</div>

                </div>
                <div>
                  Submit your info below to become an administrator for your community’s HOWL Watch. We’ll reply with all the necessary info.
                </div>
                <div className="row">
                  <div className="col-lg-6 noPadRight">

                    FIRST NAME
                     <input      value={this.state.Fname}   onChange={this.handleFname}  />
                  </div>
                  <div className="col-lg-6 noPadLeft">
                      LAST NAME
                      <input      value={this.state.Lname}  onChange={this.handleLname} />

                  </div>
                </div>


                <div className="row">
                  <div className="col-lg-6 noPadRight">
                    EMAIL ADDRESS

                    <input
                     value={this.state.Email}
                     onChange={this.handleEmail}
                    />
                  </div>
                  <div className="col-lg-6 noPadLeft">
                    PHONE NUMBER:
                    <ReactPhoneInput defaultCountry={'us'} value={this.state.phone} onChange={this.handleOnChange} />

                  </div>
                </div>


                <div className="row">
                  <div className="col-lg-12 noPadRight">
                    ADDRESS
                    <PlacesAutocomplete inputProps={inputProps} onChange={this.handleInputChange}  className="col-lg-6"
                     ref="autoCompletePlaces"  />
                  </div>

                </div>

              <div className="regButtons">

                <div style={mWidthStyle} className="howlRegNext"  onClick={(e)=>this.handleFormSubmit(e)}>SUBMIT</div>
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
          <Alpha />
        </div>


      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
