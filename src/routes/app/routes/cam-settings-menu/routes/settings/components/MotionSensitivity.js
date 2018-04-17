import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';
import cookie from 'react-cookies';




class MotionSensitivity extends React.Component {
  constructor() {
    super();
      this.state = {
        sensitivity: '',
        data: [],

      };
      this.handleChange = this.handleChange.bind(this);

  }

  handleChange(sensitivity) {

      // this.setState({
      //   sensitivity: value,
      //
      // });
  console.log(this.state.sensitivity)
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
          ms1:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].MotionDetectionSensitivity


                           })
             if(this.state.CameraCount === 2)    //for second camera
             {
                 this.setState({
                      camid2:findresponse.GetUserCameraResult.RoomCameraList["1"].Camera["0"].CameraID,
                       ms2:findresponse.GetUserCameraResult.RoomCameraList["1"].Camera["0"].MotionDetectionSensitivity

                     });
             }
          // console.log(this.state.md2)  //for second camera
         console.log(this.state.CameraCount)
         console.log(this.state.camid1)
          console.log(this.state.ms1)
         console.log(this.state.camid2)
         console.log(this.state.ms2)


             var currentcameraid = cookie.load('cameraid');
             console.log(currentcameraid);

           if(currentcameraid === this.state.camid1)
           {

               this.setState({   sensitivity:this.state.ms1 });
               cookie.save('togglesensitivity',this.state.sensitivity);
               console.log(cookie.load('togglesensitivity'));
           }

           else if(currentcameraid === this.state.camid2)
            {
              this.setState({   sensitivity:this.state.ms2 });
              cookie.save('togglesensitivity',this.state.sensitivity);
              console.log(cookie.load('togglesensitivity'));

            }


     })

   }






  render() {

    // var sensitivity = cookie.load('togglesensitivity');
    // console.log(sensitivity);

  return (
  <article className="article">
    <div className="container-fluid with-maxwidth">


    <div className="col-xl-12">
        <div className="box box-default">
          <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">

          <span className="float-left">
            <span><h5> MOTION SENSITIVITY </h5> </span>
          </span>
          <span className="float-right">
            <span>
              <DropDownMenu sensitivity={this.state.sensitivity} onChange={this.handleChange()}>
                <MenuItem sensitivity={1} primaryText="High"  />
                <MenuItem sensitivity={4} primaryText="Normal" />
                <MenuItem sensitivity={7} primaryText="Low" />
              </DropDownMenu>

            </span>
          </span>
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
        <div><MotionSensitivity /></div>

      </QueueAnim>
    </section>
  )
}

module.exports = Page;
