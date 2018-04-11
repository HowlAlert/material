
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';

class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      fname:'',
      lname:'',
      phonenumber:'',
      email:''
    };
  }

  handleFirstname(event) {
     this.setState({
         fname: event.target.value.substr(0,30)
       });
       console.log(event.target.value) ;

     }
  handleLastname(event) {
       this.setState({
         lname: event.target.value.substr(0,30)
       });
       console.log(event.target.value);
     }

  handleEmail(event) {
              this.setState({
                    email: event.target.value
                  });
                  console.log(event.target.value) ;

          }

         handlePhoneNumber(event) {
            console.log(event.target.value);
            this.setState({
            phonenumber: event.target.value.substr(0,10)
                    });
           }

  // handleValidations(event) {
  //
  //                event.preventDefault();
  //
  //                  if( (this.state.fname=='')  && (this.state.phonenumber =='') ){
  //                    alert("Please enter first name and contact number");
  //                  }
  //
  //                  let re = /^[0-9]$/;
  //                  if(re.test(this.state.phonenumber)!=''){
  //                    alert("Please enter a valid phone number");
  //                  }
  //
  //                  // if(re.test(this.state.re_code)=='' && this.state.re_code!=''){
  //                  //   alert("Please enter a valid code");
  //                  // }
  //
  //                  // if(this.state.code!=this.state.re_code){
  //                  //   alert("Silent code did not match.Try Again");
  //                  //   this.setState({save: false })
  //                  // }
  //          }

   handleNext(event) {

     const re = /^[A-z]+$/;
           const pw_validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         if( this.state.phonenumber =='' && this.state.fname=='' )
         {
           alert("First Name & Phone Number cannot be empty !");

         }

        else if( this.state.phonenumber =='' && this.state.fname!='' )
        {
             alert("Phone Number cannot be empty !");
        }
        else if(this.state.fname==''  )
        {
             alert("First Name cannot be empty !");
        }
        else if(re.test(this.state.fname)=='' && this.state.fname !=''){
             alert("First Name should not contain numbers !");
        }
        else if(re.test(this.state.lname)=='' && this.state.lname !=''  && this.state.fname !='' && re.test(this.state.fname)!=''){
             alert("Last Name should not contain numbers !");
        }

       else if(pw_validation.test(this.state.email)=='' && this.state.email!='' && this.state.fname!='' && this.state.lname!='' && this.state.phonenumber !='')
       {
          alert("Please enter a valid email");
        }

      else
      {
     var object = JSON.stringify([{"Email":this.state.email, "FirstName":this.state.fname, "LastName":this.state.lname,"PhoneNumber":this.state.phonenumber,"UserPackID":"0", "PhoneNumberCountryCode": "1"}]);
     console.log(object);


           const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/AddUpdateUserPack';


               fetch(BaseURL,
               {
                method: "POST",
                body: JSON.stringify({
                  "UserID":cookie.load('Id'),
                  "UserToken":cookie.load('UserToken'),
                  "PackMemberList":object

                }),
                 headers: new Headers({'content-type': 'application/json'}),
               })
           .then((Response)=> Response.json())
           .then((findresponse)=>{
             console.log(findresponse);

             this.setState({
                      status:findresponse.AddUpdateUserPackResult.ResultStatus.Status,
                      message:findresponse.AddUpdateUserPackResult.ResultStatus.StatusMessage
                        })

                        // console.log(this.state.status);
                        // console.log(this.state.message);
                        if(this.state.status === "0")
                        {
                          alert(this.state.message);
                          this.setState({ redirectToReferrer: true })
                        }

                        else {

                            alert("Would you like to add another pack member?");
                            this.setState({ redirectToReferrer: true })
                        }

           })


  }


           }


  render() {

    const { redirectToReferrer} = this.state
      if(redirectToReferrer === true)
      {
        return (
           <Contact />
         )
      }



    return (
  <section className="container-fluid with-maxwidth-md chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <article className="article">
        <center><h2 className="article-title">ADD NEW PACK MEMBER</h2></center>
         <form >
                  <div>
                     <TextField  ref="fname" onChange={this.handleFirstname.bind(this)} value={this.state.fname} hintText="FIRST NAME" fullWidth  /><br/>
                      <TextField ref="lname" onChange={this.handleLastname.bind(this)} value={this.state.lname} hintText="LAST NAME" fullWidth  /><br />
                     <h4>+1  <TextField ref="phonenumber" onChange={this.handlePhoneNumber.bind(this)} value={this.state.phonenumber} hintText="MOBILE PHONE" /></h4>
                     <TextField ref="email"  onChange={this.handleEmail.bind(this)} value={this.state.email} hintText="EMAIL ADDRESS"   fullWidth />
               </div>
                  <div className="divider" />
                  <RaisedButton onClick={(e)=>this.handleNext(e)} primary label="SAVE" />
       </form>
        </article>
      </div>
    </QueueAnim>
  </section>
   );
  }
}

const Page = () => {
  return (

    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Contact /></div>


      </QueueAnim>
    </section>
  )
}

module.exports = Page;
