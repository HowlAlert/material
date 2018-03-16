import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import cookie from 'react-cookies';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';

class ImageBox extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      // data1: []
    };


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
         length:findresponse.GetUserCameraResult.RoomCameraList.length

    })


        if(length >= 0)
        {

            var  CameraId = findresponse.GetUserCameraResult.RoomCameraList.map((dyanamicData,key) =>

                    dyanamicData.Camera.map((dyanamicData1,key1) => dyanamicData1.CameraID))

        }
CameraId.map((dyanamicData1,key1) =>
          this.setState({
               camid:CameraId[key1]["0"]
          })


        )
  console.log(this.state.camid)
       console.log(CameraId["1"]["0"])

    console.log(CameraId);




var camid =CameraId["1"]["0"];
console.log(camid);
      fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages',
      {
       method: "POST",
       body: JSON.stringify({
         "UserID":cookie.load('Id'),
         "UserToken":cookie.load('UserToken'),
         "CameraID": camid,
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
    // var mes = this.state.data.length
    // if(mes === 0)
    // {
    //   var message= "Click  ADD DEVICE INSTRUCTIONS Button to follow Instructions to add devices "
    // }

    return (


           <div>
              {/* <h5>{message}</h5> */}

            <img src={`data:image/jpg;base64,${this.state.data.GetImageDataResult}`} alt="Image" height="90%" width="90%"/>

          </div>

    );
  }
}

const ImageSection = () => (
  <article className="article">

    <section className="box box-default">
      <div className="box-body">
          <a href="#/app/Cameras">Live Video   ->   </a>
              <ImageBox />
            </div>
    </section>
  </article>
);

module.exports = ImageSection;
