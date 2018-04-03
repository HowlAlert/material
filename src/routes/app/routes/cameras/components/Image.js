import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import cookie from 'react-cookies';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import QueueAnim from 'rc-queue-anim';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';



class ImageBox extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      // data1: []
    };


  }

  handleImage(value1,value2) {



        var cameraid = `${value1}`;
        cookie.save('cameraid',cameraid);
         console.log(cookie.load('cameraid'));
           var CameraName = `${value2}`;
        cookie.save('cameraName',this.state.CameraName);
         console.log(cookie.load('cameraName'));


         // this.setState({ redirectToReferrer: true })
    }

componentDidMount(){

  var today = moment(this.state.startDate).format('MM/DD/YYYY');
  console.log(today);

var starthours = "00";
var startminutes = "00";
var startsecond = "00";
var endhours = "23";
var endminutes = "59";
var endsecond = "00";

var st= starthours + ':' + startminutes + ':' + startsecond;
var et= endhours + ':' + endminutes + ':' + endsecond;
var StartTime = today + " " + st
console.log(StartTime);
var EndTime = today + " " + et
console.log(EndTime);

  const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCamera';

      fetch(URL,
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
    this.setState({
         length:findresponse.GetUserCameraResult.RoomCameraList.length,
         CameraName:findresponse.GetUserCameraResult.RoomCameraList["0"].SortRoomName,
         CameraId:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].CameraID
    })



      fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages',
      {
       method: "POST",
       body: JSON.stringify({
         "UserID":cookie.load('Id'),
         "UserToken":cookie.load('UserToken'),
         "CameraID": this.state.CameraId,
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
                      data:findresponse1
                   })

  })



)
})
           });
   }


  render() {

    const { redirectToReferrer} = this.state
          if(redirectToReferrer === true)
          {
            return (
               <Redirect to="camerasettings/camera-history" />
             )
          }



    return (



      <div className="box box-default">
          <div className="box-body ">

           <h2 className="article-title-header ">{this.state.CameraName} </h2>
       <div className="ih-item ih-material">

        <a href="#/app/camerasettings/camera-history" onClick={()=>this.handleImage(this.state.CameraId,this.state.CameraName)}>
                   <div className="img">
                     <img src={`data:image/jpg;base64,${this.state.data.GetImageDataResult}`} alt="Image"  width="100%"  height="100%" />
                   </div>
                   <div className="info">
                     <div className="info-mask bg-color-primary" />
                     <div className="info-content">
                       <div className="info-inner">
                         <h3>Click Here for Live Video...</h3>
                       </div>
                     </div>
                   </div>
                 </a>
            {/* <a href="#/app/camerasettings/camera-history" >
                <img src={`data:image/jpg;base64,${this.state.data.GetImageDataResult}`} alt="Image"  width="100%"  height="100%" />
             </a> */}
       </div>
       </div>
</div>



    );
  }
}

const ImageSection = () => (


<section className="chapter">

      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><ImageBox /></div>
      </QueueAnim>

</section>



);

module.exports = ImageSection;
