import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';

class GoogleDevices extends React.Component {
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
                      <div className="article-title-header">Google Device</div>
                  </div>
                   <div className="item-card  " >
                     <div className="">

                       <a href="javascript:;">
                         <img alt="product" src='assets/images/home.png'
                          />
                       </a>
                     </div>




                   </div>


</div>
</div>
</div>
<div className="col-lg-6">
  <div className="box box-default">
    <div className="box-body">
            <div className="article-title-header">Google Device Instructions</div>
              <div className="box-body">
                  <ul>
                    <li>Open the Google Home app.</li>
                  <li> In the top left corner of the Home screen. tap Menu</li>
                    <li>Verify that the Google Account that is listed is the google account that you used to setup Google Home. To switch the account,tap the triangle to the right of the account name.</li>
                    <li>Tap More settings and then Services.</li>
                    <li> Scroll through the list of the services.When you see HOWL,tap the card</li>
                 </ul>
            </div>
</div>
</div>
</div>

</div>
);
}
}

const DeviceSection = () => (
  <article className="article">

    <section>
        <GoogleDevices />

    </section>
  </article>
);

module.exports = DeviceSection;
