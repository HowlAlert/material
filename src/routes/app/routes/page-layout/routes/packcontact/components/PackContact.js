
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


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

  handleValidations(event) {

                 event.preventDefault();

                   if( (this.state.fname=='')  && (this.state.phonenumber =='') ){
                     alert("Please enter first name and contact number");
                   }

                   let re = /^[0-9]$/;
                   if(re.test(this.state.phonenumber)!=''){
                     alert("Please enter a valid phone number");
                   }

                   // if(re.test(this.state.re_code)=='' && this.state.re_code!=''){
                   //   alert("Please enter a valid code");
                   // }

                   // if(this.state.code!=this.state.re_code){
                   //   alert("Silent code did not match.Try Again");
                   //   this.setState({save: false })
                   // }
           }




  render() {

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
                  <RaisedButton  onClick={(e)=>this.handleValidations(e)} primary label="SAVE" />
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
