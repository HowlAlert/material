import React from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
  toggleCollapsedNav,
  toggleFixedHeader,
} from '../../actions';


const sideWidthSelectStyle = {
  fontSize: '14px',
  width: '100%',
  marginTop: '-15px'
};

class Notifications extends React.Component {

  onToggleFixedHeader = (e, val) => {
    const { handleToggleFixedHeader } = this.props;
    handleToggleFixedHeader(val);
  }

  onToggleCollapsedNav = (e, val) => {
    const { handleToggleCollapsedNav } = this.props;
    handleToggleCollapsedNav(val);
  }



  render() {
    const { navCollapsed,fixedHeader } = this.props;

    return (
      <section className="customizer-layout-options">
        <h4 className="section-header">NOTIFICATIONS</h4>
        <div className="divider" />

        <div>
          <Toggle label="Push Notifications" defaultToggled={fixedHeader} onToggle={this.onToggleFixedHeader} />
          <div className="divider divider-xs" />
          <Toggle label="Text Message Notifications" toggled={navCollapsed} onToggle={this.onToggleCollapsedNav} />
          <div className="divider divider-xs" />

        </div>

      </section>
    );
  }
}

const mapStateToProps = state => ({

  navCollapsed: state.settings.navCollapsed,
  fixedHeader: state.settings.fixedHeader,
  // navBehind: state.settings.navBehind,
  // layoutBoxed: state.settings.layoutBoxed,
  // sidebarWidth: state.settings.sidebarWidth
});
const mapDispatchToProps = dispatch => ({
  handleToggleFixedHeader: (isFixedHeader) => {
    dispatch(toggleFixedHeader(isFixedHeader));
  },
  handleToggleCollapsedNav: (isNavCollapsed) => {
    dispatch(toggleCollapsedNav(isNavCollapsed));
  },

});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutOptions);
