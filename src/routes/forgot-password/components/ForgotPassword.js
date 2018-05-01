import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import Login from 'routes/login/';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import FlatButton from 'material-ui/FlatButton';

const mWidthStyle = {
  minWidth: '130px'
};

class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,
      ResultStatus:'',
      text:''
    };
  }

  componentWillMount(){
  if(cookie.load('Detection')!=undefined){
    console.log(cookie.load('Id')),
    console.log(cookie.load('UserToken')),
    this.setState({ redirectToHome: true })
    }
  }

  handleSendPwd(event){
    console.log(this.state.Email);
    const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/ForgotPassword';
    // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ForgotPassword';

       fetch(BaseURL,{
        method: "POST",
        body: JSON.stringify({'Email':this.state.Email}),
      headers: new Headers({'content-type': 'application/json'})
      }).
    then((Response)=>Response.json()).
    then((findresponse)=>{
      this.setState({
        ResultStatus:findresponse.ForgotPasswordResult.ResultStatus,
      })
      if(this.state.ResultStatus.Status==="1"){
        alert("Password reset instructions have been emailed to "+this.state.Email)
        console.log("status"),
     this.setState({ redirectToReferrer: true })
      }
      else{
        alert("That e-mail addreds isn't associated with an ccount. Please re-enter or Sign Up below.")
         this.setState({ redirectToReferrer: false })
      }
    })
  }

  handleEmail(event) {
    event.preventDefault();
    const target = event.target;
  const value = target.type === target.value;
  const name = target.name;

  this.setState({
        Email: target.value
      });
}
  render() {
    const { redirectToReferrer} = this.state
    if (redirectToReferrer==true) {
          return (
            <Route component={Login} />
          )
        }

        const{redirectToHome}=this.state

        if(redirectToHome){
          return (
            <Redirect to="app/home" />
          )
        }

    return (
      <div className="body-inner">
      <div className="card bg-white registerCard">
        <div className="card-content regContent">

            <form className="form-horizontal">

              <div className="regLeft passimg">
                <img src="assets/images/passreset.png" alt="HOWL" />
               <p className="hero-title text-center registerHeader">Forgot Password</p>
              </div>
            <div className="form-group text-center">
              <p className="text-small">Enter your email below to receive your password reset instructions</p>
            </div>
              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="EMAIL ADDRESS"
                    type="email"
                    type="text"
                    fullWidth
                    name="Email"
                     //value={this.state.value}
                     onChange={(e)=>this.handleEmail(e)}
                  />
                </div>
              </fieldset>


            <div className="regButtons">
                <a style={mWidthStyle} className="howlRegBack" label="NEXT -->" href="/">CANCEL</a>
              <div style={mWidthStyle}  label="SEND PASSWORD" className="howlRegNext"  onClick={(e)=>this.handleSendPwd(e)}>SEND</div>
            </div>
              </form>
          </div>
      </div>

      </div>
    );
  }
}

const Page = () => (
  <div className="page-forgot">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <ForgotPassword />
        </div>
      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
