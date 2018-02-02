import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';



class EditProfile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      Fname:'',
      Lname:'',

    };
  }

  handleFname(event) {
     event.preventDefault();
     const target = event.target;
   const value = target.type === target.value;
   const name = target.name;

   this.setState({
         Fname: target.value
       });
       console.log(target.value) ;
       return target.value;
     }
  handleLname(event) {
        event.preventDefault();
        const target = event.target;
      const value = target.type === target.value;
      const name = target.name;

      this.setState({
            Lname: target.value
          });
          console.log(target.value) ;
          return target.value;
        }
  // handleEmail(event) {
  //    event.preventDefault();
  //    const target = event.target;
  //  const value = target.type === target.value;
  //  const name = target.name;
  //
  //  this.setState({
  //        Email: target.value
  //      });
  //      console.log(target.value) ;
  //      return target.value;
  //    }

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

         const URL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UpdateUserProfile';
          fetch(URL,
                          {
                           method: "POST",
                           body: JSON.stringify({
                               "UserID":cookie.load('Id'),
                               "UserToken":cookie.load('UserToken'),
                               "FirstName": this.state.Fname,
                               "LastName": this.state.Lname,
                               "Email":"varuna808@gmail.com"

                           }),
                            headers: new Headers({'content-type': 'application/json'}),
                          })
                      .then((Response)=> Response.json())
                      .then((findresponse)=>{
                          console.log(findresponse)
                          this.setState({
                             data:findresponse.UpdateUserProfileResult.GetUser
                                            })
                                       })

   }

  render() {

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
                          <TextField onChange={(e)=>this.handleFname(e)} name="Fname" value={this.state.value} floatingLabelText="FIRST NAME" fullWidth />
                          <TextField onChange={(e)=>this.handleLname(e)} name="Lname" value={this.state.value} floatingLabelText="LAST NAME" fullWidth />
                          <TextField floatingLabelText="EMAIL ADDRESS"  name="Email"/>
                          <TextField floatingLabelText="PHONE NUMBER" fullWidth />
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
