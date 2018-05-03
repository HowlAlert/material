import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'react-cookies';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import moment from 'moment';


class Alerts extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
        data1: [],
        counter: 2,
        disabledBack: true,
        disabledNext: false

        // disabled1: false,
        // disabled2: true
      };
  }

  handleDelete(value) {

    alert("Are you sure you want to delete?")

      var alertid = `${value}`;
<<<<<<< HEAD
       console.log(alertid)
=======
      // console.log(alertid)
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
    const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/DeleteUserFeed';
    // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/DeleteUserFeed';

        fetch(BaseURL,
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":cookie.load('Id'),
           "UserToken":cookie.load('UserToken'),
           "UserFeedID" :alertid
         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{
<<<<<<< HEAD
         console.log(findresponse)
=======
        // console.log(findresponse)
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

        this.setState({
                 status:findresponse.DeleteUserFeedResult.resultStatus.Status,
                 message:findresponse.DeleteUserFeedResult.resultStatus.StatusMessage
                   })

                   //  console.log(this.state.status);
                   //  console.log(this.state.message);
                   if(this.state.status === "0")
                   {
                     alert(this.state.message);

                   }

                   else {  alert("Deleted Alert!") ;
                           window.location.reload();
                    }

       })


  }


  handleNext(value) {


    var count = `${value}`;
<<<<<<< HEAD
     console.log(count);
=======
    // console.log(count);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f


    this.setState({
        counter: this.state.counter + 1,
        disabledBack: false,
        // disabled2: false,
    });


      var that = this;
       var urls = [];
       var a1 =[];
       //  console.log(this.state.counter);


       const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserFeed';
       // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

           fetch(BaseURL,
           {
            method: "POST",
            body: JSON.stringify({
              "UserID":cookie.load('Id'),
              "UserToken":cookie.load('UserToken'),
              "PageNumber":this.state.counter
            }),
             headers: new Headers({'content-type': 'application/json'}),
           })
       .then((Response)=> Response.json())
       .then((findresponse)=>{
<<<<<<< HEAD
          console.log(findresponse);
=======
         // console.log(findresponse);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
         this.setState({
            data:findresponse.GetUserFeedResult.getUserFeeds,
            length:findresponse.GetUserFeedResult.getUserFeeds.length,
            // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
          })
          Promise.all(
                  findresponse.GetUserFeedResult.getUserFeeds.map(
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
<<<<<<< HEAD
                 console.log(urls);
                 console.log(datas);
=======
                // console.log(urls);
                // console.log(datas);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
             let arr3 = [];                                  // to combine the results of the two arrays
                     urls.forEach((itm, i) => {
                              arr3.push(Object.assign({}, itm, datas[i]));
                          });
                          var count = 0;                                //Count for number of Computer Tiggered Alerts
                          arr3.map((dyanamicData1,key)=>(dyanamicData1.GetImageDataResult !== "") ?
                          count:count++
                            )

<<<<<<< HEAD
                           console.log(arr3.length);
=======
                          // console.log(arr3.length);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
                          this.setState({  data1:arr3 , array_count:arr3.length , alert_count:count})


                          var total = this.state.array_count;
<<<<<<< HEAD
                           console.log(total);
=======
                          // console.log(total);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

                          if(total===0 || total < 20 )
                           {

                              alert("No more Alerts!");

                                 this.setState({
                                     disabledNext: true

                               });


                           }


            })
                 })



 }


 handleBack(value) {                 //Redirecting to previous page of alerts

   // var count = `${value}`;
   //  console.log(count);

<<<<<<< HEAD
 console.log(this.state.counter);
=======
// console.log(this.state.counter);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
    this.setState({
        counter: this.state.counter - 1,

    });




     var that = this;
      var urls = [];
      var a1 =[];
      //  console.log(this.state.counter);


      const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserFeed';
      // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

          fetch(BaseURL,
          {
           method: "POST",
           body: JSON.stringify({
             "UserID":cookie.load('Id'),
             "UserToken":cookie.load('UserToken'),
             "PageNumber":this.state.counter-2
           }),
            headers: new Headers({'content-type': 'application/json'}),
          })
      .then((Response)=> Response.json())
      .then((findresponse)=>{
<<<<<<< HEAD
         console.log(findresponse);
=======
        // console.log(findresponse);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
        this.setState({
           data:findresponse.GetUserFeedResult.getUserFeeds,
           length:findresponse.GetUserFeedResult.getUserFeeds.length,
           // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
         })
         Promise.all(
                 findresponse.GetUserFeedResult.getUserFeeds.map(
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
               // console.log(urls);
               // console.log(datas);
            let arr3 = [];                                  // to combine the results of the two arrays
                    urls.forEach((itm, i) => {
                             arr3.push(Object.assign({}, itm, datas[i]));
                         });

<<<<<<< HEAD
                          console.log(arr3.length);
=======
                         // console.log(arr3.length);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

                         var count = 0;                                //Count for number of Computer Tiggered Alerts
                         arr3.map((dyanamicData1,key)=>(dyanamicData1.GetImageDataResult !== "") ?
                         count:count++
                           )
<<<<<<< HEAD
                          console.log(count)
=======
                         // console.log(count)
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

                         this.setState({  data1:arr3 ,
                           array_count:arr3.length ,
                           counter: this.state.counter,
                           alert_count:count

                             })

<<<<<<< HEAD
                              console.log(this.state.data1);
=======
                             // console.log(this.state.data1);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
                             // var total = this.state.array_count;
                             //  console.log(total);

                             var countBack = this.state.counter-1;
<<<<<<< HEAD
                              console.log(countBack);
=======
                             // console.log(countBack);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

                             if(countBack === 1)
                              {
                                 // alert("No Images Recorded!");

                                    this.setState({
                                          disabledNext: false,
                                          disabledBack: true

                                     });


                                    //  console.log(this.state.counter);
                              }


           })
                })



 }

  componentDidMount(){

   var that = this;
    var urls = [];
    var a1 =[];
    //  console.log(this.state.counter);


    const BaseURL = 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetUserFeed';
    // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

        fetch(BaseURL,
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":cookie.load('Id'),
           "UserToken":cookie.load('UserToken'),
           "PageNumber":"1"
         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{
<<<<<<< HEAD
       console.log(findresponse);
      //  console.log(findresponse.GetUserFeedResult.getUserFeeds.map((dyanamicData1,key)=>  dyanamicData1.HasRead ))
=======
      // console.log(findresponse);
      // console.log(findresponse.GetUserFeedResult.getUserFeeds.map((dyanamicData1,key)=>  dyanamicData1.HasRead ))
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
      this.setState({
         data:findresponse.GetUserFeedResult.getUserFeeds,
         length:findresponse.GetUserFeedResult.getUserFeeds.length,
         // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
       })
       Promise.all(
               findresponse.GetUserFeedResult.getUserFeeds.map(
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
             // console.log(urls);
             // console.log(datas);
          let arr3 = [];                                  // to combine the results of the two arrays
                  urls.forEach((itm, i) => {
                           arr3.push(Object.assign({}, itm, datas[i]));
                       });

<<<<<<< HEAD
              console.log(arr3.length);
=======
             // console.log(arr3.length);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
            // let arr4 = [];
            var count = 0;                                //Count for number of Computer Tiggered Alerts
            arr3.map((dyanamicData1,key)=>(dyanamicData1.GetImageDataResult !== "") ?
            count:count++
              )
<<<<<<< HEAD
             console.log(count)

             this.setState({  data1:arr3 , array_count:arr3.length , alert_count:count })
              console.log(arr3)
=======
            // console.log(count)

             this.setState({  data1:arr3 , array_count:arr3.length , alert_count:count })
             // console.log(arr3)
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

             //  console.log(arr4);
             var total = this.state.array_count;
<<<<<<< HEAD
              console.log(total);
=======
             // console.log(total);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f

             if(total === 0)
              {
                this.setState({  disabledNext: true })
              }


              //  console.log(this.state.data1.map((dyanamicData1,key)=>  dyanamicData1.HasRead ))
            this.state.data1.map((dyanamicData1) =>

              (dyanamicData1.HasRead == "False")   ?                                              //To MarkUserFeedAsRead

                         // difficult_tasks=dyanamicData1.ID


                         fetch( 'https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/MarkUserFeedAsRead',
                           // 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/MarkUserFeedAsRead',
                         {
                          method: "POST",
                          body: JSON.stringify({
                            "UserID":cookie.load('Id'),
                            "UserToken":cookie.load('UserToken'),
                            "UserFeedID":dyanamicData1.ID,
                            "IsAllRead": "false"
                          }),
                           headers: new Headers({'content-type': 'application/json'}),
                         })
                     .then((Response)=> Response.json())
                     .then((findresponse)=>{
<<<<<<< HEAD
                        console.log(findresponse);
=======
                       // console.log(findresponse);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
                       this.setState({
                          data:findresponse.MarkUserFeedAsReadResult.resultStatus.Status,

                          // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
                        })
<<<<<<< HEAD
                        console.log(this.state.data);
                         if(this.state.ResultStatus.Status !== "1"){
                           alert(this.state.ResultStatus.StatusMessage);
=======
                       // console.log(this.state.data);
                         if(this.state.data !== "1"){
                           alert(this.state.resultStatus.StatusMessage);
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
                         }
                        else
                        {
                           window.location.reload();
                        }

                       })

                      : null

            );

         })


              })


        }

        handleEnlarge(value1,value2,value3,value4) {

          // var imgid = `${value3}`;
          //  console.log(imgid);

              //  console.log(imgid);
              this.setState({
                redirectToReferrer: true ,
                imgid: `${value1}`,
                cameraid: `${value2}`,
                name:`${value3}`,
                date:`${value4}`


              })

        }
        handleExit()
        {
          this.setState({
              redirectToReferrer:false ,

          });
        }

  render() {


    //
    // var img_Date = this.state.DateCreated +" "+ 'UTC' ;      //Convert UTC to Local Time
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

          <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="margT10">Activity is detected in {this.state.name} on {" "}
              {moment(new Date(this.state.date +" "+ 'UTC').toString()).format('DD-MMM-YYYY hh:mm:ss A')}

            </p>
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-lg-3">

                <div className="howlbackfull" primary label="Exit" onClick={(e)=>this.handleExit(e)}>BACK</div>

          </div>
          </div>
          </div>
        </div>

         )

      }
      if( this.state.alert_count === 20){
  return(



      <div className="box box-default dkShadow">
        <div className="box-body ">
          <h4>No camera Recorded Alerts for this page</h4>
            <div>
              <RaisedButton primary label="Next ->" onClick={()=>this.handleNext(this.state.counter)}
                   disabled={this.state.disabledNext}
                 />
                   <span className="float-right">
                       <RaisedButton primary label="<- Back" onClick={()=>this.handleBack(this.state.counter)}
                             disabled={this.state.disabledBack}/>
                  </span>
             </div>
           </div>

         </div>

  )
}
  return (




    <div className="row" >

    <div className="row alertButtons">
      <div className="col-lg-3 howlbcircle" primary label="<- Back" onClick={()=>this.handleBack(this.state.counter)}
      disabled={this.state.disabledBack}>&lt;</div>

         <div className="howlncircle col-lg-3"
            primary label="Next ->"
            onClick={()=>this.handleNext(this.state.counter)}
            disabled={this.state.disabledNext}>&gt;</div>

     </div>



          {
            this.state.data1.map((dyanamicData1,key)=>


            dyanamicData1.GetImageDataResult === ""

            ?

           null

         :

            <div className="col-lg-6" onClick={()=>this.handleEnlarge(dyanamicData1.GetImageDataResult,dyanamicData1.getRoomCamera.CameraID,dyanamicData1.getRoomCamera.Name,dyanamicData1.DateCreated)}>
              <div className="box box-default   ">
                <div className="box-body alerts">



                  <div className="row">
                  <div className="col-lg-8">
                  <h1>{dyanamicData1.Text}</h1>
                            {/* {dyanamicData1.HasRead} */}
                            <h2>{moment(new Date(dyanamicData1.DateCreated +" "+ 'UTC').toString()).format('DD-MMM-YYYY hh:mm:ss A')}</h2>
                  </div>
                  <div className="col-lg-4">

                    <img className="alertImage" src={`data:image/jpg;base64,${dyanamicData1.GetImageDataResult}`} alt="Image" height="50" width="50"/>
                    </div>
                  </div>
                        </div>
                     </div>
                         </div>




             )}



      </div>



    );
  }
 }

const Page = () => {
  return (


      <QueueAnim type="bottom" className="ui-animate">

        <div key="1" className="alertContainer">
        <Alerts />
        </div>

      </QueueAnim>

  )
}

module.exports = Page;
