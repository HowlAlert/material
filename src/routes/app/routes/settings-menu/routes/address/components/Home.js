import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Home = () => (
   <article className="article">
     <h2 className="article-title text-center">CHANGE HOME ADDRESS</h2>
     <div className="container-fluid with-maxwidth">
       <div className="row">
         <div className="col-xl-6">
           <div className="box box-transparent">
             <div className="box-body padding-lg-h">
               <form name="EditProfileForm">
                 <div className="form-group">
                   <div className="form-group">
                     <TextField
                       floatingLabelText="ENTER ADDRESS"
                       fullWidth
                     />
                   </div>
                   <div className="form-group">
                     <TextField floatingLabelText="APT/SUITE/FLOOR(If Applicable)" fullWidth />
                     <span className="float-right">  <i className="material-icons">location_on</i></span>
                   </div>
                     <RaisedButton primary label="SAVE" />
                 </div>
                </form>
             </div>
           </div>
         </div>
       </div>
     </div>
  </article>
);

module.exports = Home;
const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Home /></div>
    </QueueAnim>
  </section>
);
module.exports = Page;
