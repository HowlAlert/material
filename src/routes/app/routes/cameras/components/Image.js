import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import cookie from 'react-cookies';
import RaisedButton from 'material-ui/RaisedButton';

class ImageBox extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      // data1: []
    };


  }

componentDidMount(){

  const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';
console.log("ImageURL");
      fetch(BaseURL,
      {
       method: "POST",
       body: JSON.stringify({
         "UserID":cookie.load('Id'),
         "UserToken":cookie.load('UserToken'),
         "CameraID" :"HDXQ-038386-TMHKD",
         "StartTime" :"12/05/2017 00:00:00",
         "EndTime" : "01/18/2018 23:59:59",
         "PageNumber" : "1" }),
        headers: new Headers({'content-type': 'application/json'}),
      })
  .then((Response)=> Response.json())
  .then((findresponse)=>{
      console.log(findresponse)
      console.log(findresponse.GetUserCameraImagesResult.CameraImages)
     //  this.setState({
     //     data1:findresponse.GetUserCameraImagesResult
     //  })
     // console.log(this.state.data1)
     // let recipesCopy = JSON.parse(JSON.stringify(this.state.CameraImages))
     //  let url =  recipesCopy[0].ImageURL
     //    console.lof(url);

      findresponse.GetUserCameraImagesResult.CameraImages.map((dyanamicData,key)=>




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
           });
   }


  render() {
    var mes = this.state.data.length
    if(mes === 0)
    {
      var message= "Click  ADD DEVICE INSTRUCTIONS Button to follow Instructions to add devices "
    }

    return (
      <div className="box box-transparent">

        <div className="row">
            <div className="col-md-4 text-center">
              <h5>{message}</h5>
              <img src={`data:image/jpg;base64,${this.state.data.GetImageDataResult}`} alt="Image" height="150" width="150"/>
            </div>


        </div>


          {/* <center>
                     <a href="cam-add-devices#/app/cameraDevices/add-devices">
                         <i className="material-icons">add</i><br />
                        Touch here to follow the instructions to add a camera
                       </a>
          </center> */}




      </div>
    );
  }
}

const ImageSection = () => (
  <article className="article">
    <h2 className="article-title text-center no-margin-top">CAMERA
      <RaisedButton className="float-right" primary label="Add Device Instructions" >
      <a href="cam-settings-menu#/app/camerasettings/add-devices"> </a></RaisedButton>
    </h2>
    <section className="box box-default">
      <div className="box-body padding-xl">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-lg-12">
              <ImageBox />
            </div>

          </div>
        </div>
      </div>
    </section>
  </article>
);

module.exports = ImageSection;
