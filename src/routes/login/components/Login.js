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
      'Password':''
    };
    this.LoginLogin=this.Login.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  Login(event){

    console.log(event);
    PostData('Login',{'Email':'a@b.com','Password':'abc'}).then((result)=>{
      let res=result;
      console.log(res);
    });
  }



  onChange(event){
    this.setState({value:event.target.value});
    console.log(this.state);
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
                  //style={styles.checkbox}
                />
                  </div>
              </fieldset>
              <div className="card-action no-border text-left">

              </div>
              <div className="box-body text-center">
              <RaisedButton style={mWidthStyle} label="SIGN IN -->" primary href={"#/app/page/login"}/><div className="divider" />
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
