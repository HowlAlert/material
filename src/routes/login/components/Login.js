import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onClick={this.handleClose}
      />,
    ];

    return (
      <div className="col-lg-6">
        <div className="box box-transparent">
          <div className="box-body" >
            <RaisedButton label="logout?" onClick={this.handleOpen} />

            <Dialog
              title="Confirm"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >

            </Dialog>
          </div>
        </div>
      </div>
    );
  }
}


const Page = () => {
  return (
    <div className="page-login">
      <div className="main-body">
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1" ><DialogExampleSimple  /></div>
      </QueueAnim>
    </section>
  </div>
</div>
  )
}

module.exports = Page;
