import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Toggle from 'material-ui/Toggle';
import cookie from 'react-cookies';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';


const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
};

class Detection extends React.Component {
  constructor() {

    super();
      this.state = {
        data: [],
        Toggled: '',
        status:'',
        sensitivity:'',
        count:''
        // value:''
      };

  }


  handleToggle() {

        this.setState({Toggled: !this.state.Toggled});

this.UpdateToggleStatus();
       }

// handleChange = (event, index, value) => this.setState({value});


 UpdateToggleStatus() {
 // event.preventDefault();i
 this.setState({count:1});
 if(this.state.count==1){
   var state = cookie.load('togglestate');
   console.log(state);
    if(state === "true")
    {

        this.setState({ status:1,
                       sensitivity:4})
        console.log(this.state.status)
        // console.log(2);

    }
    else {
      this.setState({status:2,
                        sensitivity:7 })
      console.log(this.state.status)
      // console.log(1);
    }
if(this.state.status==="" && this.state.sensitivity==="")
{
alert("Not Updated");
}
else{
    var object = JSON.stringify([{"CameraID":cookie.load('camearaid'), "MotionDetectionStatus":this.state.status, "MotionDetectionSensitivity":this.state.sensitivity}]);
    console.log(object);

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UpdateCameraMotionDetectionSetting';

        fetch(BaseURL,
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":cookie.load('Id'),
           "UserToken":cookie.load('UserToken'),
           "CameraList":object
         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{
        console.log(findresponse)

        // this.setState({
        //    status:findresponse.UpdateCameraMotionDetectionSettingResult.ResultStatus.Status,
        //    message:findresponse.UpdateCameraMotionDetectionSettingResult.ResultStatus.StatusMessage
        //  })
        //    console.log(this.state.status);
        //    console.log(this.state.message);
        //    if(this.state.status === "0")
        //    {
        //      alert(this.state.message);
        //
        //    }
        //
        //    else {
        //
        //        alert("Done Updation!")
        //
        //    }


      })}
 }


}

  componentDidMount(){

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCamera';

        fetch(BaseURL,
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":cookie.load('Id'),
           "UserToken":cookie.load('UserToken'),
         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{
        console.log(findresponse)
        this.setState({
           data:findresponse.GetUserCameraResult.RoomCameraList,
           // data2:findresponse.GetUserCameraResult.RoomCameraList["1"].Camera["0"].MotionDetectionStatus,   //for second camera
           data1:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].MotionDetectionStatus,
           data2:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].MotionDetectionSensitivity


                            })
           // console.log(this.state.data2)  //for second camera

           var mds = this.state.data1;
           console.log(mds);
           var sensitivity = this.state.data2;
           cookie.save('togglesensitivity',sensitivity);
           console.log(cookie.load('togglesensitivity'));

           if(mds === "1")
           {
             Toggled: true
             this.setState({Toggled: true,value:4,count:0

             });
             console.log(true)

           }
           else {
             Toggled: false
             this.setState({Toggled: false,value:7,count:0

             });
             console.log(false)
           }

        })



  }

  render() {

    var togglestate=this.state.Toggled;

    console.log(togglestate)

    cookie.save('togglestate',togglestate);

    // var selected_value=this.state.value;
    // console.log(selected_value)


  return (
  <article className="article">
    <div className="container-fluid with-maxwidth">


    <div className="col-xl-12">
        <div className="box box-default">
          <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">
          <span className="float-left">
            <span><h5> MOTION DETECTION </h5> </span>
          </span>
          <span className="float-right ibox-icon">
            <Toggle
              defaultChecked={this.state.Toggled}
              //toggle={this.state.Toggled}
              onToggle={this.handleToggle.bind(this)}

              style={styles.toggle}
              //onChange={this.handleToggle.bind(this)}

              />

          </span>
        </div>
    </div>
    </div>
  </div>

  {/* <div className="col-xl-12">
      <div className="box box-default">
        <div className="box-body" >
        <div className="icon-box ibox-plain ibox-center">

        <span className="float-left">
          <span><h5> MOTION SENSITIVITY </h5> </span>
        </span>
        <span className="float-right">
          <span>


          <SelectField  value={this.state.value} onChange={this.handleChange}  >
              <MenuItem value={1} primaryText="High"  />
              <MenuItem value={4} primaryText="Normal" />
              <MenuItem value={7} primaryText="Low" />

        </SelectField>

          </span>
        </span>
      </div>
  </div>
  </div>
</div> */}


    </div>

    </article>
  );
 }
}


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <Detection />
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
