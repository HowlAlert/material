import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

const Contact = () => (
  <article className="article article-dark">
    <div className="hero-content">
      <h1 className="hero-title text-center">How can we help you?</h1>
    </div>
    <div className="container-fluid with-maxwidth">
      <div className="row">

        <div className="col-xl-6">
          <div className="box box-transparent">
            <div className="box-body padding-lg-h">
              <h4>Contact</h4>
              <form name="contactForm">
                <div className="form-group">
                  <TextField
                    hintText="Name"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    hintText="Email"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    hintText="Message"
                    fullWidth
                    multiLine
                    rows={3}
                  />
                </div>
                <div className="divider" />
                <RaisedButton primary label="Submit" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="box box-transparent">
            <div className="box-body padding-lg-h">
              <h4>Get In Touch</h4>
              <p>Forest Hills <br /> Newyork <br /> USA</p>
              <div className="divider divider-solid" />
              <p>
                <strong>E:</strong> support@howlalert.com
                <br />
                <strong>P:</strong> +1 234 567 8945
                <br />
                <strong>S:</strong> www.howlalert.com
              </p>
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
      <div key="1"><Contact /></div>
    </QueueAnim>
  </section>
);

module.exports = Page;
