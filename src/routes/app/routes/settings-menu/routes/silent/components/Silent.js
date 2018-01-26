import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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

  handleNext(event) {

     event.preventDefault();
       if( (this.state.code=='')  && (this.state.re_code=='')){
         alert("Please enter your silent code");
       }
       let re = /^[0-9]{4}$/;
       if(re.test(this.state.code)=='' && this.state.code!=''){
         alert("Please enter a valid code");
       }

       if(re.test(this.state.re_code)=='' && this.state.re_code!=''){
         alert("Please enter a valid code");
       }

       // if(this.state.code!=this.state.re_code){
       //   alert("Silent code did not match.Try Again");
       //   this.setState({save: false })
       // }
   }

  handleSave(event) {

    if(this.setState({save: true })){

     const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/SetSilenceCode';

         fetch(BaseURL,
         {
          method: "POST",
          body: JSON.stringify({
            "UserID":"118",
            "UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSOMbyj6Rd6AJ7rL/rHD/j/TqPCcFR/UM4i0I0zfWrSegeLHB3EjO//ziEk9gyXySjSVK/GPmT7Qvu",
            "SilenceCode":this.state.code
          }),
           headers: new Headers({'content-type': 'application/json'}),
         })
     .then((Response)=> Response.json())
     .then((findresponse)=>{
         console.log(findresponse)
        alert("Silent Code has been changed");
       })

   }

}


render() {

var {save} = this.state
       if({save: true })
         {
           (e)=>this.handleNext(e)
         }
  return (
      <article className="article">
         <h2 className="article-title text-center">CHANGE SILENT CODE</h2>
         <div className="container-fluid with-maxwidth">
           <div className="row">

           <div className="box box-transparent">
             <div className="box-body padding-lg-h">
                   <p>Speak your Silent Alert "Fake Cancellation" Code to your smart hub (or type it into your app) if a perpetrator/threat causes you to cancel your HOWL alert. The alarm will silent,however your alert will proceed. </p><h5 className="text-center">* Be sure to make this a code you will remember.</h5>

                     <TextField  onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your New silent code " fullWidth />
                     <div>
                     <TextField  onChange={(e)=>this.handleReCode(e)} name="re-code" floatingLabelText="Verify your New silent code " fullWidth />
                     </div>

                   </div>

                  <button onClick={(e)=>this.handleNext(e)} onClick={(e)=>this.handleSave(e)}>SAVE </button>

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
