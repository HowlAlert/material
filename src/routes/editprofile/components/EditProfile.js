import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Editable from 'react-x-editable';
import './editable.css';


class EditProfile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      Fname:'',
      Lname:'',
      Email:''
    };
  }

  handleFname(value) {
   this.setState({
         Fname: value
       });
       console.log(value) ;
       return value;
     }

  handleLname(value) {
    this.setState({
            Lname: value
          });
          console.log(value) ;
          return value;
        }

  handleEmail(value) {
    this.setState({
         Email: value
       });
       console.log(value) ;
       return value;
     }

     handlePhoneNumber(event){
       this.setState({ redirectToChangePhone: true });
     }

     handleSave(event){

         const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UpdateUserProfile';
          fetch(URL,
                          {
                           method: "POST",
                           body: JSON.stringify({
                               "UserID":cookie.load('Id'),
                               "UserToken":cookie.load('UserToken'),
                               "FirstName": this.state.Fname,
                               "LastName": this.state.Lname,
                               "Email":this.state.Email

                           }),
                            headers: new Headers({'content-type': 'application/json'}),
                          })
                      .then((Response)=> Response.json())
                      .then((findresponse)=>{
                          console.log(findresponse)
                          this.setState({
                             status:findresponse.UpdateUserProfileResult.ResultStatus.Status,
                             message:findresponse.UpdateUserProfileResult.ResultStatus.StatusMessage
                                            })
                                            console.log(this.state.status);
                                            console.log(this.state.message);
                                            if(this.state.status === "0")
                                            {
                                              alert(this.state.message);
                                              this.setState({ redirectToReferrer: true })
                                            }

                                            else {

                                                alert("Updated Profile!")
                                              this.setState({ redirectToReferrer: true })
                                            }

                                       })

   }

  render() {
    const { redirectToChangePhone} = this.state
    if (redirectToChangePhone) {
      console.log("redirectToChangePhone")
          return (
            <Redirect to="EditPhoneNumber"/>
          )
        }
    const { redirectToReferrer} = this.state
      if(redirectToReferrer === true)
      {
        return (
           <EditProfile />
         )
      }


    return (
        <article className="article">
          <h2 className="article-title text-center">Edit Profile</h2>
          <div className="container-fluid with-maxwidth">
            <div className="row">
              <div className="col-xl-6">
                <div className="box box-transparent">
                  <div className="box-body padding-lg-h">
                    <form name="EditProfileForm">
                      <div className="form-group">
                        <div className="form-group">

                        <p>FIRST NAME
                        <Editable
                          name="Fname"
                          dataType="text"
                          mode="inline"
                          value="Poonam1"
                          validate={(value)=>this.handleFname(value)}
                          /></p>

                          <p>LAST NAME
                          <Editable
                            name="Lname"
                            dataType="text"
                            mode="inline"
                            value="Bharde1"
                            validate={(value)=>this.handleLname(value)}
                            /></p>

                            <p>EMAIL ADDRESS
                            <Editable
                              name="Email"
                              dataType="text"
                              mode="inline"
                              value="pbharde1@gmail.com"
                              validate={(value)=>this.handleEmail(value)}
                              /></p>
                              
                          <p>PHONE NUMBER
                        <TextField onClick={(e)=>this.handlePhoneNumber(e)} value="1234567899" fullWidth /></p>
                        </div>
                          <RaisedButton primary label="SAVE" onClick={(e)=>this.handleSave(e)}/>
                      </div>
                     </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
     }
   }
const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><EditProfile /></div>
    </QueueAnim>
  </section>
);
module.exports = Page;
