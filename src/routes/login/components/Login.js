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



import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';


class Login extends React.Component {
  constructor() {

    super();
    this.state = {
      brand: APPCONFIG.brand
    };
  }


  render() {
    return (

      <div className="body-inner">
        <div className="card bg-white">
          <div className="card-content">

            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>

            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="Email"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="Password"
                    type="password"
                    fullWidth
                    />
                </div>

                <div className="col-lg-6">
                <Checkbox
                  label="Show Password"
                  //style={styles.checkbox}
                />
                  </div>
              </fieldset>

            </form>

          </div>
          <div className="card-action no-border text-right">


          <a href="#/app/page/login" className="color-primary">Back</a>
        <a href="#/" className="color-primary">Sign In</a>
          </div>
        </div>

        <div className="additional-info">
          <a href="#/forgot-password">Forgot your password?</a>

          <p>Dont have an account? <a href="#/register">Register</a></p>
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
