import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Editable from 'react-x-editable';
import './editable.css';
import ReactPhoneInput from 'react-phone-input';

import Edit_PhoneNumber from './Edit_PhoneNumber';


class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      Fname:'',
      Lname:'',
      Email:'',
      phonenumber:'',
      disabled: true,
      Cancel_disabled: true
    };

  }


  handleFname= (e) => {
     this.setState({
           Fname: e.target.value,
           disabled: false,
           Cancel_disabled: false
         });
         console.log(this.state.Fname) ;

       }

  handleLname= (e) => {
    this.setState({
          Lname: e.target.value,
          disabled: false,
          Cancel_disabled: false
              });
              console.log(this.state.Lname) ;

            }
    // handleLname(value) {
    //   this.setState({
    //           Lname: value,
    //           disabled: false
    //         });
    //         console.log(value) ;
    //         return value;
    //       }
    handleEmail= (e) => {
      this.setState({
           Email: e.target.value,
           disabled: false,
           Cancel_disabled: false
         });
         console.log(this.state.Email) ;

       }

       handlePhoneNumber= (e) =>{

            this.setState({
              redirectToChangePhone: true

            });
          }

      handleBack(event) {
            window.location.reload();
          }

     handleSave(event){



        var firstname = this.state.Fname;
        console.log(firstname);
        var lastname = this.state.Lname;
        console.log(lastname);
        var email = cookie.load('Email');
        console.log(email);

        const re = /^[A-z]+$/;
        const pw_validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if(firstname==="")
        {
          alert("First Name cannot be empty !");


        }
        else if(re.test(firstname)=='' && firstname !='')
        {
          alert("First Name should not contain numbers !");
        }
        else if( lastname==="" )
        {
          lastname = cookie.load('LastName');

        }
        else if(re.test(lastname)=='' && firstname !='' && re.test(firstname)!=''){
             alert("Last Name should not contain numbers !");
        }
        else if(pw_validation.test(email)=='' && email!='')
        {
           alert("Please enter a valid email");
         }

       else{
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
                                                this.setState({
                                                     disabled: true,
                                                     Cancel_disabled:true
                                                   });

                                            }
                                       })

       }




   }


   componentDidMount() {
      this.setState({Fname: cookie.load('FirstName')});
      this.setState({Lname: cookie.load('LastName')});
      this.setState({Email: cookie.load('Email')});
      this.setState({phonenumber:cookie.load('MobilePhoneNumber')});

   }
  render() {

   const { redirectToChangePhone} = this.state        //redirect to Edit phone number page
    if (redirectToChangePhone) {
      console.log("redirectToChangePhone")
          return (
            <form name="EditProfileForm">

             <p>FIRST NAME
              <input
               value={this.state.Fname}
               onChange={this.handleFname}
              />
              </p>

                 <p>LAST NAME
                   <input
                    value={this.state.Lname}
                    onChange={this.handleLname}
                   />
                 </p>
                   <p>EMAIL ADDRESS
                     <input
                      value={this.state.Email}
                      onChange={this.handleEmail}
                     />
                  </p>

                <Edit_PhoneNumber />


             </form>


          )
        }

       // console.log(phonenumber);
    return (
                    <form name="EditProfileForm">

                     <p>FIRST NAME
                      <input
                       value={this.state.Fname}
                       onChange={this.handleFname}
                      />
                      </p>

                         <p>LAST NAME
                           <input
                            value={this.state.Lname}
                            onChange={this.handleLname}
                           />
                         </p>
                           <p>EMAIL ADDRESS
                             <input
                              value={this.state.Email}
                              onChange={this.handleEmail}
                             />
                          </p>
                         <p>PHONE NUMBER
                           <input
                            value={this.state.phonenumber}
                            onChange={this.handlePhoneNumber}
                           />
                          {/* <ReactPhoneInput defaultCountry={'us'} value={this.state.phonenumber} onChange={this.handleEmail} />*/}
                        </p>

                        <div className="divider" />
                        <div className="row">
                          <div className="col-lg-6 noPadRight">
                            <RaisedButton onClick={(e)=>this.handleBack(e)} primary label="Cancel"  disabled={this.state.Cancel_disabled}/>

                          </div>
                          <div className="col-lg-6 noPadLeft">
                            <RaisedButton primary label="SAVE" onClick={(e)=>this.handleSave(e)} disabled={this.state.disabled}/>

                          </div>
                        </div>

                     </form>
      );
     }
   }
const Page = () => (
  <section className="container-fluid chapter">
    <h2 className="article-title-header">Edit Profile</h2>
    <QueueAnim type="bottom" className="ui-animate">
       <EditProfile />
    </QueueAnim>
  </section>
);
module.exports = Page;
