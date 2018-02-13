import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';

// const isOnline = require('is-online');
//
// isOnline().then(online => {
// console.log(online);
// //=> true
// });
const Wifi = () => (
  <section className="container-fluid with-maxwidth-md chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <article className="article">
           // <center><i className="material-icons" >wifi_tethering</i></center>
        <center><h2 className="article-title">SELECT A WIFI NETWORK</h2></center>
        <div>
          <center><button className="card bg-color-primary"><a href="page-layout#/app/pglayout/wifi_list">AVAILABLE NETWORKS </a></button></center>
        </div>


        </article>
      </div>
    </QueueAnim>
  </section>
);

module.exports = Wifi;
