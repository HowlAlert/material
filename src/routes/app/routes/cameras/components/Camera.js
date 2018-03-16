import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Add_Devices} from '../../services/index';
import APPCONFIG from 'constants/Config';
import Image from './Image';
import Toggle from 'material-ui/Toggle';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Detection from '../../cam-settings-menu/routes/motion-detection/components/Detection';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';

const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
};

class Camera extends React.Component {
 constructor() {

   super();
     this.state = {
       data: [],
       data2: [],
       ImageUrl:[]
     };
 }


 handleImage(value) {

   var today = moment(this.state.startDate).format('MM/DD/YYYY');
   console.log(today);

 var endhours = "23";
 var endminutes = "59";
 var endsecond = "00";

 var et= endhours + ':' + endminutes + ':' + endsecond;

 var EndTime = today + " " + et


     var cameraid = `${value}`;
     console.log(cameraid)

     const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';

         fetch(BaseURL,
         {
          method: "POST",
          body: JSON.stringify({
            "UserID":cookie.load('Id'),
            "UserToken":cookie.load('UserToken'),
            "CameraID": cameraid,
   	        "StartTime" :"12/11/2017 00:00:00",
            "EndTime" : EndTime,
            "PageNumber" : "1" }),
           headers: new Headers({'content-type': 'application/json'}),
         })
     .then((Response)=> Response.json())
     .then((findresponse)=>{
         console.log(findresponse)
         console.log(findresponse.GetUserCameraImagesResult.CameraImages)

        let arr4=[];
        arr4=  findresponse.GetUserCameraImagesResult.CameraImages.slice(0, 1);          //To get the top most image of the camera recordings
        // console.log(arr4);
          this.setState({  data2:arr4 , array_count:arr4.length })
          // console.log(arr4.length);
          // console.log(this.state.data2);
       this.state.data2.map((dyanamicData,key)=>
          fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
                       {

                            method: "POST",
                            body: JSON.stringify({
                              "url":dyanamicData.ImageURL
                            }),
                           headers: new Headers({'content-type':'application/json'}),
                     })


                  .then((Response)=> Response.json())

                  .then((findresponse1)=>{
                      console.log(findresponse1)
                      this.setState({
                         ImageUrl:findresponse1
                      })

                  })
                 )
              });



 }







 componentDidMount(){

   const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCamera';

       fetch(BaseURL,
       {
        method: "POST",
        body: JSON.stringify({
          "UserID":cookie.load('Id'),
          "UserToken":cookie.load('UserToken')
        }),
         headers: new Headers({'content-type': 'application/json'}),
       })
   .then((Response)=> Response.json())
   .then((findresponse)=>{
       console.log(findresponse),

       this.setState({
          data:findresponse.GetUserCameraResult.RoomCameraList,
          // data1:  findresponse.GetUserCameraResult.RoomCameraList.map((dyanamicData,key) =>dyanamicData.Camera),
          camearaid:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].CameraID,
          // cameraid1:findresponse.GetUserCameraResult.RoomCameraList["1"].Camera["0"].CameraID,    //second camera Id
          // length:findresponse.GetUserCameraResult.RoomCameraList.length
       })

         console.log(this.state.data)
        // console.log(this.state.cameraid1)
         // console.log(this.state.length)
        // console.log(this.state.camearaid);
        var camid=this.state.camearaid;
        cookie.save('camearaid',camid);
        // // cookie.save('camearaid1',camid1);
        console.log(cookie.load('camearaid'))
     })


       var today = moment(this.state.startDate).format('MM/DD/YYYY');
       console.log(today);

     // var starthours = "00";
     // var startminutes = "00";
     // var startsecond = "00";
     var endhours = "23";
     var endminutes = "59";
     var endsecond = "00";

     // var st= starthours + ':' + startminutes + ':' + startsecond;
     var et= endhours + ':' + endminutes + ':' + endsecond;
     // var StartTime = today + " " + st
     // console.log(StartTime);
     var EndTime = today + " " + et
     console.log(EndTime);



     const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';
   console.log("ImageURL");
         fetch(URL,
         {
          method: "POST",
          body: JSON.stringify({
            "UserID":cookie.load('Id'),
            "UserToken":cookie.load('UserToken'),
            "CameraID": cookie.load('camearaid'),
   	       "StartTime" :"12/11/2017 00:00:00",
            "EndTime" : EndTime,
            "PageNumber" : "1" }),
           headers: new Headers({'content-type': 'application/json'}),
         })
     .then((Response)=> Response.json())
     .then((findresponse)=>{
         console.log(findresponse)
         console.log(findresponse.GetUserCameraImagesResult.CameraImages)

        let arr4=[];
        arr4=  findresponse.GetUserCameraImagesResult.CameraImages.slice(0, 1);          //To get the top most image of the camera recordings
        // console.log(arr4);
          this.setState({  data2:arr4 , array_count:arr4.length })
          // console.log(arr4.length);
          // console.log(this.state.data2);
       this.state.data2.map((dyanamicData,key)=>
          fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
                       {

                            method: "POST",
                            body: JSON.stringify({
                              "url":dyanamicData.ImageURL
                            }),
                           headers: new Headers({'content-type':'application/json'}),
                     })


                  .then((Response)=> Response.json())

                  .then((findresponse1)=>{
                      console.log(findresponse1)
                      this.setState({
                         ImageUrl:findresponse1
                      })




                  })
          )
              });

 }

render() {
  var length = this.state.length;
  if(length === 0)
  {
    var message= "Don't have a camera? "
  }

  return (

  <article className="article">


        <div>
                <h5>{message}</h5>
                <img src={`data:image/jpg;base64,${this.state.ImageUrl.GetImageDataResult}`} alt="Image" height="400" width="400"/>
        </div>
  <div className="row">


  {
    this.state.data.map((dyanamicData,key) =>

     <div className="box box-default col-xl-6">
      <div className="box-body ">
      <center>

               <RaisedButton primary label= {dyanamicData.SortRoomName}

                 onClick={()=>this.handleImage(dyanamicData.Camera.map((dyanamicData1,key1) =>dyanamicData1.CameraID))}/>
      </center>
     </div>
   </div>

   )}
</div>

  <center>

     <Detection/>

  </center>

{/* <Toggle label="Activate Motion Sensor" defaultToggled style={styles.toggle}/> */}
    {/* <div>
      {
        this.state.data.map((dyanamicData,key) =>

              <div>
                {
                  dyanamicData.Camera.map((dyanamicData1,key1) =>
                       <div>
                           {dyanamicData1.CameraID}
                       </div>
                 )}
              </div>

       ) }
    </div> */}


    <section>

        <div className="box bg-color-dark">
       <div className="row">
          <div className="box-body col-xl-6">
              <a href="#/app/camerasettings/motion-detection">
              <center>Camera Motion Detection</center> </a>
          </div>
          <div className="box-body col-xl-6">
               <a href="#/app/camerasettings/camera-history">
              <center>Camera Histroy</center></a>
          </div>

        </div>
      </div>


    </section>



    <div className="page-footer">

      <center>
        <p>{message}</p>
          <RaisedButton primary label="Buy Camera" >
          <a href="#/app/cameraDevices/buy-camera"> </a></RaisedButton>

      </center>

    </div>

  </article>
   );
 }
}

const Page = () => {
  return (
  <article className="article">
    <h2 className="article-title text-center">CAMERA<button className="float-right">
      <a href="#/app/camerasettings/add-devices">Add Device Instructions</a></button></h2>
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        {/* <div key="1"><Image /></div> */}
        <div key="1"><Camera /></div>

      </QueueAnim>
    </section>
  </article>
  )
}

module.exports = Page;
