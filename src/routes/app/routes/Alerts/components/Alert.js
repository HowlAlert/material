import React from 'react';
import QueueAnim from 'rc-queue-anim';
// import update from 'immutability-helper';
import cookie from 'react-cookies';
class Alerts extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
        data1: [],
        a:[],
        a1:[]

      };
  }




  componentDidMount(){

   var that = this;
    var urls = [];
    var a1 =[];
    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

        fetch(BaseURL,
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":cookie.load('Id'),
           "UserToken":cookie.load('UserToken')
         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{
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
                 // urls[element.ImageURL] = element
                 // urls[element.ImageURL].GetImageDataResult = datas[i]
                 urls[i] = element

               })

               console.log(datas);
           console.log(urls);

           this.setState({
              data1:datas,
              // a:urls.map((number) => number.Text),


            })

          // console.log(this.state.a)


         })
              })

        }

               // findresponse.GetUserFeedResult.getUserFeeds.map((url1) =>
               //   fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
               //                         {
               //
               //                              method: "POST",
               //                              body: JSON.stringify({
               //                                "url":url1.ImageURL
               //
               //                              }),
               //
               //                             headers: new Headers({'content-type':'application/json'}),
               //
               //                       })
               //                       .then((Response)=> Response.json())
               //
               //                    .then((findresponse1)=>{
               //
               //                      // this.setState({
               //
               //                          // data1: <ul>
               //                          //             <li>{findresponse1.GetImageDataResult}</li>
               //                          //        </ul>
               //                          //
               //                          //          })
               //
               //
               //
               //                      })
               //
               //                )



        //
        //     })
        //
        // }
  // componentDidMount(){
  //
  //   const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';
  //
  //       fetch(BaseURL,
  //       {
  //        method: "POST",
  //        body: JSON.stringify({
  //          "UserID":"49",
  //          "UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSODNF5lNSmJktLD5Rdp3S9P1OEtVADBKLnyRBmebfCFt+ZjA5NifJ7QRFJsaYVEpfKQ=="
  //        }),
  //         headers: new Headers({'content-type': 'application/json'}),
  //       })
  //   .then((Response)=> Response.json())
  //   .then((findresponse)=>{
  //     this.setState({
  //        data:findresponse.GetUserFeedResult.getUserFeeds,
  //        length:findresponse.GetUserFeedResult.getUserFeeds.length,
  //        // a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
  //      })
  //              findresponse.GetUserFeedResult.getUserFeeds.map((url1) =>
  //                fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
  //                                      {
  //
  //                                           method: "POST",
  //                                           body: JSON.stringify({
  //                                             "url":url1.ImageURL
  //
  //                                           }),
  //
  //                                          headers: new Headers({'content-type':'application/json'}),
  //
  //                                    })
  //                                    .then((Response)=> Response.json())
  //
  //                                 .then((findresponse1)=>{
  //
  //                                   // this.setState({
  //
  //                                       // data1: <ul>
  //                                       //             <li>{findresponse1.GetImageDataResult}</li>
  //                                       //        </ul>
  //                                       //
  //                                       //          })
  //
  //
  //
  //                                   })
  //
  //                             )
  //
  //
  //
  //
  //           })
  //
  //       }
      // console.log(findresponse)
      // this.setState({
      //    data:findresponse.GetUserFeedResult.getUserFeeds,
      //    length:findresponse.GetUserFeedResult.getUserFeeds.length,
      //    a:findresponse.GetUserFeedResult.getUserFeeds.map((number) => number.ImageURL),
      //     for(var i=0; i < this.state.a.length; i++){
      //              a.map((number,key) =>
      //               fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
      //                       {
      //
      //                            method: "POST",
      //                            body: JSON.stringify({
      //                              "url":this.state.a[i]
      //                               // "url":this.state.url1
      //                            }),
      //
      //                           headers: new Headers({'content-type':'application/json'}),
      //
      //                     })
      //                     .then((Response)=> Response.json())
      //
      //                  .then((findresponse1)=>{
      //
      //                    // var obj = {
      //                    //     length: 0,
      //                    //
      //                    //     addElem: function addElem(elem) {
      //                    //         // obj.length is automatically incremented
      //                    //         // every time an element is added.
      //                    //         [].push.call(this, elem);
      //                    //         this.setState({
      //                    //          data1:<img src={`data:image/jpg;base64,${elem}`} alt="Image" height="150" width="150"/>
      //                    //
      //                    //               })
      //                    //     }
      //                    // };
      //
      //
      //                  })
      //
      //
      //    )
      // })
      //
      // console.log(this.state.length)
      // console.log(this.state.data)
      // console.log(this.state.a)
      // console.log(this.state.a1)
      // console.log(this.state.a.length)

      // const a = this.state.data.map((number) => number.ImageURL);
      // console.log(a);
       // for(var i=0; i < this.state.length; i++) {
       //        // const posts = findresponse.GetUserFeedResult.getUserFeeds[i].ImageURL;
       //        //  console.log(posts);
       //         // a.push(posts);
       //         this.setState({
       //          array: a.push(findresponse.GetUserFeedResult.getUserFeeds[i].ImageURL)
       //         })
       //
       //         console.log(array);
       //
       //  }

//
//       this.setState({
//          // url1:findresponse.GetUserFeedResult.getUserFeeds["0"].ImageURL
//             a:this.state.data.map((number) => number.ImageURL)
//       })
//       //
//       console.log(this.state.a)
//       console.log(this.state.a.length)
//
//
// for(var i=0; i < this.state.a.length; i++){
//                fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
//                     {
//
//                          method: "POST",
//
//                          body: JSON.stringify({
//                            // "url":dyanamicData.ImageURL
//
//                                "url":this.state.a[i]
//
//                         }),
//                         headers: new Headers({'content-type':'application/json'}),
//
//                   })
//
//
//                .then((Response)=> Response.json())
//
//                .then((findresponse1)=>{
//
//               for(var i=0; i < this.state.a.length; i++){
//            this.setState({
//                 data1:findresponse1.GetImageDataResult
//                    // this.setState({
//                    //    // data:<img src={`data:image/jpg;base64,${findresponse1.GetImageDataResult}`} alt="Image" height="150" width="150"/>
//                    //
//                   })
//                 }
//                    console.log(this.state.data1)
//                    // for(var i=0; i < this.state.length; i++){
//                    //   data2:findresponse1.GetImageDataResult
//                    // }
//                    // console.log(JSON.stringify(this.state.data1))
//
//                          // this.setState({
//                          //    // url1:findresponse.GetUserFeedResult.getUserFeeds["0"].ImageURL
//                          //       a1:this.state.data1.map((number) => number)
//                          // })
//                          // console.log(a1);
//                          //  console.log(a1[0])
//                })
// }

//       findresponse.GetUserFeedResult.getUserFeeds.map((dyanamicData,key)=>
//
//                fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
//                     {
//
//                          method: "POST",
//                          body: JSON.stringify({
//                            "url":dyanamicData.ImageURL
//                             // "url":this.state.url1
//                          }),
//
//                         headers: new Headers({'content-type':'application/json'}),
//
//                   })
//
//
//                .then((Response)=> Response.json())
//
//                .then((findresponse1)=>{
//
//                  console.log(findresponse1)
//                        this.setState({
//
//                              data2:findresponse1
//
//
//                        })
//
//                        a['GetImageDataResult'].push(this.state.data2);
//                        // //
//                        console.log(a)
//                    // this.setState({
//                    //    // data1:findresponse1
//                    //   a:findresponse1.map((number) => number.GetImageDataResult)
//                    //    // for(i=0;i<20;i++){
//                    //    //   data2:[findresponse1.GetImageDataResult]
//                    //    // }
//                    //
//                    // })
//                    // this.setState({
//                    //                       data1:findresponse1
//                    //                       // for(i=0;i<20;i++){
//                    //                       //   data2:[findresponse1.GetImageDataResult]
//                    //                       // }
//                    //
//                    //                    })
//                             // console.log(this.state.data1)
//
// //                             this.setState({
// //                                data2: this.state.data1.map((Data,key)=>Data.GetImageDataResult)
// // console.log(this.state.data2)console.log(this.state.data2)
//                })
//
//             )



  render() {


    // console.log(this.state.data.map(d => <li key={d.ImageURL}>{d.ImageURL}</li>))

    // console.log(this.state.data.length)





    return (

    <div className="row">
      <div className="col-xl-12">



        <div className="box box-default">
          <div className="box-body">
            {
                this.state.data.map((dyanamicData,key)=>

        <div>

          {
              this.state.data1.map((dyanamicData1,key)=>


                 <div className="box box-default">
                     <div className="box-body ">
                          {/* <img src={`data:image/jpg;base64,${dyanamicData.GetImageDataResult}`} alt="Image" height="150" width="150"/> */}

                            {dyanamicData.Text}
                         <div>  {dyanamicData.DateCreated}{" "}

                             <span className="float-right">

                                 <img src={`data:image/jpg;base64,${dyanamicData1.GetImageDataResult}`} alt="Image" height="150" width="150"/>
                             </span>
                     </div>

                </div>
              </div>

             )
            }
        </div>
)
}
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
