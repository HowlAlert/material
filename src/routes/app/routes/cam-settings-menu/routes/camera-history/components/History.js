import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import Time from 'react-time';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import PreviousDayImages from '../../../../cameras/components/PreviousDayImages';

class History extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      data1:[],
      startDate: moment(),
      counter: 2,
      imgid:'',
      DateCreated:'',
      redirectToReferrer: false,
      disabledBack: true,
      disabledMore: false
    };
      this.interval = null;
      this.handleChange = this.handleChange.bind(this);


  }


  handleChange(date) {

      this.setState({
        startDate: date,
        counter:2,

      });

      var today = moment(date).format('MM/DD/YYYY');

     //  console.log(today);



    var starthours = "00";
    var startminutes = "00";
    var startsecond = "00";
    var endhours = "23";
    var endminutes = "59";
    var endsecond = "00";

    var st= starthours + ':' + startminutes + ':' + startsecond;
    var et= endhours + ':' + endminutes + ':' + endsecond;
    var StartTime = today + " " + st

   //  console.log(StartTime);
    var EndTime = today + " " + et
     //console.log(EndTime);




              var that = this;
               var urls = [];
               var a1 =[];
               //  console.log(this.state.counter);

               const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserCameraImages';

               // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';

                   fetch(BaseURL,
                   {
                    method: "POST",
                    body: JSON.stringify({
                      "UserID":cookie.load('Id'),
                      "UserToken":cookie.load('UserToken'),
                      "CameraID": cookie.load('cameraid'),
                      "StartTime": StartTime,
      	              "EndTime": EndTime,
                      "PageNumber": 1
                    }),
                     headers: new Headers({'content-type': 'application/json'}),
                   })
               .then((Response)=> Response.json())
               .then((findresponse)=>{
                  // console.log(findresponse);
                 this.setState({
                    data:findresponse.GetUserCameraImagesResult.CameraImages,
                    length:findresponse.GetUserCameraImagesResult.CameraImages.length,
                    // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
                  })
                  Promise.all(
                       findresponse.GetUserCameraImagesResult.CameraImages.map(
                            element => fetch('https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetImageData',

                              // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
                                                  {

                                                       method: "POST",
                                                       body: JSON.stringify({
                                                         "url":element.ImageURL
                                                       }),

                                                      headers: new Headers({'content-type':'application/json'}),

                                                })
                              .then(res => res.json())
                          )
                        ).then(datas => {

                          this.state.data.forEach((element, i) => {
                            urls[i] = element

                          })

                         //console.log(urls);

                        let arr3 = [];                                  // to combine the results of the two arrays
                                urls.forEach((itm, i) => {
                                         arr3.push(Object.assign({}, itm, datas[i]));
                                     });


                                      //console.log(arr3.length);

                                     this.setState({  data1:arr3 ,
                                       array_count:arr3.length ,

                                     })


                         // console.log(this.state.data1);
                         var total = this.state.array_count;
                         // console.log(total);


                         if(total === 0)
                          {
                             this.setState({
                                 disabledMore: true,

                             })

                          }
                          else {
                            this.setState({
                              disabledMore: false

                            })

                          }

                    } )
                })
    }


    handleNext(date,value){

      var today = moment(date).format('MM/DD/YYYY');

     //  console.log(today);
     //  console.log(this.state.counter)

      this.setState({
          counter: this.state.counter + 1,
          disabledBack: false,
      });

    var starthours = "00";
    var startminutes = "00";
    var startsecond = "00";
    var endhours = "23";
    var endminutes = "59";
    var endsecond = "00";

    var st= starthours + ':' + startminutes + ':' + startsecond;
    var et= endhours + ':' + endminutes + ':' + endsecond;
    var StartTime = today + " " + st

     //console.log(StartTime);
    var EndTime = today + " " + et
   //  console.log(EndTime);




              var that = this;
               var urls = [];
               var a1 =[];
               //  console.log(this.state.counter);


               const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserCameraImages';

               // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';

                   fetch(BaseURL,
                   {
                    method: "POST",
                    body: JSON.stringify({
                      // "UserID": "49",
                      // "UserToken": "Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSODNF5lNSmJktLD5Rdp3S9P1OEtVADBKLnyRBmebfCFt+ZjA5NifJ7QRFJsaYVEpfKQ==",
                      // "CameraID": "HDXQ-036404-EBFGG",
                      "UserID":cookie.load('Id'),
                      "UserToken":cookie.load('UserToken'),
                      "CameraID": cookie.load('cameraid'),
                      "StartTime": StartTime,
      	              "EndTime": EndTime,
                      "PageNumber": this.state.counter
                    }),
                     headers: new Headers({'content-type': 'application/json'}),
                   })
               .then((Response)=> Response.json())
               .then((findresponse)=>{

                 // console.log(findresponse);

                 this.setState({
                    data:findresponse.GetUserCameraImagesResult.CameraImages,
                    length:findresponse.GetUserCameraImagesResult.CameraImages.length,
                    // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
                  })
                  Promise.all(
                       findresponse.GetUserCameraImagesResult.CameraImages.map(
                            element => fetch('https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetImageData',

                              // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
                                                  {

                                                       method: "POST",
                                                       body: JSON.stringify({
                                                         "url":element.ImageURL
                                                       }),

                                                      headers: new Headers({'content-type':'application/json'}),

                                                })
                              .then(res => res.json())
                          )
                        ).then(datas => {

                          this.state.data.forEach((element, i) => {
                            urls[i] = element

                          })

                       //  console.log(urls);

                        let arr3 = [];                                  // to combine the results of the two arrays
                                urls.forEach((itm, i) => {
                                         arr3.push(Object.assign({}, itm, datas[i]));
                                     });


                                     // console.log(arr3.length);

                                     this.setState({  data1:arr3 ,
                                       array_count:arr3.length ,

                                     })


                         // console.log(this.state.data1);
                         var total = this.state.array_count;
                          //console.log(total);


                         if(total === 0 || total < 20)
                          {
                             alert("No Images Recorded!");

                                this.setState({
                                     disabledMore: true,
                                     disableBack:false

                              });


                               //  console.log(this.state.counter)

                          }

                    } )
                })
    }



handleBack(date,value){

  var today = moment(date).format('MM/DD/YYYY');

 //  console.log(today);
 //console.log(this.state.counter);

  this.setState({
    counter: this.state.counter - 1
  });

var starthours = "00";
var startminutes = "00";
var startsecond = "00";
var endhours = "23";
var endminutes = "59";
var endsecond = "00";

var st= starthours + ':' + startminutes + ':' + startsecond;
var et= endhours + ':' + endminutes + ':' + endsecond;
var StartTime = today + " " + st

 //console.log(StartTime);
var EndTime = today + " " + et
 //console.log(EndTime);




          var that = this;
           var urls = [];
           var a1 =[];
           //  console.log(this.state.counter);


           const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserCameraImages';

           // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';

               fetch(BaseURL,
               {
                method: "POST",
                body: JSON.stringify({
                  // "UserID": "49",
                  // "UserToken": "Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSODNF5lNSmJktLD5Rdp3S9P1OEtVADBKLnyRBmebfCFt+ZjA5NifJ7QRFJsaYVEpfKQ==",
                  // "CameraID": "HDXQ-036404-EBFGG",
                  "UserID":cookie.load('Id'),
                  "UserToken":cookie.load('UserToken'),
                  "CameraID": cookie.load('cameraid'),
                  "StartTime": StartTime,
                  "EndTime": EndTime,
                  "PageNumber": this.state.counter-2
                }),
                 headers: new Headers({'content-type': 'application/json'}),
               })
           .then((Response)=> Response.json())
           .then((findresponse)=>{

              //console.log(findresponse);

             this.setState({
                data:findresponse.GetUserCameraImagesResult.CameraImages,
                length:findresponse.GetUserCameraImagesResult.CameraImages.length,
                // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
              })
              Promise.all(
                   findresponse.GetUserCameraImagesResult.CameraImages.map(
                        element => fetch('https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetImageData',

                          // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
                                              {

                                                   method: "POST",
                                                   body: JSON.stringify({
                                                     "url":element.ImageURL
                                                   }),

                                                  headers: new Headers({'content-type':'application/json'}),

                                            })
                          .then(res => res.json())
                      )
                    ).then(datas => {

                      this.state.data.forEach((element, i) => {
                        urls[i] = element

                      })

                   //  console.log(urls);

                    let arr3 = [];                                  // to combine the results of the two arrays
                            urls.forEach((itm, i) => {
                                     arr3.push(Object.assign({}, itm, datas[i]));
                                 });


                                 // console.log(arr3.length);

                                 this.setState({
                                    data1:arr3 ,
                                    array_count:arr3.length ,
                                    counter: this.state.counter

                                 })


                     // console.log(this.state.data1);

                     // var total = this.state.array_count;
                     //  console.log(total);

                     var count = this.state.counter-1;

                     // console.log(count);


                     if(count === 1)
                      {
                         // alert("No Images Recorded!");

                           //  console.log(this.state.disabledMore);
                             //  console.log(this.state.disableBack);


                            this.setState({
                                  disabledMore: false,
                                disabledBack: true


                             });

                            //  console.log(this.state.counter);
                      }


                } )
            })

}
componentDidMount(){


  var today = moment(this.state.startDate).format('MM/DD/YYYY');

 //  console.log(today);


var starthours = "00";
var startminutes = "00";
var startsecond = "00";
var endhours = "23";
var endminutes = "59";
var endsecond = "00";

var st= starthours + ':' + startminutes + ':' + startsecond;
var et= endhours + ':' + endminutes + ':' + endsecond;
var StartTime = today + " " + st

 //console.log(StartTime);
var EndTime = today + " " + et
 //console.log(EndTime);








          var that = this;
           var urls = [];
           var a1 =[];
           //  console.log(this.state.counter);


                      // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';
           const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserCameraImages';


               fetch(BaseURL,
               {
                method: "POST",
                body: JSON.stringify({
                  "UserID":cookie.load('Id'),
                  "UserToken":cookie.load('UserToken'),
                  "CameraID": cookie.load('cameraid'),
                  "StartTime": StartTime,
  	              "EndTime": EndTime,
                  "PageNumber": 1
                }),
                 headers: new Headers({'content-type': 'application/json'}),
               })
           .then((Response)=> Response.json())
           .then((findresponse)=>{

             // console.log(findresponse);

             this.setState({
                data:findresponse.GetUserCameraImagesResult.CameraImages,
                length:findresponse.GetUserCameraImagesResult.CameraImages.length,
                // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
              })
              Promise.all(
                   findresponse.GetUserCameraImagesResult.CameraImages.map(
                        element => fetch('https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetImageData',

                          // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
                                              {

                                                   method: "POST",
                                                   body: JSON.stringify({
                                                     "url":element.ImageURL
                                                   }),

                                                  headers: new Headers({'content-type':'application/json'}),

                                            })
                          .then(res => res.json())
                      )
                    ).then(datas => {

                      this.state.data.forEach((element, i) => {
                        urls[i] = element

                      })

                     //console.log(urls);

                    let arr3 = [];                                  // to combine the results of the two arrays
                            urls.forEach((itm, i) => {
                                     arr3.push(Object.assign({}, itm, datas[i]));
                                 });


                               //   console.log(arr3.length);

                                 this.setState({  data1:arr3 ,
                                   array_count:arr3.length ,

                                 })


                     // console.log(this.state.data1);
                     var total = this.state.array_count;
                     // console.log(total);


                     if(total === 0)
                      {
                        this.setState({
                          disabledMore: true ,


                        })
                      }
                      else {
                        this.setState({ disabledMore: false })

                      }

                } )
            })

      }


      handleEnlarge(value1,value2) {


            //  console.log(imgid);
            this.setState({
              redirectToReferrer: true ,
              imgid: `${value1}`,
              DateCreated: `${value2}`


            })

      }

handleExit()
{
  this.setState({
      redirectToReferrer:false ,

  });
}

render() {

  var today = moment(this.state.startDate).format('LL');

 //  console.log(today);

  //
  // var img_Date = this.state.DateCreated +" "+ 'UTC' ;
  // var date = new Date(img_Date);
  // var current = date.toString();


const { redirectToReferrer} = this.state                    //To Zoom the Image
  if(this.state.redirectToReferrer === true)
  {
    return (
  <div className="box box-default">
      <div className="box-body">

        {
          this.state.redirectToReferrer === true  ?
                  <img src={`data:image/jpg;base64,${this.state.imgid}`} alt="Image"  width="80%" />
                : null

        }

        <span className="float-right">
                <RaisedButton primary label="Exit" onClick={(e)=>this.handleExit(e)}/>
        </span>
      <div>
        <center>Details :{" "}
             {moment(new Date(this.state.DateCreated +" "+ 'UTC').toString()).format('DD-MMM-YYYY hh:mm:ss A')}
          {/* {moment(current).format('DD-MMM-YYYY hh:mm:ss A')} */}

        </center>
      </div>
      </div>
    </div>

     )

  }
var cameraName = cookie.load('cameraName');


 //console.log(cameraName);
var fname=cookie.load('FirstName');
  //console.log(fname);

var lname = cookie.load('LastName');

      return (


        <div className="row">

          <div className="col-xl-12">
            <div className="box box-default">
              <div className="box-body">


                {/* <h2 className="article-title"> Most Recent Images </h2> */}

                {/* <img src={`data:image/jpg;base64,${this.state.data.GetImageDataResult}`} alt="Image" height="180" width="180"/> */}

                {/* <div className="row">

                {
                  this.state.data1.map((dyanamicData1,key)=>
                  <div className="box box-default">
                   <div className="box-body ">

                     <center>

                               <img src={`data:image/jpg;base64,${dyanamicData1.GetImageDataResult}`} alt="Image" height="180" width="180"
                                            onClick={()=>this.handleEnlarge(dyanamicData1.GetImageDataResult,dyanamicData1.DateCreated)}

                              />
                        </center>
                    </div>
                  </div>
                 )
               }

             </div> */}



                 <div>
                       <h2 className="article-title">Images Recorded in {cameraName} </h2>
                        Select Date:
                        <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                        <span className="float-right">
                           NOTE: Click on image to Zoom
                        </span>


                 </div>

             { (this.state.array_count === 0) ?


                      <div>
                        <h2>No Images Recorded on "{today}" </h2>
                        <PreviousDayImages />
                      </div>


              :


              <div>
                <h2>"Hello! { " "+fname+" "+lname} ...... "</h2>
              <div>

              <h2>Recorded Images on "{today}"  </h2>
              <div className="row">

              {
                this.state.data1.map((dyanamicData1,key)=>
                <div className="box box-default">
                 <div className="box-body ">
                   <center>
                             <img src={`data:image/jpg;base64,${dyanamicData1.GetImageDataResult}`} alt="Image" height="200" width="300"
                                          onClick={()=>this.handleEnlarge(dyanamicData1.GetImageDataResult,dyanamicData1.DateCreated)}

                            />
                      </center>
                  </div>
                </div>
               )}
             </div>

            <span className="float-left">
                  Page:{this.state.counter-1}
            </span>
            <span className="float-right">
               <RaisedButton primary label="<- Back" onClick={()=>this.handleBack(this.state.startDate,this.state.counter)} disabled={this.state.disabledBack} />
               <RaisedButton primary label=" More Images!" onClick={()=>this.handleNext(this.state.startDate,this.state.counter)}  disabled={this.state.disabledMore}/>


            </span>
             </div>
           </div>


           }
              </div>

            </div>
          </div>
        </div>

        );
      }
     }

const ImageSection = () => (
  <section className="container-fluid ">
  <article className="article">
       <h2 className="article-title mainArticle">Camera History
         <span className="float-right">

         <a href="#/app/camerasettings/settings" className="article-title mainArticle">
          <img className="nav-icon material-icons" src="assets/images/blueCog.png" alt="Image" height="40" width="40"/>
           Settings
         </a>
         </span>

     </h2>
   <QueueAnim type="bottom" className="ui-animate">
     <div key="1"><History /></div>
   </QueueAnim>

</article>
</section>

);

module.exports = ImageSection;
