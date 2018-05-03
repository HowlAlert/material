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
                            "UserID":"49",
                            "UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSODNF5lNSmJktLD5Rdp3S9P1OEtVADBKLnyRBmebfCFt+ZjA5NifJ7QRFJsaYVEpfKQ==",
                            "RoomCameraID" :"104"

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
  <article className="article">
    <div className="container-fluid with-maxwidth">

    <div className="col-xl-12">
      <div className="box box-default ">
        <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">
            <div>
             <span className="float-left">
                    <span><h5> SCHEDULE</h5> </span>
             </span>
             <span className="float-right">
                 <h5><a href="cam-settings-menu#/app/camerasettings/schedule">ADD</a></h5><br/>
                  { this.renderUserMessage() }
            </span>
          </div>

          </div>

       </div>

    </div>

    </div>

</div>


    </article>
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
