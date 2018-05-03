import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import AmazonDevices from './AmazonDevices';
import GoogleDevices from './GoogleDevices';
import cookie from 'react-cookies';


class Device extends React.Component {


  constructor() {
    super();
    this.state = {
      data: [],

    };
  }


    componentDidMount() {

      const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserDeviceDetail';

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

          //  console.log(findresponse)

          this.setState({
             data:findresponse.GetUserDeviceDetailResult.UserDeviceList,
             length:findresponse.GetUserDeviceDetailResult.UserDeviceList.length
          })


        })

    }

    handleAddDevice(){

      this.setState({ redirectToReferrer: true })
    }



render() {

const { redirectToReferrer} = this.state
      if(redirectToReferrer === true)
      {
        return (
          <div>
          <div className="box box-default  dkShadow">
            <div className="box-body ">



            <AmazonDevices />
            <GoogleDevices />

          </div>
          </div>
          </div>


         )
      }




   return (

        <article>

        {(this.state.length === 0 || this.state.length === undefined ) ?
         <div>
         <div className="box box-default  dkShadow">
           <div className="box-body ">
           <div className="row">
           <div className="col-lg-9">

                      <h2 className="article-title-header">NO DEVICE CONNECTED</h2>
             </div>
               <div className="col-lg-3">
               <div  className="howlBlue" primary label="+ ADD NEW PACK MEMBER"  onClick={()=>this.handleAddDevice()}>+ ADD DEVICE</div>
               </div>
               </div>



         </div>
         </div>
         </div>

      :<div>
        {/* <h5 className="text-center">{message}</h5> */}


        {
             this.state.data.map((dyanamicData,key)=>{
                if(dyanamicData.Type == 0 ){
                    return (

                    <div className="box box-default  dkShadow">
                      <div className="box-body ">
                        <div className="row">
                        <div className="col-lg-9">
                                <h2 className="article-title-header">CONNECTED TO AMAZON ECHO</h2>
                        </div>
                        <div className="col-lg-3">
                            <div  className="howlBlue" primary label="+ ADD NEW PACK MEMBER"  onClick={()=>this.handleAddDevice()}>+ ADD DEVICE</div>
                        </div>
                            </div>

                      </div>
                       </div>



                    )

                    }
               else if(dyanamicData.Type == 1 )

               {
              //    return <div className="box box-default col-xl-12 ">
              // <h5> Google Home </h5>
              // <div>Settings</div> </div>;

              return (

              <div className="box box-default col-xl-12 ">
                <div className="box-body ">


                <div className="row">
                <div className="col-lg-9">
                        <h2 className="article-title-header">CONNECTED TO GOOGLE HOME</h2>
                </div>
                <div className="col-lg-3">
                    <div  className="howlBlue" primary label="+ ADD NEW PACK MEMBER"  onClick={()=>this.handleAddDevice()}>+ ADD DEVICE</div>
                </div>
                    </div>


                </div>
                 </div>



              )




                }

             }

           )
        }
      </div>
    }

       </article>
    );
  }
}
const Page = () => (

  <section className="container-fluid chapter">

    <QueueAnim type="bottom" className="ui-animate">
      <Device />
    </QueueAnim>


</section>



);

module.exports = Page;
