import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const EditProfile = () => (

        <article className="article">
          <h2 className="article-title text-center">Edit Profile</h2>
          <div className="container-fluid with-maxwidth">
            <div className="row">
              <div className="col-xl-6">
                <div className="box box-transparent">
                  <div className="box-body padding-lg-h">
                    <form name="EditProfileForm">
                      <div className="form-group">
                        <div className="form-group">
                          <TextField floatingLabelText="FIRST NAME" fullWidth />
                          <TextField floatingLabelText="LAST NAME" fullWidth />
                          <TextField floatingLabelText="EMAIL ADDRESS" fullWidth />
                          <TextField floatingLabelText="PHONE NUMBER" fullWidth />
                        </div>
                          <RaisedButton primary label="SAVE" />
                      </div>
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
      <div key="1"><EditProfile /></div>
    </QueueAnim>
  </section>
);
module.exports = Page;
