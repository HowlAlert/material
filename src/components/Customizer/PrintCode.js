import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';

class PrintCode extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand
    };
  }

  render() {
    const { colorOption } = this.props;

    return (
      <section>
        <h4 className="section-header">PRINT CODE</h4>
        <p className="small no-margin">If you have one enter the Print(Refferal) code provided by your HOWL Alpha below.</p>
        <div className="form-group">
          <TextField floatingLabelText="ENTER CODE " fullWidth />
        </div>
        <div className="card-action no-border text-right">
          <a href="#/" className="color-primary">SUMBIT</a>
        </div>
      </section>
    );
  }
}
const Page = () => (

  <QueueAnim type="bottom" className="ui-animate">
  <div key="1">
    <PrintCode />
  </div>
</QueueAnim>

);
module.exports = Page;
