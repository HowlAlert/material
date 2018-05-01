import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import TiggerAlerts from './TiggerAlerts';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
// import Howls_Me from '../../pack-menu/routes/howls_me/components/Howls_Me';
import Howls_Messages from './Howl_Messages';
import Map from './AlertsMap';


const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

class Alerts extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
        data1: [],
        counter: 2,
        disabled1: false,
        disabled2: true
      };
  }


 handleMap(value1,value2,value3) {                 //Redirecting to Map page

   var latitude = `${value1}`;
   // console.log(latitude);

   var longitude = `${value2}`;
   // console.log(longitude);

   var date = `${value3}`;
   // console.log(date);

   cookie.save('AlertLatitude',latitude)
   console.log(cookie.load('AlertLatitude'))

    cookie.save('AlertLongitude',longitude)
    console.log(cookie.load('AlertLongitude'))

    // cookie.save('AlertDate',date)
    // console.log(cookie.load('AlertDate'))


    this.setState({ redirectToReferrer: true })



 }

  componentDidMount(){

   var that = this;
    var urls = [];
    var a1 =[];
    // console.log(this.state.counter);


    const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserFeed';
     // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

        fetch(BaseURL,
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":cookie.load('Id'),
           "UserToken":cookie.load('UserToken'),
           "PageNumber":"1"
         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{
      console.log(findresponse);
      this.setState({
         data:findresponse.GetUserFeedResult.getUserFeeds,
         length:findresponse.GetUserFeedResult.getUserFeeds.length,
         // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
       })

             })

        }




  render() {
    const { redirectToReferrer} = this.state
      if(redirectToReferrer === true)
      {
        return (

          <Map />


         )
      }


  return (


    <div >

        <div className="box box-default dkShadow overHidden">
          <div className="box-body">
             <h2 className="article-title-header">Triggered Alerts</h2>
       <Menu>
          {
            this.state.data.map((dyanamicData1,key)=>


            dyanamicData1.ImageURL === ""

            ?



    // <div className="box box-default  ">
    //     <div className="box-body ">
           <MenuItem onClick={()=>this.handleMap(dyanamicData1.getUserAlert.Latitude,dyanamicData1.getUserAlert.Longitude,dyanamicData1.DateCreated)} >


                  {` ${dyanamicData1.Text}`  }
                    {/* {`${dyanamicData1.DateCreated}`} */}

            </MenuItem>

   : null



             )}


 </Menu>

          </div>
        </div>
       {/* <TiggerAlerts /> */}


      </div>





    );
  }
 }

 const AlertDashboard = () => (
   <div className="row">


     <div className="col-lg-12">
       <div className="box box-default dkShadow">
         <div className="box-body">
         <h2 className="article-title-header">Camera Alerts</h2>

         <TiggerAlerts />
     </div>
     </div>
     </div>
     <div className="col-lg-12">
        <Alerts />

     </div>


     <div className="col-lg-12">
      <Howls_Messages />
     </div>



   </div>

 );
const Page = () => {
  return (


    <section className="container-fluid chapter">



      <QueueAnim type="bottom" className="ui-animate">

        <div key="1"><AlertDashboard /></div>

      </QueueAnim>

    </section>

  )
}

module.exports = Page;
