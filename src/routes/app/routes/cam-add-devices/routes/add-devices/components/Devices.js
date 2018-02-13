import React from 'react';
import QueueAnim from 'rc-queue-anim';

const Centered = () => (
  <section className="container-fluid with-maxwidth-md chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <article className="article">
        <center>
          <h2 className="article-title">ADD DEVICE</h2>
            <h3>
               Install your HOWL Beta Motion Sensor Camera via the HOWL Alert app on your smartphone.
               You are unable to install the camera through this website.
            </h3>
          </center>

        </article>
      </div>
    </QueueAnim>
  </section>
);

module.exports = Centered;
