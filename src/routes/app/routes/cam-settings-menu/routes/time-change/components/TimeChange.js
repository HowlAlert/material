import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';


const Recording = () => (
  <article className="article">
    <div className="container-fluid with-maxwidth">
    <h2 className="article-title text-center no-margin-top">Time Change</h2>








  </div>

  </article>
)


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Recording /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
