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
import Image2 from '../../home/components/Image2'



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

 handleAddDevice() {
      this.setState({ redirectToAddDevice: true })
 }
 handleExit()
 {
   this.setState({
      redirectToAddDevice:false ,

   });
 }


render() {


  const { redirectToAddDevice} = this.state
    if(redirectToAddDevice === true)
    {
      return (
        <div className="box box-default">
          <div className="box-body ">
        <h2 className="article-title">INSTRUCTIONS</h2>

             <h5>Install your HOWL Beta Motion Sensor Camera via the HOWL Alert app on your smartphone.
             You are unable to install the camera through this website.</h5>
             <span className="float-right">
                     <RaisedButton primary label="Exit" onClick={(e)=>this.handleExit(e)}/>
             </span>
        </div>
      </div>
       )
    }


  var length = this.state.length;
  if(length === 0)
  {
    var message= "Don't have a camera? "
  }


  return (
<div>
    <div >
   <div className="article-title">CAMERA</div>
             <RaisedButton  className="float-right" primary label="Buy Camera" />
            <RaisedButton  className="float-right" primary label="Add Camera"  onClick={()=>this.handleAddDevice()}/>
            {/* <a href="#/app/camerasettings/add-devices"></a> */}
           {/* <a href="#/app/cameraDevices/buy-camera"> </a></RaisedButton> */}

    </div>

  <h5>{message}</h5>


          <div className="row">
             <div className="col-xl-6">

               {/* <a href="#/app/camerasettings/motion-detection">Camera Settings</a> */}
                    <Image />

             </div>



             <div className="col-xl-6">
          
                   <Image2 />

             </div>
          </div>


</div>
   );
 }
}

const Page = () => {
  return (
    <section className="container-fluid ">



      <QueueAnim type="bottom" className="ui-animate">

        <div key="1"><Camera /></div>

      </QueueAnim>


  </section>
  )
}

module.exports = Page;
