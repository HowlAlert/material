
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

const imgLeft = {
  backgroundImage: 'url(assets/images/echo.png)',
  backgroundPosition: 'center',
  width:'250',
  height:'250'

};





class AmazonDevices extends React.Component {


render() {
return (
  <section className="container-fluid with-maxwidth-lg no-breadcrumbs chapter" >
        <QueueAnim type="bottom" className="ui-animate">

                  <div className="item-card card__horizontal">
                    <div className="card__image">
                      <a href="javascript:;">
                        <img alt="product" src='assets/images/echo.png'   width='250'
                          height='250'/>
                      </a>
                    </div>
                    <div className="card__body ">
                      <div className="card__title">
                        <div className="article-title-header">Amazon Device</div>
                      </div>
                      <div className="card__price">
                        <span className="type--strikethrough">$699.99</span>
                        <span>$649.99</span>
                      </div>
                      <div className="divider divider-solid divider-lg" />
                      <p className="card__desc">
                        01.  Install the Alexa App. <br/>
                        02.  From the left navigation panel; select skills.<br/>
                        03.  Use the search bar and enter HOWL.<br/>
                        04.  Link your HOWL account
                      </p>
                       <RaisedButton  className="float-right" primary label="Buy Device" />

                    </div>
                  </div>

        </QueueAnim>
      </section>



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
