import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Edit_Profile from './Edit_Profile';
import Edit_Notifications from './Edit_Notifications';
import  Edit_Address from './Edit_Address';
import  Edit_CancelCode from './Edit_CancelCode';
import  Edit_SilentCode from './Edit_SilentCode';
import  Edit_PrintCode from './Edit_PrintCode';

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

  <Edit_Profile />
</div>
</div>
<div className="box box-default col-xl-6">
  <div className="box-body ">

  <Edit_Address />
</div>
</div>

<div className="box box-default col-xl-4">
  <div className="box-body ">

  <Edit_CancelCode />

 </div>
</div>

<div className="box box-default col-xl-4">
  <div className="box-body ">

  <Edit_SilentCode />
</div>
</div>

<div className="box box-default col-xl-4">
  <div className="box-body ">

  <Edit_PrintCode />
</div>
</div>

<div className="box box-default col-xl-6">
  <div className="box-body ">

  <Edit_Notifications />
 </div>
</div>


<div className="box box-default col-xl-6">
  <div className="box-body ">
<h2 className="article-title-header">HOWL SUPPORT FORMS </h2>

    <div className="box box-default"><a href="mailto:support@howl.com">
      <div className="box-body" >

        {/* <span className="float-left">  <i className="material-icons">help</i></span> */}
      <center>
        <i className="material-icons">help</i>
          <h5> FEEDBACK FORM </h5>

         </center>

    </div>
    </a></div>


    <div className="box box-default"><a href="mailto:support@howl.com">
      <div className="box-body" >

        {/* <span className="float-left">  <i className="material-icons">mail_outline</i></span> */}
      <center>
        <i className="material-icons">mail_outline</i>
         <h5> CONTACT SUPPORT </h5> </center>

    </div>
    </a></div>


    <div className="box box-default">  <a href="#/app/Company-Rules/Terms">
      <div className="box-body" >

        {/* <span className="float-left">  <i className="material-icons">message</i></span> */}
      <center>
        <i className="material-icons">message</i>
          <h5> Terms and  Conditions </h5> </center>

    </div>
    </a></div>


    <div className="box box-default">  <a href="#/app/Company-Rules/privacy-police">
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
    <section className="container-fluid chapter">

      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><BasicBoxes /></div>
      </QueueAnim>
    </section>

  )
}

module.exports = Page;
