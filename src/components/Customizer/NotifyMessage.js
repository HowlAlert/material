import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';

class ChangeCancelCode extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand
    };
  }
var Comment = React.createClass({
  edit: function(){
    alert("Editing Comment");
  },
  remove: function(){
    alert("Remove Comment");
  },
  render: function() {
    return (
       <div className="commentcontainer">
        <div className="commentText">Text of whatever</div>
           <button onClick={this.edit} className="button-primary">Edit</button>
           <button onClick={this.edit} className="button-primary">Edit</button>
     </div>
   );
  }
});

const Page = () => (

  <QueueAnim type="bottom" className="ui-animate">
  <div key="1">
    <ChangeCancelCode />
  </div>
</QueueAnim>

);
module.exports = Page;
