import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import cookie from 'react-cookies';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import moment from 'moment';


import Map from './Map';
import Alert from './Alert';
import Image2 from './Image2';
import Image from '../../cameras/components/Image';
import Camera from '../../cameras/components/Camera';
import Customizer from 'components/Customizer';
import {Redirect} from 'react-router-dom';



class BasicHome extends React.Component{
  constructor() {
    super();
      this.state = {
        data: '',
        open: false,
        firstName:'',
        EmergancyType:'',
      }

  }


  componentWillMount() {
    this.setState({ firstName: cookie.load('FirstName')});
    if(cookie.load('FirstName')==undefined){
      this.setState({ redirectToMainLogin: true })
    }else{
      cookie.save('Loggedin', 'Loggedin')
    }
  }


  handleOpen = (value1) => {

    this.setState({open: true});
    var alert_type = `${value1}`;
    cookie.save('Alert_Type',alert_type);
      //console.log(cookie.load('Alert_Type'));
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleExit()
  {
    this.setState({
        redirectToReferrer:false ,

    });
  }
  handleTrigger(event){
      this.setState({open: false});

      // const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/TriggerEmergencyAlert';
      const URL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/TriggerEmergencyAlert';

       fetch(URL,
                       {
                        method: "POST",
                        body: JSON.stringify({
                          "UserID":cookie.load('Id'),
                          "UserToken":cookie.load('UserToken'),
                          "Latitude": cookie.load('Latitude'),
                          "Longitude": cookie.load('Longitude'),
                          "EmergancyType":cookie.load('Alert_Type')

                        }),
                         headers: new Headers({'content-type': 'application/json'}),
                       })
                   .then((Response)=> Response.json())
                   .then((findresponse)=>{
                         //console.log(findresponse)
                       this.setState({
                          data:findresponse.TriggerEmergencyAlertResult.getUserAlert,
                          // geonumber:findresponse.TriggerEmergencyAlertResult.getUserAlert.geo911
                          status:findresponse.TriggerEmergencyAlertResult.resultStatus.Status //for result

                        });
                      if(this.state.status === "1")
                       {
                         var alert_type = cookie.load('Alert_Type') ;
                         switch(alert_type) {
                                case '1':
                                      return alert("Alerted your Pack Members ! ");
                                case '2':
                                      return alert("Alerted Fire Service !");
                                case '3':
                                      return alert("Alerted Ambulance Service !");
                                case '4':
                                      return alert("Alerted Police Service !");

                               default:
                                      return alert("Alerted your Pack Members!");
                                }
                       }
                       else {
                         alert(this.state.status.StatusMessage);
                       }


                    })
                     // this.setState({ redirectToReferrer: true })


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


  const{redirectToMainLogin}=this.state
  if(redirectToMainLogin){
    return (
      <Redirect to="../mainLogin"/>
    )
  }

var subscribed =   cookie.load('GetAccount_GMT');                 //to check the user subscribed or not
// console.log(subscribed)
var today = moment(this.state.startDate).format('YYYY-MM-DD HH:MM:SS');   //to get date
// console.log(today)
// var status = this.state.data.StatusMessage;
//  console.log(status);           //to print result of the Service1


// var geo911 = this.state.geonumber;
// console.log(geo911)

// const { redirectToReferrer} = this.state
//   if(redirectToReferrer === true)
//   {
//     return (
//        // <AlertPack />
//         <div className="icon-box bg-danger ibox-plain ibox-center">
//          <div>
//            <div className="col-lg-12 welcomeText">
//              <h1>{this.state.firstName}, Alerted your Pack Members!</h1>
//            </div>
//          </div>
//
//          <div className="row">
//        <div className="col-lg-4">
//        </div>
//
//          <div className="col-lg-4">
//            <div className="howlbackfull" onClick={(e)=>this.handleExit(e)} primary label="Exit" >ok</div>
//
//            </div>
//
//          <div className="col-lg-4">
//          </div>
//          </div>
//        </div>
//
//
//
//
//      )
//   }


  return (

    <div className="">



      <div className="">
        <div className="box box-default box-body dkShadow ">
          <h2 className="article-title-header ">Quick Alerts </h2>

          <div className="row">

          <div className="col-lg-3">
          <div className="packB">
            <img src="assets/images/alert-pack-button.png" onClick={()=>this.handleOpen("1")} width="120"/>

              <Dialog
                title="Confirm"
                actions={actions}
                modal={false}
                open={this.state.open}
                contentClassName='dialogStyle'
                bodyClassName='dialogInner'
                onRequestClose={this.handleClose}
                >
                <h5>You want to Alert your Pack Members? </h5>
                </Dialog>
                </div>
              </div>
       {
         (subscribed === "empty" || subscribed === today)       //If not subscribed or subscribed expired

        ?
        <div>
          <a className="flLeft" href="#/app/Monitoring">
             <img src="assets/images/fire-button-unsubscribed.png" width="120 "/>
          </a>

          <a className="flLeft" href="#/app/Monitoring">
              <img src="assets/images/ambulance-button-unsubscribed.png"  width="120"/>
          </a>


         <a className="flLeft" href="#/app/Monitoring">
             <img src="assets/images/police-button-unsubscribed.png"  width="120"/>
        </a>
        </div>
        :
        <div className="col-lg-9">

        <div className="row">
        <div className=" col-lg-4 ">
        <div className="fireB">
          <img src="assets/images/fire-button.png" onClick={()=>this.handleOpen("2")} width="120"/>

            <Dialog
              title="Confirm"
              actions={actions}
              modal={false}
              open={this.state.open}
              contentClassName='dialogStyle'
              bodyClassName='dialogInner'
              onRequestClose={this.handleClose}
              >
              <h5>You want to Alert Monitoring System? </h5>
              </Dialog>
              </div>

        </div>

      <div className="col-lg-4">
        <div className="ambulanceB">
        <img src="assets/images/ambulance-button.png" onClick={()=>this.handleOpen("3")} width="120"/>

          <Dialog
            title="Confirm"
            actions={actions}
            modal={false}
            open={this.state.open}
            contentClassName='dialogStyle'
            bodyClassName='dialogInner'
            onRequestClose={this.handleClose}
            >
            <h5>You want to Alert Monitoring System? </h5>
            </Dialog>
            </div>
    </div>


        <div className="col-lg-4 ">
        <div className="policeB">
          <img src="assets/images/police-button.png" onClick={()=>this.handleOpen("4")} width="120"/>

            <Dialog
              title="Confirm"
              actions={actions}
              modal={false}
              open={this.state.open}
              contentClassName='dialogStyle'
              bodyClassName='dialogInner'
              onRequestClose={this.handleClose}
              >
              <h5>You want to Alert Monitoring System? </h5>
              </Dialog>
              </div>
      </div>
      </div>


  </div>

    }
</div>
</div>
</div>


         </div>


  );
 }
}

const Dashboard = () => (


  <div className="row">
    {/* <div className="col-lg-12">
      <BasicHome />
    </div> */}

    <div className="col-lg-6">
     <a  href="#/app/Map">
             <Map />
      </a>
   </div>

    <div className="col-lg-6">
      {/* <div className="box box-default box-body homeAlert dkShadow"> */}
        <Alert />
      {/* </div> */}
    </div>


    <div className="col-lg-12">
    <div className="box box-default box-body dkShadow ">
      <h2 className="article-title-header ">Latest Images </h2>
      <Camera />
      </div>
    </div>
  </div>
);
const Page = () => {

  return (
    <div className="container-fluid no-breadcrumbs page-dashboard chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <Dashboard />
        </div>
      </QueueAnim>
    </div>
  )
}

module.exports = Page;
