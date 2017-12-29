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
        <h4 className="section-header">CHANGE SILENT CODE</h4>
        <p className="small no-margin">Speak your Silent Alert "Fake Cancellation" Code to your smart hub (or type it into your app) if a perpetrator/threat causes you to cancel your HOWL alert. The alarm will silent,however your alert will proceed. * Be sure to make this a code you will remember.</p>
        <div className="form-group">
          <TextField floatingLabelText="Enter your old silent code " fullWidth />
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
    <ChangeSilentCode />
  </div>
</QueueAnim>

);
module.exports = Page;
