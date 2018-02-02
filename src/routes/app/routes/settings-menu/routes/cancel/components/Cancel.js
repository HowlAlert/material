import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import VerifyCancelCode from '../../verifycancel/';

 class Cancel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:[],
      code:'',

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
                              cookie.save('oldcancelcode', this.state.GetUser.CancellationCode);
                              cookie.save('oldsilentcode', this.state.GetUser.SilenceCode);
                            }
                             console.log(cookie.load('oldcancelcode'));
                             console.log(cookie.load('oldsilentcode'));
                    })

  }

  handleNext(event) {

    var entered = this.state.code;
    console.log(entered);

    var saved = cookie.load('oldcancelcode');
    console.log(saved);



    if(entered === saved){
      this.setState({ redirectToReferrer: true })

    }
 else
   {
     alert("The cancel code you entered does not match your current cancel code. Please try again ");
      this.setState({ redirectToReferrer: false })
   }

}

  render() {
     const { redirectToReferrer} = this.state
       if(redirectToReferrer === true)
       {
         return (
            <Route component={VerifyCancelCode} />
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
                        <TextField onChange={(e)=>this.handleCode(e)} name="code" floatingLabelText="Enter your old cancel code" fullWidth />
                      </div>
                      <div className="card-action no-border text-right">
                        <RaisedButton onClick={(e)=>this.handleNext(e)} primary label="NEXT ->" />
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
    <h2 className="article-title text-center">CHANGE CANCEL CODE</h2>
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Cancel /></div>
    </QueueAnim>
  </section>
</article>
);
module.exports = Page;
