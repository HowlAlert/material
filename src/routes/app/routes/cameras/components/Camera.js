import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Add_Devices} from '../../services/index';
import APPCONFIG from 'constants/Config';


class Camera extends React.Component {


 constructor(props) {
   super(props);
   this.state = {
     brand: APPCONFIG.brand,
     // "Email":" ",
     // "Password":" "
   };
   // this.Login = this.Login.bind(this);
   // this.onChange=this.onChange.bind(this);
 }

 Login(){

   Add_Devices('Login',{ "Email":"aruna@gmail.com", "Password":"baseball" }).then((result)=>{
     let res = result;
     console.log(this);
   });

 }

// constructor(){
//   super();
//   this.state={};
// }
 // componentWillMount(){
 //   var url="http://www.omdbapi.com?s=star&y=&r=json&plot=short";
 //   Request.get(url).then((response) => {
 //     this.setState({
 //       movies: response.body.Search,
 //       total: data.body.totalResults
 //     })
 //   });
 // }


render() {
  return (
  <article className="article">
    <div>
      <center><h2 className="article-title">CAMERA</h2></center>
      <div>
         <button className="float-right" onClick={this.Login}>Add Device</button>
      </div>
         {/* <button className="float-right">Add Device</button>
        <input ref="textBox" type="text" /> */}

   </div>

    <div className="row">

      <div className="col-xl-4">
        <div className="box box-default">
          <div className="box-header">CAMERA VIEW</div>
        </div>
      </div>

        <div className="col-xl-4">
          <div className="card bg-color-dark">
            <div className="card-content">
              <span className="card-title">Device status</span>
            </div>
            <div className="card-action">
              <a href="page-layout#/app/pglayout/full-width"><i className="nav-icon material-icons">settings</i> Camera settings</a>
            </div>
          </div>
        </div>
      </div>

     <center><button className="card bg-color-primary"><a href="page-layout#/app/pglayout/centered">Buy Camera </a></button></center>
  </article>
   );
 }
}
const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Camera /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
