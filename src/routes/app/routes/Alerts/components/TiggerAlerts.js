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
        disabledMore: false
        // disabled1: false,
        // disabled2: true
      };
  }

  handleDelete(value) {

    alert("Are you sure you want to delete?")

      var alertid = `${value}`;
      console.log(alertid)
    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/DeleteUserFeed';

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
        console.log(findresponse)

        this.setState({
                 status:findresponse.DeleteUserFeedResult.resultStatus.Status,
                 message:findresponse.DeleteUserFeedResult.resultStatus.StatusMessage
                   })

                   // console.log(this.state.status);
                   // console.log(this.state.message);
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
                              //Redirecting to next page of alerts
    var count = `${value}`;
    console.log(count);

    this.setState({
        counter: this.state.counter + 1,
        disabledBack: false,
        // disabled2: false,
    });


      var that = this;
       var urls = [];
       var a1 =[];
       // console.log(this.state.counter);


       const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

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
         console.log(findresponse);
         this.setState({
            data:findresponse.GetUserFeedResult.getUserFeeds,
            length:findresponse.GetUserFeedResult.getUserFeeds.length,
            // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
          })
          Promise.all(
                  findresponse.GetUserFeedResult.getUserFeeds.map(
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
                console.log(datas);
             let arr3 = [];                                  // to combine the results of the two arrays
                     urls.forEach((itm, i) => {
                              arr3.push(Object.assign({}, itm, datas[i]));
                          });
                          var count = 0;                                //Count for number of Computer Tiggered Alerts
                          arr3.map((dyanamicData1,key)=>(dyanamicData1.GetImageDataResult !== "") ?
                          count:count++
                            )
                          console.log(count)

                          console.log(arr3.length);
                          this.setState({  data1:arr3 , array_count:arr3.length , alert_count:count})


                          var total = this.state.array_count;
                          console.log(total);

                          if(total === 0 || total < 20 )
                           {
                              alert("No more Alerts!");

                                 this.setState({
                                      disabledMore: true,
                                      disableBack:false

                               });

                                 console.log(this.state.counter)
                           }

                          // if(total < 20)
                          //  {  alert("No more Alerts!");
                          //
                          //        this.setState({
                          //               counter: this.state.counter - 2,
                          //               disabled1: true,
                          //               disabled2:false
                          //          });
                          //  }



            })
                 })



 }


 handleBack(value) {                 //Redirecting to previous page of alerts

   // var count = `${value}`;
   // console.log(count);

console.log(this.state.counter);
    this.setState({
        counter: this.state.counter - 1,

    });


    // var total = this.state.array_count;
    // console.log(total);
    // if(total == 20)
    //  {
    //        this.setState({
    //               disabled: false
    //          });
    //  }


    // if(this.state.counter <= 1)
    //  {  alert("No more Alerts!");
    //
    //       this.setState({
    //
    //             disabled2: true,
    //             disabled1: false,
    //             counter: this.state.counter + 1,
    //          });
    //  }

     var that = this;
      var urls = [];
      var a1 =[];
      // console.log(this.state.counter);


      const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

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
        console.log(findresponse);
        this.setState({
           data:findresponse.GetUserFeedResult.getUserFeeds,
           length:findresponse.GetUserFeedResult.getUserFeeds.length,
           // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
         })
         Promise.all(
                 findresponse.GetUserFeedResult.getUserFeeds.map(
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
               //console.log(urls);
               //console.log(datas);
            let arr3 = [];                                  // to combine the results of the two arrays
                    urls.forEach((itm, i) => {
                             arr3.push(Object.assign({}, itm, datas[i]));
                         });

                         console.log(arr3.length);

                         var count = 0;                                //Count for number of Computer Tiggered Alerts
                         arr3.map((dyanamicData1,key)=>(dyanamicData1.GetImageDataResult !== "") ?
                         count:count++
                           )
                         console.log(count)

                         this.setState({  data1:arr3 ,
                           array_count:arr3.length ,
                           counter: this.state.counter,
                           alert_count:count

                             })

                             console.log(this.state.data1);
                             // var total = this.state.array_count;
                             // console.log(total);

                             var countBack = this.state.counter-1;
                             console.log(countBack);

                             if(countBack === 1)
                              {
                                 // alert("No Images Recorded!");
                                    console.log(this.state.disabledMore);
                                      console.log(this.state.disableBack);

                                    this.setState({
                                          disabledMore: false,
                                        disabledBack: true


                                     });

                                    // console.log(this.state.counter);
                              }


           })
                })



 }

  componentDidMount(){

   var that = this;
    var urls = [];
    var a1 =[];
    // console.log(this.state.counter);


    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

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
      console.log(findresponse);
      // console.log(findresponse.GetUserFeedResult.getUserFeeds.map((dyanamicData1,key)=>  dyanamicData1.HasRead ))
      this.setState({
         data:findresponse.GetUserFeedResult.getUserFeeds,
         length:findresponse.GetUserFeedResult.getUserFeeds.length,
         // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
       })
       Promise.all(
               findresponse.GetUserFeedResult.getUserFeeds.map(
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
             //console.log(urls);
             //console.log(datas);
          let arr3 = [];                                  // to combine the results of the two arrays
                  urls.forEach((itm, i) => {
                           arr3.push(Object.assign({}, itm, datas[i]));
                       });

             console.log(arr3.length);
            // let arr4 = [];
            var count = 0;                                //Count for number of Computer Tiggered Alerts
            arr3.map((dyanamicData1,key)=>(dyanamicData1.GetImageDataResult !== "") ?
            count:count++
              )
            console.log(count)

             this.setState({  data1:arr3 , array_count:arr3.length , alert_count:count })
             console.log(arr3)

             // console.log(arr4);
             var total = this.state.array_count;
             console.log(total);

             if(total === 0)
              {
                this.setState({
                  disabledMore: true ,


                })
              }
              else {
                this.setState({ disabledMore: false })

              }

              // console.log(this.state.data1.map((dyanamicData1,key)=>  dyanamicData1.HasRead ))
            // this.state.data1.map((dyanamicData1) =>
            //
            //   (dyanamicData1.HasRead == "False")   ?
            //
            //              // difficult_tasks=dyanamicData1.ID
            //
            //              fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/MarkUserFeedAsRead',
            //              {
            //               method: "POST",
            //               body: JSON.stringify({
            //                 "UserID":cookie.load('Id'),
            //                 "UserToken":cookie.load('UserToken'),
            //                 "UserFeedID":dyanamicData1.ID
            //               }),
            //                headers: new Headers({'content-type': 'application/json'}),
            //              })
            //          .then((Response)=> Response.json())
            //          .then((findresponse)=>{
            //            console.log(findresponse);
            //            this.setState({
            //               data:findresponse.GetUserFeedResult.getUserFeeds.HasRead,
            //               length:findresponse.GetUserFeedResult.getUserFeeds.length,
            //               // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
            //             })
            //            console.log(this.state.data);
            //              if(this.state.ResultStatus.Status !== "1"){
            //                alert(this.state.ResultStatus.StatusMessage);
            //              }
            //
            //            })
            //
            //           : null
            //
            // );
            //   console.log(difficult_tasks);
         })


              })


        }

        handleEnlarge(value1,value2,value3,value4) {

          // var imgid = `${value3}`;
          // console.log(imgid);

              // console.log(imgid);
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

            <span className="float-right">
                    <RaisedButton primary label="Exit" onClick={(e)=>this.handleExit(e)}/>

            </span>
          <div>
            <center>Activity is detected in {this.state.name} on {" "}
              {moment(new Date(this.state.date +" "+ 'UTC').toString()).format('DD-MMM-YYYY hh:mm:ss A')}

            </center>
          </div>
          </div>
        </div>

         )

      }
      if( this.state.alert_count === 20){
  return(



      <div className="box box-default">
      <div className="box-body ">


           <h4>No camera Recorded Alerts for this page</h4>



            <div>
                 <RaisedButton primary label="Next ->" onClick={()=>this.handleNext(this.state.counter)}

                   disabled={this.state.disabledNext}/>
                   <span className="float-right">
                           <RaisedButton primary label="<- back" onClick={()=>this.handleBack(this.state.counter)}   disabled={this.state.disabledBack}/>
                  </span>
             </div>
           </div>

         </div>

  )
}
  return (


    <div >



          {
            this.state.data1.map((dyanamicData1,key)=>


            dyanamicData1.GetImageDataResult === ""

            ?

           null

         :
           <Menu>

                        <MenuItem onClick={()=>this.handleEnlarge(dyanamicData1.GetImageDataResult,dyanamicData1.getRoomCamera.CameraID,dyanamicData1.getRoomCamera.Name,dyanamicData1.DateCreated)}>
                          <div className="box box-default  ">
                              <div className="box-body ">

                           {dyanamicData1.Text}
                            {/* {dyanamicData1.HasRead} */}
                            {moment(new Date(dyanamicData1.DateCreated +" "+ 'UTC').toString()).format('DD-MMM-YYYY hh:mm:ss A')}
                          <span className="float-right">
                            <img className="alertImage" src={`data:image/jpg;base64,${dyanamicData1.GetImageDataResult}`} alt="Image" height="50" width="50"/>
                          </span>
                        </div>
                     </div>
                         </MenuItem>

                            {/* <span className="float-right">

                                        {/* <img src="assets/images/Howl-Final-Light-Blue-small.png" alt="Image" height="75" width="75"/> */}
{/*
                              <img src={`data:image/jpg;base64,${dyanamicData1.GetImageDataResult}`} alt="Image" height="75" width="75"/>



                         <div>
                             {dyanamicData1.DateCreated}{" "}
                       </div> */}


                {/* <span className="float-left">
                   <div className="text-center"> <RaisedButton primary label="Delete" onClick={()=>this.handleDelete(dyanamicData1.ID)}/></div>
                </span> */}

</Menu>
             )}

        <div>
             <RaisedButton primary label="Next ->" onClick={()=>this.handleNext(this.state.counter)}

               disabled={this.state.disabledNext}/>
               <span className="float-right">
                       <RaisedButton primary label="<- back" onClick={()=>this.handleBack(this.state.counter)}   disabled={this.state.disabledBack}/>
              </span>
         </div>

      </div>



    );
  }
 }

const Page = () => {
  return (


      <QueueAnim type="bottom" className="ui-animate">

        <div key="1"><Alerts /></div>

      </QueueAnim>

  )
}

module.exports = Page;
