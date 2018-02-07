// import React from 'react';
// import APPCONFIG from 'constants/Config';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import QueueAnim from 'rc-queue-anim';
// import Checkbox from 'material-ui/Checkbox';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
// import Visibility from 'material-ui/svg-icons/action/visibility';
// import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
// import {PostData} from '../../../services/PostData';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
// import createHistory from 'history/createHashHistory';
// import App from '.../../containers/App';
// import FeedbackComp from './FeedbackComp';
// import Mailto from 'react-mailto';
// import {
//     Step,
//     Stepper,
//     StepLabel,
// } from 'material-ui/Stepper';
// const mWidthStyle = {
//   minWidth: '130px'
// };
//
// class Feedback extends React.Component {
//   constructor(props) {
//
//     super(props);
//     this.state = {
//
//     };
//     //this.handleTo = this.handleTo.bind(this);
//   }
//
//   handleTo(event){
//     event.preventDefault();
//     const target = event.target;
//   const value = target.type === target.value;
//   const name = target.name;
//
//   this.setState({
//         To: target.value
//       });
//
//       console.log(target.value) ;
//       return target.value;
//   }
//
//   handleCcBcc(event){
//     event.preventDefault();
//     const target = event.target;
//   const value = target.type === target.value;
//   const name = target.name;
//
//   this.setState({
//         CcBcc: target.value
//       });
//
//       console.log(target.value) ;
//       return target.value;
//   }
//
// handleSubject(event){
//   event.preventDefault();
//   const target = event.target;
// const value = target.type === target.value;
// const name = target.name;
//
// this.setState({
//       Subject: target.value
//     });
//
//     console.log(target.value) ;
//     return target.value;
// }
//
// handleMessage(event){
//   event.preventDefault();
//   const target = event.target;
// const value = target.type === target.value;
// const name = target.name;
//
// this.setState({
//       Message: target.value
//     });
//
//     console.log(target.value) ;
//     return target.value;
// }
//
// handleSend(event){
//   console.log(this.state.To);
//   console.log("Mailto:pbharde@gmail.com");
//   console.log(this.state.Subject);
//   console.log(this.state.Message);
//   <Route path=(${mailto:this.state.To}?{subject:this.state.Subject}&{body:this.state.Message}) />
//   //  Mailto:this.state.To?Subject=this.state.Subject&Message=this.state.Message;
//   //var path = $("${mailto:pbharde@gmail.com}${this.state.Subject}${this.state.Message}", this).attr("href");
// //window.location.href="${mailto:pbharde@gmail.com}${this.state.Subject}${this.state.Message}"
// console.log(path);
// }
//
//
//   render() {
//
//     return (
//
//   <div className="body-inner">
//         <div className="card bg-white">
//           <div className="card-content">
//
//           <form className="form-horizontal">
//           <ul className="nav" ref={(c) => { this.nav = c; }}>
//             <li className="nav-header"><span></span></li>
//             <li><FlatButton href="#/app/page/login"><i className="nav-icon material-icons">keyboard_arrow_left</i><span className="nav-text"></span></FlatButton>
//             </li>
//             </ul>
//             <h1>New Message</h1>
//
//               <fieldset>
//                 <div className="form-group">
//                 <p>To:</p>
//                   <TextField
//
//                     type="text"
//                     fullWidth
//                     name="To"
//                      value={this.state.value}
//                      onChange={(e)=>this.handleTo(e)}
//                   />
//                 </div>
//                 <div className="form-group">
//                 <p>Cc/Bcc:</p>
//                   <TextField
//
//                     type="text"
//                     name="Cc/Bcc"
//                     fullWidth
//                     value={this.state.value}
//                     onChange={(e)=>this.handleCcBcc(e)}
//                     />
//                 </div>
//                 <div className="form-group">
//                 <p>Subject:</p>
//                   <TextField
//                     hintText="Subject"
//                     type="text"
//                     name="Subject"
//                     fullWidth
//                     value={this.state.value}
//                     onChange={(e)=>this.handleSubject(e)}
//                     />
//                 </div><div className="form-group">
//
//                   <TextField
//                   hintText="Message"
//                     type="text"
//                     name="Message"
//                     fullWidth
//                     value={this.state.value}
//                     onChange={(e)=>this.handleMessage(e)}
//                     rows={5}
//                     />
//                 </div>
//               </fieldset>
//               <div className="card-action no-border text-left">
//
//               </div>
//
//               <div className="box-body text-center">
//               <RaisedButton style={mWidthStyle} label="SEND" primary onClick={(e)=>this.handleSend(e)}/>
//               <div className="divider" />
//             </div>
//             </form>
//           </div>
// </div>
// </div>
//
//
//
//     );
//   }
// }
// const Page = () => (
//   <div className="page-login">
//     <div className="main-body">
//       <QueueAnim type="bottom" className="ui-animate">
//         <div key="1">
//           <Feedback />
//         </div>
//       </QueueAnim>
//     </div>
//   </div>
// );
// module.exports = Page;
