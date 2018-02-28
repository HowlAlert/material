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
  };
    }
  handleLogout(event){
  this.setState({open: false});
  //alert("Are you sure you want to logout?");

  sessionService.deleteSession(event);
    console.log(sessionService.deleteSession(event));
    console.log(cookie.load('Id'));
    console.log(cookie.load('UserToken'));
    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/LogoutUser';

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
        cookie.remove('UserToken')
        console.log("removed"),

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
         console.log(redirectToReferrer)
             return (
               <Redirect to="mainLogin"/>
             )
           }

    return (
      <ul className="list-unstyled float-right">

<li>
  <IconButton style={ImgIconButtonStyle}><i className="material-icons">notifications_none</i></IconButton>
</li>
        <li style={{marginRight: '150px', position : 'relative'}}>
          <IconMenu
            iconButtonElement={
              <IconButton>
              <MenuItem style={{fontSize: '13px', lineHeight: '21px'}} innerDivStyle={listItemStyle}
              primaryText={cookie.load('FirstName') +" "+ cookie.load('LastName')}
              onClick={this.handleChange}
              leftIcon={<img src="assets/images/image.png" alt="" className="rounded-circle img30_30" />}
              />
              </IconButton>}
            onChange={this.handleChange}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            menuStyle={{minWidth: '150px'}}
                    >

            <MenuItem
              value="/app/dashboard"
              primaryText="Home"
              style={{fontSize: '13px', lineHeight: '21px'}}
              innerDivStyle={listItemStyle}
              leftIcon={<i className="material-icons">home</i>}
                        />

            <MenuItem
            //value="/login"
              primaryText="Logout"
              innerDivStyle={listItemStyle}
              style={{fontSize: '13px', lineHeight: '48px'}}
              leftIcon={<i className="material-icons">forward</i>}
              onClick={this.handleOpen}

                        />



          </IconMenu>
          <Dialog
                      title="Confirm"
                      actions={actions}
                      modal={false}
                      open={this.state.open}
                      onRequestClose={this.handleClose}
                    >
                      Are you sure you want to logout?
                    </Dialog>


        </li>


      </ul>
    );
  }
}

module.exports = withRouter(NavRightList);
