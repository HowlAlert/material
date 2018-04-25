
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';


const imgLeft = {
  backgroundImage: 'url(assets/images/echo.png)',
  backgroundPosition: 'center',
  width:'250',
  height:'250'

};





class AmazonDevices extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      // data1: []
    };


  }

  handlePurchase() {

         this.setState({ redirectToReferrer: true })
    }

render() {

  const { redirectToReferrer} = this.state
        if(redirectToReferrer === true)
        {
          return (
             <Redirect to="Card-Details/Connect" />
           )
        }

return (
  <div className="row">
    <div className="col-lg-6">
      <div className="box box-default">
        <div className="box-body">
  {/* <div className="box box-default "> */}
            <div className="card__title">
                  <div className="article-title-header">Amazon Device</div>
              </div>
                   <div className="item-card card__horizontal " >


                       <a href="javascript:;">
                         <img alt="product" src='assets/images/echo.png'
                           />
                       </a>

                     <div className="card__body ">






                     </div>


                   </div>


  </div>
  </div>
  </div>
  <div className="col-lg-6">
  <div className="box box-default">
    <div className="box-body">
            <div className="article-title-header">Amazon Device Instructions</div>
              <div className="box-body">
                <p className="card__desc">
                  01.  Install the Alexa App. <br/>
                  02.  From the left navigation panel; select skills.<br/>
                  03.  Use the search bar and enter HOWL.<br/>
                  04.  Link your HOWL account

                </p>
            </div>
  </div>
  </div>
  </div>

  </div>


//   <div className="feature-callout feature-content-right  image-pull clearfix">
//      <div className="container-fluid with-maxwidth">
//         <div className="col-12 col-md-6 offset-md-6">
//            <div className="callout-feature-content">
//             <p>
//              01.  Install the Alexa App. <br/>
//              02.  From the left navigation panel; select skills.<br/>
//              03.  Use the search bar and enter HOWL.<br/>
//              04.  Link your HOWL account
//            </p>
//              <RaisedButton label="Try it Now"/>
//            </div>
//          </div>
//        </div>
//        <div className="col-4 col-md-2 feature-callout-image-pull" style={imgLeft} />
//    </div>
//
//
//
// </div>

);
}
}

const DeviceSection = () => (
  <article className="article">

    <section>
        <AmazonDevices />

    </section>
  </article>
);

module.exports = DeviceSection;
