import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


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
         .then(latLng => console.log('Success', latLng))
         .catch(error => console.error('Error', error))
         console.log(this.state.address);


         // const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/AddEditUserHomeAddress';
         //  fetch(URL,
         //                  {
         //                   method: "POST",
         //                   body: JSON.stringify({
         //                     "Email":"varuna808@gmail.com",
         //                     "Password":"1234Howl"
         //
         //                   }),
         //                    headers: new Headers({'content-type': 'application/json'}),
         //                  })
         //              .then((Response)=> Response.json())
         //              .then((findresponse)=>{
         //                  console.log(findresponse)
         //                  this.setState({
         //                     data:findresponse.LoginResult.GetUserHomeAddress
         //                                      })
         //                                   })


     }



    render() {

      const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
       }

    return (
     <div className="container-fluid with-maxwidth">
       <div className="row">
         <div className="col-xl-12">
           <div className="box box-transparent">
             <div className="box-body padding-lg-h">
               <form onSubmit={this.handleFormSubmit}>
                 <div className="form-group">

                        <PlacesAutocomplete   inputProps={inputProps} />


                 </div>
                   <RaisedButton  primary type="submit">Submit</RaisedButton>
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

const Page = () => (
  <article className="article">
    <h2 className="article-title text-center">CHANGE HOME ADDRESS</h2>
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><SearchAddress/></div>
    </QueueAnim>
  </section>
  </article>
);
module.exports = Page;
