import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Redirect} from 'react-router-dom';

class IconBox extends React.Component {


  constructor() {
    super();
    this.state = {
      data: [],
      // data1: []
    };


  }


  render() {


    return (


    <div className="box-default ">
         <div className="row" >
                      <div className="IconFont box-body IconBoxHeight"><img src="assets/images/Arrest-Icon-2.svg" width="35" height="35" />  Arrest </div>
                      <div className="IconFont box-body IconBoxHeight"><img src="assets/images/Assult-Icon-2.svg" width="35" height="35"/> Assult</div>
                      <div className="IconFont box-body IconBoxHeight"> <img src="assets/images/Burglary-Icon-2.svg" width="35" height="35"/>Burglary</div>
                       <div className="IconFont box-body IconBoxHeight"><img src="assets/images/Other-Icon-2.svg" width="35" height="35"/>Other</div>
                      <div className="IconFont box-body IconBoxHeight"> <img src="assets/images/Robbery-Icon-2.svg" width="35" height="35"/>Robbery</div>
                       <div className="IconFont box-body IconBoxHeight"><img src="assets/images/Shooting-Icon-2.svg" width="35" height="35"/>Shooting</div>
                       <div className="IconFont box-body IconBoxHeight"><img src="assets/images/Theft-Icon-2.svg" width="35" height="35"/>Theft</div>
                      <div className="IconFont box-body IconBoxHeight"><img src="assets/images/Vandalism-Icon-2.svg" width="35" height="35"/>Vandalism</div>
                       <div className="IconFont box-body IconBoxHeight"><img src="assets/images/Fire-Arson-Icon-2.svg" width="35" height="35"/>Fire</div>

        </div>

    </div>



    );
  }
}

const ImageSection = () => (
    <section className="chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><IconBox /></div>
      </QueueAnim>
    </section>

);

module.exports = ImageSection;
