import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Add_Devices} from '../../services/index';
import APPCONFIG from 'constants/Config';
import Image from './Image';
import Toggle from 'material-ui/Toggle';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Detection from '../../cam-settings-menu/routes/motion-detection/components/Detection';


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
     };
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
       console.log(cookie.load('Id')),
       console.log(cookie.load('UserToken')),
       this.setState({
          data:findresponse.GetUserCameraResult.RoomCameraList,
          camearaid:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].CameraID,
          length:findresponse.GetUserCameraResult.RoomCameraList.length
       })

         console.log(this.state.data)
         // console.log(this.state.length)
        // console.log(this.state.camearaid);
        var camid=this.state.camearaid;
        cookie.save('camearaid',camid);
        console.log(cookie.load('camearaid'))
     })

 }

render() {
  var length = this.state.length;
  if(length === 0)
  {
    var message= "Don't have a camera? "
  }

  return (

  <article className="article">

  <center>

     <Detection/>

  </center>

{/* <Toggle label="Activate Motion Sensor" defaultToggled style={styles.toggle}/> */}
    {/* <div>
      {
        this.state.data.map((dyanamicData,key) =>
        <div>
            <div >{dyanamicData.SortRoomName} </div>
            {
              (typeof(dyanamicData.Camera)=='object')?
              <div>
                {
                  dyanamicData.Camera.map((dyanamicData1,key1) =>
                       <div>
                           {"Motion Detection Status: "+dyanamicData1.MotionDetectionStatus}
                       </div>
                 )
               }
              </div>
              :
                null
            }

        </div>

       )
      }
    </div> */}


    <section>
      <div className="box-body padding-xl bg-color-dark">

        <div className="row">
            <div className="col-md-4">
              {
                this.state.data.map((dyanamicData,key) =>
                <div>
                    {
                      (typeof(dyanamicData.Camera)=='object')?
                      <div>
                        {
                          dyanamicData.Camera.map((dyanamicData1,key1) =>
                               <div>
                                   {dyanamicData1.Name}
                               </div>
                         )
                       }
                      </div>
                      :
                        null

                    }

                </div>

               )
              }
              <a href="cam-settings-menu#/app/camerasettings/settings-menu"><i className="nav-icon material-icons">settings</i> Camera settings</a>

             </div>


        </div>

      </div>


    </section>



    <div className="page-footer">

      <center>
        <p>{message}</p>
        <button className="card bg-color-primary"><a href="cam-add-devices#/app/cameraDevices/buy-camera">Buy Camera </a></button>

      </center>

    </div>

  </article>
   );
 }
}

const Page = () => {
  return (

    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Image /></div>
        <div key="2"><Camera /></div>

      </QueueAnim>
    </section>
  )
}

module.exports = Page;
