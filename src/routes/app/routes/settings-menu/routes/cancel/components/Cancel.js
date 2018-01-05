import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import Fetch from 'react-fetch';
// import Async from 'react-promise';
// var Hello = React.createClass({
//     myClick: function (text) {
//         alert(text);
//     },
//     render: function() {
//         return <button onClick={this.myClick("Hello world")}>
//                    Click Me
//                 </button>;
//     }
// });
class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({data: 'Data updated...'})
   }
   render() {
      return (
         <div>
            <button onClick = {this.updateState}>CLICK</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
 }


 class ChangeInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  changeText(event) {
    this.setState({
        name: event.target.value
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="name">What's your name: </label>
        <input type="text" id="name" onChange={this.changeText.bind(this)} />
        <h3>{ this.state.name }</h3>
      </div>
    );
  }
}


const Cancel = () => (
   <article className="article">
     <h2 className="article-title text-center">CHANGE CANCEL CODE</h2>
     <div className="container-fluid with-maxwidth">
       <div className="row">
         <div className="col-xl-6">
           <div className="box box-transparent">
             <div className="box-body padding-lg-h">
               <form name="CancelformForm">
                 <div className="form-group">
                   <p className="small no-margin">Speak your Cancellation Code to your smart hub (or type it into your app) to cancel your HOWL alert. *Be sure to make this a code you will remember.</p>
                   <div className="form-group">
                     <TextField floatingLabelText="Enter your old cancel code " fullWidth />
                   </div>
                   <div className="card-action no-border text-right">
                     {/* <a href="signout#/app/Logout" className="color-primary">NEXT</a> */}
                     <button onClick={()=>{ alert('Verify Code'); }}>NEXT -> </button>
                   </div>
                 </div>
                </form>
             </div>
           </div>
         </div>
       </div>
     </div>
  </article>
);

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Cancel /></div>
      <div key="2"><App /></div>
        {/* <div key="3"><Axios /></div> */}
      <div key="3"><ChangeInput /></div>
    </QueueAnim>
  </section>
);
module.exports = Page;
