import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

const Monitor = () => (
  <article className="article article-dark">
    <h2 className="article-title text-center no-margin-top">UNLOCK EVERYTHING</h2>
    <center>
      <button className="card bg-color-primary">MONTHLY PLAN-$5.99/MO </button> 
    </center>
    <center>
      <button className="card bg-color-primary">YEARLY PLAN-$50.00/YR </button>
    </center>
  </article>
);

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div><Monitor /></div>
    </QueueAnim>
  </section>
);

module.exports = Page;
