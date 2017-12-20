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




class Printcode extends React.Component {
  constructor() {
    super();
    this.state = {
      //brand: APPCONFIG.brand
    };
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
              <img src="assets/images/HOWL2.png" alt="HOWL" />
            <p className="hero-title text-center">PRINT CODE</p>
            <div className="form-group text-center">
              <p className="text-small">If you have one, enter the Print (Referral) Code provided by your HOWL Alpha below.</p>
            </div>
              <fieldset>
                <div className="form-group">
                  <TextField
                    floatingLabelText="ENTER CODE"
                    fullWidth
                  />
                </div>

              </fieldset>
              <div className="card-action no-border text-right">

                <a href="#/register1" className="color-primary"  >Submit</a>




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
