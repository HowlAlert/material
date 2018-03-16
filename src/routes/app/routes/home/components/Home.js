import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import cookie from 'react-cookies';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import Map from './Map';
import Alert from './Alert';
import Image2 from './Image2';
import Image from '../../cameras/components/Image';
// import Alert from '../../Alerts/components/Alert'

// const Main = () => (
//
//         <div className="box-body">
//
//
//             <div className="box box-default"><a href="#/app/Cameras">
//              <div className="box-body ">
//                <span className="float-left">CAMERA  </span>
//              <span className="float-right">
//                  <img  className="nav-icon material-icons" src="assets/images/camera.jpg" width="50%" />
//              </span>
//                </div>
//             </a></div>
//
//             <div className="box box-default"><a href="#/app/Devices">
//              <div className="box-body ">
//               <span className="float-left">    DEVICES </span>
//              <span className="float-right">
//                  <img  className="nav-icon material-icons" src="assets/images/device.jpg" width="50%" />
//              </span>
//                </div>
//             </a></div>
//
//             <div className="box box-default "><a href="#/app/Pack">
//              <div className="box-body ">
//               <span className="float-left">    MY PACK </span>
//              <span className="float-right">
//                  <img  className="nav-icon material-icons" src="assets/images/pack.jpg" width="50%" />
//              </span>
//                </div>
//         </a></div>
//
//
//
//         <div className="box box-default"><a href="#/app/Monitoring">
//          <div className="box-body ">
//           <span className="float-left">  MONITORING  </span>
//          <span className="float-right">
//              <img  className="nav-icon material-icons" src="assets/images/monitor.jpg" width="50%" />
//          </span>
//            </div>
//         </a></div>
//
//       </div>
//
// );


class BasicHome extends React.Component{
  constructor() {
    super();
      this.state = {
        data: '',
        open: false
      }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  handleTrigger(event){
      this.setState({open: false});

      const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/TriggerEmergencyAlert';
       fetch(URL,
                       {
                        method: "POST",
                        body: JSON.stringify({
                          "UserID":cookie.load('Id'),
                          "UserToken":cookie.load('UserToken'),
                          "Latitude": cookie.load('Latitude'),
                          "Longitude": cookie.load('Longitude'),
                          "EmergancyType":"1"

                        }),
                         headers: new Headers({'content-type': 'application/json'}),
                       })
                   .then((Response)=> Response.json())
                   .then((findresponse)=>{
                       console.log(findresponse)
                       this.setState({
                          data:findresponse.TriggerEmergencyAlertResult.getUserAlert,
                          geonumber:findresponse.TriggerEmergencyAlertResult.getUserAlert.geo911
                          // data:findresponse.TriggerEmergencyAlertResult.resultStatus  //for result

                        });
                                        })
                     this.setState({ redirectToReferrer: true })


}
render() {

  const actions = [
    <FlatButton
      label="Yes"
      primary
      onClick={(e)=>this.handleTrigger(e)}

    />,
    <FlatButton
      label="No"
      primary
      keyboardFocused
      onClick={this.handleClose}
    />,
  ];
// var status = this.state.data.StatusMessage;
// console.log(status);           //to print result of the Service1


var geo911 = this.state.geonumber;
console.log(geo911)

const { redirectToReferrer} = this.state
  if(redirectToReferrer === true)
  {
    return (
       // <AlertPack />
        <div className="icon-box bg-danger ibox-plain ibox-center">
         <div>
           <h5> Alerting Pack Members!</h5>
           <div>
             <h5>Contact No: {geo911}</h5>
           </div>
          <button><a href="#/app/Alerts">ok</a></button>
         </div>

       </div>

     )
  }


  return (

  // <div className="box box-default">
    <div className="row box-body app-content">

      <div className="  ">


               <img src="assets/images/alert-pack-button.png" onClick={this.handleOpen} width="120"/>
               <Dialog
                 title="Confirm"
                 actions={actions}
                 modal={false}
                 open={this.state.open}
                 onRequestClose={this.handleClose}
               >
               <h5>You want to Alert your Pack Members?</h5>
               </Dialog>


      </div>

                 <a href="#/app/Monitoring">
                    <img src="assets/images/fire-button-unsubscribed.png" width="120 "/>
                 </a>




          <a href="#/app/Monitoring">
              <img src="assets/images/ambulance-button-unsubscribed.png"  width="120"/>
         </a>


         <a href="#/app/Monitoring">
             <img src="assets/images/police-button-unsubscribed.png"  width="120"/>
        </a>





 </div>



  );
 }
}

const Dashboard = () => (
  <div className="row">
    {/* <div className="col-xl-4">

          <Alert />

    </div><br /> */}


    <div className="col-xl-12">
             <BasicHome />
    </div>

    <div className="col-xl-1">

      <div className="box box-default ">

    </div>
    </div>
  <div className="col-xl-5">

    <div className="box box-default ">
      <div className="box-body">
      <h2 className="article-title">News & Alerts</h2>

    <Alert />

    <a href="#/app/Alerts">See All Alerts </a>
  </div>
  </div>
</div>

    <div className="col-xl-5">

             <Map />


    </div>

    <div className="col-xl-1">

      <div className="box box-default ">

    </div>
  </div>

  <div className="col-xl-1">

    <div className="box box-default ">

  </div>
</div>

    <div className="col-xl-5">

             <Image />

    </div>
    <div className="col-xl-5">

             <Image2 />

    </div>
  </div>
);
const Page = () => {
  return (

    // <div className="container-fluid no-breadcrumbs page-dashboard">
    //   <div className="main-app-container">
    //       <Sidenav />
    //
    //       <section id="page-container" className="app-page-container">
    //         <Header />

            // <div className="app-content-wrapper">
            //  <div className="app-content">
            //    <div className="full-height">
                 <article className="article">


                        <QueueAnim type="bottom" className="ui-animate">


                              <div key="1"><Dashboard /></div>
                              {/* <Map /> */}


                        </QueueAnim>

                  </article>

    //       </section>
    //   </div>
    // </div>
  )
}

module.exports = Page;
