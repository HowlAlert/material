import React from 'react';
import QueueAnim from 'rc-queue-anim';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {Redirect} from 'react-router-dom';
import APPCONFIG from 'constants/Config';
import cookie from 'react-cookies';
import { sessionReducer, sessionService } from 'redux-react-session';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route, Switch, Router, BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import Register from '../../register/components/Register';
const Hero = () => (
  <div className="text-center">
  <img src="assets/images/new_howl.jpg" alt="HOWL" />
  <div className="divider" /><div className="divider" />
  </div>
);
const mWidthStyle = {
  minWidth: '130px'
  };
const  login= {
    color: '#D14836'
};
const  printcode= {
    color: '#3287c5'
};
const  policy= {
    color: '#6A6A6A'
};




class MainLogin extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      brand: APPCONFIG.brand,
      Email:'',
      Fname:'',
      Lname:'',
      GoogleID:'',
      GetUser:'',
      ResultStatus:'',
      GetUserPack:'',
      GetUserHomeAddress:'',
      NumberOfCameras:'',
      GetAccount:''
    };
  }

  componentWillMount(){

    if(cookie.load('Loggedin')!=undefined){

      this.setState({ redirectToHome: true })
    }
  }



  handleGoogleLogin(response) {
    console.log(response);
    //first name
      console.log(response.w3.ofa);
      //last name
      console.log(response.w3.wea);
      console.log(response.googleId);
      console.log(response.profileObj.email);

      const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/LoginWithGoogle';
      // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/LoginWithGoogle';


      fetch(BaseURL,{
       method: "POST",
       body: JSON.stringify({'FirstName':response.w3.ofa,'LastName':response.w3.wea,'Email':response.profileObj.email,'GoogleID':response.googleId,'DeviceToken':'','InviteCode':'','TimeZone':''}),
      headers: new Headers({'content-type': 'application/json'})
      }).
      then((Response)=>Response.json()).
      then((findresponse)=>{
        this.setState({
          GetUser:findresponse.LoginWithGoogleResult.GetUser,
          ResultStatus:findresponse.LoginWithGoogleResult.ResultStatus,
          GetUserPack:findresponse.LoginWithGoogleResult.GetUserPack,
          GetUserHomeAddress:findresponse.LoginWithGoogleResult.GetUserHomeAddress,
          NumberOfCameras:findresponse.LoginWithGoogleResult.NumberOfCameras,
          GetAccount:findresponse.LoginWithGoogleResult.GetAccount,
        });console.log(findresponse);

          if(this.state.ResultStatus.StatusMessage==="No user registered with this email."){
            alert(this.state.ResultStatus.StatusMessage)
          }

          if(this.state.ResultStatus.StatusMessage==="Please enter correct password."){
            alert(this.state.ResultStatus.StatusMessage)
          }

          if(this.state.ResultStatus.StatusMessage==="Your account has been suspended, please contact to authorized person"){
            alert(this.state.ResultStatus.StatusMessage)
          }

          if(this.state.ResultStatus.StatusMessage==="Success"){
            cookie.save('FirstName', response.w3.ofa);
            cookie.save('LastName', response.w3.wea);
            cookie.save('UserToken', this.state.GetUser.UserToken);
            cookie.save('Id', this.state.GetUser.ID);


            if(this.state.GetUser.MobilePhoneNumber==null){
              alert("Please verify your Phone Number"),
              this.setState({ redirectToMobilePhoneNumber: true }),
              this.setState.noOfSuperValidation="False"
            }

            else if(this.state.GetUser.HasConfirmedMobilePhone=="False" && this.state.GetUserPack.length!=0 && this.state.GetUserHomeAddress.Address1!=null && this.state.GetUser.CancellationCode!=null && this.state.GetUser.SilenceCode!=null){
              alert("Please confirm your Phone Number");
              if(this.state.GetAccount.length==0){
                // console.log(this.state.GetAccount)
                  cookie.save('GetAccount_GMT','empty');
              }else if(this.state.GetAccount.length!=0){
                cookie.save('GetAccount_GMT', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date);
                cookie.save('GetAccount_PST', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst);
                console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date)
                  console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst)
              }
              cookie.save('Email', this.state.GetUser.Email);
              cookie.save('MobilePhoneNumber', this.state.GetUser.MobilePhoneNumber);
              cookie.save('SilenceCode', this.state.GetUser.SilenceCode)
              cookie.save('ShouldReceiveCameraAlertPush', this.state.GetUser.ShouldReceiveCameraAlertPush);
              cookie.save('ShouldReceiveCameraAlertSMS', this.state.GetUser.ShouldReceiveCameraAlertSMS);
              cookie.save('Address1', this.state.GetUserHomeAddress.Address1);
              cookie.save('Address2', this.state.GetUserHomeAddress.Address2);
              cookie.save('City', this.state.GetUserHomeAddress.City);
              cookie.save('Latitude', this.state.GetUserHomeAddress.Latitude);
              cookie.save('Longitude', this.state.GetUserHomeAddress.Longitude);
              cookie.save('State', this.state.GetUserHomeAddress.State);
              cookie.save('Zip', this.state.GetUserHomeAddress.Zip);
              this.setState({ redirectToMobilePhoneConfirmationCodeAfterEditProfile: true }),
              this.setState.noOfSuperValidation="False"
            }

            else if(this.state.GetUser.HasConfirmedMobilePhone=="False"){
              alert("Please confirm your Phone Number"),
              this.setState({ redirectToMobilePhoneConfirmationCode: true }),
              this.setState.noOfSuperValidation="False"
            }

            else if(this.state.GetUserPack.length==0){
              alert("Please enter atleast one Pack member"),
             this.setState({ redirectToGetUserPack: true }),
             this.setState.noOfSuperValidation="False"
            }

            else if(this.state.GetUserHomeAddress.Address1==null){
              alert("Please enter your Home Address"),
             this.setState({ redirectToAddress: true }),
             this.setState.noOfSuperValidation="False"
            }

            else if(this.state.GetUser.CancellationCode==null){
              alert("Please enter your Cancel Code"),
              this.setState({ redirectToCancellationCode: true }),
              this.setState.noOfSuperValidation="False"
            }
            else if(this.state.GetUser.SilenceCode==null){
              alert("Please enter your Silent Code"),
              this.setState({ redirectToSilenceCode: true }),
              this.setState.noOfSuperValidation="False"
              if(this.state.GetAccount.length==0){
                // console.log(this.state.GetAccount)
                  cookie.save('GetAccount_GMT','empty');
              }else if(this.state.GetAccount.length!=0){
                cookie.save('GetAccount_GMT', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date);
                cookie.save('GetAccount_PST', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst);
                console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date)
                  console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst)
              }
              cookie.save('Email', this.state.GetUser.Email);
              cookie.save('MobilePhoneNumber', this.state.GetUser.MobilePhoneNumber);
              cookie.save('CancellationCode', this.state.GetUser.CancellationCode);
              cookie.save('ShouldReceiveCameraAlertPush', this.state.GetUser.ShouldReceiveCameraAlertPush);
              cookie.save('ShouldReceiveCameraAlertSMS', this.state.GetUser.ShouldReceiveCameraAlertSMS);
              cookie.save('Address1', this.state.GetUserHomeAddress.Address1);
              cookie.save('Address2', this.state.GetUserHomeAddress.Address2);
              cookie.save('City', this.state.GetUserHomeAddress.City);
              cookie.save('Latitude', this.state.GetUserHomeAddress.Latitude);
              cookie.save('Longitude', this.state.GetUserHomeAddress.Longitude);
              cookie.save('State', this.state.GetUserHomeAddress.State);
              cookie.save('Zip', this.state.GetUserHomeAddress.Zip);
            }
            
            else if(this.state.noOfSuperValidation!="False"){
            if(this.state.GetAccount.length==0){
              // console.log(this.state.GetAccount)
                cookie.save('GetAccount_GMT','empty');
            }else if(this.state.GetAccount.length!=0){
              cookie.save('GetAccount_GMT', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date);
              cookie.save('GetAccount_PST', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst);
              console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date)
                console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst)
            }
              cookie.save('Email', this.state.GetUser.Email);
              cookie.save('MobilePhoneNumber', this.state.GetUser.MobilePhoneNumber);
              cookie.save('CancellationCode', this.state.GetUser.CancellationCode);
              cookie.save('SilenceCode', this.state.GetUser.SilenceCode)
              cookie.save('ShouldReceiveCameraAlertPush', this.state.GetUser.ShouldReceiveCameraAlertPush);
              cookie.save('ShouldReceiveCameraAlertSMS', this.state.GetUser.ShouldReceiveCameraAlertSMS);
              //return ( <Redirect to="#/Register1"/> );
              cookie.save('Address1', this.state.GetUserHomeAddress.Address1);
              cookie.save('Address2', this.state.GetUserHomeAddress.Address2);
              cookie.save('City', this.state.GetUserHomeAddress.City);
              cookie.save('Latitude', this.state.GetUserHomeAddress.Latitude);
              cookie.save('Longitude', this.state.GetUserHomeAddress.Longitude);
              cookie.save('State', this.state.GetUserHomeAddress.State);
              cookie.save('Zip', this.state.GetUserHomeAddress.Zip);
       this.setState({ redirectToReferrer: true })
     }}
        else{
           this.setState({ redirectToReferrer: false })
        }

      });
    }


    handleFacebookLogin (response) {
      console.log(response);
      console.log(response.first_name);
      console.log(response.last_name);
      console.log(response.id);
      console.log(response.email);



    //  const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/LoginWithFacebook';
const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/LoginWithFacebook';


         fetch(BaseURL,{
          method: "POST",
          body: JSON.stringify({'FirstName':response.first_name,'LastName':response.last_name,'Email':response.email,'FacebookID':response.id,'DeviceToken':'','InviteCode':'','TimeZone':''}),
        headers: new Headers({'content-type': 'application/json'})
        }).
      then((Response)=>Response.json()).
      then((findresponse)=>{
        this.setState({
          GetUser:findresponse.LoginWithFacebookResult.GetUser,
          ResultStatus:findresponse.LoginWithFacebookResult.ResultStatus,
          GetUserPack:findresponse.LoginWithFacebookResult.GetUserPack,
          GetUserHomeAddress:findresponse.LoginWithFacebookResult.GetUserHomeAddress,
          NumberOfCameras:findresponse.LoginWithFacebookResult.NumberOfCameras,
          GetAccount:findresponse.LoginWithFacebookResult.GetAccount,
        })

          if(this.state.ResultStatus.StatusMessage==="No user registered with this email."){
            alert(this.state.ResultStatus.StatusMessage)
          }

          if(this.state.ResultStatus.StatusMessage==="Please enter correct password."){
            alert(this.state.ResultStatus.StatusMessage)
          }

          if(this.state.ResultStatus.StatusMessage==="Your account has been suspended, please contact to authorized person"){
            alert(this.state.ResultStatus.StatusMessage)
          }

          if(this.state.ResultStatus.StatusMessage==="Success"){
            cookie.save('FirstName', response.first_name);
            cookie.save('LastName', response.last_name);
            cookie.save('UserToken', this.state.GetUser.UserToken);
            cookie.save('Id', this.state.GetUser.ID);


            if(this.state.GetUser.MobilePhoneNumber==null){
              alert("Please verify your Phone Number"),
              this.setState({ redirectToMobilePhoneNumber: true }),
              this.setState.noOfSuperValidation="False"
                }

                else if(this.state.GetUser.HasConfirmedMobilePhone=="False" && this.state.GetUserPack.length!=0 && this.state.GetUserHomeAddress.Address1!=null && this.state.GetUser.CancellationCode!=null && this.state.GetUser.SilenceCode!=null){
                  alert("Please confirm your Phone Number");
                  if(this.state.GetAccount.length==0){
                    // console.log(this.state.GetAccount)
                      cookie.save('GetAccount_GMT','empty');
                  }else if(this.state.GetAccount.length!=0){
                    cookie.save('GetAccount_GMT', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date);
                    cookie.save('GetAccount_PST', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst);
                    console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date)
                      console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst)
                  }
                  cookie.save('Email', this.state.GetUser.Email);
                  cookie.save('MobilePhoneNumber', this.state.GetUser.MobilePhoneNumber);
                  cookie.save('SilenceCode', this.state.GetUser.SilenceCode)
                  cookie.save('ShouldReceiveCameraAlertPush', this.state.GetUser.ShouldReceiveCameraAlertPush);
                  cookie.save('ShouldReceiveCameraAlertSMS', this.state.GetUser.ShouldReceiveCameraAlertSMS);
                  cookie.save('Address1', this.state.GetUserHomeAddress.Address1);
                  cookie.save('Address2', this.state.GetUserHomeAddress.Address2);
                  cookie.save('City', this.state.GetUserHomeAddress.City);
                  cookie.save('Latitude', this.state.GetUserHomeAddress.Latitude);
                  cookie.save('Longitude', this.state.GetUserHomeAddress.Longitude);
                  cookie.save('State', this.state.GetUserHomeAddress.State);
                  cookie.save('Zip', this.state.GetUserHomeAddress.Zip);
                  this.setState({ redirectToMobilePhoneConfirmationCodeAfterEditProfile: true }),
                  this.setState.noOfSuperValidation="False"
                }


            else if(this.state.GetUser.HasConfirmedMobilePhone=="False"){
              alert("Please confirm your Phone Number"),
              this.setState({ redirectToMobilePhoneConfirmationCode: true }),
              this.setState.noOfSuperValidation="False"
            }

            else if(this.state.GetUserPack.length==0){
              alert("Please enter atleast one Pack member"),
             this.setState({ redirectToGetUserPack: true }),
             this.setState.noOfSuperValidation="False"
            }

            else if(this.state.GetUserHomeAddress.Address1==null){
              alert("Please enter your Home Address"),
             this.setState({ redirectToAddress: true }),
             this.setState.noOfSuperValidation="False"
            }

            else if(this.state.GetUser.CancellationCode==null){
              alert("Please enter your Cancel Code"),
              this.setState({ redirectToCancellationCode: true }),
              this.setState.noOfSuperValidation="False"
            }
            else if(this.state.GetUser.SilenceCode==null){
              alert("Please enter your Silent Code"),
              this.setState({ redirectToSilenceCode: true }),
              this.setState.noOfSuperValidation="False"
              if(this.state.GetAccount.length==0){
                // console.log(this.state.GetAccount)
                  cookie.save('GetAccount_GMT','empty');
              }else if(this.state.GetAccount.length!=0){
                cookie.save('GetAccount_GMT', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date);
                cookie.save('GetAccount_PST', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst);
                console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date)
                  console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst)
              }
              cookie.save('Email', this.state.GetUser.Email);
              cookie.save('MobilePhoneNumber', this.state.GetUser.MobilePhoneNumber);
              cookie.save('CancellationCode', this.state.GetUser.CancellationCode);
              cookie.save('ShouldReceiveCameraAlertPush', this.state.GetUser.ShouldReceiveCameraAlertPush);
              cookie.save('ShouldReceiveCameraAlertSMS', this.state.GetUser.ShouldReceiveCameraAlertSMS);
              cookie.save('Address1', this.state.GetUserHomeAddress.Address1);
              cookie.save('Address2', this.state.GetUserHomeAddress.Address2);
              cookie.save('City', this.state.GetUserHomeAddress.City);
              cookie.save('Latitude', this.state.GetUserHomeAddress.Latitude);
              cookie.save('Longitude', this.state.GetUserHomeAddress.Longitude);
              cookie.save('State', this.state.GetUserHomeAddress.State);
              cookie.save('Zip', this.state.GetUserHomeAddress.Zip);
            }

            if(this.state.noOfSuperValidation!="False"){
                  ccookie.save('Email', this.state.GetUser.Email);
                  if(this.state.GetAccount.length==0){
                    // console.log(this.state.GetAccount)
                      cookie.save('GetAccount_GMT','empty');
                  }else if(this.state.GetAccount.length!=0){
                    cookie.save('GetAccount_GMT', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date);
                    cookie.save('GetAccount_PST', JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst);
                    console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date)
                      console.log(JSON.parse(this.state.GetAccount["0"].Receipt).expires_date_pst)
                  }
                  cookie.save('MobilePhoneNumber', this.state.GetUser.MobilePhoneNumber);
                  cookie.save('CancellationCode', this.state.GetUser.CancellationCode);
                  cookie.save('SilenceCode', this.state.GetUser.SilenceCode)
                  cookie.save('ShouldReceiveCameraAlertPush', this.state.GetUser.ShouldReceiveCameraAlertPush);
                  cookie.save('ShouldReceiveCameraAlertSMS', this.state.GetUser.ShouldReceiveCameraAlertSMS);
                  cookie.save('Address1', this.state.GetUserHomeAddress.Address1);
                  cookie.save('Address2', this.state.GetUserHomeAddress.Address2);
                  cookie.save('City', this.state.GetUserHomeAddress.City);
                  cookie.save('Latitude', this.state.GetUserHomeAddress.Latitude);
                  cookie.save('Longitude', this.state.GetUserHomeAddress.Longitude);
                  cookie.save('State', this.state.GetUserHomeAddress.State);
                  cookie.save('Zip', this.state.GetUserHomeAddress.Zip);
             this.setState({ redirectToReferrer: true })
           }}
        else{
           this.setState({ redirectToReferrer: false })
        }

      });
    }

    handleCreateAccount(event){
      this.setState({ redirectToCreateAccount: true })
    }

    handleLogin(event){
      this.setState({ redirectToLogin: true })
    }

    handlePrintcode(event){
        this.setState({ redirectToPrintcode: true })
      }

    handleTerms(event){
        this.setState({ redirectToTerms: true })
      }

    handlePolicy(event){
          this.setState({ redirectToPolicy: true })
        }

  render (){

    const{redirectToMainLogin}=this.state
    if(redirectToMainLogin){
      return (
        <Redirect to={'/mainLogin'}/>
      )
    }

    const{redirectToHome}=this.state
    if(redirectToHome){
      return (
        <Redirect to="app/home" />
      )
    }

    const reducers = {
      // ... your other reducers here ...
      session: sessionReducer
    };
    const reducer = combineReducers(reducers);
    const store = createStore(reducer);

    sessionService.initSessionService(store);
    const { redirectToReferrer} = this.state

    if (redirectToReferrer) {
      const options = { redirectToReferrer: true, redirectPath: '/', driver: 'COOKIES' };
      sessionService.initSessionService(store, options)
        .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
        .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));

      console.log(redirectToReferrer)
          return (
            <Redirect to="app/home" />
          )
        }

        const{redirectToCreateAccount}=this.state
        if(redirectToCreateAccount){
          return (
            <Redirect to="register" />
          )
        }

        const{redirectToLogin}=this.state
        if(redirectToLogin){
          return (
            <Redirect to="login" />
          )
        }

        const{redirectToPrintcode}=this.state
        if(redirectToPrintcode){
          return (
            <Redirect to="printcode" />
          )
        }

        const{redirectToTerms}=this.state
        if(redirectToTerms){
          return (
            <Redirect to="Terms" />
          )
        }

        const{redirectToPolicy}=this.state
        if(redirectToPolicy){
          return (
            <Redirect to="Privacy" />
          )
        }

                const { redirectToGetUserPack   } = this.state
                if(redirectToGetUserPack){
                  return (
                    <Redirect to="AddOnePackMember" />
                  )
                }

                const { redirectToAddress   } = this.state
                if(redirectToAddress){
                  return (
                    <Redirect to="AddHomeAddress" />
                  )
                }

                const { redirectToCancellationCode  } = this.state
                if(redirectToCancellationCode){
                  return (
                    <Redirect to="AddCancelCode" />
                  )
                }

                const { redirectToSilenceCode } = this.state
                if(redirectToSilenceCode){
                  return (
                    <Redirect to="AddSilentCode" />
                  )
                }

                    const{redirectToMobilePhoneNumber}=this.state
                    if(redirectToMobilePhoneNumber){
                      return (
                        <Redirect to="VerifyPhoneNumber" />
                      )
                    }

                    const{redirectToMobilePhoneConfirmationCode}=this.state
                    if(redirectToMobilePhoneConfirmationCode){
                      return (
                        <Redirect to="ValidatePhoneCode" />
                      )
                    }


    return(
      <div classNa  me="body-inner">
      <div className="card bg-white registerCard mainlogincard dkShadow">
        <div className="card-content regContent">
            <div className=" bg-white">
              <div className="">
              <ul className="nav" ref={(c) => { this.nav = c; }}>
                <li className="nav-header" ><span></span></li>
                </ul>

                <div className="mainLogo">
                <img src="assets/images/new_howl.jpg" alt="HOWL" />
                </div>

                <div className="text-center">
                <FacebookLogin

                appId="1614436405260654"
                autoLoad={false}
                fields="first_name,last_name,email,id"
                onClick={(e)=>this.handleFacebookLogin(e)}
                callback={(e)=>this.handleFacebookLogin(e)}



                /><div className="divider" />
                <div className="googleButton">
                <GoogleLogin
                clientId="621859786392-868jmoqbehrbar9lk36i8rsbjo9762u3.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={(e)=>this.handleGoogleLogin(e)}
                onFailure={(e)=>this.handleGoogleLogin(e)}

                />
                </div>



                              <div className='orspace'>  <p style={policy}>-  OR  -</p></div>

                                <div className="howlBlue3" style={{verticalAlign: 'middle'}} label="Create Account" primary onClick={(e)=>this.handleCreateAccount(e)}>CREATE AN ACCOUNT</div><div className="divider" />
                              </div>
                              <div className="text-center">
                              <p style={policy}>Have an account?<span><a className='loginBtn' onClick={(e)=>this.handleLogin(e)} style={login}> Login</a></span></p>
                              </div>

                              <div className="text-center">
                              <p className="text-small" style={policy}><a className='loginBtn' onClick={(e)=>this.handleTerms(e)}><u>Terms of Service</u></a> and <a className='loginBtn' onClick={(e)=>this.handlePolicy(e)}><u>Privacy Policy</u></a></p>
                              </div>

                              <div className="text-center">
                              <p className="text-small"><a className='loginBtn' onClick={(e)=>this.handlePrintcode(e)} style={printcode}><u>Print Code</u></a></p>
                            </div>


</div>
</div>

</div>
</div>
</div>
    )
  }
}

const Page = () => (
  <div className="page-login2">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <MainLogin />
        </div>
      </QueueAnim>
    </div>
  </div>
);
module.exports = Page;
