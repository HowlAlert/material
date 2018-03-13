import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

class Device extends React.Component {


  constructor() {
    super();
    this.state = {
      data: [],

    };
  }


    componentDidMount() {

      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserDeviceDetail';

          fetch(BaseURL,
          {
           method: "POST",
           body: JSON.stringify({
             // "UserID":"49",
             // "UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSODNF5lNSmJktLD5Rdp3S9P1OEtVADBKLnyRBmebfCFt+ZjA5NifJ7QRFJsaYVEpfKQ=="
             "UserID":cookie.load('Id'),
             "UserToken":cookie.load('UserToken')

           }),
            headers: new Headers({'content-type': 'application/json'}),
          })
      .then((Response)=> Response.json())
      .then((findresponse)=>{
          console.log(findresponse)
          this.setState({
             data:findresponse.GetUserDeviceDetailResult.UserDeviceList,
          })


        })

    }

render() {


  var mes = this.state.data.length
  if(mes === 0)
  {
    var message="NO DEVICES AVAILABLE"
  }
  else {
    var message="CONNECTED DEVICES"
  }


   return (

        <article>


        <h5 className="text-center">{message}</h5>


        {
             this.state.data.map((dyanamicData,key)=>{
                if(dyanamicData.Type == 0 ){
                    return <div className="box box-default col-xl-12 ">
                 <h5> Amazon Echo </h5>
                 <div>Settings</div> </div>;
                    }
               else if(dyanamicData.Type == 1 ) {
                 return <div className="box box-default col-xl-12 ">
              <h5> Google Home </h5>
              <div>Settings</div> </div>;
                }

             }

           )
        }

       </article>
    );
  }
}
const Page = () => (
  <article className="article">
  <h2 className="article-title text-center"> Devices <button className="float-right"><a href="#/app/pglayout/other-devices">Add Device</a></button></h2>
    <section >
        <Device />
    </section>
  </article>

);

module.exports = Page;
