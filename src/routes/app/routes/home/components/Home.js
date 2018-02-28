import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import cookie from 'react-cookies';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import Customizer from 'components/Customizer';

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
                          "Latitude": "41.1798",
                          "Longitude": "-73.1914",
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
          <button><a href="home#/app/Alerts">ok</a></button>
         </div>

       </div>

     )
  }


  return (
    <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">
          <Header />

          <div className="app-content-wrapper">
           <div className="app-content">
             <div className="full-height">
  <article className="article padding-lg-v article-dark article-bordered">

  <div className="container-fluid with-maxwidth">

<div className=" text-left">
<div className="row col-xl-12">
  <span className=" text-left ">
    <div className="col-xl-12"><a href="cameras#/app/Cameras">
        <div className="box box-default">
          <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">
          <span className="float-left ">
            <span><h5> CAMERA </h5> </span>
          </span>
          <span className="float-right ibox-icon">
            <img className="nav-icon material-icons" src="assets/images/camera.png"/>
          </span>
        </div>
    </div>
    </div>
  </a></div>
</span>
<span className="text-right">
  <div >
    <a href="home#/app/Monitoring">  <img src="assets/images/ambulance-button-unsubscribed.png"  width="40%"/></a>
  </div>
</span>
</div>
<span className=" text-left ">
    <div className="col-xl-4"><a href="devices#/app/Devices">
        <div className="box box-default">
          <div className="box-body">
          <div className="icon-box ibox-plain ibox-center">
          <span className="float-left">
            <span><h5> DEVICES </h5> </span>
          </span>
          <span className="float-right ibox-icon">
              <img className="nav-icon material-icons" src="assets/images/device.png" />
          </span>
        </div>
        </div>
    </div>
  </a></div>
</span>

<span className=" text-left ">
  <div className="col-xl-4"><a href="pack#/app/Pack">
   <div className="box box-default">
     <div className="box-body">
       <div className="icon-box ibox-plain ibox-center">
           <span className="float-left">
             <span><h5> MY PACK </h5> </span>
           </span>
           <span className="float-right ibox-icon">
               <img className="nav-icon material-icons" src="assets/images/pack.png" />
           </span>
       </div>
     </div>
   </div>
  </a></div>
</span>

<span className=" text-left ">
  <div className="col-xl-4"><a href="monitor#/app/Monitoring">
   <div className="box box-default">
     <div className="box-body">
       <div className="icon-box ibox-plain ibox-center">
           <span className="float-left">
             <span><h5>MONITORING </h5> </span>
           </span>
           <span className="float-right ibox-icon">
               <img className="nav-icon material-icons" src="assets/images/monitor.png" />
           </span>
       </div>
     </div>
   </div>
  </a>
  </div>

</span>


<div className="row">
{/* <span className=" text-left">
    <div><a href="devices#/app/Devices">
        <div className="box box-default">
          <div className="box-body">
          <div className="icon-box ibox-plain ibox-center">
          <span className="float-left">
            <span><h5> DEVICES </h5> </span>
          </span>
          <span className="float-right ibox-icon">
              <img className="nav-icon material-icons" src="assets/images/device.png" />
          </span>
        </div>
        </div>
    </div>
  </a></div>
</span> */}



    <span className="text-right">

      <div >
      <a href="home#/app/Monitoring">  <img src="assets/images/fire-button-unsubscribed.png" width="40%"/></a>
      </div>
    </span>
</div>
<div className="row">
  <span className=" text-left">
      <div ><a href="pack#/app/Pack">
       <div className="box box-default">
         <div className="box-body">
           <div className="icon-box ibox-plain ibox-center">
               <span className="float-left">
                 <span><h5> MY PACK </h5> </span>
               </span>
               <span className="float-right ibox-icon">
                   <img className="nav-icon material-icons" src="assets/images/pack.png" />
               </span>
           </div>
         </div>
       </div>
     </a></div>
   </span>
   <span className=" text-right">
     <div className="rounded mx-auto d-block">

           <img src="assets/images/alert-pack-button.png" onClick={this.handleOpen} width="40%"/>
           {/* <h5 onClick={this.handleOpen}>CLICK HERE TO ALARM</h5> */}
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
 </span>
</div>
<div className="row">
  <span className=" text-left">
     <div className="col-xl-4"><a href="monitor#/app/Monitoring">
      <div className="box box-default">
        <div className="box-body">
          <div className="icon-box ibox-plain ibox-center">
              <span className="float-left">
                <span><h5>MONITORING </h5> </span>
              </span>
              <span className="float-right ibox-icon">
                  <img className="nav-icon material-icons" src="assets/images/monitor.png" />
              </span>
          </div>
        </div>
      </div>
    </a>
  </div>
</span>
</div>

  </div>

</div>

  <div className=" text-right">
      <span className="text-right">
        <div className="rounded mx-auto d-block ">
          <a href="home#/app/Monitoring">  <img src="assets/images/ambulance-button-unsubscribed.png"  width="40%"/></a>
        </div>
      </span>
    <span className="text-right">
      <div >
      <a href="home#/app/Monitoring">  <img src="assets/images/police-button-unsubscribed.png" width="40%"/></a>
      </div>
    </span>
</div>
</article>
</div>
           </div>
</div>
</section>
</div>

  );
 }
}


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><BasicHome /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
