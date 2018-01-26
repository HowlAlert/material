import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Toggle from 'material-ui/Toggle';


const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
};

class Detection extends React.Component {
  constructor() {
    super();
      this.state = {
        data: [],

      };

  }

  componentDidMount(){

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCamera';

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
           data:findresponse.GetUserCameraResult.RoomCameraList
                            })
                         })


  }


  render() {

  return (
  <article className="article">
    <div className="container-fluid with-maxwidth">
    

    <div className="col-xl-12">
        <div className="box box-default">
          <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">
          <span className="float-left">
            <span><h5> MOTION DETECTION </h5> </span>
          </span>
          <span className="float-right ibox-icon">
            <Toggle style={styles.toggle}  />
            <div>
              {
                this.state.data.map((dyanamicData,key) =>
                <div>
                    {
                      (typeof(dyanamicData.Camera)=='object')?
                      <div>
                        {
                          dyanamicData.Camera.map((dyanamicData1,key1) =>
                               <div>
                                   {" Status:" +dyanamicData1.MotionDetectionStatus}
                               </div>
                         )
                       }
                      </div>
                      :
                        null
                    }
                </div>

               )
              }
            </div>
          </span>
        </div>
    </div>
    </div>
  </div>




    </div>

    </article>
  );
 }
}


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <Detection />
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
