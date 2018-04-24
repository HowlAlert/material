import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import cookie from 'react-cookies';
import moment from 'moment';


class Alerts extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
        data1: [],
        data2:[]

      };
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

             // console.log(arr3.length);
             // this.setState({  data1:arr3 , array_count:arr3.length })
            let arr4=[];
            arr4=  arr3.slice(0, 3);
            // console.log(arr4);
              this.setState({  data2:arr4 , array_count:arr4.length })
              console.log(arr4.length);
              console.log(this.state.data2);
         })
              })

        }

  render() {

  return (


    <div >


          <h2 className="article-title-header ">News & Alerts </h2>
         <div className=" box-default">


         {
                this.state.data2.map((dyanamicData1,key)=>
                     <div className="box box2 box-default">
                         <div className="box-body ">

                            <div className="row">
                              <div className="col-lg-8">
                                <span className="detectClass">{dyanamicData1.Text}</span>
                                <span className="timeClass">
                                  {/* {dyanamicData1.DateCreated}{" "} */}
                                     {moment(new Date(dyanamicData1.DateCreated +" "+ 'UTC').toString()).format('DD-MMM-YYYY hh:mm:ss A')}
                                </span>
                              </div>
                              <div className="col-lg-4">
                              <span className="float-right">

                                {
                                  dyanamicData1.GetImageDataResult === "" ?
                                          <img src="assets/images/Howl-Final-Light-Blue-small.png" alt="Image" height="50" width="50"/>
                                      :   <img className="alertImage" src={`data:image/jpg;base64,${dyanamicData1.GetImageDataResult}`} alt="Image" height="50" width="50"/>
                                }{" "}

                              </span>
                              </div>
                           </div>


                             <div>

                           </div>
                    </div>
                  </div>

                 )}

       </div>
        <a href="#/app/Alerts" className="blueButton">See All Alerts </a>
    </div>

    );
  }
 }


const Page = () => {
  return (


    <section className=" chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Alerts /></div>
      </QueueAnim>
    </section>

  )
}

module.exports = Page;
