import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Print = () => (
   <article className="article">
     <h2 className="article-title text-center">PRINT CODE</h2>
     <div className="container-fluid with-maxwidth">
       <div className="row">
         <div className="col-xl-6">
           <div className="box box-transparent">
             <div className="box-body padding-lg-h">
               <form name="CancelformForm">
                 <div className="form-group">
                   <h3 className="small no-margin">If you have one enter the Print(Refferal) code provided by your HOWL Alpha below.</h3>
                   <div className="form-group">
                     <TextField floatingLabelText="Enter your Print code " fullWidth />
                   </div>
                   <div className="card-action no-border text-left">
                     <RaisedButton primary label="SAVE" />
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
