import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';

class ChangeCancelCode extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand
    };
  }

  render() {
    
    return (
      <section>
        <h4 className="section-header">CHANGE CANCEL CODE</h4>
        <p className="small no-margin">Speak your Cancellation Code to your smart hub (or type it into your app) to cancel your HOWL alert. *Be sure to make this a code you will remember.</p>
        <div className="form-group">
          <TextField floatingLabelText="Enter your old cancel code " fullWidth />
        </div>
        <div className="card-action no-border text-right">
          <a href="#/" className="color-primary">NEXT</a>
        </div>
      </section>
    );
  }
}
const Page = () => (

  <QueueAnim type="bottom" className="ui-animate">
  <div key="1">
    <ChangeCancelCode />
  </div>
</QueueAnim>

);
module.exports = Page;
