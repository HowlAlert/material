import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import 'jquery-slimscroll/jquery.slimscroll.min';


class SidebarContent extends React.Component {

  componentDidMount() {
    const { history } = this.props;
    const nav = this.nav;
    const $nav = $(nav);

    // scroll
    $nav.slimscroll({
      height: '100%'
    });


    // Append icon to submenu
    // Append to child `div`
    $nav.find('.prepend-icon').children('div').prepend('<i class="material-icons">keyboard_arrow_right</i>');


    // AccordionNav
    const slideTime = 250;
    const $lists = $nav.find('ul').parent('li');
    $lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>');
    const $As = $lists.children('a');

    // Disable A link that has ul
    $As.on('click', event => event.preventDefault());

    // Accordion nav
    $nav.on('click', (e) => {

      const target = e.target;
      const $parentLi = $(target).closest('li'); // closest, insead of parent, so it still works when click on i icons
      if (!$parentLi.length) return; // return if doesn't click on li
      const $subUl = $parentLi.children('ul');


      // let depth = $subUl.parents().length; // but some li has no sub ul, so...
      const depth = $parentLi.parents().length + 1;

      // filter out all elements (except target) at current depth or greater
      const allAtDepth = $nav.find('ul').filter(function () {
        if ($(this).parents().length >= depth && this !== $subUl.get(0)) {
          return true;
        }
        return false;
      });
      allAtDepth.slideUp(slideTime).closest('li').removeClass('open');

      // Toggle target
      if ($parentLi.has('ul').length) {
        $parentLi.toggleClass('open');
      }
      $subUl.stop().slideToggle(slideTime);

    });


    // HighlightActiveItems
    const $links = $nav.find('a');
    const currentLocation = history.location;
    function highlightActive(pathname) {
      const path = `#${pathname}`;

      $links.each((i, link) => {
        const $link = $(link);
        const $li = $link.parent('li');
        const href = $link.attr('href');
        // console.log(href);

        if ($li.hasClass('active')) {
          $li.removeClass('active');
        }
        if (path.indexOf(href) === 0) {
          $li.addClass('active');
        }
      });
    }
    highlightActive(currentLocation.pathname);
    history.listen((location) => {
      highlightActive(location.pathname);
    });
  }


  render() {

    return (
      <ul className="nav" ref={(c) => { this.nav = c; }}>
        <li>
          <FlatButton href="#/app/home"><i className="nav-icon material-icons">home</i><span className="nav-text">HOME</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Alerts"><i className="nav-icon material-icons">add_alert</i><span className="nav-text">Alerts</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Cameras"><i className="nav-icon material-icons">perm_camera_mic</i><span className="nav-text">Cameras</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Devices"><i className="nav-icon material-icons">perm_scan_wifi</i><span className="nav-text">Devices</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Pack"><i className="nav-icon material-icons">web</i><span className="nav-text">Pack</span><span className="badge badge-pill badge-info">Howls at pack:12</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Monitoring"><i className="nav-icon material-icons">person_outline</i><span className="nav-text">Monitoring</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Help & Support"><i className="nav-icon material-icons">help</i><span className="nav-text">Help & Support</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Settings"><i className="nav-icon material-icons">settings</i><span className="nav-text">Settings</span></FlatButton>
          {/* <ul>
            <li><FlatButton className="prepend-icon" href="#/app/form/components"><span>Edit Profile</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/form/steppers"><span>Notifications</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/form/layouts"><span>Change Home Address</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/form/components"><span>Change Cancel Code</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/form/steppers"><span>Change Silent Code</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/form/layouts"><span>Print Code</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/form/steppers"><span>Feedback</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/form/layouts"><span>Contact Support</span></FlatButton></li>

          </ul> */}
        </li>
        <li>
          <FlatButton href="#/app/Logout"><i className="nav-icon material-icons">forward</i><span className="nav-text">Logout</span></FlatButton>
        </li>

      </ul>
    );
  }
}

module.exports = withRouter(SidebarContent);
