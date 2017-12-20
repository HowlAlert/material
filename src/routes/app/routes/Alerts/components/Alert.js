import React from 'react';
import QueueAnim from 'rc-queue-anim';

const BasicBoxes = () => (
  <article className="article">
    <center><h2 className="article-title">ALERTS</h2></center>
    <div className="row">
      <div className="col-xl-4">
        <div className="box box-default">
          <div className="box-header">Box Header</div>
          <div className="box-body">
            This is the body of box component. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quasi nam. Nisi assumenda nulla consequatur perferendis, voluptatum, laborum provident eos amet quos, ullam possimus facilis quasi? Magnam optio voluptates ipsam.
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="box box-default">
          <div className="box-header box-dark">Box Header</div>
          <div className="box-body">
            This is the body of box component. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quasi nam. Nisi assumenda nulla consequatur perferendis, voluptatum, laborum provident eos amet quos, ullam possimus facilis quasi? Magnam optio voluptates ipsam.
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="box box-default">
          <div className="box-header">Box Header</div>
          <div className="box-body box-dark">
            This is the body of box component. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quasi nam. Nisi assumenda nulla consequatur perferendis, voluptatum, laborum provident eos amet quos, ullam possimus facilis quasi? Magnam optio voluptates ipsam.
          </div>
        </div>
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
