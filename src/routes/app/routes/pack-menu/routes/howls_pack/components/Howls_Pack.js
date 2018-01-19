import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';



class Pack extends React.Component {




  render() {

    return (

  <div className="box box-transparent">
  <h2 className=" text-center">
    <div>NO NEW HOWL</div>
  </h2>

      <div className="box-body padding-xl">
        <div className="row">

          <center>   </center>

        </div>
      </div>

   </div>

    );
}
}

const Page = () => (
  <article>
    <div>
      <h2 className="article-title text-center">Howls At Pack </h2>

    </div>

   <section className="chapter">
     <QueueAnim type="bottom" className="ui-animate">
       <div key="1"><Pack /></div>
     </QueueAnim>
   </section>
  </article>
);

module.exports = Page;
