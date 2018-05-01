import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import 'jquery-slimscroll/jquery.slimscroll.min';
import Dialog from 'material-ui/Dialog';
import { session,sessionReducer, sessionService } from 'redux-react-session';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter, browserHistory } from 'react-router-dom';

const  href= {
    href: 'href'
};

class SidebarContent extends React.Component {
  constructor(props) {

    super(props);
    this.state = {

      ResultStatus:'',
      redirectToReferrer:false,
  };
  }
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
//    $lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>');
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
  state = {
  open: true,
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  handleLogout(event){
    console.log("logout")
  this.setState({open: false});
  //alert("Are you sure you want to logout?");

  sessionService.deleteSession(event);
    console.log(sessionService.deleteSession(event));
    console.log(cookie.load('Id'));
    console.log(cookie.load('UserToken'));
    const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/LogoutUser';
    // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/LogoutUser';

       fetch(BaseURL,{
        method: "POST",
        body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken')}),
      headers: new Headers({'content-type': 'application/json'})
      }).
    then((Response)=>Response.json()).
    then((findresponse)=>{
      this.setState({
        ResultStatus:findresponse.LogoutUserResult.ResultStatus,
        Status: this.state.ResultStatus.Status
      }),console.log(this.state.ResultStatus.Status)
      if(this.state.ResultStatus.Status==="1"){
        console.log("success"),
        cookie.remove('Id'),
        cookie.remove('UserToken'),
        cookie.remove('FirstName'),
        cookie.remove('LastName'),
        cookie.remove('Email'),
        cookie.remove('MobilePhoneNumber'),
        cookie.remove('SilenceCode'),
        cookie.remove('CancellationCode'),
        cookie.remove('ShouldReceiveCameraAlertPush'),
        cookie.remove('ShouldReceiveCameraAlertSMS'),
        cookie.remove('Address1'),
        cookie.remove('Address2'),
        cookie.remove('City'),
        cookie.remove('Latitude'),
        cookie.remove('Longitude'),
        cookie.remove('State'),
        cookie.remove('Zip'),
        console.log("removed"),

     this.setState({ redirectToReferrer: true })
      }
      else{
        console.log('fail');
         this.setState({ redirectToReferrer: false })
      }
    })
  }



  render() {
    const { match, location } = this.props;
    const actions = [
         <FlatButton
           label="Yes"
           primary
           onClick={(e)=>this.handleLogout(e)}
         />,
         <FlatButton
           label="No"
           primary
           keyboardFocused
           onClick={this.handleClose}
         />,
       ];

    const { redirectToReferrer} = this.state
       if (redirectToReferrer==true) {
         console.log(redirectToReferrer),
         console.log("redirectToReferrer")
             return (
               <Redirect to="../mainLogin"/>
             )
           }



    return (
      <ul className="nav" ref={(c) => { this.nav = c; }}>
        <li>
          <FlatButton href="#/app/home"><img className="nav-icon material-icons" src="assets/images/rsz_bluehome.png" alt="Image" height="20" width="20"/><span className="nav-text">HOME</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Alerts">
          <img className="nav-icon material-icons" src="assets/images/blueAlert.png" alt="Image" height="20" width="20"/>
          <span className="nav-text">Alerts</span>


        </FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Cameras"><img className="nav-icon material-icons" src="assets/images/blueCamera.png" alt="Image" height="20" width="20"/><span className="nav-text">Cameras</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Devices"><img className="nav-icon material-icons" src="assets/images/blueNetwork.png" alt="Image" height="20" width="20"/><span className="nav-text">Devices</span></FlatButton>
        </li>
        {/* <li>
          <FlatButton href="#/app/pack"><img className="nav-icon material-icons" src="assets/images/bluePack.png" alt="Image" height="20" width="20"/><span className="nav-text">Pack</span></FlatButton>

        </li> */}
        <li>
          <FlatButton href="#/app/Pack"><img className="nav-icon material-icons" src="assets/images/bluePack.png" alt="Image" height="20" width="20"/><span className="nav-text">Pack</span></FlatButton>
          {/* <ul>
            <li><FlatButton className="prepend-icon" href="#/app/Pack"><span>Pack</span></FlatButton></li>
            {/* <li><FlatButton className="prepend-icon" href="#/app/PackMenu/howls_pack"><span>Howls at Pack</span></FlatButton></li> */}
             {/* <li><FlatButton className="prepend-icon" href="#/app/PackMenu/howls_me"><span>Howl Updates</span></FlatButton></li>
          </ul> */}
        </li>
        <li>
          <FlatButton href="#/app/Monitoring"><img className="nav-icon material-icons" src="assets/images/blueMonitor.png" alt="Image" height="20" width="20"/><span className="nav-text">Monitoring</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Map"><img className="nav-icon material-icons" src="assets/images/MapGlobe-2.png" alt="Image" height="20" width="20"/><span className="nav-text">Map</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Help & Support"><img className="nav-icon material-icons" src="assets/images/blueQuestion.png" alt="Image" height="20" width="20"/><span className="nav-text">Help & Support</span></FlatButton>
        </li>
        <li>
          <FlatButton href="#/app/Settings"><img className="nav-icon material-icons" src="assets/images/blueCog.png" alt="Image" height="20" width="20"/><span className="nav-text">Settings</span></FlatButton>

        </li>
        <li>
          <a  onClick={this.handleOpen} ><i className="nav-icon material-icons">forward</i><span className="nav-text" >Logout</span></a>
        </li>
        <Dialog
                    id="Dialog"
                    title="Confirm"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                  >
                    Are you sure you want to logout?
                  </Dialog>
      </ul>

    );
  }
}

module.exports = withRouter(SidebarContent);
