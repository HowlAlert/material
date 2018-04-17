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

    // var CameraID = cookie.load('camearaid');
    // console.log(CameraID)
     console.log(cookie.load('cameraid'));
     console.log(cookie.load('toggleDetection'));
     console.log(cookie.load('togglesensitivity'));

        this.setState({Toggled: !this.state.Toggled});

        var s = !this.state.Toggled
        console.log(s);
         if(s === true)
         {
               var status = 1;
               var sensitivity = 4;


         }
        if(s === false){
           var status = 2;
           var sensitivity = 7;
         }

              var object = JSON.stringify([{
                "CameraID":cookie.load('cameraid'),
                "MotionDetectionStatus":status,
                "MotionDetectionSensitivity":sensitivity
             }]);
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

                  this.setState({
                     status:findresponse.UpdateCameraMotionDetectionSettingResult.ResultStatus.Status,
                     message:findresponse.UpdateCameraMotionDetectionSettingResult.ResultStatus.StatusMessage
                   })
                     console.log(this.state.status);
                     console.log(this.state.message);

                     if(this.state.status === "1")
                     {
                       alert("Done Updation!");

                       console.log(status)
                       if(status === "1")
                       {
                         Toggled: true
                         this.setState({Toggled: true, value:4 });
                         cookie.save('toggleDetection',this.state.Toggled);
                         cookie.save('togglesensitivity',this.state.value);
                       }
                       else {
                         Toggled: false
                         this.setState({Toggled: false, value:7 });
                         cookie.save('toggleDetection',this.state.Toggled);
                         cookie.save('togglesensitivity',this.state.value);

                       }


                     }

                     // else {
                     //   alert(this.state.message);
                     //
                     // }


             })


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
           CameraCount:findresponse.GetUserCameraResult.RoomCameraList.length,
           camid1:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].CameraID,
           md1:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].MotionDetectionStatus,
           ms1:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].MotionDetectionSensitivity


                            })
              if(this.state.CameraCount === 2)    //for second camera
              {
                  this.setState({
                       camid2:findresponse.GetUserCameraResult.RoomCameraList["1"].Camera["0"].CameraID,
                        md2:findresponse.GetUserCameraResult.RoomCameraList["1"].Camera["0"].MotionDetectionStatus,
                        ms2:findresponse.GetUserCameraResult.RoomCameraList["1"].Camera["0"].MotionDetectionSensitivity

                      });
              }
           // console.log(this.state.md2)  //for second camera
          console.log(this.state.CameraCount)
          console.log(this.state.camid1)
           console.log(this.state.md1)
           console.log(this.state.ms1)
          console.log(this.state.camid2)
          console.log(this.state.md2)
          console.log(this.state.ms2)


            var currentcameraid = cookie.load('cameraid');
            console.log(currentcameraid);

          if(currentcameraid === this.state.camid1)
          {
            if(this.state.md1 === "1")
            {
              Toggled: true
              this.setState({
                Toggled: true,
                value:4

              });
              cookie.save('toggleDetection',this.state.Toggled);
              cookie.save('togglesensitivity',this.state.value);
              console.log(cookie.load('toggleDetection'));
              console.log(cookie.load('togglesensitivity'));


            }
            else {

              Toggled: false
              this.setState({
                Toggled: false,
                value:7

              });
              cookie.save('toggleDetection',this.state.Toggled);
              cookie.save('togglesensitivity',this.state.value);
              console.log(cookie.load('toggleDetection'));
              console.log(cookie.load('togglesensitivity'));

            }
          }
          else if(currentcameraid === this.state.camid2)
           {
             if(this.state.md2 === "1")
             {
               Toggled: true
               this.setState({
                 Toggled: true,
                 value:4

               });
               cookie.save('toggleDetection',this.state.Toggled);
               cookie.save('togglesensitivity',this.state.value);
               console.log(cookie.load('toggleDetection'));
               console.log(cookie.load('togglesensitivity'));


             }
             else {

               Toggled: false
               this.setState({
                 Toggled: false,
                 value:7

               });
               cookie.save('toggleDetection',this.state.Toggled);
               cookie.save('togglesensitivity',this.state.value);
               console.log(cookie.load('toggleDetection'));
               console.log(cookie.load('togglesensitivity'));

             }

          }

         })



          }





  render() {

    var togglestate=cookie.load('toggleDetection');
    console.log(togglestate);



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
