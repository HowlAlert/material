import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import VerifyCode from '../../verifysilent/';

class CancelCode extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      code:'',
      re_code:''
    };

  }

  handleCode(event) {
     event.preventDefault();
      const target = event.target;
      const value = target.type === target.value;
      const name = target.name;

   this.setState({
         code: target.value
       });
       console.log(target.value) ;
       return target.value;
     }

  handleNext(event) {

       var entered = this.state.code;
       console.log(entered);

       var saved = cookie.load('SilenceCode');
       console.log(saved);

       if(entered === saved){
          alert("valid");
          this.setState({ redirectToReferrer: true })
       }
     else
      {
        alert("The Silent code you entered does not match your current cancel code. Please try again ");
         this.setState({ redirectToReferrer: false })
      }

     }


render() {
  const { redirectToReferrer} = this.state
    if(redirectToReferrer === true)
    {
      return (
         <Route component={VerifyCode} />
       )
    }
  return (
      <article className="article">
         <h2 className="article-title text-center">CHANGE SILENT CODE</h2>
         <div className="container-fluid with-maxwidth">
           <div className="row">

           <div className="box box-transparent">
             <div className="box-body padding-lg-h">
                   <h4>Speak your Silent Alert "Fake Cancellation" Code to your smart hub (or type it into your app) if a perpetrator/threat causes you to cancel your HOWL alert. The alarm will silent,however your alert will proceed. </h4>
                   <h5 className="text-center">* Be sure to make this a code you will remember.</h5>
                     <TextField  onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your old silent code " fullWidth />
                   </div>
                   <div className="card-action no-border text-right">
                     <RaisedButton onClick={(e)=>this.handleNext(e)} primary label="NEXT ->" />
                   </div>


                 </div>

             </div>

       </div>

       </article>
   );
  }
}

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><CancelCode /></div>
    </QueueAnim>
  </section>
);
module.exports = Page;
