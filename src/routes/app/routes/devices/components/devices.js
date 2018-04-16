import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import AmazonDevices from './AmazonDevices';
import GoogleDevices from './GoogleDevices';
import cookie from 'react-cookies';
import './paagedesign.css';



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
             length:findresponse.GetUserDeviceDetailResult.UserDeviceList.length
          })


        })

    }

render() {

// console.log(this.state.length)
//   // var mes = this.state.data.length
//   if(this.state.length === 0 || this.state.length === undefined )
//   {
//     var message="NO DEVICES AVAILABLE";
//
//   }
//   else {
//     var message="CONNECTED DEVICES"
//   }

var fname=cookie.load('FirstName');
 console.log(fname);
var lname = cookie.load('LastName');


   return (

        <article>

        {(this.state.length === 0 || this.state.length === undefined ) ?
         <div>
           <h2> "Hello! { " "+fname+" "+lname} follow instructions to add devices !"</h2>
               <AmazonDevices />
               <GoogleDevices />

         </div>


      :<div>
        {/* <h5 className="text-center">{message}</h5> */}


        {
             this.state.data.map((dyanamicData,key)=>{
                if(dyanamicData.Type == 0 ){
                    return (

                    <div className="box box-default col-xl-12 ">
                      <div className="box-body ">
                        <h5>  "Hello! { " "+fname+" "+lname}!"
                        {/* <img src="assets/images/echo.png" alt="Image" height="30" width="30"/> */}
                           You are connected to Amazon Echo .......Try this!
                        </h5>
                        <div className="box box-default  ">
                          <div className="box-body ">

                          <GoogleDevices />
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
                  <h5>  "Hello! { " "+fname+" "+lname}!"
                  {/* <img src="assets/images/home.png" alt="Image" height="30" width="30"/> */}
                   You are connected to Google Home .......Try this!
                  </h5>
                  <div className="box box-default  ">
                    <div className="box-body ">

                    <AmazonDevices />
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

<h2 className="article-title mainArticle">Devices </h2>

    <QueueAnim type="bottom" className="ui-animate">
      <Device />
    </QueueAnim>


</section>



);

module.exports = Page;
