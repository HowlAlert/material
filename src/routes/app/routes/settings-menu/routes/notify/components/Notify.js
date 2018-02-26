import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Toggle from 'material-ui/Toggle';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  toggle: {
    maxWidth: 400,
    marginBottom: 16
  },
};


class Notify extends React.Component {

  constructor(props) {
       super(props);
       this.state = {
         Toggled1: '',
         Toggled2: '',
         handlepush:0,
         handlesms:0
       };

     }

     handleToggle1() {

            this.setState({  Toggled1: !this.state.Toggled1 , handlepush:1 });
            cookie.save('handlepush',this.state.handlepush)


            var pushupdate = !this.state.Toggled1;
            cookie.save('pushupdate',pushupdate)
            console.log( cookie.load('pushupdate'));


            console.log( cookie.load('handlesms'));

            var handlesmsvalue = cookie.load('handlesms');
            console.log(handlesmsvalue);

            if(handlesmsvalue  === "1" )
            {
                var  sms = cookie.load('smsupdate');
                console.log(sms);
            }
            else{
              var  sms = cookie.load('AlertPush');
              console.log(sms);
            }


            const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UpdateUserSettings';

                fetch(BaseURL,
                {
                 method: "POST",
                 body: JSON.stringify({
                   "UserID":cookie.load('Id'),
                   "UserToken":cookie.load('UserToken'),
                   "ShouldReceiveCameraAlertPush": cookie.load('pushupdate'),
	                 "ShouldReceiveCameraAlertSMS":  sms
                 }),
                  headers: new Headers({'content-type': 'application/json'}),
                })
            .then((Response)=> Response.json())
            .then((findresponse)=>{
                       this.setState({ result:findresponse.UpdateUserSettingsResult.ResultStatus.Status  });
                       console.log(this.state.result);
                       // if(this.state.result === "1")
                       //     {
                       //          alert("Successfully Updated !");
                       //
                       //      }
                       // else
                       //      {
                       //         alert("Try Again !")
                       //     }

               })


        }
    handleToggle2() {

                 this.setState({Toggled2: !this.state.Toggled2,handlesms:1 });
                 console.log(!this.state.Toggled2)
                 cookie.save('handlesms',this.state.handlesms);

                 var smsupdate = !this.state.Toggled2;
                 cookie.save('smsupdate',smsupdate)
                 console.log( cookie.load('smsupdate'));

                 console.log(cookie.load('handlepush'));

                 var handlepushvalue = cookie.load('handlepush');
                 console.log(handlepushvalue);

                 if(handlepushvalue  === "1" )
                 {
                     var  push = cookie.load('pushupdate');
                     console.log(push);
                 }
                 else{
                     var  push = cookie.load('AlertPush');
                     console.log(push);
                 }



                 const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UpdateUserSettings';

                     fetch(BaseURL,
                     {
                      method: "POST",
                      body: JSON.stringify({
                        "UserID":cookie.load('Id'),
                        "UserToken":cookie.load('UserToken'),
                        "ShouldReceiveCameraAlertPush": push,
     	                  "ShouldReceiveCameraAlertSMS":  !this.state.Toggled2
                      }),
                       headers: new Headers({'content-type': 'application/json'}),
                     })
                 .then((Response)=> Response.json())
                 .then((findresponse)=>{
                     this.setState({ result:findresponse.UpdateUserSettingsResult.ResultStatus.Status  });
                     console.log(this.state.result);
                     // if(this.state.result === "1")
                     // {
                    //    alert("Successfully Updated !");
                    //
                    //  }
                    //  else
                    //    {
                    //      alert("Try Again !")
                    //    }
                    //
                    })

               }
 handleSave(event){
         this.setState({ redirectToReferrer: true });
         alert("Successfully Updated !");
 }
  componentDidMount(){

            var pushstatus = cookie.load('AlertPush');
              console.log(pushstatus);

              if(pushstatus === "True" )
              {
                this.setState({ Toggled1: true });
              }
              if(pushstatus === "False")
              {

                this.setState({ Toggled1:false  });
              }

            var smsstatus = cookie.load('AlertSMS');
            console.log(smsstatus);
            if(smsstatus === "True" )
            {
              this.setState({  Toggled2: true });

           }
            if(smsstatus === "False")
            {

              this.setState({ Toggled2:false });

            }

      }

  render() {
    var togglestate1=this.state.Toggled1;
    console.log(togglestate1)
    var togglestate2=this.state.Toggled2;
    console.log(togglestate2)

console.log(this.state.handlepush);
console.log(this.state.handlesms);


const { redirectToReferrer} = this.state        //once update is done back to settings page
  if(redirectToReferrer === true)
  {
    return (
      <Redirect to="../Settings"/>
      //  <settings />
     )
  }

  return (

    <div className="row">
      <div className="col-xl-12">
        <h4>Push Notifications</h4>
        <div className="box box-default">
          <div className="box-body">
             <h4>Camera Alerts</h4>
             <p>Would you like to receive camera alerts via push notifications?</p>
             <span className="float-right ibox-icon">

                <Toggle

                                defaultToggled={this.state.Toggled1}
                                onToggle={this.handleToggle1.bind(this)}
                                style={styles.toggle}
                              />

             </span>

          </div>
        </div>
        <h4>Text Message Notifications</h4>
        <div className="box box-default">
          <div className="box-body">
             <h4>Camera Alerts</h4>
             <p>Would you like to receive camera alerts via text message?</p>



             <span className="float-right ibox-icon">


               <Toggle
                               defaultToggled={this.state.Toggled2}
                               onToggle={this.handleToggle2.bind(this)}
                               style={styles.toggle}
                             />
             </span>
          </div>
        </div>

      </div>
        <RaisedButton primary label="Save" onClick={(e)=>this.handleSave(e)}/>
    </div>




     );
   }
}


const Page = () => {
  return (
    <article className="article">
      <center><h2 className="article-title">NOTIFICATIONS</h2></center>
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <Notify />
      </QueueAnim>
    </section>
  </article>
  )
}

module.exports = Page;
