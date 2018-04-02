import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';

// const imgRight = {
//   backgroundImage: 'url(assets/images/home.png)',
//   backgroundPosition: 'center'
// };

// class GoogleDevices extends React.Component {
// render() {
// return (
//
//     <article className="article">
//
//       <div className="box box-default col-xl-12">
//             <div className="icon-box ibox-plain ">
//
//
//               <span className="float-left row" >
//               <h5>  <img src="assets/images/home.png" alt="Image" height="30" width="30"/>
//                      Instructions to connect Google Home</h5>
//                 </span>
//               <span className="float-right" >
//                  {/* <RaisedButton primary label=" ACTIVATE " onClick={()=>this.handleAmazon()} /> */}
//
//                  <div className="box box-default">
//                    <div className="box-body ">
//                      01.  Open the Google Home app.<br/>
//                      02.  In the top left corner of the Home screen. tap Menu<br/>
//                      03.  Verify that the Google Account that is listed is the google account that you used to setup Google Home. To switch the account,tap the triangle to the right of the account name.<br/>
//                      04.  Tap More settings and then Services.<br/>
//                      05. Scroll through the list of the services.When you see HOWL,tap the card
//
//
//                   </div>
//
//                   </div>
//               </span>
//         </div>
//     </div>
//
//    </article>
//
// );
// }
// }
class GoogleDevices extends React.Component {


render() {
return (



  <div className="row">
    <div className="col-xl-6">
      <div className="box box-default">
        <div className="box-body">
{/* <div className="box box-default "> */}
                   <div className="item-card card__horizontal " >
                     <div className="card__image">
                       <a href="javascript:;">
                         <img alt="product" src='assets/images/home.png'   width='250'
                           height='250'/>
                       </a>
                     </div>
                     <div className="card__body ">
                       <div className="card__title">
                         <div className="article-title-header">Google Device</div>
                       </div>
                       <div className="card__price">
                         <span className="type--strikethrough">$699.99</span>
                         <span>$649.99</span>
                       </div>
                       <div className="divider divider-solid divider-lg" />

                        <RaisedButton  className="float-right" primary label="Buy Device" />

                     </div>

                   </div>


</div>
</div>
</div>
<div className="col-xl-4">
  <div className="box box-default">
    <div className="box-body">
            <div className="article-title-header">Google Device Instructions</div>
              <div className="box-body">
                  <p>
                    01.  Open the Google Home app.<br/>
                    02.  In the top left corner of the Home screen. tap Menu<br/>
                    03.  Verify that the Google Account that is listed is the google account that you used to setup Google Home. To switch the account,tap the triangle to the right of the account name.<br/>
                    04.  Tap More settings and then Services.<br/>
                    05. Scroll through the list of the services.When you see HOWL,tap the card
                 </p>
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
