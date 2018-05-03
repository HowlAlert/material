import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import { localeUtils } from './utils';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Demo from './demo';
import TextField from 'material-ui/TextField';
import Time from 'react-time-format';
import moment from 'moment';

class Schedule extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          color_white: true,
          WEEKDAYS : ['M', 'T', 'W', 'TH', 'F', 'SAT', 'SUN'],
          GetRoomCameraSchedule:[],
          Day:[],
          addedStartTime:[],
          addedEndTime:[]
      };
      this.handleEndTime = this.handleEndTime.bind(this);
      this.handleStartTime = this.handleStartTime.bind(this);
    }

    handleSchedule(event){
      var validation=true;
      var dayValidation=true;
      var timeValidation=true;
      var startTimeValidation=true;
      var endTimeValidation=true;
      var allValidation=true;

          if((this.state.Monday || this.state.Tuesday || this.state.Wednesday || this.state.Thursday || this.state.Friday || this.state.Saturday || this.state.Sunday)==undefined){
            alert("Please select week day.");
            dayValidation=false;
          }
          if(dayValidation){
            if(this.state.StartTime==undefined){
            alert("Choose Start Time first")
            startTimeValidation=false;
             console.log(validation)
            }
            if(startTimeValidation){
              if(this.state.EndTime==undefined){
                alert("Please select End Time")
                endTimeValidation=false;
                 console.log(validation)
              }
            }
            if(startTimeValidation && endTimeValidation){
              if(this.state.StartTime>=this.state.EndTime){
                alert("Choose Start Time before End Time")
                validation=false;
                 console.log(validation)
              }
            }
          }


  if(dayValidation && validation && startTimeValidation && endTimeValidation){
 console.log("handled");
const BaseURL ='https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetRoomCameraSchedule'
 // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetRoomCameraSchedule';

fetch(BaseURL,{
 method: "POST",
 body: JSON.stringify({
   "UserID":cookie.load('Id'),
   "UserToken":cookie.load('UserToken'),
    // 'UserID':'49',
    // 'UserToken':'Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSODNF5lNSmJktLD5Rdp3S9P1OEtVADBKLnyRBmebfCFt+ZjA5NifJ7QRFJsaYVEpfKQ==',
    'RoomCameraID' :'104'
}),
headers: new Headers({'content-type': 'application/json'})
}).
then((Response)=>Response.json()).
then((findresponse)=>{
this.setState({
 GetRoomCameraSchedule:findresponse.GetRoomCameraScheduleResult.GetRoomCameraSchedule,
})
 console.log(this.state.GetRoomCameraSchedule)
 this.setState({
   Day:this.state.GetRoomCameraSchedule.map((dyanamicData,key)=>dyanamicData.Day),
   addedStartTime:this.state.GetRoomCameraSchedule.map((dyanamicData,key)=>dyanamicData.StartTime),
   addedEndTime:this.state.GetRoomCameraSchedule.map((dyanamicData,key)=>dyanamicData.EndTime),
})
  console.log(this.state.Day);
  console.log(this.state.addedStartTime);
  console.log(this.state.addedEndTime);


if(allValidation){
  if(this.state.WEEKDAYS[0]==this.state.Monday){
 console.log(this.state.color_d1);
    if(this.state.Day.includes("1") && this.state.addedStartTime<=this.state.StartTime && this.state.addedEndTime>=this.state.EndTime && this.state.color_d1==true){
        alert("This time is already added in your schedule");
        allValidation=false;

      }
  }
}

  if(allValidation){
    if(this.state.WEEKDAYS[1]==this.state.Tuesday){
       console.log(this.state.color_d2);
    if(this.state.Day.includes("2") && this.state.addedStartTime<=this.state.StartTime && this.state.addedEndTime>=this.state.EndTime && this.state.color_d2==true){
          alert("This time is already added in your schedule");
          allValidation=false;

        }
    }
  }

  if(allValidation){
    if(this.state.WEEKDAYS[2]==this.state.Wednesday){
       console.log(this.state.color_d3);
      if(this.state.Day.includes("3") && this.state.addedStartTime<=this.state.StartTime && this.state.addedEndTime>=this.state.EndTime && this.state.color_d3==true){
          alert("This time is already added in your schedule");
          allValidation=false;

        }
    }
  }

  if(allValidation){
    if(this.state.WEEKDAYS[3]==this.state.Thursday){
       console.log(this.state.color_d4);
        console.log(this.state.Day.includes("4"));
      if(this.state.Day.includes("4") && this.state.addedStartTime<=this.state.StartTime && this.state.addedEndTime>=this.state.EndTime && this.state.color_d4==true){
          alert("This time is already added in your schedule");
          allValidation=false;

        }
    }
  }

   if(allValidation){
     if(this.state.WEEKDAYS[4]==this.state.Friday){
        console.log(this.state.color_d5);
        console.log(this.state.Day.includes("5"));
       if(this.state.Day.includes("5") && this.state.addedStartTime<=this.state.StartTime && this.state.addedEndTime>=this.state.EndTime && this.state.color_d5==true){
           alert("This time is already added in your schedule");
           allValidation=false;

         }
     }
   }

  if(allValidation){
    if(this.state.WEEKDAYS[5]==this.state.Saturday){
       console.log(this.state.Day.includes("6"));
         console.log(this.state.color_d6);
      if(this.state.Day.includes("6") && this.state.addedStartTime<=this.state.StartTime && this.state.addedEndTime>=this.state.EndTime && this.state.color_d6==true){
          alert("This time is already added in your schedule");
          allValidation=false;

        }
    }
  }

 if(allValidation){
   if(this.state.WEEKDAYS[6]==this.state.Sunday){
      console.log(this.state.color_d7);
     if(this.state.Day.includes("7") && this.state.addedStartTime<=this.state.StartTime && this.state.addedEndTime>=this.state.EndTime && this.state.color_d7==true){
         alert("This time is already added in your schedule");
         allValidation=false;
       }
   }
 }

})}

const BaseURL ='https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/AddEditCameraSetting';
 // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/AddEditCameraSetting';
var object = [{"StartTime":"06:00",
            "EndTime":"07:00",
            "SpansMultipleDays":"False"}];
             console.log(JSON.stringify([object]));


var object1 = [{"Span":"06:00 - 07:00",
    "cameraSettingSchedule":JSON.stringify(object).replace("\"", ""),
    "IDs":"",
    "Days":"5,6"}];
           console.log(JSON.stringify([object1]));
   console.log(JSON.stringify(object1));
var jsonString = {"UserID":"118","UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSOMbyj6Rd6AJ7rL/rHD/j/TqPCcFR/UM4i0I0zfWrSegeLHB3EjO//ziEk9gyXySjSVK/GPmT7Qvu","RoomCameraID":"115","SchedulingArray":"[{\"Span\":\"06:00 - 07:00\",\"cameraSettingSchedule\":\"[{\\\"StartTime\\\":\\\"06:00\\\",\\\"EndTime\\\":\\\"07:00\\\",\\\"SpansMultipleDays\\\":\\\"False\\\"}]\",\"IDs\":\"\",\"Days\":\"5,6\"}]"};

var object2 = [{"UserID":"118",
"UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSOMbyj6Rd6AJ7rL/rHD/j/TqPCcFR/UM4i0I0zfWrSegeLHB3EjO//ziEk9gyXySjSVK/GPmT7Qvu",
"RoomCameraID":"115",
"SchedulingArray":JSON.stringify(object1)
}];
           console.log(JSON.stringify(object2));



fetch(BaseURL,{
 method: "POST",
 body: JSON.stringify({
   // "UserID":"118",
   // "UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSOMbyj6Rd6AJ7rL/rHD/j/TqPCcFR/UM4i0I0zfWrSegeLHB3EjO//ziEk9gyXySjSVK/GPmT7Qvu",

   "UserID":cookie.load('Id'),
   "UserToken":cookie.load('UserToken'),
   "RoomCameraID":"115",
   "SchedulingArray":JSON.stringify(object1)
}),
headers: new Headers({'content-type': 'application/json'})
}).
then((Response)=>Response.json()).
then((findresponse)=>{
this.setState({
data:findresponse
})
 console.log(this.state.data);
})

}

  changeMonday(){
    this.setState({color_d1:  !this.state.color_d1})
    event.preventDefault();
    this.setState({
        Monday: this.state.WEEKDAYS[0]
      });

       console.log(this.state.WEEKDAYS[0]) ;
      return this.state.WEEKDAYS[0];
  }
  changeTuesday(){
    this.setState({color_d2:  !this.state.color_d2})
    event.preventDefault();
    this.setState({
        Tuesday: this.state.WEEKDAYS[1]
      });

       console.log(this.state.WEEKDAYS[1]) ;
      return this.state.WEEKDAYS[1];
  }
  changeWednesday(){
    this.setState({color_d3: !this.state.color_d3})
    event.preventDefault();
    this.setState({
        Wednesday: this.state.WEEKDAYS[2]
      });

       console.log(this.state.WEEKDAYS[2]) ;
      return this.state.WEEKDAYS[2]
    }
  changeThursday(){
    this.setState({color_d4: !this.state.color_d4})
    event.preventDefault();
    this.setState({
        Thursday: this.state.WEEKDAYS[3]
      });

       console.log(this.state.WEEKDAYS[3]) ;
      return this.state.WEEKDAYS[3];
    }
  changeFriday(){
    this.setState({color_d5: !this.state.color_d5})
    event.preventDefault();
    this.setState({
        Friday: this.state.WEEKDAYS[4]
      });

       console.log(this.state.WEEKDAYS[4]) ;
      return this.state.WEEKDAYS[4];
    }
  changeSaturday(){
    this.setState({color_d6: !this.state.color_d6})
    event.preventDefault();
    this.setState({
        Saturday: this.state.WEEKDAYS[5]
      });

       console.log(this.state.WEEKDAYS[5]) ;
      return this.state.WEEKDAYS[5];
    }
  changeSunday(){
    this.setState({color_d7: !this.state.color_d7})
    event.preventDefault();
    this.setState({
        Sunday: this.state.WEEKDAYS[6]
      });

       console.log(this.state.WEEKDAYS[6]) ;
      return this.state.WEEKDAYS[6];
  }

  handleStartTime(event, time) {

  this.setState({
        StartTime: moment(time).format("HH:mm")
      });

       console.log(moment(time).format("HH:mm")) ;
    }

    handleEndTime(event, time) {

    this.setState({
          EndTime: moment(time).format("HH:mm")
        });

         console.log(moment(time).format("HH:mm")) ;
      //  return target.value;
      }



  render() {
//const { classes } = props;
    const rootElement = document.querySelector('#root');
    if (rootElement) {
      render(<Demo />, rootElement);
    }
      let bgColor1 = this.state.color_d1 ? "DodgerBlue" : "white"
      let bgColor2 = this.state.color_d2 ? "DodgerBlue" : "white"
      let bgColor3 = this.state.color_d3 ? "DodgerBlue" : "white"
      let bgColor4 = this.state.color_d4 ? "DodgerBlue" : "white"
      let bgColor5 = this.state.color_d5 ? "DodgerBlue" : "white"
      let bgColor6 = this.state.color_d6 ? "DodgerBlue" : "white"
      let bgColor7 = this.state.color_d7 ? "DodgerBlue" : "white"

    return (

          <article className="article">
            <h2 className="article-title text-center no-margin-top">SCHEDULE</h2>
            <section className="box box-default">
              <div className="box-body padding-xl">
                <div className=" text-center ">

                        <button style={{backgroundColor: bgColor1}}
                        onClick={this.changeMonday.bind(this)}
                        >
                        {this.state.WEEKDAYS[0]}
                        </button>
                       <span className="space" />

                        <button style={{backgroundColor: bgColor2}}
                        onClick={this.changeTuesday.bind(this)}
                        >
                        {this.state.WEEKDAYS[1]}
                        </button>
                      <span className="space" />

                        <button style={{backgroundColor: bgColor3}}
                        onClick={this.changeWednesday.bind(this)}
                        >
                        {this.state.WEEKDAYS[2]}
                        </button>
                       <span className="space" />

                        <button style={{backgroundColor: bgColor4}}
                        onClick={this.changeThursday.bind(this)}
                        >
                        {this.state.WEEKDAYS[3]}
                        </button>
                       <span className="space" />

                        <button style={{backgroundColor: bgColor5}}
                        onClick={this.changeFriday.bind(this)}
                        >
                        {this.state.WEEKDAYS[4]}
                        </button>
                       <span className="space" />

                        <button style={{backgroundColor: bgColor6}}
                        onClick={this.changeSaturday.bind(this)}
                        >
                        {this.state.WEEKDAYS[5]}
                        </button>
                      <span className="space" />

                        <button style={{backgroundColor: bgColor7}}
                        onClick={this.changeSunday.bind(this)}
                        >
                        {this.state.WEEKDAYS[6]}
                        </button>

                 </div><br />



                 <div className="col-lg-12">
                 <div className="row">

                  <div className="col-lg-12">
                      <span className="float-left">

                          <span><h5> Start Time</h5> </span>
                   </span>
                   <span className="float-right">
                   <TimePicker onChange={this.handleStartTime} value={this.state.time} ref="StartTime" hintText="Start Time" />
                   </span>
                 </div>

</div>
                  <div>
                    <span className="float-left">
                           <span><h5> End Time</h5> </span>
                    </span>
                    <span className="float-right">
                    <TimePicker onChange={this.handleEndTime} value={this.state.time} ref="EndTime" hintText="End Time" />
                    </span>
                  </div>

                </div>
                <div>


</div>
              </div>
            </section>
            <center>  <RaisedButton primary label="SAVE" onClick={(e)=>this.handleSchedule(e)}/> </center>
          </article>

  );
  }

}



const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Schedule /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
