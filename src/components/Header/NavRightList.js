import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { session,sessionReducer, sessionService } from 'redux-react-session';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter, browserHistory } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';

const ImgIconButtonStyle = {
  width: '60px',
  height: '60px'
};

const listItemStyle = {
  paddingLeft: '50px' // 36 + 16, algin with sub list
};

class NavRightList extends React.Component {

  state = {
  open: false,
  };
  handleChange = (event, value) => {
    this.props.history.push(value);
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
    constructor(props) {

      super(props);
      this.state = {
        ResultStatus:'',
        data: [],
  };
}

handleNotify(event) {
  this.setState({ redirectToAlert: true })

  // console.log("Notifications");
}

componentDidMount(){

  const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetTotalUnreadUserFeedCount';
  // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetTotalUnreadUserFeedCount';

      fetch(BaseURL,
      {
       method: "POST",
       body: JSON.stringify({
         "UserID":cookie.load('Id'),
         "UserToken":cookie.load('UserToken')
       }),
        headers: new Headers({'content-type': 'application/json'}),
      })
  .then((Response)=> Response.json())
  .then((findresponse)=>{
  // console.log(findresponse);
      this.setState({
         data:findresponse.GetTotalUnreadUserFeedCountResult.TotalUnreadUserFeedCount,
         ResultStatus:findresponse.GetTotalUnreadUserFeedCountResult.resultStatus,

      })



})
}


handleLogout(event){
      this.setState({open: false});
  //alert("Are you sure you want to logout?");

  sessionService.deleteSession(event);
    // console.log(sessionService.deleteSession(event));
    // console.log(cookie.load('Id'));
    // console.log(cookie.load('UserToken'));
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
      })
      // console.log(this.state.ResultStatus.Status)
      if(this.state.ResultStatus.Status==="1"){
        // console.log("success"),
        //cookie.remove('Loggedout'),
        cookie.remove('Loggedin'),
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
        cookie.remove('HasConfirmedMobilePhone'),
        // console.log("removed"),

     this.setState({ redirectToReferrer: true })
      }
      else{
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
       if (redirectToReferrer) {
         // console.log(redirectToReferrer)
             return (
               <Redirect to="../mainLogin"/>
             )
           }

 const { redirectToAlert } = this.state
                  if (redirectToAlert ) {
                    // console.log(redirectToAlert)
                        return (

                         <Redirect to="../../app/Alerts"/>

                        )
                      }
var count = this.state.data;

    return (

      <div className="">

        <div className="topRightNav row">

        <div className="col-lg-3">

          <MenuItem
              leftIcon={
              count !== "0" ?
              <i className="material-icons mdl-badge mdl-badge--overlap" data-badge={this.state.data} onClick={(e)=>this.handleNotify(e)} >notifications_none</i>
             :<i className="material-icons">notifications_none</i>
          }

          />

          </div>


          <div className="col-lg-9">
            <img src="assets/images/new-howl-logo-small-grey.png" alt="Image" height="60" width="150"/>
          </div>






          <Dialog
                      title="Confirm"
                      actions={actions}
                      modal={false}
                      open={this.state.open}
                      onRequestClose={this.handleClose}
                    >
                      Are you sure you want to logout?
                    </Dialog>


        </div>


      </div>
    );
  }
}

module.exports = withRouter(NavRightList);
