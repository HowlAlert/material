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


       })
       .then(results => getLatLng(this.state.address_com))
       .then(latLng => {

          this.setState({
              Latitude:latLng.lat,
              Longitude:latLng.lng
          })

            //
            // console.log(this.state.Latitude);
            // console.log(this.state.Longitude);
            // console.log(this.state.street_no+" "+this.state.street_name)


          const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/AddEditUserHomeAddress';
          // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/AddEditUserHomeAddress';

          fetch(BaseURL,
          {
           method: "POST",
           body: JSON.stringify({
              "UserID":cookie.load('Id'),
              "UserToken":cookie.load('UserToken'),
              "HomeAddress1":this.state.street_no+" "+this.state.street_name,
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
               // console.log(findresponse)

              })
           alert("Address Got updated");
             this.setState({ redirectToReferrer: true })


         cookie.save('Address1',this.state.street_no+" "+this.state.street_name)
         // console.log(cookie.load('Address1'));

        cookie.save('AptNo',this.state.Address2)

         cookie.save('City',this.state.city)
         // console.log(cookie.load('City'));

         cookie.save('State',this.state.state)
         // console.log(cookie.load('State'));

         cookie.save('Zip',this.state.zipcode)
         // console.log(cookie.load('Zip'));

         cookie.save('Latitude',this.state.Latitude)
         // console.log(cookie.load('Latitude'))

          cookie.save('Longitude',this.state.Longitude)
          // console.log(cookie.load('Longitude'))

        })
       .catch(error => {
         console.error('Error', error)
          alert("Enter Complete Address with Street Number!");
           this.setState({ redirectToReferrer: false })
       })


       cookie.save('new_address',this.state.address);
       // console.log(cookie.load('new_address'));

   }


   handleValue(event) {
      event.preventDefault();
       const target = event.target;
       const value = target.type === target.value;
       const name = target.name;

    this.setState({
          Address2: target.value
        });
        // console.log(target.value) ;
        return target.value;
    }

    handleBack(event) {
      window.location.reload();
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
          <div>
            <h4> {this.state.address} is your updated Address </h4>
            <RaisedButton onClick={(e)=>this.handleBack(e)} primary label="<- Back" />
          </div>

          )
       }



  return (

           <div >


               <TextField  onChange={(e)=>this.handleValue(e)} name="Address2" floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />
                <PlacesAutocomplete inputProps={inputProps}  onKeyDown={(e)=>this.keyPress(e)} />


                <div className="divider" />
                <div className="row">
                  <div className="col-lg-6 noPadRight">

                    <div className="howlDelete" primary label="Cancel" onClick={(e)=>this.handleBack(e)} disabled={this.state.Cancel_disabled} >Cancel</div>
                  </div>
                  <div className="col-lg-6 noPadLeft">
                     <div  className="howlBlue" onClick={(e)=>this.handleFormSubmit(e)} primary label="SAVE" >SAVE</div>
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
   address2:cookie.load('AptNo'),
   city:cookie.load('City'),
   state:cookie.load('State'),
   zip:cookie.load('Zip'),
});


    }

      handleNext(event) {
           this.setState({ redirectToReferrer: true })
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
     // <div className="container-fluid with-maxwidth">
     //   <div className="row">
     //     <div className="col-xl-12">
     //       <div className="box box-transparent">
     //         <div className="box-body padding-lg-h">

                 <div className="form-group">

                   <TextField
                     floatingLabelText="ENTER ADDRESS"
                     value={this.state.address1+" , "+this.state.city+" "+this.state.state+" "+this.state.zip}
                     onClick={(e)=>this.handleNext(e)}
                     fullWidth
                   />


                   <div className="form-group">
                     {
                       this.state.address2 === "undefined" ?
                              <div>
                                <TextField   onClick={(e)=>this.handleNext(e)} floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />

                              </div>

                           :    <TextField
                                  value={this.state.address2}
                                  onClick={(e)=>this.handleNext(e)}
                                  floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />
                     }


                     <span className="float-right">  <i className="material-icons">location_on</i></span>
                   </div>
                      {/* <RaisedButton  onClick={(e)=>this.handleClick(e)} primary type="submit">Submit</RaisedButton> */}
                 </div>



    );
  }
}

const Page = () => (


    <section className="">

      <h2 className="article-title-header">Change Home Address</h2>

      <QueueAnim type="bottom" className="ui-animate">
          <div key="1"><Address /></div>
      </QueueAnim>


    </section>

);
module.exports = Page;
