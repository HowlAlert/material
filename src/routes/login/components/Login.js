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
      'Email':'',
      'Password':'',
      'ShowPassword':'',
      showErrors: false,
      validationErrors: {}
    };
    this.LoginLogin=this.Login.bind(this);
    this.onChange=this.onChange.bind(this);
  }
  handleFieldChanged(field) {
      return (e) => {
        // update() is provided by React Immutability Helpers
        // https://facebook.github.io/react/docs/update.html
        let newState = update(this.state, {
          [field]: {$set: e.target.value}
        });
        newState.validationErrors = run(newState, fieldValidations);
        this.setState(newState);
      };
}

      handleSubmitClicked() {
    this.setState({showErrors: true});
    if($.isEmptyObject(this.state.validationErrors) == false) return null;
    // ... continue submitting data to server
  }


  Login(event){

    console.log(event);
    PostData('Login',{'Email':'a@b.com','Password':'abc'}).then((result)=>{
      let res=result;
      console.log(res);
    });
  }



  onChange(event){
    this.setState({value:event.name});
    console.log(this.state);
    //if('ShowPassword':)

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
                    fullWidth
                    name="Email"
                    onChange={this.onChange}
                    onFieldChanged={this.handleFieldChanged("Email")}
                  //errorText={this.errorFor("Email")}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="Password"
                    fullWidth
                    onChange={this.onChange}
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
              <RaisedButton style={mWidthStyle} label="SIGN IN -->" primary href={"#/login"} onClick={this.Login}/><div className="divider" />
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
