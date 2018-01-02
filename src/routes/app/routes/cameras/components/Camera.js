import React from 'react';
import QueueAnim from 'rc-queue-anim';


const Camera = () => (
  <article className="article">
    <center><h2 className="article-title">CAMERA</h2></center>

    <div className="row">
      <div className="col-xl-4">
        <div className="box box-default">
          <div className="box-header">CAMERA VIEW</div>

        </div>
      </div>

        <div className="col-xl-4">
          <div className="card bg-color-dark">
            <div className="card-content">
              <span className="card-title">Device status</span>
            </div>
            <div className="card-action">
              <a href="page-layout#/app/pglayout/full-width"><i className="nav-icon material-icons">settings</i> Camera settings</a>
            </div>
          </div>
        </div>
      </div>

     <center><button className="card bg-color-primary"><a href="page-layout#/app/pglayout/centered">Buy Camera </a></button></center>


  </article>
)


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Camera /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
