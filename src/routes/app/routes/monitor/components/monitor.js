import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

const Monitor = () => (
  <article className="article ">
    <h2 className="article-title text-center no-margin-top">UNLOCK EVERYTHING</h2>
     Subscribe to HOWL monitoring for only $5.99/month ($71.88 annually) for our authenticated third-party. 24-hour monitoring service who will contact the corresponding authorities on your behalf when you send alerts (POLICE, AMBULANCE, FIRE).
    <center><div>*All alerts will notify Pack by default.</div></center>
    <center>
      <button className="card bg-color-primary">MONTHLY PLAN-$5.99/MO </button>
    </center>
    <center>
      <button className="card bg-color-primary">YEARLY PLAN-$50.00/YR </button>
      <div>
        <h5>  <a href="page-layout#/app/pglayout/other-devices"> Restore purchase</a></h5>
      </div>
    </center>
     <div>
       <ul>
         <li>
            Payment will be charged to iTunes Account at confirmation of purchase
         </li>
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
     </div>
     <div className="text-center no-margin-bottom">
       <h5><a href="page-layout#/app/pglayout/terms-service">Terms of Service</a> and <a href="page-layout#/app/pglayout/privacy-police">Privacy Policy</a></h5>
     </div>

  </article>

);

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div><Monitor /></div>
    </QueueAnim>
  </section>
);

module.exports = Page;
