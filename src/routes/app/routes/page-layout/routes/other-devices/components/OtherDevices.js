import React from 'react';
import QueueAnim from 'rc-queue-anim';




class OtherDevices extends React.Component {

render() {

return (

    <article className="article">

        <div className="box box-default col-xl-12">
              <div className="icon-box ibox-plain ">

              <span className="float-left">
                <span> Amazon Echo  </span>
              </span>
              <span className="float-right" >
                <button name="code" className="card bg-color-primary float-right"><a href="#/app/pglayout/amazon-device">ACTIVATE</a></button>
              </span>
          </div>
      </div><br/>

      <div className="box box-default col-xl-12">
            <div className="icon-box ibox-plain ">
              <span className="float-left">
                <span> Google Home </span>
              </span>
              <span className="float-right" >
                 <button name="re-code" className="card bg-color-primary float-right"><a href="#/app/pglayout/google-device">ACTIVATE</a></button>
              </span>
        </div>
    </div>

   </article>

);
}
}

const DeviceSection = () => (
  <article className="article">
  <h2 className="article-title text-center ">SELECT DEVICES</h2>
    <section >
        <OtherDevices />
    </section>
  </article>
);

module.exports = DeviceSection;
