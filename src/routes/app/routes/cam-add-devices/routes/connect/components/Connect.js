import React from 'react';
import QueueAnim from 'rc-queue-anim';

const Connect = () => (
  <section className="container-fluid with-maxwidth-md chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <article className="article">
        <center><h2 className="article-title">CONNECT YOUR PHONE</h2></center>
        <h5>Go to your Wi-Fi settings on this and select the "IPCAM AP" network. It may take up to two minutes to display.</h5>
        <div>
        <a href="cam-add-devices#/app/cameraDevices/serial">  If the camera is currently linked to another phone in your network,tap here </a>

        </div>
        </article>
      </div>
    </QueueAnim>
  </section>
);

module.exports = Connect;
