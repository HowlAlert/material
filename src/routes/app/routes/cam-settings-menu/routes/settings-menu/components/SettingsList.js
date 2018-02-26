import React from 'react';
import QueueAnim from 'rc-queue-anim';

const FullWidth = () => (
  <article className="article">
    <div>
      <center><h2 className="article-title ">CAMERA SETTING</h2></center>
    </div>
  <section className="container-fluid">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <article className="article">
          <div>
          <a href="cam-settings-menu#/app/camerasettings/motion-detection">Motion Detection </a>
          </div>
          <div className="divider divider-solid" />
          <div>
             <a href="cam-settings-menu#/app/camerasettings/camera-history">Camera History </a>
          </div>
          <div className="divider divider-solid" />
          {/* <div>
            <a href="cam-settings-menu#/app/camerasettings/camera-recordings"> Camera Recordings </a>
          </div>
          <div className="divider divider-solid" /> */}
          <div>
            <a href="page-layout#/app/pglayout/add-devices"> Time Setting </a>
          </div>
          <div className="divider divider-solid" />
        </article>
      </div>
    </QueueAnim>
  </section>
</article>
);

module.exports = FullWidth;
