import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import Login from 'routes/login/';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';

const mWidthStyle = {
  minWidth: '130px'
};

class ForgotPassowrd extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,
      ResultStatus:''
    };
  }

  componentWillMount(){
  if(cookie.load('FirstName')!=undefined){
    this.setState({ redirectToHome: true })
  }
  }

  handleSendPwd(event){
    console.log(this.state.Email);
    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ForgotPassword';

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
    const{redirectToHome}=this.state
    if(redirectToHome){
      return (
        <Redirect to="app/home" />
      )
    }
    
    const { redirectToReferrer} = this.state
    if (redirectToReferrer==true) {
          return (
            <Route component={Login} />
          )
        }

    return (
      <div className="body-inner">
        <div className="card bg-white">
          <div className="card-content">

            <form>
            <ul className="nav" ref={(c) => { this.nav = c; }}>
              <li className="nav-header"><span></span></li>
              <li><FlatButton href="/mainLogin"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
              </li>
              </ul>
              <img src="assets/images/HOWL.png" alt="HOWL" />
              <fieldset>
              <div className="additional-info text-center text-small">
                Enter your email below to receive your password reset instructions
             </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="EMAIL ADDRESS"
                    type="email"
                    type="text"
                    fullWidth
                    name="Email"
                     value={this.state.value}
                     onChange={(e)=>this.handleEmail(e)}
                  />
                </div>
              </fieldset>
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="SEND PASSWORD" primary onClick={(e)=>this.handleSendPwd(e)}/>
            </div>
            <div className="divider" />
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
          <ForgotPassowrd />
        </div>
      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
