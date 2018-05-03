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
         Push:'',
         Sms:''

       };

     }

handlePushToggle()

{
     this.setState({  Push: !this.state.Push  });

            var togglestate2=cookie.load('ShouldReceiveCameraAlertSMS');
<<<<<<< HEAD
             console.log(togglestate2);
=======
            // console.log(togglestate2);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f


// 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UpdateUserSettings';
            const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/UpdateUserSettings';


                fetch(BaseURL,
                {
                 method: "POST",
                 body: JSON.stringify({
                   "UserID":cookie.load('Id'),
                   "UserToken":cookie.load('UserToken'),
                   "ShouldReceiveCameraAlertPush":this.state.Push ,
	                 "ShouldReceiveCameraAlertSMS":  cookie.load('ShouldReceiveCameraAlertSMS')
                 }),
                  headers: new Headers({'content-type': 'application/json'}),
                })
            .then((Response)=> Response.json())
            .then((findresponse)=>{
                       this.setState({ result:findresponse.UpdateUserSettingsResult.ResultStatus.Status  });
<<<<<<< HEAD
                        console.log(this.state.result);
=======
                       // console.log(this.state.result);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
                       if(this.state.result === "1")
                           {

                                cookie.save('ShouldReceiveCameraAlertPush',this.state.Push)
                            }
                       else
                            {
                               alert("Try Again !")
                           }

               })


}

handleSmsToggle()

{
     this.setState({  Sms: !this.state.Sms  });

            var togglestate1=cookie.load('ShouldReceiveCameraAlertPush');
<<<<<<< HEAD
             console.log(togglestate1);
=======
            // console.log(togglestate1);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f


// 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UpdateUserSettings';
            const BaseURL =  'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/UpdateUserSettings';


                fetch(BaseURL,
                {
                 method: "POST",
                 body: JSON.stringify({
                   "UserID":cookie.load('Id'),
                   "UserToken":cookie.load('UserToken'),
                   "ShouldReceiveCameraAlertPush":cookie.load('ShouldReceiveCameraAlertPush') ,
	                 "ShouldReceiveCameraAlertSMS": this.state.Sms
                 }),
                  headers: new Headers({'content-type': 'application/json'}),
                })
            .then((Response)=> Response.json())
            .then((findresponse)=>{
                       this.setState({ result:findresponse.UpdateUserSettingsResult.ResultStatus.Status  });
<<<<<<< HEAD
                        console.log(this.state.result);
=======
                       // console.log(this.state.result);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
                       if(this.state.result === "1")
                           {
                                cookie.save('ShouldReceiveCameraAlertSMS',this.state.Sms)
                            }
                       else
                            {
                               alert("Try Again !")
                           }

               })


}

 componentDidMount()

     {
       var togglestate2=cookie.load('ShouldReceiveCameraAlertSMS');
       var togglestate1=cookie.load('ShouldReceiveCameraAlertPush')

<<<<<<< HEAD
        console.log(togglestate1)
        console.log(togglestate2);
=======
       // console.log(togglestate1)
        //console.log(togglestate2);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

       if(togglestate1 === "True" || togglestate1 === "true" )
       {

         this.setState({
           Push: true
         });

       }
       if(togglestate1 === "False" || togglestate1 === "false")
       {
         this.setState({
           Push: false
         });
       }

       if(togglestate2 === "True" || togglestate2 === "true")
       {

         this.setState({
           Sms: true
         });

       }
       if(togglestate2 === "False" || togglestate2 === "false"){
         this.setState({
           Sms: false
         });
       }

   }
     render() {

<<<<<<< HEAD
        console.log(this.state.Push);
        console.log(this.state.Sms);
=======
        //console.log(this.state.Push);
       // console.log(this.state.Sms);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f


     return (

       <div className="row">
         <div className="col-xl-12">

           <div className="box box-default">
             <div className="box-body">
                <h4 className="article-title-header" >Push Notifications</h4>
                <p>Would you like to receive camera alerts via push notifications?</p>
                <span className="float-right ibox-icon">

                   <Toggle

                                   defaultToggled={this.state.Push}
                                   onToggle={this.handlePushToggle.bind(this)}
                                  toggle= {this.state.Push}
                                   style={styles.toggle}
                                 />

                </span>

             </div>
           </div>




                  <div className="box box-default">
                     <div className="box-body">

                         <h4 className="article-title-header" >Text Message Notifications</h4>
                       <p>Would you like to receive camera alerts via text message?</p>

                         <span className="float-right ibox-icon">


                           <Toggle

                                        defaultToggled={this.state.Sms}
                                         onToggle={this.handleSmsToggle.bind(this)}
                                          toggle= {this.state.Sms}
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




       <section className="">
         <h2 className="article-title-header">Notifications</h2>
         <QueueAnim type="bottom" className="ui-animate">
           <Notify />
         </QueueAnim>
       </section>

     )
     }

     module.exports = Page;
