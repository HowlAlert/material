import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EditProfile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      Email:'',
    };
  }


  handleEmail(event) {
     event.preventDefault();
     const target = event.target;
   const value = target.type === target.value;
   const name = target.name;

   this.setState({
         Email: target.value
       });
       console.log(target.value) ;
       return target.value;
     }

  handleSave(event) {
     event.preventDefault();
       if(this.state.Email==''){
         alert("Please enter your email address");
       }
       let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(re.test(this.state.Email)=='' && this.state.Email!=''){
         alert("Please enter a valid email");
       }
       if(this.state.Password=='' && this.state.Email!='' && re.test(this.state.Email)!=''){
         alert("Please enter a password");
       }
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
                          <TextField floatingLabelText="FIRST NAME" fullWidth />
                          <TextField floatingLabelText="LAST NAME" fullWidth />
                          <TextField floatingLabelText="EMAIL ADDRESS" name="Email"   value={this.state.value}
                     onChange={(e)=>this.handleEmail(e)} />
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
