import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';



const Pack = () => (
  <article className="article article-dark">
    <h1 className="hero-title text-center ">MANAGE PACK</h1>
    <div className="container-fluid with-maxwidth">
      <div className="row">
        <div className="col-xl-6">
          <div className="box box-transparent">
            <div className="box-body padding-lg-h">
              <h4>Howls At Pack</h4>
              <div className="divider divider-solid" />
                <h4>Howls At Me</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="box box-transparent">
            <div className="box-body padding-lg-h">
              <h4>Contact</h4>
              <form name="contactForm">
                <div className="form-group">
                  <TextField hintText="Name" fullWidth />
                </div>
                <div className="form-group">
                  <TextField hintText="Email" fullWidth />
                </div>
                <div className="form-group">
                  <TextField hintText="Contact Number" fullWidth />
                </div>
                <div className="divider" />
                <RaisedButton primary label="SAVE" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Pack /></div>
    </QueueAnim>
  </section>
);

module.exports = Page;
