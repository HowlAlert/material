import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import {Add_Devices} from '../../services/index';
import APPCONFIG from 'constants/Config';

class SerialClass extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      brand: APPCONFIG.brand,
      UserId: ' ',
      UserToken:' ',
      CameraID: ' ',
      StartTime: ' ',
      EndTime:' ',
      PageNumber:' '

    }
    this.CameraImages = this.CameraImages.bind(this);

}


CameraImages(){

    Add_Devices('GetUserCameraImages',{ "UserID":"132",
  "UserToken":"Dbr\/k5trWmO3XRTk3AWfX90E9jwpoh59w\/EaiU9df\/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk\/n3QJcNSOAwiCifNh8i3O2qSoOYc0xwL7EFvQ9x4t0I0zfWrSegeLHB3EjO\/\/ziEk9gyXySjSVK\/GPmT7Qvu",
  "CameraID" : "HDXQ-038400-YFCHE",
  "StartTime" : "12/05/2017 05:42:00",
  "EndTime" : "01/05/2018 05:42:00",
  "PageNumber" : "1" })
   .then((result)=>{
     let res = result;
     console.log(this);
   });
 }

 render() {
   return (
     <article className="article">
     <center><h2 className="article-title">ENTER CAMERA SERIAL NO</h2></center>
     <div className="form-group">
       <TextField hintText="SERIAL NO"  fullWidth/>
     </div>
     <div>
       {/* //<center><button className="card bg-color-primary" onClick={this.CameraImages}><a href="cam-add-devices#/app/cameraDevices/wifi">NEXT -> </a></button></center> */}
        <center><button className="card bg-color-primary" onClick={this.CameraImages}>NEXT -></button></center>
     </div>
     </article>
   );
 }
}
const Serial = () => (
  <section className="container-fluid with-maxwidth-md chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <SerialClass />
      </div>
    </QueueAnim>
  </section>
);

module.exports = Serial;
