import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';


class VerifyCancelCode extends React.Component {


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

     handleReCode(event) {
        event.preventDefault();
         const target = event.target;
         const value = target.type === target.value;
         const name = target.name;


      this.setState({
              re_code: target.value
              });
          console.log(target.value) ;
          return target.value;
      }



  handleSave(event) {
    var entered = this.state.code;
    console.log(entered);

    var verify = this.state.re_code;
    console.log(verify);

  if(entered === verify){
     const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/SetSilenceCode';

         fetch(BaseURL,
         {
          method: "POST",
          body: JSON.stringify({
            "UserID":cookie.load('Id'),
            "UserToken":cookie.load('UserToken'),
            "SilenceCode":this.state.code
          }),
           headers: new Headers({'content-type': 'application/json'}),
         })
     .then((Response)=> Response.json())
     .then((findresponse)=>{
         console.log(findresponse)
          alert("Silent Code has been changed");

           this.setState({ redirectToReferrer: true })   //redirect to settings menu
       })
   }
   else {
     alert("silent code did not match.Try Again ");
    }


}


render() {

  const { redirectToReferrer} = this.state
    if(redirectToReferrer === true)
    {
      return (
        <Silent />

       )
    }


  return (
      <article className="article">
         <h2 className="article-title text-center">CHANGE SILENT CODE</h2>
         <div className="container-fluid with-maxwidth">
           <div className="row">

           <div className="box box-transparent">
             <div className="box-body padding-lg-h">
                   <p>Speak your Silent Alert "Fake Cancellation" Code to your smart hub (or type it into your app) if a perpetrator/threat causes you to cancel your HOWL alert. The alarm will silent,however your alert will proceed. </p><h5 className="text-center">* Be sure to make this a code you will remember.</h5>
                   <div className="form-group">
                     <TextField  onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your New silent code " fullWidth />
                     <TextField  onChange={(e)=>this.handleReCode(e)} name="re-code" floatingLabelText="Verify your New silent code " fullWidth />
                   </div>
                     <div className="card-action no-border text-right">
                       <RaisedButton onClick={(e)=>this.handleSave(e)} primary label="SAVE" />
                     </div>
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
      <div key="1"><VerifyCancelCode /></div>
    </QueueAnim>
  </section>
);
module.exports = Page;
