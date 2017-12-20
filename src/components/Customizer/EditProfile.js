import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';

class ChangeSilentCode extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand
    };
  }

  render() {

    return (
      <section>
        <h4 className="section-header">EDIT PROFILE </h4>
        <div className="form-group">
          <TextField floatingLabelText="FIRST NAME" fullWidth />
          <TextField floatingLabelText="LAST NAME" fullWidth />
          <TextField floatingLabelText="EMAIL ADDRESS" fullWidth />
          <TextField floatingLabelText="PHONE NUMBER" fullWidth />
        </div>
        <div className="card-action no-border text-right">
          <a href="#/" className="color-primary">SAVE</a>
        </div>
      </section>
    );

  }
}
const Page = () => (

  <QueueAnim type="bottom" className="ui-animate">
  <div key="1">
    <ChangeSilentCode />
  </div>
</QueueAnim>

);
module.exports = Page;
