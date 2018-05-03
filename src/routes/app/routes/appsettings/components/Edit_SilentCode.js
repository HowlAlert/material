import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
// import VerifyCode from '../../verifysilent/';



class SilentCode extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      code:'',
      re_code:'',
      Next_disabled:true,
      Cancel_disabled:true

    };

  }

  handleCode(event) {
     event.preventDefault();
      const target = event.target;
      const value = target.type === target.value;
      const name = target.name;

   this.setState({
         code: target.value,
         Next_disabled:false,
         Cancel_disabled:false
       });
        console.log(target.value) ;
       return target.value;
     }

  handleNext(event) {




       var entered = this.state.code;
        console.log(entered);

       var saved = cookie.load('SilenceCode');
        console.log(saved);

       if(entered ==''){
         alert("Please enter your old Silent code!");
       }
       const re = /^[0-9\b]+$/;

       if(re.test(entered)=='' && entered!=''){
         alert("Cancel Code is a 4 digits number!");
         window.location.reload();
       }
       else if(re.test(entered)!='' && entered!='' && entered != saved){

         alert("The Silent code you entered does not match your current cancel code. Please try again");

          this.setState({ redirectToReferrer: false })

       }
      else if(entered === saved)
       {
          this.setState({ redirectToReferrer: true })
        }

     }


render() {
  const { redirectToReferrer} = this.state
    if(redirectToReferrer === true)
    {
      return (
         <VerifySilentCode />
       )
    }
  return (



           <div className="">
             <div className="">
                   <p className="settingText">Speak your Silent Alert "Fake Cancellation" Code to your smart hub (or type it into your app) if a perpetrator/threat causes you to cancel your HOWL alert. The alarm will silent,however your alert will proceed. </p>
                   <p className="settingText">* Be sure to make this a code you will remember.</p>
                     <TextField  onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your old silent code " fullWidth />
                   </div>

                   <div className="divider" />
                   <div className="row">
                     <div className="col-lg-6 noPadRight">
                       <RaisedButton onClick={(e)=>this.handleCancel(e)} primary label="Cancel"  disabled={this.state.Cancel_disabled}/>

                     </div>
                     <div className="col-lg-6 noPadLeft">
                       <RaisedButton onClick={(e)=>this.handleNext(e)} primary label="NEXT ->" disabled={this.state.Next_disabled} />

                     </div>
                   </div>

                 </div>


   );
  }
}

class VerifySilentCode extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      code:'',
      re_code:'',
      Next_disabled:true,
      Cancel_disabled:true
    };

  }

  handleCode(event) {
     event.preventDefault();
      const target = event.target;
      const value = target.type === target.value;
      const name = target.name;

   this.setState({
         code: target.value,
         Next_disabled:false,
         Cancel_disabled:false
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
    var code_length = entered.length;
     console.log(entered);

    var verify = this.state.re_code;
     console.log(verify);

    var savedcancelcode = cookie.load('CancellationCode');

    var silentcode =   cookie.load('SilenceCode');
     console.log(silentcode);


    if(entered ==''){
      alert("Silent Code Cannot be empty!");
    }


    if(code_length != 4){
      alert("Silent Code should be 4 digits number!");
     }
    const re = /^[0-9\b]+$/;

   if(re.test(entered)=='' && entered!='' ){
      alert("Silent Code is only number!");

    }
    else if(re.test(entered)!='' && entered!='' && code_length == 4 && entered === savedcancelcode){
          alert("Your Silent Code and Cancel Code can not be same ! ");

    }
    else if( re.test(entered)!='' && entered!='' && entered !== silentcode && code_length == 4 && entered === silentcode)
    {
      alert("Your new silent code should be different than current silent code")
    }
    else if(re.test(entered)!='' && entered!='' && entered !== silentcode && code_length == 4 &&  entered !== savedcancelcode && entered === verify)
    {

      const BaseURL =  'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/SetSilenceCode';
      // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/SetSilenceCode';

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
              cookie.save('SilenceCode',this.state.code)
            this.setState({ redirectToReferrer: true })   //redirect to settings menu
        })

      }
      else if(re.test(entered)!='' && entered!='' && entered !== silentcode && code_length == 4 &&  entered !== savedcancelcode && verify =='')
       {
          alert("Re-enter Silent code to verify");

       }
    else if(re.test(entered)!='' && entered!='' && entered !== silentcode && code_length == 4 &&  entered !== savedcancelcode && entered !== verify )
     {
        alert("Silent code did not match.Try Again ");

     }


}

handleBack(event) {
  window.location.reload();
}

render() {

  const { redirectToReferrer} = this.state
    if(redirectToReferrer === true)
    {
      return (
        <div>
           <h5 className="text-center">* Be sure to make this a code you will remember.</h5>
            <TextField  value ={this.state.code} floatingLabelText="Your New Silent code" fullWidth />
            <RaisedButton onClick={(e)=>this.handleBack(e)} primary label="OK" />
        </div>

       )
    }


  return (
      <article className="article">
         <h2 className="article-title text-center">Change Silent Code</h2>
         <div className="">
           <div className="row">

           <div className="box box-transparent">
             <div className="box-body padding-lg-h">
                   <p className="settingText">Speak your Silent Alert "Fake Cancellation" Code to your smart hub (or type it into your app) if a perpetrator/threat causes you to cancel your HOWL alert. The alarm will silent,however your alert will proceed. </p><h5 className="text-center">* Be sure to make this a code you will remember.</h5>
                   <div className="form-group">
                     <TextField  onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your New silent code " fullWidth />
                     <TextField  onChange={(e)=>this.handleReCode(e)} name="re-code" floatingLabelText="Verify your New silent code " fullWidth />
                   </div>

                                      <div className="divider" />
                                      <div className="row">
                                        <div className="col-lg-6 noPadRight">
                                          <RaisedButton onClick={(e)=>this.handleCancel(e)} primary label="Cancel"  disabled={this.state.Cancel_disabled}/>

                                        </div>
                                        <div className="col-lg-6 noPadLeft">
                                          <RaisedButton onClick={(e)=>this.handleSave(e)} primary label="SAVE" disabled={this.state.Next_disabled} />

                                        </div>
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
  <section className="">

    <h2 className="article-title-header">Change Silent Code</h2>

    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><SilentCode /></div>
    </QueueAnim>


  </section>

);
module.exports = Page;
