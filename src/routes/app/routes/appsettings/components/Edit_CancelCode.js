import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
// import VerifyCancelCode from '../../verifycancel/';




 class Cancel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:[],
      code:'',
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

   handleCancel(event) {
    window.location.reload();
   }

  handleNext(event) {

    var entered = this.state.code;
    console.log(entered );
    var saved = cookie.load('CancellationCode');
    console.log(saved);

    var silentcode =   cookie.load('SilenceCode');
    console.log(silentcode);


    if(entered ==''){
      alert("Please enter old cancel code!");
    }
    const re = /^[0-9\b]+$/;

    if(re.test(entered)=='' && entered!=''){
      alert("Cancel Code is a 4 digits number!");
      window.location.reload();
    }
    else if(re.test(entered)!='' && entered!='' && entered != saved){

      alert("The cancel code you entered does not match your current cancel code. Please try again ");

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
            <VerifyCancelCode />
          )
       }

    return (


           <div className="">
             <div className=" ">
                      <p className="settingText">Speak your Cancellation Code to your smart hub (or type it into your app) to cancel your HOWL alert.</p>
                      <p className="settingText">* Be sure to make this a code you will remember.</p>
                      <div className="form-group">
                        <TextField onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your old cancel code" fullWidth />
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

                </div>

    );
  }
}


class VerifyCancelCode extends React.Component {           //Class to VerifyCancelCode

 constructor(props) {
   super(props);

   this.state = {
     code:'',
     verifycode:'',
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
        Cancel_disabled:false,
        Next_disabled:false
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
       Next_disabled:false,
       verifycode: target.value
       });
       console.log(target.value) ;
       return target.value;
   }


 handleNext(event) {

   var entered = this.state.code;
   var code_length = entered.length;
   console.log(entered.length );

   var verify = this.state.verifycode;
   console.log(verify);

   var savedcancelcode = cookie.load('CancellationCode');
   var silentcode =   cookie.load('SilenceCode');
   console.log(silentcode);


   if(entered ==''){
     alert("Cancel Code Cannot be empty!");
   }


   if(code_length != 4){
     alert("Cancel Code should be 4 digits number!");
    }
   const re = /^[0-9\b]+$/;

  if(re.test(entered)=='' && entered!='' ){
     alert("Cancel Code is only number!");

   }
   else if(re.test(entered)!='' && entered!='' && code_length == 4 && entered === silentcode){
         alert("Your Silent Code and Cancel Code can not be same ! ");

   }
   else if( re.test(entered)!='' && entered!='' && entered !== silentcode && code_length == 4 && entered === savedcancelcode)
   {
     alert("Your new cancel code should be different than current cancel code")
   }
   else if(re.test(entered)!='' && entered!='' && entered !== silentcode && code_length == 4 &&  entered !== savedcancelcode && entered === verify)
   {

     const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/SetCancellationCode';
     // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/SetCancellationCode';

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
          cookie.save('CancellationCode',this.state.code)
           this.setState({ redirectToReferrer: true ,
                           Next_disabled:true,
                           Cancel_disabled:true

              })        //redirect to settings menu
         })

     }
     else if(re.test(entered)!='' && entered!='' && entered !== silentcode && code_length == 4 &&  entered !== savedcancelcode && verify =='')
      {
         alert("Re-Enter cancel code to verify");

      }
   else if(re.test(entered)!='' && entered!='' && entered !== silentcode && code_length == 4 &&  entered !== savedcancelcode && entered !== verify )
    {
       alert("Cancel code did not match.Try Again ");

    }



}

handleCancel(event) {
 window.location.reload();
}

 render() {



   const { redirectToReferrer} = this.state
     if(redirectToReferrer === true)
     {
       return (
         <div>
            <h5 className="text-center">* Be sure to make this a code you will remember.</h5>
             <TextField  value ={this.state.code} floatingLabelText="Your New cancel code" fullWidth />
             <RaisedButton onClick={(e)=>this.handleCancel(e)} primary label="OK" />
         </div>
        )
     }

   return (

         <div >

                    <p className="settingText">Speak your Cancellation Code to your smart hub (or type it into your app) to cancel your HOWL alert. *Be sure to make this a code you will remember.</p>
                     <div className="form-group">
                       <TextField onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your new cancel code" fullWidth />
                       <TextField onChange={(e)=>this.handleVerifyCode(e)} name="re-code" floatingLabelText="Verify your new cancel code" fullWidth />
                     </div>


                                           <div className="divider" />
                                           <div className="row">
                                             <div className="col-lg-6 noPadRight">
                                               <RaisedButton onClick={(e)=>this.handleCancel(e)} primary label="Cancel"  disabled={this.state.Cancel_disabled}/>

                                             </div>
                                             <div className="col-lg-6 noPadLeft">
                                               <RaisedButton onClick={(e)=>this.handleNext(e)} primary label="Save" disabled={this.state.Next_disabled} />

                                             </div>
                                           </div>

          </div>




   );
 }
}




const Page = () => (

  <section className="">

    <h2 className="article-title-header">Change Cancel Code</h2>

    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Cancel /></div>
    </QueueAnim>


  </section>


);
module.exports = Page;
