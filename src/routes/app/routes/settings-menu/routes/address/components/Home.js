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
               zipcode:results[0].address_components[7].long_name,


            })

         console.log(results[0]);

        cookie.save('Address1',this.state.street_no+" "+this.state.street_name)
        console.log(cookie.load('street'));



        cookie.save('City',this.state.city)
        console.log(cookie.load('city'));

        cookie.save('State',this.state.state)
        console.log(cookie.load('state'));

        // cookie.save('country',this.state.country)
        // console.log(cookie.load('country'));

        cookie.save('Zipcode',this.state.zipcode)
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
    cookie.save('Address2',this.state.Address2)
    console.log(cookie.load('Address2'));

      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/AddEditUserHomeAddress';

      fetch(BaseURL,
      {
       method: "POST",
       body: JSON.stringify({
          "UserID":cookie.load('Id'),
          "UserToken":cookie.load('UserToken'),
          "HomeAddress1":cookie.load('Address1'),
          "HomeAddress2":cookie.load('Address2'),
          "HomeCity": cookie.load('City'),
          "HomeState":cookie.load('State'),
          "HomeZip":cookie.load('Zipcode'),
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
             Address2: target.value
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
                 <TextField  onChange={(e)=>this.handleValue(e)} name="Address2" floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />

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
this.setState({
   address1:cookie.load('Address1'),
   address2:cookie.load('Address2'),
   city:cookie.load('City'),
   state:cookie.load('State'),
   zip:cookie.load('Zip'),
});


    }



      handleNext(event) {
           this.setState({ redirectToReferrer: true })
      }

      handleClick(event) {
           alert("Enter New Address to Update!")
      }
    render() {


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
                     value={this.state.address1+" , "+this.state.city+" "+this.state.state+" "+this.state.zip}
                     onClick={(e)=>this.handleNext(e)}
                     fullWidth
                   />

                   <div className="form-group">
                     <TextField  value={this.state.address2} floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />

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
