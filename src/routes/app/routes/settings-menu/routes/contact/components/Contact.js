import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Print = () => (
   <article className="article">
     <h2 className="article-title text-center">Contact</h2>
     <div className="container-fluid with-maxwidth">
       <div className="row">
         <div className="col-xl-6">
           <div className="box box-transparent">
             <div className="box-body padding-lg-h">
               <form name="CancelformForm">
                 <div className="form-group">
                   <p className="small no-margin">Speak your Cancellation Code to your smart hub (or type it into your app) to cancel your HOWL alert. *Be sure to make this a code you will remember.</p>
                   <div className="form-group">
                     <TextField floatingLabelText="Enter your old cancel code " fullWidth />
                   </div>
                   <div className="card-action no-border text-right">
                     <a href="signout#/app/Logout" className="color-primary">NEXT</a>
                   </div>
                 </div>
                </form>
             </div>
           </div>
         </div>
       </div>
     </div>
  </article>
);

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Print /></div>
    </QueueAnim>
  </section>
);
module.exports = Page;
