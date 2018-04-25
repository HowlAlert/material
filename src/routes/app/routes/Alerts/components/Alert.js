import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import TiggerAlerts from './TiggerAlerts';
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

 //  handleDelete(value) {
 //
 //    alert("Are you sure you want to delete?")
 //
 //      var alertid = `${value}`;
 //      console.log(alertid)
 //    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/DeleteUserFeed';
 //
 //        fetch(BaseURL,
 //        {
 //         method: "POST",
 //         body: JSON.stringify({
 //           "UserID":cookie.load('Id'),
 //           "UserToken":cookie.load('UserToken'),
 //           "UserFeedID" :alertid
 //         }),
 //          headers: new Headers({'content-type': 'application/json'}),
 //        })
 //    .then((Response)=> Response.json())
 //    .then((findresponse)=>{
 //        console.log(findresponse)
 //
 //        this.setState({
 //                 status:findresponse.DeleteUserFeedResult.resultStatus.Status,
 //                 message:findresponse.DeleteUserFeedResult.resultStatus.StatusMessage
 //                   })
 //
 //                   // console.log(this.state.status);
 //                   // console.log(this.state.message);
 //                   if(this.state.status === "0")
 //                   {
 //                     alert(this.state.message);
 //
 //                   }
 //
 //                   else {  alert("Deleted Alert!") ;
 //                           window.location.reload();
 //                    }
 //
 //       })
 //
 //
 //  }
 //
 //
 //  handleNext(value) {
 //                              //Redirecting to next page of alerts
 //    var count = `${value}`;
 //    console.log(count);
 //
 //    this.setState({
 //        counter: this.state.counter + 1,
 //        disabled2: false,
 //    });
 //
 //
 //      var that = this;
 //       var urls = [];
 //       var a1 =[];
 //       // console.log(this.state.counter);
 //
 //
 //       const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';
 //
 //           fetch(BaseURL,
 //           {
 //            method: "POST",
 //            body: JSON.stringify({
 //              "UserID":cookie.load('Id'),
 //              "UserToken":cookie.load('UserToken'),
 //              "PageNumber":this.state.counter
 //            }),
 //             headers: new Headers({'content-type': 'application/json'}),
 //           })
 //       .then((Response)=> Response.json())
 //       .then((findresponse)=>{
 //         console.log(findresponse);
 //         this.setState({
 //            data:findresponse.GetUserFeedResult.getUserFeeds,
 //            length:findresponse.GetUserFeedResult.getUserFeeds.length,
 //            // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
 //          })
 //          Promise.all(
 //                  findresponse.GetUserFeedResult.getUserFeeds.map(
 //                    element => fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
 //                                          {
 //
 //                                               method: "POST",
 //                                               body: JSON.stringify({
 //                                                 "url":element.ImageURL
 //                                               }),
 //
 //                                              headers: new Headers({'content-type':'application/json'}),
 //
 //                                        })
 //                      .then(res => res.json())
 //                  )
 //                ).then(datas => {
 //
 //                  this.state.data.forEach((element, i) => {
 //                    urls[i] = element
 //
 //                  })
 //                console.log(urls);
 //                console.log(datas);
 //             let arr3 = [];                                  // to combine the results of the two arrays
 //                     urls.forEach((itm, i) => {
 //                              arr3.push(Object.assign({}, itm, datas[i]));
 //                          });
 //
 //                          console.log(arr3.length);
 //                          this.setState({  data1:arr3 , array_count:arr3.length })
 //
 //
 //                          var total = this.state.array_count;
 //                          console.log(total);
 //
 //                          if(total < 20)
 //                           {  alert("No more Alerts!");
 //
 //                                 this.setState({
 //                                        counter: this.state.counter - 2,
 //                                        disabled1: true,
 //                                        disabled2:false
 //                                   });
 //                           }
 //
 //
 //
 //            })
 //                 })
 //
 //
 //
 // }
 // handleBack(value) {                 //Redirecting to previous page of alerts
 //
 //   var count = `${value}`;
 //   console.log(count);
 //
 //
 //    this.setState({
 //        counter: this.state.counter - 1,
 //        disabled1: false
 //    });
 //
 //
 //    // var total = this.state.array_count;
 //    // console.log(total);
 //    // if(total == 20)
 //    //  {
 //    //        this.setState({
 //    //               disabled: false
 //    //          });
 //    //  }
 //
 //
 //    if(this.state.counter <= 1)
 //     {  alert("No more Alerts!");
 //
 //          this.setState({
 //
 //                disabled2: true,
 //                disabled1: false,
 //                counter: this.state.counter + 1,
 //             });
 //     }
 //
 //     var that = this;
 //      var urls = [];
 //      var a1 =[];
 //      console.log(this.state.counter);
 //
 //
 //      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';
 //
 //          fetch(BaseURL,
 //          {
 //           method: "POST",
 //           body: JSON.stringify({
 //             "UserID":cookie.load('Id'),
 //             "UserToken":cookie.load('UserToken'),
 //             "PageNumber":this.state.counter
 //           }),
 //            headers: new Headers({'content-type': 'application/json'}),
 //          })
 //      .then((Response)=> Response.json())
 //      .then((findresponse)=>{
 //        console.log(findresponse);
 //        this.setState({
 //           data:findresponse.GetUserFeedResult.getUserFeeds,
 //           length:findresponse.GetUserFeedResult.getUserFeeds.length,
 //           // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
 //         })
 //         Promise.all(
 //                 findresponse.GetUserFeedResult.getUserFeeds.map(
 //                   element => fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
 //                                         {
 //
 //                                              method: "POST",
 //                                              body: JSON.stringify({
 //                                                "url":element.ImageURL
 //                                              }),
 //
 //                                             headers: new Headers({'content-type':'application/json'}),
 //
 //                                       })
 //                     .then(res => res.json())
 //                 )
 //               ).then(datas => {
 //
 //                 this.state.data.forEach((element, i) => {
 //                   urls[i] = element
 //
 //                 })
 //               //console.log(urls);
 //               //console.log(datas);
 //            let arr3 = [];                                  // to combine the results of the two arrays
 //                    urls.forEach((itm, i) => {
 //                             arr3.push(Object.assign({}, itm, datas[i]));
 //                         });
 //
 //                         console.log(arr3.length);
 //                         this.setState({  data1:arr3 , array_count:arr3.length })
 //
 //
 //           })
 //                })
 //
 //
 //
 // }

 handleMap(value1,value2,value3) {                 //Redirecting to previous page of alerts

   var latitude = `${value1}`;
   console.log(latitude);

   var longitude = `${value2}`;
   console.log(longitude);

   var date = `${value3}`;
   console.log(date);



   cookie.save('AlertLatitude',latitude)
   console.log(cookie.load('AlertLatitude'))

    cookie.save('AlertLongitude',longitude)
    console.log(cookie.load('AlertLongitude'))

    cookie.save('AlertDate',date)
    console.log(cookie.load('AlertDate'))



    var geocoder;
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(latitude, longitude);

        geocoder.geocode(
            {'latLng': latlng},
            function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var add= results[0].formatted_address ;
                        var  value=add.split(",");

                         var count=value.length;

                         var country=value[count-1];
                         var state=value[count-2];
                         var city=value[count-3];
                         var address = city + state +country ;
                         console.log(address)

                         cookie.save('AlertAddress',address)
                         console.log(cookie.load('AlertAddress'))

                    }
                    else  {
                      console.log( "address not found");
                    }
                }
                else {
                  console.log("Geocoder failed due to: " + status);
                }
            }
        );

    this.setState({ redirectToReferrer: true })



 }

  componentDidMount(){

   var that = this;
    var urls = [];
    var a1 =[];
    // console.log(this.state.counter);


    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

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
       Promise.all(
               findresponse.GetUserFeedResult.getUserFeeds.map(
                 element => fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
                                       {

                                            method: "POST",
                                            body: JSON.stringify({
                                              "url":element.ImageURL
                                            }),

                                           headers: new Headers({'content-type':'application/json'}),

                                     })
                   .then(res => res.json())
               )
             ).then(datas => {

               this.state.data.forEach((element, i) => {
                 urls[i] = element

               })
             //console.log(urls);
             //console.log(datas);
          let arr3 = [];                                  // to combine the results of the two arrays
                  urls.forEach((itm, i) => {
                           arr3.push(Object.assign({}, itm, datas[i]));
                       });

             console.log(arr3.length);
             this.setState({  data1:arr3 , array_count:arr3.length })
             console.log(this.state.data1)

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

        <div className="box box-default dkShadow">
          <div className="box-body">
             <h2 className="article-title-header">Triggered Alerts</h2>
       <Menu>
          {
            this.state.data1.map((dyanamicData1,key)=>


            dyanamicData1.GetImageDataResult === ""

            ?



    // <div className="box box-default  ">
    //     <div className="box-body ">
           <MenuItem onClick={()=>this.handleMap(dyanamicData1.getUserAlert.Latitude,dyanamicData1.getUserAlert.Longitude,dyanamicData1.DateCreated)} >


                  {` ${dyanamicData1.Text}`  }
                    {/* {`${dyanamicData1.DateCreated}`} */}

            </MenuItem>

   : null




              //    <div className="box box-default col-xl-6 ">
              //        <div className="box-body ">
              //               {dyanamicData1.Text}
              //
              //   </div>
              //   <span className="float-left">
              //      <div className="text-center"> <RaisedButton primary label="Delete" onClick={()=>this.handleDelete(dyanamicData1.ID)}/></div>
              //   </span>
              // </div>

             )}

        {/* <div>
             <RaisedButton primary label="Next ->" onClick={()=>this.handleNext(this.state.counter)}

               disabled={this.state.disabled1}/>
               <span className="float-right">
                       <RaisedButton primary label="<- back" onClick={()=>this.handleBack(this.state.counter)}   disabled={this.state.disabled2}/>
              </span>
         </div> */}

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


     <div className="col-xl-12">
       <div className="box box-default dkShadow">
         <div className="box-body">
         <h2 className="article-title-header">Camera Alerts</h2>

         <TiggerAlerts />
     </div>
     </div>
     </div>
     <div className="col-xl-12">
        <Alerts />

     </div>


     <div className="col-xl-12">
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
