import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';


class SearchAddress extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
        address: ' ',
      }
      this.onChange = (address) => this.setState({ address })
  }


  handleFormSubmit = (event) => {
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
               zipcode:results[0].address_components[7].long_name


            })

         console.log(results[0]);

        cookie.save('street',this.state.street_no+" "+this.state.street_name)
        console.log(cookie.load('street'));

        cookie.save('city',this.state.city)
        console.log(cookie.load('city'));

        cookie.save('state',this.state.state)
        console.log(cookie.load('state'));

        // cookie.save('country',this.state.country)
        // console.log(cookie.load('country'));

        cookie.save('zipcode',this.state.zipcode)
        console.log(cookie.load('zipcode'));

       })
       .then(results => getLatLng(this.state.address_com))
       .then(latLng => {

          this.setState({
              Latitude:latLng.lat,
              Longitude:latLng.lng
          })
        console.log(latLng)
        cookie.save('Latitude',this.state.Latitude)
        console.log(cookie.load('Latitude'))

         cookie.save('Longitude',this.state.Longitude)
         console.log(cookie.load('Longitude'))
        })
       .catch(error => {
         console.error('Error', error)
          alert("Enter Complete Address with Street Number!");
           this.setState({ redirectToReferrer: false })
       })


       cookie.save('new_address',this.state.address),
       console.log(cookie.load('new_address'));



       this.setState({ redirectToReferrer: true })

   }

  render() {
    const inputProps = {
    value: this.state.address,
    onChange: this.onChange,
     }

     const { redirectToReferrer} = this.state
       if(redirectToReferrer === true)
       {
         return (
            <UpdateAddress />
          )
       }
       // this.state.address_com.map((dyanamicData,key)=>
       console.log(this.state.address_com)

  return (
   <div className="container-fluid with-maxwidth">
     <div className="row">
       <div className="col-xl-12">
         <div className="box box-transparent">
           <div className="box-body padding-lg-h">
             <form onSubmit={this.handleFormSubmit}>
               <div className="form-group">
                      <PlacesAutocomplete inputProps={inputProps} />

               </div>

                 <span className="float-right">  <RaisedButton  primary type="submit">Submit</RaisedButton></span>
              </form>

           </div>
         </div>
         <div >

     </div>
       </div>
     </div>
   </div>
  );
}
}


class UpdateAddress extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],

      }

  }
  handleNext(event) {

      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/AddEditUserHomeAddress';

      fetch(BaseURL,
      {
       method: "POST",
       body: JSON.stringify({
          "UserID":cookie.load('Id'),
          "UserToken":cookie.load('UserToken'),
          "HomeAddress1":cookie.load('street'),
          "HomeAddress2":this.state.Apt_no,
          "HomeCity": cookie.load('city'),
          "HomeState":cookie.load('state'),
          "HomeZip":cookie.load('zipcode'),
          "Latitude": cookie.load('Latitude'),
          "Longitude": cookie.load('Longitude')
       }),
        headers: new Headers({'content-type': 'application/json'}),
      })
       .then((Response)=> Response.json())
        .then((findresponse)=>{
           console.log(findresponse)

          })
       alert("Address Got updated");
       this.setState({ redirectToReferrer: true })
      }

      handleValue(event) {
         event.preventDefault();
          const target = event.target;
          const value = target.type === target.value;
          const name = target.name;

       this.setState({
             Apt_no: target.value
           });
           console.log(target.value) ;
           return target.value;
       }

  render() {

    const { redirectToReferrer} = this.state
      if(redirectToReferrer === true)
      {
        return (
           <Redirect to="../Settings"/>
         )
      }

  return (
   <div className="container-fluid with-maxwidth">
     <div className="row">
       <div className="col-xl-12">
         <div className="box box-transparent">
           <div className="box-body padding-lg-h">

               <div className="form-group">
                 <TextField floatingLabelText="ENTER COMPLETE ADDRESS " value={cookie.load('new_address')}  fullWidth />
                 <TextField onChange={(e)=>this.handleValue(e)} name="Apt_no" floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />

                 <span className="float-right">  <i className="material-icons">location_on</i></span>
               </div>
                 <RaisedButton onClick={(e)=>this.handleNext(e)} primary type="submit">SAVE</RaisedButton>


           </div>
         </div>
         <div >

     </div>
       </div>
     </div>
   </div>
  );
}
}


class Address extends React.Component {

    constructor() {
      super();
        this.state = {
          data: [],
          details:[]

        }

    }


    componentDidMount(){

          const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/Login';
           fetch(URL,
                           {
                            method: "POST",
                            body: JSON.stringify({
                              "Email":"varuna808@gmail.com",
                              "Password":"1234Howl"

                            }),
                             headers: new Headers({'content-type': 'application/json'}),
                           })
                       .then((Response)=> Response.json())
                       .then((findresponse)=>{
                           console.log(findresponse)
                           this.setState({
                              data:findresponse.LoginResult.GetUserHomeAddress,
                              details:findresponse.LoginResult.GetUser

                                               })
                                            })

    }



      handleNext(event) {
           this.setState({ redirectToReferrer: true })
      }

      handleClick(event) {
           alert("Enter New Address to Update!")
      }
    render() {

     var address1 = this.state.data.Address1;
     var address2 = this.state.data.Address2;
     var city = this.state.data.City;
     var state = this.state.data.State;
     var zip =this.state.data.Zip;
     var oldaddress=(address1 +","+ city +" "+ state+" " + zip);
     console.log(oldaddress);


       cookie.save('Firstname',this.state.details.FirstName)//Saving user details in cookies for Edit profile
       // console.log(cookie.load('Firstname'));
       cookie.save('LastName',this.state.details.LastName)
       // console.log(cookie.load('LastName'));
       cookie.save('Email',this.state.details.Email)
       // console.log(cookie.load('Email'));
       cookie.save('MobilePhoneNumber',this.state.details.MobilePhoneNumber)
       // console.log(cookie.load('MobilePhoneNumber'));


    const { redirectToReferrer} = this.state
      if(redirectToReferrer === true)
      {
        return (
           <SearchAddress />
         )
      }


    return (
     <div className="container-fluid with-maxwidth">
       <div className="row">
         <div className="col-xl-12">
           <div className="box box-transparent">
             <div className="box-body padding-lg-h">

                 <div className="form-group">

                   <TextField
                     floatingLabelText="ENTER ADDRESS"
                     value={oldaddress}
                     onClick={(e)=>this.handleNext(e)}
                     fullWidth
                   />

                   <div className="form-group">
                     <TextField  value={address2} floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />

                     <span className="float-right">  <i className="material-icons">location_on</i></span>
                   </div>
                      <RaisedButton  onClick={(e)=>this.handleClick(e)} primary type="submit">Submit</RaisedButton>
                 </div>


             </div>
           </div>
           <div >

       </div>
         </div>
       </div>
     </div>
    );
  }
}

const Page = () => (
  <article className="article">
    <h2 className="article-title text-center">CHANGE HOME ADDRESS</h2>
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Address /></div>
    </QueueAnim>
  </section>
  </article>
);
module.exports = Page;
