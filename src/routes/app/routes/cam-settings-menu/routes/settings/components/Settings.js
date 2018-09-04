import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Toggle from 'material-ui/Toggle';
import Schedule from './Schedule';
import Detection from './Detection';
import MotionSensitivity from './MotionSensitivity';
import cookie from 'react-cookies';

const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
};

class MotionDetection extends React.Component {

  render() {
   var cameraName = cookie.load('cameraName');
  return (
  <article className="article">
    <div className="container-fluid with-maxwidth">
         <h2 className="article-title text-center no-margin-top mainArticle">{cameraName} Settings</h2>
         {/* <h2 className="article-title">Images Recorded in {cameraName} </h2> */}

    </div>

    </article>
  );
 }
}


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><MotionDetection /></div>
        <div key="2"><Detection /></div>
        <div key="3"><MotionSensitivity /></div>
        <div key="4"><Schedule /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
