import React from 'react';
import QueueAnim from 'rc-queue-anim';


const BasicHome = () => (
  <article className="article padding-lg-v article-dark article-bordered">

  <div className="container-fluid with-maxwidth">

  <div className="row">

    <div className="col-xl-4"><a href="cameras#/app/Cameras">
        <div className="box box-default">
          <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">
          <span className="float-left">
            <span><h5> CAMERA </h5> </span>
          </span>
          <span className="float-right ibox-icon">
            <span><i className="material-icons ibox-left">perm_camera_mic</i></span>
          </span>
        </div>
    </div>
    </div>
    </a></div>

        <div className="col-xl-4"><a href="devices#/app/Devices">
            <div className="box box-default">
              <div className="box-body">
              <div className="icon-box ibox-plain ibox-center">
              <span className="float-left">
                <span><h5> DEVICES </h5> </span>
              </span>
              <span className="float-right ibox-icon">
                <span><i className="material-icons ibox-left">perm_scan_wifi</i></span>
              </span>
            </div>
            </div>
        </div>
      </a></div>

      <div className="col-xl-4"><a href="pack#/app/Pack">
       <div className="box box-default">
         <div className="box-body">
           <div className="icon-box ibox-plain ibox-center">
               <span className="float-left">
                 <span><h5> MY PACK </h5> </span>
               </span>
               <span className="float-right ibox-icon">
                 <span><i className="material-icons ibox-left">web</i></span>
               </span>
           </div>
         </div>
       </div>
     </a></div>

     <div className="col-xl-4"><a href="monitor#/app/Monitoring">
      <div className="box box-default">
        <div className="box-body">
          <div className="icon-box ibox-plain ibox-center">
              <span className="float-left">
                <span><h5>MONITORING </h5> </span>
              </span>
              <span className="float-right ibox-icon">
                <span><i className="material-icons ibox-left">person_outline</i></span>
              </span>
          </div>
        </div>
      </div>
    </a>
  </div>


        <div className="col-xl-4 col-lg-8 rounded mx-auto d-block">
          <div className="card bg-color-primary text-center">
            <div className="card-content">
              <span className="card-title">AMBULANCE</span>
            </div>
            <div className="card-action">
              <a href="javascript:;">SUBSCRIBE</a>
            </div>
          </div>
        </div>


        <div className="col-xl-4 col-lg-6">
          <div className="card bg-color-primary text-center">
            <div className="card-content">
              <span className="card-title">POLICE</span>
            </div>
            <div className="card-action">
              <a href="javascript:;">SUBSCRIBE</a>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-6">
          <div className="card bg-color-primary text-center">
            <div className="card-content ">
              <span className="card-title">FIRE</span>
            </div>
            <div className="card-action">
              <a href="javascript:;">SUBSCRIBE</a>
            </div>
          </div>
        </div>

      <div className="col-xl-4 col-lg-8 rounded mx-auto d-block">
        <div className="card bg-danger text-center ">
          <div className="card-content">
            <span className="card-title">ALERT PACK</span>
          </div>
          <div className="card-action">
              <a href="javascript:;">   <h5>CLICK & HOLD FOR 3 SECONDS TO SOUND ALARM</h5></a>
          </div>
        </div>
      </div>
      >


      </div>
    </div>
</article>
)


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><BasicHome /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
