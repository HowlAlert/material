import React from 'react';
import QueueAnim from 'rc-queue-anim';

const OtherDevices = () => (
  <article className="article">
    <div>
      <center><h2 className="article-title">SELECT DEVICES</h2></center>
    </div>
  <section className="container-fluid">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <article className="article">
          <div>
            Amazon Echo
          </div>
          <div className="divider divider-solid" />
          <div>
             Google Home
          </div>
          <div className="divider divider-solid" />
        </article>
      </div>
    </QueueAnim>
  </section>
</article>
);

module.exports = OtherDevices;
