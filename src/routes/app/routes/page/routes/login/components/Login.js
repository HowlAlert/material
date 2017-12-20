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

const Hero = () => (
  <div className="text-center">
  <img src="assets/images/HOWL.png" alt="HOWL" />
  <h6 className="hero-title"><b>Welcome</b></h6><div className="divider" /><div className="divider" />
  </div>
);
const mWidthStyle = {
  minWidth: '130px'
};

const Services = () => (


    <div className="container-fluid with-maxwidth">

          </div>

      );



      const Raised1 = () => (

                <div className="text-center">
                <GoogleLogin
          clientId="621859786392-868jmoqbehrbar9lk36i8rsbjo9762u3.apps.googleusercontent.com"
                  buttonText="CONTINUE WITH GOOGLE"
                /><div className="divider" />

                <FacebookLogin
        appId="1614436405260654"
                autoLoad={false}
        /><div className="divider" />

                <p>---------------- OR ----------------</p>

                <RaisedButton style={mWidthStyle} label="Create Account" primary href={"#/register1"}/><div className="divider" />
              </div>
        );

        const Raised2 = () => (

                <div className="text-center">
                <p>Have an account?<span><a href="#/login" className="text-small"> Login</a></span></p>

                </div>
              );
              const Raised3 = () => (

                <div className="form-group text-center">
                  <p className="text-small"><a href={"/#/app/page/terms"}><u>Terms of service</u></a> and <a href={"/#/app/page/faqs"}><u>Privacy Policy</u></a></p>
                </div>
                    );
              const Raised4 = () => (
                        <div className="text-center">
                        <p className="text-small"><a href={"/#/printcode"}><u>Print Code</u></a></p>
                      </div>

                );

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Hero /></div>
      <div key="2"><Services /></div>

      <div key="4"><Raised1 /></div>
        <div key="5"><Raised2 /></div>
        <div key="6"><Raised3 /></div>
        <div key="7"><Raised4 /></div>
    </QueueAnim>
  </section>
);



module.exports = Page;
