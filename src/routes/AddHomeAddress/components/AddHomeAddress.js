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
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';

const mWidthStyle = {
  minWidth: '130px'
};
class AddHomeAddress extends React.Component {
  constructor() {
    super();
    this.state = {

ResultStatus:''
    };

  }
  componentWillMount(){
  if(cookie.load('FirstName')!=undefined){
    this.setState({ redirectToHome: true })
  }
  }

  handleFormSubmit = (event) => {
     event.preventDefault()




       const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/AddEditUserHomeAddress';
console.error(this.state.street_no+" "+this.state.street_name);
console.error(this.state.Address1);
console.error(this.state.Address2);
console.error(this.state.city);
console.error(this.state.state);
console.error(this.state.zipcode);
console.error(this.state.Latitude);
console.error(this.state.Longitude);

       fetch(BaseURL,
       {
        method: "POST",
        body: JSON.stringify({
           "UserID":cookie.load('Id'),
           "UserToken":cookie.load('UserToken'),
           "HomeAddress1":this.state.Address1,
           "HomeAddress2":this.state.Address2,
           "HomeCity": this.state.city,
           "HomeState":this.state.state,
           "HomeZip":this.state.zipcode,
           "Latitude": this.state.Latitude,
           "Longitude": this.state.Longitude
        }),
         headers: new Headers({'content-type': 'application/json'}),
       })
        .then((Response)=> Response.json())
         .then((findresponse)=>{
            console.log(findresponse)
            this.setState({
            ResultStatus:findresponse.AddEditUserHomeAddressResult.ResultStatus
          });console.log(this.state.ResultStatus);
           if(this.state.ResultStatus.Status==1){
             console.log(this.state.ResultStatus.Status)
             alert("Succefully added Home Address.")
             this.setState({ redirectToReferrer: true })
              }
              if(this.state.ResultStatus.StatusMessage=="User does not exist."){

                alert(this.state.ResultStatus.StatusMessage)

                 }
  })
   }

   handleValue(event) {
      event.preventDefault();
       const target = event.target;
       const value = target.type === target.value;
       const name = target.name;

    this.setState({
          Address2: target.value
        });
        console.log(target.value) ;
        return target.value;
    }
  onChange = (address) =>{ this.setState({ address })
  console.log(address)
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
               Longitude:latLng.lng,
               Address1:this.state.street_no+" "+this.state.street_name,
           })
         })
        .catch(error => {
          console.error('Error', error)
        })

        console.error(this.state.street_no+" "+this.state.street_name);
        console.error(this.state.Address1);
        console.error(this.state.Address2);
        console.error(this.state.city);
        console.error(this.state.state);
        console.error(this.state.zipcode);
        console.error(this.state.Latitude);
        console.error(this.state.Longitude);
  }



  render() {

    const{redirectToHome}=this.state
    if(redirectToHome){
      return (
        <Redirect to="app/home" />
      )
    }

    const inputProps = {
    value: this.state.address,
    onChange: this.onChange,
    //onChange:this.handleAddress
     }


    const { redirectToReferrer} = this.state
    if (redirectToReferrer==true) {

      console.log(redirectToReferrer)
          return (
            <Redirect to="AddCancelCode" />
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

            <div className="regLeft marg20B">
             <p className="hero-title text-center registerHeader">Add Home Address</p>
            </div>

            <form className="form-horizontal">

            {/*
            <ul className="nav" ref={(c) => { this.nav = c; }}>
              <li className="nav-header"><span></span></li>
              <li><FlatButton href="packcontact"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
              </li>
              </ul>*/}






              <fieldset>
              <div className="form-group">
               ENTER ADDRESS
                     <PlacesAutocomplete inputProps={inputProps} />


              </div><br></br>
              <div className="form-group">
              APT/SUITE/FLOOR(If Applicable)
               <TextField  onChange={(e)=>this.handleValue(e)} name="Address2" fullWidth />


              </div>
              </fieldset>
              <div className="card-action no-border text-left">

              </div>

              {/*
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="NEXT -->" onClick={this.handleFormSubmit}/><div className="divider" />
            </div>*/}

            <div className="regButtons">
              <a style={mWidthStyle} className="howlRegBack" label="NEXT -->" href="packcontact">BACK</a>
              <div style={mWidthStyle} className="howlRegNext" label="NEXT -->" onClick={(e)=>this.handleFormSubmit(e)}>NEXT</div>
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
          <AddHomeAddress />
        </div>


      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
