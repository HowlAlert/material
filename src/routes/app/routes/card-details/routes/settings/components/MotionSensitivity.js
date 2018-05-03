import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';


class MotionSensitivity extends React.Component {
  constructor() {
    super();
      this.state = {
        value: 4,
        data: [],

      };
  }

  // componentDidMount(){
  //
  //   const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCamera';
  //
  //       fetch(BaseURL,
  //       {
  //        method: "POST",
  //        body: JSON.stringify({
  //          "UserID":"118",
  //          "UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSOMbyj6Rd6AJ7rL/rHD/j/TqPCcFR/UM4i0I0zfWrSegeLHB3EjO//ziEk9gyXySjSVK/GPmT7Qvu"
  //        }),
  //         headers: new Headers({'content-type': 'application/json'}),
  //       })
  //   .then((Response)=> Response.json())
  //   .then((findresponse)=>{
  //        console.log(findresponse)
  //       this.setState({
  //          data:findresponse.GetUserCameraResult.RoomCameraList,
  //          data1:findresponse.GetUserCameraResult.RoomCameraList["0"].Camera["0"].MotionDetectionSensitivity
  //                           })
  //                            console.log(this.state.data1);
  //                           // this.setState({value: this.state.data1});
  //                        })
  //
  //
  //
  // }

 handleChange = (event, index, value) => this.setState({value});

  render() {

    var selected_value=this.state.value;


  return (
  <article className="article">
    <div className="container-fluid with-maxwidth">


    <div className="col-xl-12">
        <div className="box box-default">
          <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">

          <span className="float-left">
            <span><h5> MOTION SENSITIVITY </h5> </span>
          </span>
          <span className="float-right">
            <span>
              <SelectField  value={this.state.value} onChange={this.handleChange}  >
                  <MenuItem value={1} primaryText="High"  />
                  <MenuItem value={4} primaryText="Normal" />
                  <MenuItem value={7} primaryText="Low" />

            </SelectField>
            {/* <p>{selected_value}</p>

            {
              this.state.data.map((dyanamicData,key) =>
              <div>
                 {
                     (typeof(dyanamicData.Camera)=='object')?
                   <div>
                   {
                     dyanamicData.Camera.map((dyanamicData1,key1) =>
                          <div>
                                  {dyanamicData1.MotionDetectionSensitivity}

                          </div>

                    )
                  }
                 </div>
                 :
                   null
               }
            </div>
           )
           } */}
            </span>
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
        <div><MotionSensitivity /></div>

      </QueueAnim>
    </section>
  )
}

module.exports = Page;
