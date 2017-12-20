import React from 'react';
import APPCONFIG from 'constants/Config';

class Footer extends React.Component {
  render() {
    return (
      <section className="app-footer">
        <div className="container-fluid">
          <span className="float-left">
            <span><a className="brand" target="_blank" href={APPCONFIG.productLink}>{APPCONFIG.brand}</a> {APPCONFIG.year}</span>
          </span>
          <span className="float-right">
            <span>SAFETY IS FIRST <i className="material-icons">phone</i></span>
          </span>
        </div>
      </section>
    );
  }
}

module.exports = Footer;
