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
<<<<<<< HEAD
        <li>
          <FlatButton href="#/app/home"><i className="nav-icon material-icons">home</i><span className="nav-text">HOME</span></FlatButton>
=======
        <li className="nav-header"><span>Navigation</span></li>
        <li><FlatButton href="#/app/dashboard"><i className="nav-icon material-icons">dashboard</i><span className="nav-text">Dashboard</span></FlatButton></li>
        <li><FlatButton href="#/app/page/login"><i className="nav-icon material-icons">dashboard</i><span className="nav-text">Login</span></FlatButton></li>
        <li>
          <FlatButton href="#/app/ui"><i className="nav-icon material-icons">folder_open</i><span className="nav-text">UI Kit</span></FlatButton>
          <ul>
            <li><FlatButton className="prepend-icon" href="#/app/ui/buttons"><span>Buttons</span></FlatButton></li>

            <li><FlatButton className="prepend-icon" href="#/app/ui/cards"><span>Cards</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/boxes"><span>Boxes</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/icons"><span>Icons</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/icon-boxes"><span>Icon Boxes</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/lists"><span>Lists</span><span className="badge badge-pill badge-success">9</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/pricing-tables"><span>Pricing Tables</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/timeline"><span>Timeline</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/feature-callouts"><span>Feature Callouts</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/components"><span>Components</span><span className="badge badge-pill badge-danger">11</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/menus"><span>Menus</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/hover"><span>Hover</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/sashes"><span>Sashes</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/testimonials"><span>Testimonials</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/call-to-actions"><span>Call to Actions</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/typography"><span>Typography</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/grids"><span>Grids</span></FlatButton></li>
            <li><FlatButton className="prepend-icon" href="#/app/ui/colors"><span>Colors</span></FlatButton></li>
          </ul>
>>>>>>> pbharde
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
