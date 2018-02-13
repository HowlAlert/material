import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Toggle from 'material-ui/Toggle';


const styles = {
  toggle: {
    maxWidth: 400,
    marginBottom: 16
  },
};

class Notify extends React.Component {


  constructor(props) {
       super(props);
       this.state = {
         Toggled: true
       };

     }
     handleToggle() {
            this.setState({Toggled: !this.state.Toggled});
            // console.log(this.state.Toggled)
          }

  render() {
    var togglestate=this.state.Toggled;
    console.log(togglestate)

  return (

    <div className="row">
      <div className="col-xl-12">
        <h4>Push Notifications</h4>
        <div className="box box-default">
          <div className="box-body">
             <h4>Camera Alerts</h4>
             <p>Would you like to receive camera alerts via push notifications?</p>
             <span className="float-right ibox-icon">

                <Toggle

                                defaultToggled={this.state.Toggled}
                                onToggle={this.handleToggle.bind(this)}
                                toggle={this.state.Toggled}
                                style={styles.toggle}
                              />



             </span>
          </div>
        </div>
        <h4>Text Message Notifications</h4>
        <div className="box box-default">
          <div className="box-body">
             <h4>Camera Alerts</h4>
             <p>Would you like to receive camera alerts via text message?</p>

              

             <span className="float-right ibox-icon"> <Toggle style={styles.toggle}/> </span>
          </div>
        </div>
      </div>
    </div>




     );
   }
}


const Page = () => {
  return (
    <article className="article">
      <center><h2 className="article-title">NOTIFICATIONS</h2></center>
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <Notify />
      </QueueAnim>
    </section>
  </article>
  )
}

module.exports = Page;
