import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';

class ChangeHomeAddress extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand
    };
  }

  render() {

    return (
      <section>
        <h4 className="section-header">CHANGE HOME ADDRESS </h4>
        <div className="form-group">
          <TextField
            floatingLabelText="ENTER ADDRESS"
            fullWidth
          />
        </div>
        <div className="form-group">
          <TextField
            floatingLabelText="APT/SUITE/FLOOR(If Applicable)"
            fullWidth
          />
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
    <ChangeHomeAddress />
  </div>
</QueueAnim>

);
module.exports = Page;
