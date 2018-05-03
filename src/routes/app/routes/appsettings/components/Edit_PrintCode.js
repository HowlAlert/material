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
<<<<<<< HEAD
        console.log(target.value) ;
=======
       // console.log(target.value) ;
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
       return target.value;
   }


  componentDidMount(){

    const URL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/Login';

    // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/Login';
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
<<<<<<< HEAD
                           console.log("status");
                          cookie.save('printcode', this.state.GetUser.ReferralCode);

                        }
                          console.log(cookie.load('printcode'));
=======
                           //console.log("status");
                          cookie.save('printcode', this.state.GetUser.ReferralCode);

                        }
                          //console.log(cookie.load('printcode'));
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

                })


  }
  handleNext(event) {

    alert("Updated")

}

render() {
  return (

         <div className="">
           <div className="">
             <div className="">

                 <div className="form-group">
                   <p className="settingText">If you have one enter the Print(Refferal) code provided by your HOWL Alpha below.</p>
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
  <section className="">

    <h2 className="article-title-header">Edit Print Code</h2>

    <QueueAnim type="bottom" className="ui-animate">
          <div key="1"><Print /></div>
    </QueueAnim>


  </section>

);
module.exports = Page;
