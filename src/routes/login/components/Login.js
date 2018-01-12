import React from 'react';
import APPCONFIG from 'constants/Config';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import {PostData} from '../../../services/PostData';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
const mWidthStyle = {
  minWidth: '130px'
};
class Login extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      brand: APPCONFIG.brand,
      //Email:props.Email,
      //Password:props.Password
      Email:'',
      Password:''
    };
  //this.handleLogin=this.handleLogin.bind(this);
    //this.handleEmail = this.handleEmail.bind(this);
    //this.handlePassword = this.handlePassword.bind(this);
  //this.onChange=this.onChange.bind(this);
  }


  /*handleChange(event){
    const Email=event.target.Email;
    this.props.changeEmail(Email);
  }
  changeEmail(Email){
    this.setState({Email});
  console.log(Email);
}*/
  handleLogin(event){
    event.preventDefault();
    console.log("handleLogin1") ;
    /*console.log("output - 0");
    console.log(this.refs.Email.value);*/
    PostData('Login',{'Email':this.handleEmail(),'Password':this.handleEmail()}).then((result)=>{
      console.log("handleLogin2") ;
      let res=result;
      console.log(res);
      console.log("output");
      console.log(event);
    });
  }


  handleEmail(event) {
    event.preventDefault();
    const target = event.target;
  const value = target.type === target.value;
  const name = target.name;

  this.setState({
        [name]: value
      });
      console.log(target.value) ;
      return target.value;
    }

handlePassword(event) {
  event.preventDefault();
  const target = event.target;
const value = target.type === target.value;
const name = target.name;

this.setState({
      [name]: value
    });
    console.log(target.value)
     return target.value;
  }


  render() {
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
            <img src="assets/images/HOWL.png" alt="HOWL" />

              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="Email"
                    type="text"
                    fullWidth
                    name="Email"
                    //ref="Email"
                    //value={this.state.Email}
                    //onClick={this.Login.bind(this)}
                     value={this.state.value}
                     onChange={(e)=>this.handleEmail(e)}
                    //changeEmail={this.changeEmail.bind(this)}
                  //errorText={this.errorFor("Email")}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="Password"
                    fullWidth
                    value={this.state.value}
                    onChange={(e)=>this.handlePassword(e)}
                    //onChange={this.handleChange.bind(this)}
                    />
                </div>

                <div className="col-lg-6">
                <Checkbox
                  label="Show Password"
                  name="ShowPassword"
                  onChange={this.onChange}
                />
                  </div>
              </fieldset>
              <div className="card-action no-border text-left">

              </div>
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="SIGN IN -->" primary href={"#/login"} onClick={(e)=>this.handleLogin(e)}/><div className="divider" />
            </div>

            </form>

          </div>
</div>

        <div className="additional-info">
          <a href="#/forgot-password">Forgot password?</a>

          <p>Don't have an account? <a href="#/register1ß">Register</a></p>
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
          <Login />
        </div>
      </QueueAnim>
    </div>
  </div>
);



module.exports = Page;
