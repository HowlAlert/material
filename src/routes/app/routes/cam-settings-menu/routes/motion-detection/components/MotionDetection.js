import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';


const styles = {
  toggle: {
    maxWidth: 250,
    marginBottom: 16
  },
};
const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};
const listItemStyle = {
  paddingLeft: '50px' // 36 + 16, algin with sub list
};



class MotionDetection extends React.Component {
  constructor() {
    super();
      this.state = {
        value: 1,
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
           data:findresponse.GetUserCameraResult.RoomCameraList,
        })
      })

  }

 handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
  <article className="article">
    <div className="container-fluid with-maxwidth">
    <h2 className="article-title text-center no-margin-top">MOTION DETECTION</h2>
     <center>
        <span>
          <i className="material-icons ibox-left">perm_camera_mic</i>
           {
             this.state.data.map((dyanamicData,key) =>
             <div>
                {
                    (typeof(dyanamicData.Camera)=='object')?
                  <div>
                  {
                    dyanamicData.Camera.map((dyanamicData1,key1) =>
                         <div>
                             {dyanamicData1.Name}
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
       </span>
    </center> <br />

    <div className="col-xl-4">
        <div className="box box-default">
          <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">
          <span className="float-left">
            <span><h5> MOTION DETECTION </h5> </span>
          </span>
          <span className="float-right ibox-icon">
            <Toggle style={styles.toggle} />
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
                                   {" Status: "+dyanamicData1.MotionDetectionStatus}
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

    <div className="col-xl-4">
        <div className="box box-default">
          <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">
          <span className="float-left">
            <span><h5> MOTION SENSITIVITY </h5> </span>
          </span>
          <span className="float-right">
            <span>
              <SelectField
              value={this.state.value}
              onChange={this.handleChange}
                        >
              <MenuItem value={1} primaryText="High" />
              <MenuItem value={2} primaryText="Normal" />
              <MenuItem value={3} primaryText="Low" />

            </SelectField>

            </span>
          </span>
        </div>
    </div>
    </div>
</div>

    <div className="col-xl-4">
      <div className="box box-default ">
        <div className="box-body" >
          <div className="icon-box ibox-plain ibox-center">
             <span className="float-left">
                    <span><h5> SCHEDULE</h5> </span>
             </span>
             <span className="float-right">
                 <h5><a href="cam-settings-menu#/app/camerasettings/schedule">ADD</a></h5>
            </span>
          </div>
       </div>
      <center> Set times during which motion sensor will be active in order to limit unnecessary alerts and image capture.</center>
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
        <div key="1"><MotionDetection /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
