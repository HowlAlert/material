import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

const Device = () => (
  <article className="article article-dark">

    <h2 className="article-title text-center no-margin-top">No devices available</h2>
    <div>
       <button className="float-right"><a href="page-layout#/app/pglayout/other-devices">Add Device</a></button>
    </div>
  </article>
);

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div><Device /></div>
    </QueueAnim>
  </section>
);

module.exports = Page;
