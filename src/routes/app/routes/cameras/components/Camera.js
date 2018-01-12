import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Add_Devices} from '../../services/index';
import APPCONFIG from 'constants/Config';
import Image from './Image';

const BaseURL = username => 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/';

class Camera extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     brand: APPCONFIG.brand,
     Email: ' ',
     Password:' '
    // requestFailed: false
   }
   this.Login = this.Login.bind(this);
   // this.onChange=this.onChange.bind(this);
 }
 // componentDidMount(){
 //   fetch(BaseURL(this.props.username))
 //   .then(d => d.json())
 //   .then(d => {
 //      this.setState({
 //         Login : d
 //      })
 //   })
 // }

 Login(){

   Add_Devices('Login',{ "Email":"derek@howlalert.com", "Password":"howl38" }).then((result)=>{
     let res = result;
     console.log(this);
   });

 }

render() {
  
  return (

  <article className="article">


    <section>
      <div className="box-body padding-xl bg-color-dark">

        <div className="row">
            <div className="col-md-4">
              <a href="cam-settings-menu#/app/camerasettings/settings-menu"><i className="nav-icon material-icons">settings</i> Camera settings</a>
            </div>
            <div className="col-md-4 float-right"><i className="material-icons">mic</i></div>
            <div className="col-md-4 "><i className="material-icons">record_voice_over</i></div>
        </div>

      </div>
    </section>



    <div className="page-footer">
      <center>
        <p>Don't have a camera?</p>
        <button className="card bg-color-primary"><a href="cam-add-devices#/app/cameraDevices/buy-camera">Buy Camera </a></button>
        <button className="card bg-color-primary" onClick={this.Login}>sample</button>
        {/* <h1>{this.state.Login.CancellationCode}</h1> */}
      </center>

    </div>

  </article>
   );
 }
}
const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Image /></div>
        <div key="2"><Camera /></div>

      </QueueAnim>
    </section>
  )
}

module.exports = Page;
