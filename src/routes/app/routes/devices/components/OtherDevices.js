import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';



class OtherDevices extends React.Component {

  constructor() {
    super();
      this.state = {
        open: false
      }
  }

  // handleAmazon = () => {
  //   this.setState({open: true});
  // };

render() {
  // const { redirectToReferrer} = this.state

return (

    <article className="article">

        <div className="box box-default col-xl-12">
              <div className="icon-box ibox-plain ">

              <span className="float-left row">

                 <img src="assets/images/echo.png" alt="Image" height="30" width="30"/>
                  Amazon Echo
              </span>
              <span className="float-right" >
                 {/* <RaisedButton primary label=" ACTIVATE " onClick={()=>this.handleAmazon()} /> */}
                 <div className="box box-default">
                   <div className="box-body ">


                      01.  Install the Alexa App. <br/>
                      02.  From the left navigation panel; select skills.<br/>
                      03.  Use the search bar and enter HOWL.<br/>
                      04.  Link your HOWL account

                  </div>

                  </div>
              </span>
          </div>
      </div><br/>

      <div className="box box-default col-xl-12">
            <div className="icon-box ibox-plain ">
              <span className="float-left row">
              <img src="assets/images/home.png" alt="Image" height="30" width="30"/>
                  Google Home
              </span>
              <span className="float-right" >
                 {/* <RaisedButton primary label=" ACTIVATE " onClick={()=>this.handleAmazon()} /> */}

                 <div className="box box-default">
                   <div className="box-body ">
                     01.  Open the Google Home app.<br/>
                     02.  In the top left corner of the Home screen. tap Menu<br/>
                     03.  Verify that the Google Account that is listed is the google account that you used to setup Google Home. To switch the account,tap the triangle to the right of the account name.<br/>
                     04.  Tap More settings and then Services.<br/>
                     05. Scroll through the list of the services.When you see HOWL,tap the card


                  </div>

                  </div>
              </span>
        </div>
    </div>

   </article>

);
}
}

const DeviceSection = () => (
  <article className="article">
    <section >
        <OtherDevices />
    </section>
  </article>
);

module.exports = DeviceSection;
