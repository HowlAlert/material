import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import cookie from 'react-cookies';

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
       .then(results => getLatLng(results[0]))
       .then(latLng => {console.log('Success', latLng),cookie.save('latLng',latLng)})
       .catch(error => console.error('Error', error))
       var myString = this.state.address;
       console.log(myString);

       var array = myString.split(',');
       var address1 = JSON.stringify(array[0]);
       console.log(address1);
       var city = JSON.stringify(array[1]);
       console.log(city);
       var state = JSON.stringify(array[2]);
       console.log(state);

       cookie.save('new_address',this.state.address),
       console.log(cookie.load('new_address'));

console.log(this.state.formattedAddress);

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
          "HomeAddress1": "225 Atlantic",
          "HomeAddress2": "",
          "HomeCity": "Bridgeport",
          "HomeState":"connecticut",
          "HomeZip":"06604",
          "Latitude": "41.1798",
          "Longitude": "-73.1914"
       }),
        headers: new Headers({'content-type': 'application/json'}),
      })
       .then((Response)=> Response.json())
        .then((findresponse)=>{
           console.log(findresponse)

          })

      }


  render() {



  return (
   <div className="container-fluid with-maxwidth">
     <div className="row">
       <div className="col-xl-12">
         <div className="box box-transparent">
           <div className="box-body padding-lg-h">

               <div className="form-group">
                 <TextField floatingLabelText="ENTER ADDRESS " value={cookie.load('new_address')}  fullWidth />
                 <TextField floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />

                 <span className="float-right">  <i className="material-icons">location_on</i></span>
               </div>
                 <RaisedButton  primary type="submit">SAVE</RaisedButton>


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
                              data:findresponse.LoginResult.GetUserHomeAddress
                                               })
                                            })

    }



      handleNext(event) {
           this.setState({ redirectToReferrer: true })
      }
    render() {

     var address1 = this.state.data.Address1;
     var address2 = this.state.data.Address2;
     var city = this.state.data.City;
     var state = this.state.data.State;
     var zip =this.state.data.Zip;
     var oldaddress=(address1 +","+ address2 +" "+ city +" "+ state+" " + zip);
     console.log(oldaddress);

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
                     <TextField floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />

                     <span className="float-right">  <i className="material-icons">location_on</i></span>
                   </div>
                      <RaisedButton  primary type="submit">Submit</RaisedButton>
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
