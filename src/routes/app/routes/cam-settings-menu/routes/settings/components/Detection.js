import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Toggle from 'material-ui/Toggle';
import cookie from 'react-cookies';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';


const styles = {
  toggle: {
    maxWidth: 400,
    marginBottom: 16
  },
};

class Detection extends React.Component {
  constructor(props) {
       super(props);
      this.state = {
        Detection: '',

      };

  }


handleDetectionToggle()

{

     this.setState({  Detection: !this.state.Detection  });

     var s = !this.state.Detection
<<<<<<< HEAD
       console.log(s)
=======
     //  console.log(s)
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
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
<<<<<<< HEAD
            console.log(object);
=======
           // console.log(object);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

           const BaseURL ='https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/UpdateCameraMotionDetectionSetting'
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
<<<<<<< HEAD
                console.log(findresponse)
=======
             //   console.log(findresponse)
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

               this.setState({
                  status:findresponse.UpdateCameraMotionDetectionSettingResult.ResultStatus.Status,
                  message:findresponse.UpdateCameraMotionDetectionSettingResult.ResultStatus.StatusMessage
                })
<<<<<<< HEAD
                   console.log(this.state.status);
                   console.log(this.state.message);
=======
               //    console.log(this.state.status);
               //    console.log(this.state.message);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

                  if(this.state.status === "1")
                  {
                    alert("Done Updation!");

<<<<<<< HEAD
                     console.log(status)
=======
                 //    console.log(status)
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
                    if(status === "1")
                    {
                      Toggled: true
                      this.setState({Toggled: true, value:4 });
                      cookie.save('Detection',this.state.Toggled);
                      cookie.save('Sensitivity',this.state.value);
                    }
                    else {
                      Toggled: false
                      this.setState({Toggled: false, value:7 });
                      cookie.save('Detection',this.state.Toggled);
                      cookie.save('Sensitivity',this.state.value);

                    }


                  }



          })


}


 componentDidMount()

     {
<<<<<<< HEAD
        console.log(cookie.load('Detection'));
        console.log(cookie.load('Sensitivity'));
        console.log(cookie.load('cameraid'));

               var savedDetection = cookie.load('Detection');
                console.log(savedDetection);
=======
        //console.log(cookie.load('Detection'));
     //   console.log(cookie.load('Sensitivity'));
     //   console.log(cookie.load('cameraid'));

               var savedDetection = cookie.load('Detection');
             //   console.log(savedDetection);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f


               if(savedDetection === "1")
               {

                 this.setState({
                   Detection: true,
                  });
               }
               else {
                 this.setState({
                  Detection: false,
                 });

             }

   }
     render() {

<<<<<<< HEAD
        console.log(this.state.Detection);
=======
       // console.log(this.state.Detection);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f



     return (

       <div className="row">
         <div className="col-xl-12">

           <div className="box box-default">
             <div className="box-body">
                <h4 className="article-title-header" >MOTION DETECTION</h4>
                <p>Enabling this sends alerts if any Motion is detected in the room ! </p>
                <span className="float-right ibox-icon">

                   <Toggle

                                   defaultToggled={this.state.Detection}
                                   onToggle={this.handleDetectionToggle.bind(this)}
                                  toggle= {this.state.Detection}
                                   style={styles.toggle}
                                 />

                </span>

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
        <Detection />
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
