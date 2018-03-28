import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

//
// const Monitor = () => (
//   <div>
//     <div className="divider divider-lg" />
//     <div className="row">
//
//
//
//       <div className="col-md-3 col-xsm-6">
//         <section className="pricing-table pricing-table-success">
//           <header><h2>Basic</h2></header>
//           <p className="pricing-price"><span className="pricing-sign">$</span>7.99<span className="pricing-sub">/mo</span></p>
//           <div className="pricing-plan-details">
//             <p className="pricing-lead">Including</p>
//             <ul>
//               <li>24/7 Support</li>
//               <li>authenticated third-party</li>
//               <li>100GB Disk Space</li>
//               <li>10 Database</li>
//               <li>10 Email Address</li>
//             </ul>
//           </div>
//           <footer><a href="javascript:;" className="btn btn-success">Get it now</a></footer>
//         </section>
//       </div>
//
//
//
//       <div className="col-md-3 col-xsm-6">
//         <section className="pricing-table pricing-table-danger">
//           <header> <h2>Ultimate</h2> </header>
//           <p className="pricing-price"><span className="pricing-sign">$</span>95.88<span className="pricing-sub">/mo</span></p>
//           <div className="pricing-plan-details">
//             <p className="pricing-lead">Including</p>
//             <ul>
//               <li>24/7 Support</li>
//               <li>Unlimited Website</li>
//               <li>Unlimited Disk Space</li>
//               <li>Unlimited Database</li>
//               <li>100 Email Address</li>
//             </ul>
//           </div>
//           <footer><a href="javascript:;" className="btn btn-danger">Get it now</a></footer>
//         </section>
//       </div>
//     </div>
//
//
//
//
//     </div>
//
// );
//
// const Page = () => (
//   <section className="container-fluid no-breadcrumbs chapter">
//     <QueueAnim type="bottom" className="ui-animate">
//       <div key="1"><Monitor /></div>
//     </QueueAnim>
//   </section>
// );
//
// module.exports = Page;


const Monitor = () => (
  <article className="article ">
    <h2 className="article-title  no-margin-top">UNLOCK EVERYTHING</h2>
    <div className="col-md-3 col-xsm-6">
     Subscribe to HOWL monitoring for only $7.99/month ($95.88 annually) for our authenticated third-party. 24-hour monitoring service who will contact the corresponding authorities on your behalf when you send alerts (POLICE, AMBULANCE, FIRE).
   </div>
    <br/>

    <center><div>*All alerts will notify Pack by default.</div></center><br/>

  <div className="row">



         {/* <button><a href="#/app/camerasettings/purchase">MONTHLY PLAN - $7.99/MO </a></button> */}
         <div className="col-md-3 col-xsm-6">
           <section className="pricing-table pricing-table-success">
             <header><h2>MONTHLY</h2></header>
             <p className="pricing-price"><span className="pricing-sign">$</span>7.99<span className="pricing-sub">/mo</span></p>
             <div className="pricing-plan-details">
               <p className="pricing-lead">Including</p>
               <ul>
                 <li>24/7 Support</li>
                 <li>authenticated third-party</li>
                 <li>100GB Disk Space</li>
                 <li>10 Database</li>
                 <li>10 Email Address</li>
               </ul>
             </div>
             <footer>
               <RaisedButton primary label="Get it now" />
               {/* <a href="#/app/camerasettings/purchase" className="btn btn-howl">Get it now</a> */}
             </footer>
           </section>
         </div>




      {/* <button><a href="#/app/camerasettings/purchase">YEARLY PLAN - $95.88/YR </a></button> */}
      <div className="col-md-3 col-xsm-6">
        <section className="pricing-table pricing-table-danger">
          <header> <h2>YEARLY</h2> </header>
          <p className="pricing-price"><span className="pricing-sign">$</span>95.88<span className="pricing-sub">/mo</span></p>
          <div className="pricing-plan-details">
            <p className="pricing-lead">Including</p>
            <ul>
              <li>24/7 Support</li>
              <li>Unlimited Website</li>
              <li>Unlimited Disk Space</li>
              <li>Unlimited Database</li>
              <li>100 Email Address</li>
            </ul>
          </div>
          <footer><RaisedButton primary label="Get it now" /></footer>
        </section>
      </div>
  </div>

         {/* <RaisedButton primary label="YEARLY PLAN - $95.88/YR" ><a href="#/app/camerasettings/purchase"> </a></RaisedButton> */}

      <div>
        <h5>  <a href="page-layout#/app/pglayout/other-devices"> Restore purchase</a></h5>
      </div>



     <div>
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
     </div>
     <div className="text-center no-margin-bottom">
       <h5><a href="#/app/pglayout/terms-service">Terms of Service</a> and <a href="#/app/pglayout/privacy-police">Privacy Policy</a></h5>
     </div>

  </article>

);

const Page = () => (
  <section className="container-fluid chapter">




    <QueueAnim type="bottom" className="ui-animate">

        <div><Monitor /></div>

    </QueueAnim>


</section>

);

module.exports = Page;
