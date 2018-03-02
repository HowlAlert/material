import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import cookie from 'react-cookies';
class Alerts extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
        data1: [],
        counter: 2,
        disabled1: false,
        disabled2: true
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
           "UserPackID" :alertid
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

                   else {  alert("Deleted Alert!")    }

       })


  }


  handleNext(value) {
                              //Redirecting to next page of alerts
    var count = `${value}`;
    console.log(count);

    this.setState({
        counter: this.state.counter + 1,
        disabled2: false,
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

                          console.log(arr3.length);
                          this.setState({  data1:arr3 , array_count:arr3.length })


                          var total = this.state.array_count;
                          console.log(total);

                          if(total < 20)
                           {  alert("No more Alerts!");

                                 this.setState({
                                        counter: this.state.counter - 2,
                                        disabled1: true,
                                        disabled2:false
                                   });
                           }



            })
                 })



 }
 handleBack(value) {                 //Redirecting to previous page of alerts

   var count = `${value}`;
   console.log(count);


    this.setState({
        counter: this.state.counter - 1,
        disabled1: false
    });


    // var total = this.state.array_count;
    // console.log(total);
    // if(total == 20)
    //  {
    //        this.setState({
    //               disabled: false
    //          });
    //  }


    if(this.state.counter <= 1)
     {  alert("No more Alerts!");

          this.setState({

                disabled2: true,
                disabled1: false,
                counter: this.state.counter + 1,
             });
     }

     var that = this;
      var urls = [];
      var a1 =[];
      console.log(this.state.counter);


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
               //console.log(urls);
               //console.log(datas);
            let arr3 = [];                                  // to combine the results of the two arrays
                    urls.forEach((itm, i) => {
                             arr3.push(Object.assign({}, itm, datas[i]));
                         });

                         console.log(arr3.length);
                         this.setState({  data1:arr3 , array_count:arr3.length })


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
             this.setState({  data1:arr3 , array_count:arr3.length })


         })
              })

        }




  render() {

  return (



          <div className="app-content-wrapper">
           <div className="app-content">
             <div className="full-height">

    <div className="row">
      <div className="col-xl-12">
        <div className="box box-default">
          <div className="box-body">

               <div>
                    <RaisedButton primary label="Next ->" onClick={()=>this.handleNext(this.state.counter)}

                      disabled={this.state.disabled1}/>
                      <span className="float-right">
                              <RaisedButton primary label="<- back" onClick={()=>this.handleBack(this.state.counter)}   disabled={this.state.disabled2}/>
                     </span>
                </div>


        <div>

          {
            this.state.data1.map((dyanamicData1,key)=>
                 <div className="box box-default">
                     <div className="box-body ">
                            {dyanamicData1.Text}
                         <div>
                             {dyanamicData1.DateCreated}{" "}
                             <span className="float-right">

                               {
                                 dyanamicData1.GetImageDataResult === "" ?
                                         <img src="assets/images/Howl-Final-Light-Blue-small.png" alt="Image" height="75" width="75"/>
                                     :   <img src={`data:image/jpg;base64,${dyanamicData1.GetImageDataResult}`} alt="Image" height="150" width="150"/>
                               }{" "}
                                 {/* <img src={`data:image/jpg;base64,${dyanamicData1.GetImageDataResult}`} alt="Image" height="150" width="150"/> {" "} */}

                                <div className="text-center"> <RaisedButton primary label="Delete" onClick={()=>this.handleDelete(dyanamicData.ID)}/></div>
                             </span>

                       </div>
                </div>
              </div>

             )}
        </div>

          </div>
        </div>
      </div>
    </div>

</div>
</div>
</div>

    );
  }
 }


const Page = () => {
  return (
  <article className="article">
    <center><h2 className="article-title">ALERTS</h2></center>
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Alerts /></div>
      </QueueAnim>
    </section>
  </article>
  )
}

module.exports = Page;
