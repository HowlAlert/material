import React from 'react';
import QueueAnim from 'rc-queue-anim';


class GoogleDevices extends React.Component {
render() {
return (

    <article className="article">

  <center>
  <p>



    01.  Open the Google Home app.<br/>
    02.  In the top left corner of the Home screen. tap Menu<br/>
    03.  Verify that the Google Account that is listed is the google account that you used to setup Google Home. To switch the account,tap the triangle to the right of the account name.<br/>
    04.  Tap More settings and then Services.<br/>
    05. Scroll through the list of the services.When you see HOWL,tap the card



  </p>
</center>





   </article>

);
}
}

const DeviceSection = () => (
  <article className="article">
  <h2 className="article-title text-center">CONNECT YOUR GOOGLE HOME</h2>
    <section>
        <GoogleDevices />

    </section>
  </article>
);

module.exports = DeviceSection;
