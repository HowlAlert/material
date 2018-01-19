import React from 'react';
import QueueAnim from 'rc-queue-anim';


class Alerts extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
      };
  }
  componentDidMount(){

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

        fetch(BaseURL,
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":"118",
           "UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSOMbyj6Rd6AJ7rL/rHD/j/TqPCcFR/UM4i0I0zfWrSegeLHB3EjO//ziEk9gyXySjSVK/GPmT7Qvu"
         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{
        console.log(findresponse)
        this.setState({
           data:findresponse.GetUserFeedResult.getUserFeeds,
        })
      })

  }
  render() {

    return (

    <div className="row">
      <div className="col-xl-12">
        <div className="box box-default">
          <div className="box-body">

            {
              this.state.data.map((dyanamicData,key)=>
              <div>
                 <div className="box box-default">
                     <div className="box-body ">
                           {dyanamicData.Text}
                           <div>  {dyanamicData.DateCreated}</div>
                           <div> {dyanamicData.ImageURL}</div>
                           {/* <div className="col-md-4 float-right"> {dyanamicData.ImageURL}</div> */}
                          {/* <img src="assets/images/HOWL2.ico" alt="" className="rounded-circle img30_30" /> */}
                          <img alt="" src="52.54.55.76:21/ipc//HDXQ038386TMHKD/20180118/IMG001/IMG_chn0_md_20180118090501_016.jpg"/>
                     </div>
                </div>
              </div>

             )
            }
          </div>
        </div>
      </div>
    </div>

    );
  }
 }


const Page = () => {
  return (
  <article className="article">
    <center><h2 className="article-title">ALERTS</h2></center>
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Alerts /></div>
      </QueueAnim>
    </section>
  </article>
  )
}

module.exports = Page;
