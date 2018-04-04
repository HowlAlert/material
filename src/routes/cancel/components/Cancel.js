import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import FlatButton from 'material-ui/FlatButton';

const mWidthStyle = {
  minWidth: '130px'
};

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


  handleVerifyCode(event){

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/SetCancellationCode';

    fetch(BaseURL,
    {
     method: "POST",
     body: JSON.stringify({
       "UserID":cookie.load('Id'),
       "UserToken":cookie.load('UserToken'),
       "CancellationCode":this.state.code
     }),
      headers: new Headers({'content-type': 'application/json'}),
    })
     .then((Response)=> Response.json())
      .then((findresponse)=>{
        this.setState({
        ResultStatus:findresponse.SetCancellationCodeResult.ResultStatus
      });
      if(this.state.ResultStatus.Status==1){
        cookie.save('CancellationCode', this.state.code);
        console.log(this.state.ResultStatus.Status)
        alert("Succefully added Cancel Code.")
        this.setState({ redirectToReferrer: true })
         }
       //redirect to settings menu
        })

    }



  render() {
     const { redirectToReferrer} = this.state
       if(redirectToReferrer === true)
       {
         return (
           <Redirect to="silent" />
         )
       }

    return (
      <div className="body-inner">

        <div className="card bg-white">
          <div className="card-content">
            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>

            <form className="form-horizontal">
            <ul className="nav" ref={(c) => { this.nav = c; }}>
              <li className="nav-header"><span></span></li>
              <li><FlatButton href="#/app/register4"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
              </li>
              </ul>
              <img src="assets/images/HOWL2.png" alt="HOWL" />
              <p className="hero-title text-center">4 - DIGIT CANCEL CODE</p>
              <fieldset>
                <div className="form-group">
                  <TextField
                  type="text"
                  fullWidth
                  name="Code"
                   value={this.state.value}
                   onChange={(e)=>this.handleCode(e)}
                  />
                </div>



                <div className="divider" />

              </fieldset>
              <div className="card-action no-border text-left">

              </div>
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="NEXT -->" onClick={(e)=>this.handleVerifyCode(e)}/><div className="divider" />
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
          <Cancel />
        </div>


      </QueueAnim>
    </div>
  </div>
);
module.exports = Page;
