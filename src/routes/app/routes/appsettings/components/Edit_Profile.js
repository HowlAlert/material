import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import ReactPhoneInput from 'react-phone-input';



class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      Fname:'',
      Lname:'',
      Email:'',
      phonenumber:'',
      disabled: true,
      Cancel_disabled: true,

    };

  }


  handleFname= (e) => {                           //To handle change in the First Name field
     this.setState({
           Fname: e.target.value,
           disabled: false,
           Cancel_disabled: false
         });
         console.log(this.state.Fname) ;

       }

  handleLname= (e) => {                             //To handle change in the Last Name field
    this.setState({
          Lname: e.target.value,
          disabled: false,
          Cancel_disabled: false
              });
              console.log(this.state.Lname) ;

            }

    handleEmail= (e) => {                         //To handle change in the Email Name field
      this.setState({
           Email: e.target.value,
           disabled: false,
           Cancel_disabled: false
         });
         console.log(this.state.Email) ;

       }




       handlePhoneNumber= (e) =>{                       //Redirects to the change phone number component

            this.setState({
              redirectToChangePhone: true,
            });
        }



      handleOnChange= (number) => {                    //To handle change in the Phone Number field

                        this.setState({
                           phonenumber: number,
                           Cancel_disabled: false

                        });
                        console.log(this.state.phonenumber)
                 }

    handleCode(event) {                                 //To handle change in the 4-digit phone verification field

            event.preventDefault();
                 const target = event.target;
                 const value = target.type === target.value;
                 const name = target.name;

                 this.setState({
                       Code: target.value,
                       Cancel_disabled: false
                     });

                     console.log(target.value) ;
                     return target.value;
                   }


      handlePhoneNo(phoneNumber){                          // validation of phone number on click of Next

        this.setState({
          redirectToConfirmCode: true ,
         })
         //  var savedPno =  cookie.load('MobilePhoneNumber');
         //  console.log(this.state.phonenumber)
         //
         //        var phone = this.state.phonenumber;
         //         console.log(phone.length)
         //        var phoneNumber=phone.replace(/\D/g,'')
         //        console.log(phoneNumber);
         //        var number=phoneNumber.substr(phoneNumber.length-10)
         //         console.log(number);
         //        var country=phoneNumber.slice(0, -10)
         //        console.log(country);
         //
         //
         //    if(this.state.phonenumber === undefined)
         //    {
         //      alert("Please enter phone number")
         //    }
         //
         //    if(number.length!=10){
         //      alert("Please enter only 10 digit phone number")
         //    }
         //
         //     else if(country!= 1 && country!= 91){
         //       alert("HOWL is currently Only Available to users based in the U.S and INDIA")
         //     }
         //
         // else if(number.length==10 && country== 1 || country == 91 )
         // {
         //    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ConfirmYourPhoneNumber';
         //
         //       fetch(BaseURL,{
         //        method: "POST",
         //        body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'),'MobilePhoneCountryCode':country,'MobilePhoneNumber':number}),
         //      headers: new Headers({'content-type': 'application/json'})
         //      }).
         //    then((Response)=>Response.json()).
         //    then((findresponse)=>{
         //      this.setState({
         //        ResultStatus:findresponse.ConfirmYourPhoneNumberResult.ResultStatus,
         //      })
         //
         //        console.log("status");
         //        console.log(this.state.ResultStatus.Status);
         //
         //        if(this.state.ResultStatus.Status==2 ){
         //           alert("This phone number is already taken by another account.");
         //         }
         //        else if(this.state.ResultStatus.Status==0 ){
         //          alert("Sorry we cannot send verification code to this number. Please make sure you input the correct Mobile Number.");
         //        }
         //        if(this.state.ResultStatus.Status==1){
         //          this.setState({
         //            redirectToConfirmCode: true ,
         //           })
         //          cookie.save('MobilePhoneNumber', number);
         //          }
         //        })
         //    }
         //  else
         //  {
         //
         //      alert("Check and re-enter Mobile Number!")
         //
         //  }


    }

      handleBack(event) {                 //To Reload the page
            window.location.reload();
          }




     handleSave(event){                 //handle submit changes if any in FirstName,LastName,Email to the DB



        var firstname = this.state.Fname;
        console.log(firstname);
        var lastname = this.state.Lname;
        console.log(lastname);
        var email = cookie.load('Email');
        console.log(email);

      //
      //   var phone = this.state.phonenumber;
      //   var phoneNumber=phone.replace(/\D/g,'')
      //   var number=phoneNumber.substr(phoneNumber.length-10)
      //   var country=phoneNumber.slice(0, -10)
      // //   ereg_replace("[^0-9]", "", phone)
      //  console.log(phoneNumber);
      //  console.log(number);
      //  console.log(country);
      //
      //  var verificationcode = this.state.Code;
      //  console.log(verificationcode)

        const re = /^[A-z]+$/;
        const pw_validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



        if(firstname==="")
        {
          alert("First Name cannot be empty !");


        }
        else if(re.test(firstname)=='' && firstname !='')
        {
          alert("Enter only letters in First Name !");
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
                             profilestatus:findresponse.UpdateUserProfileResult.ResultStatus.Status,
                             message:findresponse.UpdateUserProfileResult.ResultStatus.StatusMessage
                                            })
                                            console.log(this.state.profilestatus);
                                            console.log(this.state.message);

                                         if(this.state.profilestatus == "1")
                                         {
                                           alert("Successfully Updated Profile!")
                                           cookie.save('FirstName', firstname);
                                           cookie.save('LastName', lastname);
                                           cookie.save('Email', email);
                                           this.setState({
                                                disabled: true,
                                                Cancel_disabled:true
                                              });
                                              window.location.reload();

                                       }
                                       else(alert(this.state.message))




                                 })


       }

   }

   handleSaveProfile(event){          //handle submit changes in all the fields of the EditProfile



      var firstname = this.state.Fname;
      console.log(firstname);
      var lastname = this.state.Lname;
      console.log(lastname);
      var email = cookie.load('Email');
      console.log(email);


      var phone = this.state.phonenumber;
       console.log(phone)
      var phoneNumber=phone.replace(/\D/g,'')
      console.log(phoneNumber);
      var number=phoneNumber.substr(phoneNumber.length-10)
       console.log(number);
      var country=phoneNumber.slice(0, -10)
      console.log(country);

     var verificationcode = this.state.Code;
     console.log(verificationcode)

      const re = /^[A-z]+$/;
      const pw_validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const re1 = /^[0-9]{4}$/;


      if(firstname==="")
      {
        alert("First Name cannot be empty !");


      }
      else if(re.test(firstname)=='' && firstname !='')
      {
        alert("Enter only letters in First Name !");
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

      else if(phone === undefined  && email!='' && re.test(lastname)!='' && firstname !='' && re.test(firstname)!='')
       {
         alert("Phone number cannot be empty !")
       }
       else if(country!= 1 && country!= 91 && phone === undefined  && email!='' && re.test(lastname)!='' && firstname !='' && re.test(firstname)!='')
       {
         alert("HOWL is currently Only Available to users based in the U.S and INDIA")
       }
       else if(re1.test(this.state.Code)==''|| this.state.Code.length!=4 || this.state.Code.length>4 )
       {
         alert("Enter the verification code sent to the mobile !");

       }

     else{


       var savedPno =  cookie.load('MobilePhoneNumber');
       console.log(this.state.phonenumber)

             var phone = this.state.phonenumber;
              console.log(phone.length)
             var phoneNumber=phone.replace(/\D/g,'')
             console.log(phoneNumber);
             var number=phoneNumber.substr(phoneNumber.length-10)
              console.log(number);
             var country=phoneNumber.slice(0, -10)
             console.log(country);


         if(this.state.phonenumber === undefined)
         {
           alert("Please enter phone number")
         }

         if(number.length!=10){
           alert("Please enter only 10 digit phone number")
         }

          else if(country!= 1 && country!= 91){
            alert("HOWL is currently Only Available to users based in the U.S and INDIA")
          }

      else if(number.length==10 && country== 1 || country == 91 )
      {
         const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ConfirmYourPhoneNumber';

            fetch(BaseURL,{
             method: "POST",
             body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'),'MobilePhoneCountryCode':country,'MobilePhoneNumber':number}),
           headers: new Headers({'content-type': 'application/json'})
           }).
         then((Response)=>Response.json()).
         then((findresponse)=>{
           this.setState({
             ResultStatus:findresponse.ConfirmYourPhoneNumberResult.ResultStatus,
           })

             console.log("status");
             console.log(this.state.ResultStatus.Status);

             if(this.state.ResultStatus.Status==2 ){
                alert("This phone number is already taken by another account.");
              }
             else if(this.state.ResultStatus.Status==0 ){
               alert("Sorry we cannot send verification code to this number. Please make sure you input the correct Mobile Number.");
             }
             if(this.state.ResultStatus.Status==1){
               this.setState({
                 redirectToConfirmCode: true ,
                })
               cookie.save('MobilePhoneNumber', number);
               }
             })
         }
       else
       {

           alert("Check and re-enter Mobile Number!")

       }


       const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/ValidateMobilePhoneConfirmationCode';

            fetch(BaseURL,{
             method: "POST",
             body: JSON.stringify({'UserID':cookie.load('Id'),'UserToken':cookie.load('UserToken'), 'MobilePhoneConfirmationCode':this.state.Code}),
            headers: new Headers({'content-type': 'application/json'})
           }).
         then((Response)=>Response.json()).
         then((findresponse)=>{
           console.log(findresponse)
           this.setState({
             CodeResultStatus:findresponse.ValidateMobilePhoneConfirmationCodeResult.ResultStatus.Status ,
             Codemessage:findresponse.ValidateMobilePhoneConfirmationCodeResult.ResultStatus.StatusMessage
           });
            console.log(this.state.CodeResultStatus);
            console.log(this.state.Codemessage)
           if(this.state.CodeResultStatus != 1)
            {
                    alert(this.state.Codemessage);
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
                           profilestatus:findresponse.UpdateUserProfileResult.ResultStatus.Status,
                           profilemessage:findresponse.UpdateUserProfileResult.ResultStatus.StatusMessage
                                          })
                                          console.log(this.state.profilestatus);
                                          console.log(this.state.profilemessage);
                                          console.log(this.state.CodeResultStatus);
                                          console.log(this.state.Codemessage)

                                          if(this.state.profilestatus != "1"){
                                             alert(this.state.profilemessage);
                                          }
                                          console.log(this.state.profilestatus);
                                         if(this.state.profilestatus == "1" && this.state.CodeResultStatus == "1")
                                         {
                                           alert("Successfully Updated Profile!")
                                           cookie.save('FirstName', firstname);
                                           cookie.save('LastName', lastname);
                                           cookie.save('Email', email);
                                           this.setState({
                                                disabled: true,
                                                Cancel_disabled:true
                                              });
                                              window.location.reload();

                                          }



                           })






         })

     }

   }
   componentDidMount()
   {
      this.setState({Fname: cookie.load('FirstName')});
      this.setState({Lname: cookie.load('LastName')});
      this.setState({Email: cookie.load('Email')});
      // this.setState({phonenumber:cookie.load('MobilePhoneNumber')});

   }
  render() {


            const {  redirectToConfirmCode} = this.state        //redirect to Phone Verification code Page
             if ( redirectToConfirmCode) {
               console.log("redirectToConfirmCode")
                   return (


                <form>
                  <div className="row">
                  <div className="col-lg-6 noPadRight">

                    FIRST NAME
                    <input      value={this.state.Fname}   onChange={this.handleFname}  />

                 </div>
                 <div className="col-lg-6 noPadLeft">
                   LAST NAME
                   <input      value={this.state.Lname}  onChange={this.handleLname} />

                 </div>
                </div>


                <div className="row">
                  <div className="col-lg-6 noPadRight">

                     EMAIL ADDRESS
                     <input      value={this.state.Email}  onChange={this.handleEmail}/>

                  </div>
                  <div className="col-lg-6 noPadLeft">
                    CHANGE PHONE NUMBER
                    <ReactPhoneInput defaultCountry={'us'} value={this.state.phonenumber} />
                  </div>
                </div>


                       <div className="row">
                         <div className="col-lg-6 noPadRight">

                            4 - DIGIT CODE

                         </div>
                         <div className="col-lg-6 noPadLeft">
                              <input      value={this.state.value}  onChange={(e)=>this.handleCode(e)}/>

                         </div>
                       </div>


                            <div className="col-lg-6 noPadLeft">
                              <RaisedButton primary label="SAVE" onClick={(e)=>this.handleSaveProfile(e)} />

                            </div>


                       </form>


                   )
                 }

   const {  redirectToChangePhone} = this.state        //redirect to Edit phone number page
    if ( redirectToChangePhone) {
      console.log("redirectToChangePhone")
          return (
            <form name="EditProfileForm">



                           <div className="row">
                             <div className="col-lg-6 noPadRight">

                               FIRST NAME
                              <input      value={this.state.Fname}   onChange={this.handleFname}  />

                             </div>
                             <div className="col-lg-6 noPadLeft">
                              LAST NAME
                              <input      value={this.state.Lname}  onChange={this.handleLname} />

                             </div>
                           </div>


                           <div className="row">
                             <div className="col-lg-6 noPadRight">

                                EMAIL ADDRESS
                                <input      value={this.state.Email}  onChange={this.handleEmail}/>

                             </div>
                             <div className="col-lg-6 noPadLeft">
                               CHANGE PHONE NUMBER
                               <ReactPhoneInput defaultCountry={'us'}  onChange={this.handleOnChange}/>

                             </div>
                           </div>

                           <div className="divider" />
                           <div className="row">
                             <div className="col-lg-6 noPadRight">
                               <RaisedButton onClick={(e)=>this.handleBack(e)} primary label="Cancel"  disabled={this.state.Cancel_disabled}/>

                             </div>
                             <div className="col-lg-6 noPadLeft">
                               <RaisedButton primary label="NEXT -->" primary onClick={(e)=>this.handlePhoneNo(e)} disabled={this.state.phoneNumberdisabled}/>

                             </div>
                           </div>



              </form>






          )
        }


    return (                                                       //OnLoad Edit Profile Page
                    <form name="EditProfileForm">




                                                   <div className="row">
                                                     <div className="col-lg-6 noPadRight">

                                                       FIRST NAME
                                                       <input      value={this.state.Fname}   onChange={this.handleFname}  />

                                                     </div>
                                                     <div className="col-lg-6 noPadLeft">
                                                         LAST NAME
                                                         <input      value={this.state.Lname}  onChange={this.handleLname} />

                                                     </div>
                                                   </div>




                                                   <div className="row">
                                                     <div className="col-lg-6 noPadRight">

                                                        EMAIL ADDRESS
                                                        <input      value={this.state.Email}  onChange={this.handleEmail}/>

                                                     </div>
                                                     <div className="col-lg-6 noPadLeft">
                                                       CHANGE PHONE NUMBER
                                                       <input
                                                        value={cookie.load('MobilePhoneNumber')}
                                                        onChange={this.handlePhoneNumber}
                                                       />

                                                     </div>
                                                   </div>



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
