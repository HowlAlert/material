import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';



class Monitor extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      // data1: []
    };


  }

  handlePurchase() {

         this.setState({ redirectToReferrer: true })
    }
  render() {

    const { redirectToReferrer} = this.state
          if(redirectToReferrer === true)
          {
            return (
               <Redirect to="Card-Details/Connect" />
             )
          }



    return (

  <article className="article ">

  <div className="box box-default  dkShadow">
    <div className="box-body ">

    <h2 className="article-title-header">Monitoring Services</h2>

    <div className="col-xl-12 leftAdjust">

     <p>Subscribe to HOWL monitoring for only $7.99/month ($95.88 annually) for our authenticated
      third-party. 24-hour monitoring service who will contact the corresponding authorities on your
      behalf when you send alerts (POLICE, AMBULANCE, FIRE).</p>
       <p>*All alerts will notify Pack by default.</p>
   </div>
    <br/>



  <div className="row">



         {/* <button><a href="#/app/camerasettings/purchase">MONTHLY PLAN - $7.99/MO </a></button> */}
         




      {/* <button><a href="#/app/camerasettings/purchase">YEARLY PLAN - $95.88/YR </a></button> */}

  </div>

         {/* <RaisedButton primary label="YEARLY PLAN - $95.88/YR" ><a href="#/app/camerasettings/purchase"> </a></RaisedButton> */}

      {/* <div>
        <h5>  <a href="page-layout#/app/pglayout/other-devices"> Restore purchase</a></h5>
      </div> */}



       <ul>

         <li>
            Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period
         </li>
         <li>
            Account will be charged for renewal within 24-hours prior to the end of the current peroid, and identify the cost of the renewal
         </li>
         <li>
           Subscriptions may be managed by the  user and auto-renewal may be turned off by going to the user's Account Settings after purchase
         </li>
         <li>
           Any unused portion of the free trial period, if offered, will be forfeited when the user purchases a  subscription to that publication, where applicable
         </li>
       </ul>

     <div className="text-center no-margin-bottom">
       <h5><a href="#/app/Company-Rules/Terms">Terms of Service</a> and <a href="#/app/Company-Rules/privacy-policy">Privacy Policy</a></h5>
     </div>

     </div></div>

  </article>

  );
 }
}
const Page = () => (
  <section className="container-fluid chapter">




    <QueueAnim type="bottom" className="ui-animate">

        <div><Monitor /></div>

    </QueueAnim>


</section>

);

module.exports = Page;
