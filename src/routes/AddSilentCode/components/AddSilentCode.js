import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const mWidthStyle = {
  minWidth: '130px'
};

class AddSilentCode extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      code:'',
      re_code:'',
      ResultStatus:'',
      text:''
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

  handleCode(event) {
     event.preventDefault();
      const target = event.target;
      const value = target.type === target.value;
      const name = target.name;

   this.setState({
         code: target.value
       });
         //console.log(target.value) ;
       return target.value;
     }

     handleVerifyCode(event){
       let re = /^[0-9]{4}$/;
     if(this.state.code==''){
       alert("Please enter your Silent code.");
       this.setState.noOfSuperValidation="False"
     }
      else if(this.state.code.length!=4) {
        alert("Please enter 4 digit Silent code.");
        this.setState.noOfSuperValidation="False"
      }
      else if(re.test(this.state.code)=='') {
        alert("Please enter only digits for Silent code.");
        this.setState.noOfSuperValidation="False"
      }
       else if(cookie.load('CancellationCode')==this.state.code){
         alert("Your silent code and cancel code can not be same");
         this.setState.noOfSuperValidation="False"
       }
       if(this.state.noOfSuperValidation!="False"){

       const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/SetSilenceCode';
       // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/SetSilenceCode';


       fetch(BaseURL,
       {
        method: "POST",
        body: JSON.stringify({
          "UserID":cookie.load('Id'),
          "UserToken":cookie.load('UserToken'),
          "SilenceCode":this.state.code
        }),
         headers: new Headers({'content-type': 'application/json'}),
       })
        .then((Response)=> Response.json())
         .then((findresponse)=>{
           this.setState({

           ResultStatus:findresponse.SetSilenceCodeResult.ResultStatus
         })
           //console.log(findresponse)
         if(this.state.ResultStatus.Status==1){
             //console.log(this.state.ResultStatus.Status)
           alert("Succefully added Silent Code.")
           cookie.save('SilenceCode',this.state.code)
           this.setState({ redirectToReferrer: true })
            }
           })
}
       }


render() {

  const{redirectToHome}=this.state
  if(redirectToHome){
    return (
      <Redirect to="app/home" />
    )
  }

  const { redirectToReferrer} = this.state
    if(redirectToReferrer === true)
    {
      return (
        <Redirect to="app/home" />
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
            <li className="nav-header"><span></span></li>
            <li><FlatButton href="#/app/register4"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
            </li>
            </ul>*/}


            <div className="regLeft">
             <p className="hero-title text-center registerHeader">Add A Silent Code</p>
             <p className='headText'>Enter a 4 digit code to silence a howl alarm and yet still alert authorities.</p>
            </div>

            <fieldset>
              <div className="form-group">
                <TextField
                type="text"
                floatingLabelText='XXXX'
                fullWidth
                name="Code"
                 hintText="Silent Code must be 4 characters"
                 onChange={(e)=>this.handleCode(e)}
                 ref={this.setTextInputRef} //for input Highlighting
                  onClick={this.focusTextInput} //for input Highlighting
                />
              </div>



              <div className="divider" />

            </fieldset>
            <div className="card-action no-border text-left">

            </div>

            {/*
            <div className="box-body text-center">
            <RaisedButton style={mWidthStyle} label="NEXT -->" onClick={(e)=>this.handleVerifyCode(e)}/><div className="divider" />
          </div>*/}

          <div className="regButtons">
            <a style={mWidthStyle} className="howlRegBack" label="NEXT -->" href="/">CANCEL</a>
            <div style={mWidthStyle} className="howlRegNext" label="NEXT -->" onClick={(e)=>this.handleVerifyCode(e)}>NEXT</div>
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
        <div key="1">
          <AddSilentCode />
        </div>


      </QueueAnim>
    </div>
  </div>
);
module.exports = Page;
