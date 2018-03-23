import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Editable from 'react-x-editable';
import './editable.css';
import EditPhoneNumber from '../../editPhoneNumber/components/EditPhoneNumber'



class EditProfile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      Fname:'',
      Lname:'',
      Email:'',
      disabled: true
    };
  }


  handleFname(value) {
     this.setState({
           Fname: value,
           disabled: false
         });
         console.log(value) ;
         return value;
       }

    handleLname(value) {
      this.setState({
              Lname: value,
              disabled: false

            });
            console.log(value) ;
            return value;
          }

    handleEmail(value) {
      this.setState({
           Email: value,
           disabled: false
         });
         console.log(value) ;
         return value;
       }

       handlePhoneNumber(event){
              this.setState({ redirectToChangePhone: true });
            }
  // handleSave(event) {
  //    event.preventDefault();
  //      if(this.state.Email==''){
  //        alert("Please enter your email address");
  //      }
  //      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //      if(re.test(this.state.Email)=='' && this.state.Email!=''){
  //        alert("Please enter a valid email");
  //      }
  //      if(this.state.Password=='' && this.state.Email!='' && re.test(this.state.Email)!=''){
  //        alert("Please enter a password");
  //      }
  //  }
     handleSave(event){
        var firstname = this.state.Fname;
        console.log(firstname);
        var lastname = this.state.Lname;
        console.log(lastname);
        var email = this.state.Email;
        console.log(email);

        if(firstname==="")
        {

          firstname = cookie.load('FirstName');

          console.log("No change in firstname");
        }

        if( lastname==="" )
        {

          lastname = cookie.load('LastName');
          console.log("No change in lastname");


        }
        if(email==="")
        {
          email = cookie.load('Email');

        }
        if(firstname==="" && lastname===""  && email==="")
        {

          alert("No updates done!")
        }
         const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UpdateUserProfile';
          fetch(URL,
                          {
                           method: "POST",
                           body: JSON.stringify({
                               "UserID":cookie.load('Id'),
                               "UserToken":cookie.load('UserToken'),
                               "FirstName": firstname,
                               "LastName": lastname,
                               "Email": email

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

                                            }

                                            else {

                                                alert("Successfully Updated Profile!")
                                                cookie.save('FirstName', firstname);
                                                cookie.save('LastName', lastname);
                                                cookie.save('Email', email);
                                              this.setState({ redirectToReferrer: true })
                                            }

                                       })

   }

  render() {

    const { redirectToReferrer} = this.state        //once update is done back to settings page
      if(redirectToReferrer === true)
      {
        return (

              <EditProfile />
         )
      }

   const { redirectToChangePhone} = this.state        //redirect to Edit phone number page
    if (redirectToChangePhone) {
      console.log("redirectToChangePhone")
          return (
            <EditPhoneNumber />
          )
        }


      var fname=cookie.load('FirstName');            //Loading Initial values before editting
      // console.log(fname);
      var lname = cookie.load('LastName')
      // console.log(lname);
      var email = cookie.load('Email')
      // console.log(email);
      var phonenumber = cookie.load('MobilePhoneNumber')
       // console.log(phonenumber);

    return (

                    <form name="EditProfileForm">

                          {/* <Editable onChange={(e)=>this.handleFname(e)} name="Fname" value={fname} floatingLabelText="FIRST NAME" fullWidth />
                          <Editable onChange={(e)=>this.handleLname(e)} name="Lname" value={lname} floatingLabelText="LAST NAME" fullWidth />
                          <Editable onChange={(e)=>this.handleEmail(e)} name="Email" value={email} floatingLabelText="EMAIL ADDRESS"  name="Email"/>
                          <Editable floatingLabelText="PHONE NUMBER" value={phonenumber} fullWidth /> */}


                          <p>FIRST NAME
                       <Editable
                         name="Fname"
                         dataType="text"
                         mode="inline"
                         value={fname}
                         validate={(value)=>this.handleFname(value)}
                         /></p>

                         <p>LAST NAME
                         <Editable
                           name="Lname"
                           dataType="text"
                           mode="inline"
                           value={lname}
                           validate={(value)=>this.handleLname(value)}
                           /></p>

                           <p>EMAIL ADDRESS
                           <Editable
                             name="Email"
                             dataType="text"
                             mode="inline"
                             value={email}
                             validate={(value)=>this.handleEmail(value)}
                             /></p>

                         <p>PHONE NUMBER
                       <TextField onClick={(e)=>this.handlePhoneNumber(e)} name="PhoneNumber" value={phonenumber} fullWidth /></p>

                      <RaisedButton primary label="SAVE" onClick={(e)=>this.handleSave(e)} disabled={this.state.disabled}/>
                     </form>

      );
     }
   }
const Page = () => (

  <section className="container-fluid chapter">

    <h2 className="article-title-header">Edit Profile</h2>

    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><EditProfile /></div>
    </QueueAnim>


  </section>
);
module.exports = Page;
