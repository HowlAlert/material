import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import cookie from 'react-cookies';

// class AlertPack extends React.Component{
//
// render() {
//
// return (
//
// <div>
//     <h5> Alerting Pack Members!</h5>
// </div>
//
// );
//
//   }
// }

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
  <article className="article padding-lg-v article-dark article-bordered">

  <div className="container-fluid with-maxwidth">

  <div className="row">

    <div className="col-xl-4 text-left"><a href="cameras#/app/Cameras">
        <div className="box box-default">
          <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">
          <span className="float-left">
            <span><h5> CAMERA </h5> </span>
          </span>
          <span className="float-right ibox-icon">
            <img className="nav-icon material-icons" src="assets/images/camera.png" />
          </span>
        </div>
    </div>
    </div>
    </a></div>

    <div className="col-xl-5 text-right rounded mx-auto d-block ">
      <a href="home#/app/Monitoring">  <img src="assets/images/ambulance-button-unsubscribed.png"/></a>
    </div>


        <div className="col-xl-4 text-left"><a href="devices#/app/Devices">
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
      <div className="col-xl-4 col-lg-6">
      <a href="home#/app/Monitoring">  <img src="assets/images/police-button-unsubscribed.png"/></a>
      </div>
      <div className="col-xl-4 col-lg-6">
      <a href="home#/app/Monitoring">  <img src="assets/images/fire-button-unsubscribed.png"/></a>
      </div>

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
     <div className="col-xl-6 col-lg-8 rounded mx-auto d-block">

           <img src="assets/images/alert-pack-button.png" onClick={this.handleOpen}/>
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


        {/* <div className="col-xl-4 col-lg-8 rounded mx-auto d-block ">
            <img src="assets/images/ambulance-button-unsubscribed.png"/>
        </div> */}


        {/* <div className="col-xl-4 col-lg-6">
          <img src="assets/images/police-button-unsubscribed.png"/>
        </div> */}

        {/* <div className="col-xl-4 col-lg-6">
          <div className="card bg-color-primary text-center">
            <div className="card-content ">
              <span className="card-title">FIRE</span>
            </div>
            <div className="card-action">
              <a href="javascript:;">SUBSCRIBE</a>
            </div>
          </div>
        </div> */}
        {/* <div className="col-xl-4 col-lg-6">
          <img src="assets/images/fire-button-unsubscribed.png"/>
        </div> */}

      {/* <div className="col-xl-4 col-lg-8 rounded mx-auto d-block">
        <div className="card bg-danger text-center ">
            <img src="assets/images/alert-pack-button.png"/>
          <div className="card-action">
              <a href="javascript:;">
              <h5 onClick={this.handleOpen}>CLICK & HOLD FOR 3 SECONDS TO SOUND ALARM</h5></a>
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
        </div>
      </div> */}



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
        <div key="1"><BasicHome /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
