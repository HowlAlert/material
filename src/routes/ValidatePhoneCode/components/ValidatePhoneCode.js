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
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';


const mWidthStyle = {
  minWidth: '130px'
};
const  printcode= {
    color: '#3287c5'
};
const customContentStyle = {
  width: '23.5%',
  maxWidth: 'none',
};

class ValidatePhoneCode extends React.Component {
  constructor() {
    super();
    this.state = {
      Code:'',
      ResultStatus:'',
      text:'',
      StatusMessage:''
    };
    //input Highlighting code start
          this.textInput = null;

            this.setTextInputRef = element => {
              this.textInput = element;
            };

            this.focusTextInput = () => {
              // Focus the text input using the raw DOM API
              if (this.textInput) this.textInput.focus();
            };
    //input Highlighting code end
  }


  componentWillMount(){

  if(cookie.load('Loggedin')!=undefined){
    this.setState({ redirectToHome: true })
  }
  }

   componentDidMount() {
      // autofocus the input on mount for input Highlighting
      this.focusTextInput();
    }

    state = {
    open: true,
    };
    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

  handleCode(event) {
    event.preventDefault();
    const target = event.target;
  const value = target.type === target.value;
  const name = target.name;

  this.setState({
        Code: target.value
      });

      //console.log(target.value) ;
      return target.value;
    }

    handleVerifyCode(event){
      //console.log("hi") ;
      //console.log(this.state.Code);
      let re = /^[0-9]{4}$/;
    if(this.state.Code==''){
      alert("Please enter your verification code.");
      this.setState.noOfSuperValidation="False"
    }
     else if(this.state.Code.length!=4) {
       alert("Please enter 4 digit verification code.");
       this.setState.noOfSuperValidation="False"
     }
     else if(re.test(this.state.Code)=='') {
       alert("Please enter only digits for verification code.");
       this.setState.noOfSuperValidation="False"
     }


//console.log(cookie.load('Id')),
//console.log(cookie.load('UserToken'));
if(this.state.noOfSuperValidation!="False"){
  //console.log("inside")

      const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/ValidateMobilePhoneConfirmationCode';
      // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ValidateMobilePhoneConfirmationCode';

         fetch(BaseURL,{
          method: "POST",
          body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'), 'MobilePhoneConfirmationCode':this.state.Code}),
        headers: new Headers({'content-type': 'application/json'})
        }).
      then((Response)=>Response.json()).
      then((findresponse)=>{
        this.setState({
          ResultStatus:findresponse.ValidateMobilePhoneConfirmationCodeResult.ResultStatus
        })
        //console.log(this.state.ResultStatus.Status),
        //console.log(this.state.ResultStatus.StatusMessage);
        if(this.state.ResultStatus.Status==="1"){
          //console.log("status"),
       this.setState({ redirectToReferrer: true })
        }
        else if(this.state.ResultStatus.StatusMessage=="The verification code you entered is invalid.  Please try again."){
          alert(this.state.ResultStatus.StatusMessage);
           this.setState({ redirectToReferrer: false })
        }
      })

}
    }

    HandleChangeNumber(event){
      this.setState({open: false});
      alert("HandleChangeNumber")
      this.setState({ redirectToChangeNumber: true })
    }

    HandleSendCode(event){
      this.setState({open: false});
      const BaseURL ='https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/ConfirmYourPhoneNumber';
       // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ConfirmYourPhoneNumber';

         fetch(BaseURL,{
          method: "POST",
          body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'),'MobilePhoneCountryCode':1,'MobilePhoneNumber':cookie.load('MobilePhoneNumber')}),
        headers: new Headers({'content-type': 'application/json'})
        }).
      then((Response)=>Response.json()).
      then((findresponse)=>{
        this.setState({
          ResultStatus:findresponse.ConfirmYourPhoneNumberResult.ResultStatus,
        })
        if(this.state.ResultStatus.Status==1){
          alert("The verification code has been resent on your phone number successfully")
        }

      })
    }

  render() {
    const { match, location } = this.props;
    const actions = [
         <FlatButton
           label="Change My Number"
           primary
           onClick={(e)=>this.HandleChangeNumber(e)}
         />,
         <FlatButton
           label="Send the Code Again"
           primary
           keyboardFocused
           onClick={(e)=>this.HandleSendCode(e)}
         />,
       ];

    const{redirectToHome}=this.state
    if(redirectToHome){
      return (
        <Redirect to="app/home" />
      )
    }

    const { redirectToReferrer} = this.state
    if (redirectToReferrer) {
          return (
            <Redirect to="AddOnePackMember" />
          )
        }

        const { redirectToChangeNumber} = this.state
        if (redirectToChangeNumber==true) {

            //console.log(redirectToReferrer)
              return (
                <Redirect to="VerifyPhoneNumber" />
              )
            }

    return (
      <div className="body-inner">

      <div className="card bg-white registerCard">
        <div className="card-content regContent">
        {/*
            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>*/}


            <form className="form-horizontal">
            {/*
            <ul className="nav" ref={(c) => { this.nav = c; }}>
              </ul>
*/}


<div className="regLeft">

 <p className="hero-title text-center registerHeader">Enter Your Verification Code</p>
</div>
              <fieldset>
                <div className="form-group">
                  <TextField
                  type="text"
                  fullWidth
                  name="Code"
                  floatingLabelText='XXXX'
                   //value={this.state.value}
                   onChange={(e)=>this.handleCode(e)}
                   ref={this.setTextInputRef} //for input Highlighting
                    onClick={this.focusTextInput} //for input Highlighting
                  />
                </div>



                <div className="divider" />

              </fieldset>
              <div className="card-action no-border text-left">

              </div>
              <div className="regButtons">
                <a style={mWidthStyle} className="howlRegBack" label="NEXT -->" href="/">CANCEL</a>
                <div style={mWidthStyle} className="howlRegNext" label="NEXT -->"  onClick={(e)=>this.handleVerifyCode(e)}>NEXT</div>
              </div>
              {/*
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="NEXT -->" onClick={(e)=>this.handleVerifyCode(e)}/><div className="divider" />
            </div>*/}

            </form>
            
          </div>

          <div className="text-center">
          <p className="text-small"><a className='loginBtn' onClick={this.handleOpen} style={printcode}><u>Help</u></a></p>
          <Dialog
                      id="Dialog"
                      actions={actions}
                      modal={false}
                      open={this.state.open}
                      onRequestClose={this.handleClose}
                      contentStyle={customContentStyle}
                    >
                    </Dialog>
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
        <div key="1">
          <ValidatePhoneCode />
        </div>


      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;
