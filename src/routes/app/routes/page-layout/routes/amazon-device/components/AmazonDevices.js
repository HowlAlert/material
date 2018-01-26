import React from 'react';
import QueueAnim from 'rc-queue-anim';


class AmazonDevices extends React.Component {
render() {
return (

    <article className="article">

  <center>
  <p>



    01.  Install the Alexa App. <br/>
    02.  From the left navigation panel; select skills.<br/>
    03.  Use the search bar and enter HOWL.<br/>
    04.  Link your HOWL account



  </p>
</center>





   </article>

);
}
}

const DeviceSection = () => (
  <article className="article">
  <h2 className="article-title text-center ">CONNECT YOUR ECHO DEVICE</h2>
    <section>
        <AmazonDevices />

    </section>
  </article>
);

module.exports = DeviceSection;
