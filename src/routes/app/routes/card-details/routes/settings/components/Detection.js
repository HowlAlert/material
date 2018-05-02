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
        // status:'',
        // sensitivity:'',
        // value:''
      };

  }


  handleToggle() {

        this.setState({Toggled: !this.state.Toggled});

        var s = !this.state.Toggled
          //console.log(s);
         if(s === true)
         {
               var status = 1;
               var sensitivity = 4;

         }
        if(s === false){
           var status = 2;
           var sensitivity = 7;
         }

              var object = JSON.stringify([{"CameraID":cookie.load('camearaid'), "MotionDetectionStatus":status, "MotionDetectionSensitivity":sensitivity}]);
                //console.log(object);

              const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/UpdateCameraMotionDetectionSetting';
              // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UpdateCameraMotionDetectionSetting';

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
                    //console.log(findresponse)

                  this.setState({
                     status:findresponse.UpdateCameraMotionDetectionSettingResult.ResultStatus.Status,
                     message:findresponse.UpdateCameraMotionDetectionSettingResult.ResultStatus.StatusMessage
                   })
                       //console.log(this.state.status);
                       //console.log(this.state.message);
                     if(this.state.status === "1")
                     {
                       alert("Done Updation!");


                     }

                     // else {
                     //   alert(this.state.message);
                     //
                     // }


             })


       }

// handleChange = (event, index, value) => this.setState({value});


//  UpdateToggleStatus(event) {
//
//  event.preventDefault();
//  // var state = cookie.load('togglestate');
//  // console.log(state);
//
//
// }

  componentDidMount(){

    const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserCamera';
    // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCamera';

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
             //console.log(mds);
           var sensitivity = this.state.data2;
           cookie.save('togglesensitivity',sensitivity);
             //console.log(cookie.load('togglesensitivity'));

           if(mds === "1")
           {
             Toggled: true
             this.setState({
               Toggled: true,value:4

             });
               //console.log(true)

           }
           else {
             Toggled: false
             this.setState({Toggled: false,value:7

             });
               //console.log(false)
           }

        })



  }

  render() {

    var togglestate=this.state.Toggled;
      //console.log(togglestate);
    // this.setState({ ts:togglestate})
    // cookie.save('togglestate',togglestate);



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
              defaultToggled={this.state.Toggled}
              onToggle={this.handleToggle.bind(this)}
              toggle={this.state.Toggled}
              style={styles.toggle}
              // onClick={(e)=>this.UpdateToggleStatus(e)}

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
