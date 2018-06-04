import 'jquery-slimscroll/jquery.slimscroll.min';
import React from 'react';
import APPCONFIG from 'constants/Config';
// import EditProfile from './EditProfile';
// import NotifyMessage  from './NotifyMessage ';
// import ChangeHomeAddress from './ChangeHomeAddress';
// import ChangeCancelCode from './ChangeCancelCode';
// import ChangeSilentCode from './ChangeSilentCode';
// import PrintCode from './PrintCode';
 import AlertBox from './AlertBox';

class Customizer extends React.Component {

  componentDidMount() {
    const quickviewInner = this.quickview;
    $(quickviewInner).slimscroll({
      height: '100%'
    });
  }

  toggleCustomizer = () => {
    const $body = $('#body');
    $body.toggleClass('quickview-open-customizer');
  }

  closeCustomizer = () => {
    const $body = $('#body');
    $body.removeClass('quickview-open-customizer');
  }


  render() {
    return (
      <section
        className="quickview-wrapper customizer d-none d-lg-block d-xl-block theme-light"
        id="quickview-customizer"
        >
        <a className="customizer-close" href="javascript:;" onClick={this.closeCustomizer}>
          <span className="material-icons">close</span>
        </a>
        <a className="customizer-toggle" href="javascript:;" onClick={this.toggleCustomizer}>
          <span className="material-icons">warning</span>
        </a>

        <div className="quickview-inner" ref={(c) => { this.quickview = c; }}>

          <h2 className="article-title-header ">Quick Alerts </h2>


          {/* <div className="divider divider-lg divider-solid" />
          <EditProfile /> */}

          {/* <div className="divider divider-lg divider-solid" />
          <NotifyMessage /> */}

          <div className="divider divider-lg divider-solid" />
          <AlertBox />

          {/* <div className="divider divider-lg divider-solid" />
          <ChangeCancelCode />


          <div className="divider divider-lg divider-solid" />
          <ChangeSilentCode />

          <div className="divider divider-lg divider-solid" />
          <PrintCode /> */}


        </div>
      </section>
    );
  }
}

module.exports = Customizer;
