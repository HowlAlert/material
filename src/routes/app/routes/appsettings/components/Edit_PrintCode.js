import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';

class Print extends React.Component{

  constructor() {
    super();
      this.state = {
        data: [],
        Next_disabled:true,
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
       });
       console.log(target.value) ;
       return target.value;
   }


  componentDidMount(){

    const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/Login';
     fetch(URL,
              {
                      method: "POST",
                      body: JSON.stringify({
                        "Email":"varuna808@gmail.com",
                        "Password":"1234Howl"

               }),
                       headers: new Headers({'content-type': 'application/json'}),
                     })
                 .then((Response)=> Response.json())
                 .then((findresponse)=>{

                   this.setState({
                           GetUser:findresponse.LoginResult.GetUser,
                           ResultStatus:findresponse.LoginResult.ResultStatus,
                         })
                         if(this.state.ResultStatus.Status==="1")
                         {
                          console.log("status");
                          cookie.save('printcode', this.state.GetUser.ReferralCode);

                        }
                         console.log(cookie.load('printcode'));

                })


  }
  handleNext(event) {

    alert("Updated")

}

render() {
  return (

         <div className="col-xl-12">
           <div className="box box-transparent">
             <div className="box-body padding-lg-h">

                 <div className="form-group">
                   <h5>If you have one enter the Print(Refferal) code provided by your HOWL Alpha below.</h5>
                     <TextField onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your Print code " fullWidth />

                   <div className="card-action no-border text-left">
                     <RaisedButton onClick={(e)=>this.handleNext(e)} primary label="SAVE" disabled={this.state.Next_disabled}/>
                   </div>
                 </div>

             </div>
           </div>
         </div>

       );
   }
}

const Page = () => (
  <section className="container-fluid chapter">

    <h2 className="article-title-header">PRINT CODE</h2>

    <QueueAnim type="bottom" className="ui-animate">
          <div key="1"><Print /></div>
    </QueueAnim>


  </section>

);
module.exports = Page;
