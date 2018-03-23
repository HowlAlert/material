
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

const imgLeft = {
  backgroundImage: 'url(assets/images/echo.png)',
  backgroundPosition: 'center'
};





class AmazonDevices extends React.Component {


render() {
return (

  <div>
  <div className="feature-callout feature-content-right  image-pull clearfix">
     <div className="container-fluid with-maxwidth">
        <div className="col-12 col-md-6 offset-md-6">
           <div className="callout-feature-content">
            <p>
             01.  Install the Alexa App. <br/>
             02.  From the left navigation panel; select skills.<br/>
             03.  Use the search bar and enter HOWL.<br/>
             04.  Link your HOWL account
           </p>
             <RaisedButton label="Try it Now"/>
           </div>
         </div>
       </div>
       <div className="col-12 col-md-6 feature-callout-image-pull" style={imgLeft} />
   </div>



</div>

);
}
}

const DeviceSection = () => (
  <article className="article">

    <section>
        <AmazonDevices />

    </section>
  </article>
);

module.exports = DeviceSection;
