import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};
const listItemStyle = {
  paddingLeft: '50px' // 36 + 16, algin with sub list
};
const BasicBoxes = () => (
  <article className="article">
    <div className="container-fluid with-maxwidth">
    <center><h2 className="article-title">SETTINGS</h2></center>
    <div className="row">

    <div className="col-xl-6"><a href="cameras#/app/Cameras">
    <div className="box box-default">
      {/* <div className="box-body" > */}
      <div className="icon-box ibox-plain ">
        <span className="float-left">  <i className="material-icons">person_outline</i></span>
         <span> <h5 > Edit Profile </h5> </span>
    </div>
  </div>
</a></div>

<div className="col-xl-6"><a href="cameras#/app/Cameras">
<div className="box box-default">
  {/* <div className="box-body" > */}
  <div className="icon-box ibox-plain ">
    <span className="float-left">  <i className="material-icons">add_alert</i></span>
     <span> <h5> Notifications </h5> </span>
</div>
</div>
</a></div>


<div className="col-xl-6"><a href="cameras#/app/Cameras">
<div className="box box-default">
  {/* <div className="box-body" > */}
  <div className="icon-box ibox-plain ">
    <span className="float-left">  <i className="material-icons">address</i></span>
     <span> <h5> Change Home Address </h5> </span>
</div>
</div>
</a></div>

  </div>
</div>
  </article>
)


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><BasicBoxes /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
