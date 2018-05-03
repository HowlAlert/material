import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import cookie from 'react-cookies';

class Schedule extends React.Component {
  constructor() {
    super();
      this.state = {
        data: [],
      }
  }

  componentDidMount(){

        const URL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetRoomCameraSchedule';
        // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetRoomCameraSchedule';
         fetch(URL,
                         {
                          method: "POST",
                          body: JSON.stringify({
                            "UserID":cookie.load('Id'),
                            "UserToken":cookie.load('UserToken'),
                            "RoomCameraID" :cookie.load('RoomId')

                          }),
                           headers: new Headers({'content-type': 'application/json'}),
                         })
                     .then((Response)=> Response.json())
                     .then((findresponse)=>{
                          console.log(findresponse)
                         this.setState({
                            data:findresponse.GetRoomCameraScheduleResult.getGroupCameraSetting
                                             })
                                          })

  }

  renderUserMessage(){
    var message= "Set times during which motion sensor will be active in order to limit unnecessary alerts and image capture."
    var len = this.state.data.length;
     console.log(len);
     if (this.state.data.length === 0) {
       return (
         <span>
             <h5>{message}</h5>
         </span>
       );
     } else {
       return (
         <div>
         {
              this.state.data.map((dyanamicData,key)=>
              <div>
                 <div className="float-left">
                 {dyanamicData.Days} {" "}
                 {dyanamicData.cameraSettingSchedule.StartTime+"AM"}{" - "}
                 {dyanamicData.cameraSettingSchedule.EndTime+"PM"}

                </div>

             </div>
          )
         }
       </div>
       );
     }
   }
  render() {

  return (

    <div className="row">
      <div className="col-xl-12">

        <div className="box box-default">
          <div className="box-body">
             <h4 className="article-title-header" >SCHEDULE</h4>
             <p>Set the Schedule Alerts during Motion Detected in the room ! </p>


               <h5><a href="cam-settings-menu#/app/camerasettings/schedule">ADD</a></h5><br/>
                { this.renderUserMessage() }



          </div>
        </div>





      </div>

    </div>




  );
 }
}


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <Schedule />
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
