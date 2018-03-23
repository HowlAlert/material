import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import Time from 'react-time';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import cookie from 'react-cookies';


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
      redirectToAlert: false,
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
      console.log(today);


    var starthours = "00";
    var startminutes = "00";
    var startsecond = "00";
    var endhours = "23";
    var endminutes = "59";
    var endsecond = "00";

    var st= starthours + ':' + startminutes + ':' + startsecond;
    var et= endhours + ':' + endminutes + ':' + endsecond;
    var StartTime = today + " " + st
    console.log(StartTime);
    var EndTime = today + " " + et
    console.log(EndTime);



              var that = this;
               var urls = [];
               var a1 =[];
               // console.log(this.state.counter);

               const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';

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
                 console.log(findresponse);
                 this.setState({
                    data:findresponse.GetUserCameraImagesResult.CameraImages,
                    length:findresponse.GetUserCameraImagesResult.CameraImages.length,
                    // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
                  })
                  Promise.all(
                       findresponse.GetUserCameraImagesResult.CameraImages.map(
                            element => fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
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
                        console.log(urls);
                        let arr3 = [];                                  // to combine the results of the two arrays
                                urls.forEach((itm, i) => {
                                         arr3.push(Object.assign({}, itm, datas[i]));
                                     });

                                     console.log(arr3.length);
                                     this.setState({  data1:arr3 ,
                                       array_count:arr3.length ,

                                     })

                         console.log(this.state.data1);
                         var total = this.state.array_count;
                         console.log(total);

                         if(total === 0)
                          {
                            // alert("No Images Recorded!");
                             this.setState({
                                 disabledMore: true,
                                 redirectToAlert:true
                             })

                          }
                          else {
                            this.setState({ disabledMore: false })

                          }

                    } )
                })
    }

    handleEnlarge(value1,value2) {


          // console.log(imgid);
          this.setState({
            redirectToReferrer: true ,
            imgid: `${value1}`,
            DateCreated: `${value2}`


          })

    }

    handleNext(date,value){

      var today = moment(date).format('MM/DD/YYYY');
      console.log(today);

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
    console.log(StartTime);
    var EndTime = today + " " + et
    console.log(EndTime);



              var that = this;
               var urls = [];
               var a1 =[];
               // console.log(this.state.counter);


               const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';

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
                 console.log(findresponse);
                 this.setState({
                    data:findresponse.GetUserCameraImagesResult.CameraImages,
                    length:findresponse.GetUserCameraImagesResult.CameraImages.length,
                    // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
                  })
                  Promise.all(
                       findresponse.GetUserCameraImagesResult.CameraImages.map(
                            element => fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
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
                        console.log(urls);
                        let arr3 = [];                                  // to combine the results of the two arrays
                                urls.forEach((itm, i) => {
                                         arr3.push(Object.assign({}, itm, datas[i]));
                                     });

                                     console.log(arr3.length);
                                     this.setState({  data1:arr3 ,
                                       array_count:arr3.length ,

                                     })

                         console.log(this.state.data1);
                         var total = this.state.array_count;
                         console.log(total);

                         // if(total === 0)
                         //  {  alert("No Images Recorded!");
                         //
                         //        // this.setState({
                         //        //      disabledMore: true,
                         //        //      disableBack:true
                         //        //
                         //      //});
                         //  }

                    } )
                })
    }



handleBack(date,value)
{
  var today = moment(date).format('MM/DD/YYYY');
  console.log(today);
console.log(this.state.counter);
  this.setState({ counter: this.state.counter - 1 });

var starthours = "00";
var startminutes = "00";
var startsecond = "00";
var endhours = "23";
var endminutes = "59";
var endsecond = "00";

var st= starthours + ':' + startminutes + ':' + startsecond;
var et= endhours + ':' + endminutes + ':' + endsecond;
var StartTime = today + " " + st
console.log(StartTime);
var EndTime = today + " " + et
console.log(EndTime);



          var that = this;
           var urls = [];
           var a1 =[];
           // console.log(this.state.counter);


           const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';

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
             console.log(findresponse);
             this.setState({
                data:findresponse.GetUserCameraImagesResult.CameraImages,
                length:findresponse.GetUserCameraImagesResult.CameraImages.length,
                // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
              })
              Promise.all(
                   findresponse.GetUserCameraImagesResult.CameraImages.map(
                        element => fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
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
                    console.log(urls);
                    let arr3 = [];                                  // to combine the results of the two arrays
                            urls.forEach((itm, i) => {
                                     arr3.push(Object.assign({}, itm, datas[i]));
                                 });

                                 console.log(arr3.length);
                                 this.setState({  data1:arr3 ,
                                   array_count:arr3.length ,

                                 })

                     console.log(this.state.data1);
                     var total = this.state.array_count;
                     console.log(total);

                     // if(total === 0)
                     //  {  alert("No Images Recorded!");
                     //
                     //
                     //  }

                } )
            })

}
componentDidMount(){


  var today = moment(this.state.startDate).format('MM/DD/YYYY');
  console.log(today);

var starthours = "00";
var startminutes = "00";
var startsecond = "00";
var endhours = "23";
var endminutes = "59";
var endsecond = "00";

var st= starthours + ':' + startminutes + ':' + startsecond;
var et= endhours + ':' + endminutes + ':' + endsecond;
var StartTime = today + " " + st
console.log(StartTime);
var EndTime = today + " " + et
console.log(EndTime);

          var that = this;
           var urls = [];
           var a1 =[];
           // console.log(this.state.counter);


           const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';

               fetch(BaseURL,
               {
                method: "POST",
                body: JSON.stringify({
                  "UserID":cookie.load('Id'),
                  "UserToken":cookie.load('UserToken'),
                  "CameraID": cookie.load('cameraid'),
                  "StartTime":"12/11/2017 00:00:00",
  	              "EndTime": EndTime,
                  "PageNumber": 1
                }),
                 headers: new Headers({'content-type': 'application/json'}),
               })
           .then((Response)=> Response.json())
           .then((findresponse)=>{
             console.log(findresponse);
             this.setState({
                data:findresponse.GetUserCameraImagesResult.CameraImages,
                length:findresponse.GetUserCameraImagesResult.CameraImages.length,
                // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
              })
              Promise.all(
                   findresponse.GetUserCameraImagesResult.CameraImages.map(
                        element => fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
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
                    console.log(urls);
                    let arr3 = [];                                  // to combine the results of the two arrays
                            urls.forEach((itm, i) => {
                                     arr3.push(Object.assign({}, itm, datas[i]));
                                 });

                                 console.log(arr3.length);
                                 this.setState({  data1:arr3 ,
                                   array_count:arr3.length ,

                                 })

                     console.log(this.state.data1);
                     var total = this.state.array_count;
                     console.log(total);

                     if(total === 0)
                      {

                        // alert("No Images Recorded!");
                        this.setState({
                          disabledMore: true ,
                          redirectToAlert:true

                        })
                      }
                      else {
                        this.setState({ disabledMore: false })

                      }

                } )
            })

      }

handleExit()
{
  this.setState({
      redirectToReferrer:false ,

  });
}

render() {


  var today = moment(this.state.startDate).format('MM/DD/YYYY');
  console.log(today);

  var total = this.state.array_count;
  console.log(total);

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
        <center>Details:{this.state.DateCreated}</center>
      </div>
      </div>
    </div>

     )

  }


      return (

        <div >





                {/* <img src={`data:image/jpg;base64,${this.state.data.GetImageDataResult}`} alt="Image" height="180" width="180"/> */}



                   <h2> Most Recent Images.......... </h2>
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
                 )
               }

              </div>

                    {/* <div className="row">
                        Select Date: <DatePicker selected={this.state.startDate} onChange={this.handleChange} />

                        <span className="float-right">
                              NOTE: Click on image to Zoom

                        </span>
                      </div>

                      { (total === 0) ?
                              <h2>"No Images Recorded !" </h2>

                :<div className="row">

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
               )}

            </div>}
            <span className="float-left">
                  Page:{this.state.counter-1}
            </span>
            <span className="float-right">
               <RaisedButton primary label="<- Back" onClick={()=>this.handleBack(this.state.startDate,this.state.counter)} disabled={this.state.disabledBack} />
               <RaisedButton primary label=" More Images!" onClick={()=>this.handleNext(this.state.startDate,this.state.counter)}  disabled={this.state.disabledMore}/>


            </span> */}


          </div>


        );
      }
     }

const ImageSection = () => (

      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><History /></div>
      </QueueAnim>
  
);

module.exports = ImageSection;
