import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PageRegister from 'routes/register/';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter, browserHistory } from 'react-router-dom';



class Printcode extends React.Component {
  constructor() {
    super();
    this.state = {
      Code:'',
      ResultStatus:''
      //brand: APPCONFIG.brand
    };
  }
  componentWillMount(){
  if(cookie.load('Id')!=undefined && cookie.load('UserToken')!=undefined){
    console.log(cookie.load('Id')),
    console.log(cookie.load('UserToken')),
    this.setState({ redirectToHome: true })
  }
  }


  componentWillMount(){
 if(cookie.load('Id')!=undefined && cookie.load('UserToken')!=undefined){
   console.log(cookie.load('Id')),
   console.log(cookie.load('UserToken')),
   this.setState({ redirectToHome: true })
 }
 }

handlePrintCode(event){

  const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/VerifyInviteCode';

     fetch(BaseURL,{
      method: "POST",
      body: JSON.stringify({'InviteCode':this.state.Code}),
    headers: new Headers({'content-type': 'application/json'})
    }).
  then((Response)=>Response.json()).
  then((findresponse)=>{
    this.setState({
      ResultStatus:findresponse.VerifyInviteCodeResult.ResultStatus,
    })
    if(this.state.ResultStatus.Status==="1"){
      console.log("status"),
      cookie.save('InviteCode', this.state.Code);
   this.setState({ redirectToReferrer: true })
    }
    else{
       this.setState({ redirectToReferrer: false })
    }
  })
  }


  handleCode(event) {
    event.preventDefault();
    const target = event.target;
  const value = target.type === target.value;
  const name = target.name;

  this.setState({
        Code: target.value
      });

      console.log(target.value) ;
      return target.value;
    }

  render() {

    const{redirectToHome}=this.state
<<<<<<< HEAD
   if(redirectToHome){
     return (
       <Redirect to="app/home" />
     )
   }


=======
    if(redirectToHome){
      return (
        <Redirect to="app/home" />
      )
    }

    
>>>>>>> pbharde_integrated
    const { redirectToReferrer} = this.state

    if (redirectToReferrer) {
          return (
            <Route component={PageRegister} />
          )
        }
    return (

      <div className="body-inner">

        <div className="card bg-white">
          <div className="card-content">


            <form className="form-horizontal">
            <ul className="nav" ref={(c) => { this.nav = c; }}>
              <li className="nav-header"><span></span></li>
              <li><FlatButton href="#/app/page/login"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
              </li>
              </ul>
              <img src="assets/images/HOWL2.png" alt="HOWL" />
            <p className="hero-title text-center">PRINT CODE</p>
            <div className="form-group text-center">
              <p className="text-small">If you have one, enter the Print (Referral) Code provided by your HOWL Alpha below.</p>
            </div>
              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="ENTER CODE"
                    type="text"
                    fullWidth
                    name="Email"
                     value={this.state.value}
                     onChange={(e)=>this.handleCode(e)}
                  />
                </div>

              </fieldset>
              <div className="card-action no-border text-right">

                <a  className="color-primary" onClick={(e)=>this.handlePrintCode(e)} >Submit</a>




              </div>
            </form>
          </div>



        </div>

      </div>
    );
  }
}






const Page = () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">

        <div key="2">
          <Printcode />
        </div>

      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
