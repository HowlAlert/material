import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import EditProfile from '../../settings-menu/routes/editprofile/components/EditProfile';
import Notify from '../../settings-menu/routes/notify/components/Notify';
import  Home from '../../settings-menu/routes/address/components/Home';
import  Cancel from '../../settings-menu/routes/cancel/components/Cancel';
import  Silent from '../../settings-menu/routes/silent/components/Silent';
import  Print from '../../settings-menu/routes/print/components/Print';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};
const listItemStyle = {
  paddingLeft: '50px' // 36 + 16, algin with sub list
};
const BasicBoxes = () => (
  <article className="article">
    {/* <div className="container-fluid with-maxwidth"> */}
       {/* <h2 className="article-title">SETTINGS</h2> */}
    <div className="row">
<div className="box box-default col-xl-6">
  <div className="box-body ">

  <EditProfile />
</div>
</div>
<div className="box box-default col-xl-6">
  <div className="box-body ">

  <Home />
</div>
</div>

<div className="box box-default col-xl-4">
  <div className="box-body ">

  <Cancel />

 </div>
</div>

<div className="box box-default col-xl-4">
  <div className="box-body ">

  <Silent />
</div>
</div>

<div className="box box-default col-xl-4">
  <div className="box-body ">

  <Print />
</div>
</div>

<div className="box box-default col-xl-6">
  <div className="box-body ">

  <Notify />
 </div>
</div>


<div className="box box-default col-xl-6">
  <div className="box-body ">
  <center><h2 className="article-title">HOWL SUPPORT FORMS </h2></center>

    <div className="box box-default"><a href="#/app/settingsmenu/feedback">
      <div className="box-body" >

        {/* <span className="float-left">  <i className="material-icons">help</i></span> */}
      <center>
        <i className="material-icons">help</i>
          <h5> FEEDBACK FORM </h5> </center>

    </div>
    </a></div>


    <div className="box box-default"><a href="#/app/settingsmenu/contact">
      <div className="box-body" >

        {/* <span className="float-left">  <i className="material-icons">mail_outline</i></span> */}
      <center>
        <i className="material-icons">mail_outline</i>
         <h5> CONTACT SUPPORT </h5> </center>

    </div>
    </a></div>


    <div className="box box-default">  <a href="#/app/settingsmenu/Terms">
      <div className="box-body" >

        {/* <span className="float-left">  <i className="material-icons">message</i></span> */}
      <center>
        <i className="material-icons">message</i>
          <h5> Terms and  Conditions </h5> </center>

    </div>
    </a></div>


    <div className="box box-default">  <a href="#/app/pglayout/privacy-police">
      <div className="box-body" >

        {/* <span className="float-left">  <i className="material-icons">person_outline</i></span> */}
      <center>
        <i className="material-icons">person_outline</i>
         <h5>  Privacy Policy </h5>
       </center>

    </div>
    </a></div>



 </div>
</div>
</div>

  </article>
)


const Page = () => {
  return (
    <section >
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><BasicBoxes /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
