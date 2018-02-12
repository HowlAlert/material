import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Cancel from '../../cancel/';


 class VerifyCancelCode extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      code:'',
      verifycode:'',

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

   handleVerifyCode(event) {
      event.preventDefault();
       const target = event.target;
       const value = target.type === target.value;
       const name = target.name;

    this.setState({
        verifycode: target.value
        });
        console.log(target.value) ;
        return target.value;
    }


  handleNext(event) {

    var entered = this.state.code;
    console.log(entered);

    var verify = this.state.verifycode;
    console.log(verify);

    if(entered === verify){

      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/SetCancellationCode';

      fetch(BaseURL,
      {
       method: "POST",
       body: JSON.stringify({
         "UserID":cookie.load('Id'),
         "UserToken":cookie.load('UserToken'),
         "CancellationCode":this.state.code
       }),
        headers: new Headers({'content-type': 'application/json'}),
      })
       .then((Response)=> Response.json())
        .then((findresponse)=>{
           console.log(findresponse)
           alert("Code has been changed");
           this.setState({ redirectToReferrer: true })        //redirect to settings menu
          })

      }
    else
     {
        alert("Cancel code did not match.Try Again ");

     }



}
  render() {



    const { redirectToReferrer} = this.state
      if(redirectToReferrer === true)
      {
        return (
          <Redirect to="../Settings"/>

         )
      }

    return (
        <div className="container-fluid with-maxwidth">
          <div className="row">
            <div className="col-xl-12">
              <div className="box box-transparent">
                <div className="box-body padding-lg-h">
                  <form name="CancelformForm">
                    <div className="form-group">
                      <p className="no-margin">Speak your Cancellation Code to your smart hub (or type it into your app) to cancel your HOWL alert. *Be sure to make this a code you will remember.</p>
                      <div className="form-group">
                        <TextField onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your new cancel code" fullWidth />
                        <TextField onChange={(e)=>this.handleVerifyCode(e)} name="re-code" floatingLabelText="Verify your new cancel code" fullWidth />
                      </div>
                      <div className="card-action no-border text-right">
                        <RaisedButton onClick={(e)=>this.handleNext(e)} primary label="Save" />
                      </div>

                    </div>
                   </form>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}




const Page = () => (
  <article className="article">
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><VerifyCancelCode /></div>
    </QueueAnim>
  </section>
</article>
);
module.exports = Page;
