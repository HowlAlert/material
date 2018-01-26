import React from 'react';
import QueueAnim from 'rc-queue-anim';


class Alerts extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
      };
  }
  componentDidMount(){

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserFeed';

        fetch(BaseURL,
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":"118",
           "UserToken":"Dbr/k5trWmO3XRTk3AWfX90E9jwpoh59w/EaiU9df/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk/n3QJcNSOMbyj6Rd6AJ7rL/rHD/j/TqPCcFR/UM4i0I0zfWrSegeLHB3EjO//ziEk9gyXySjSVK/GPmT7Qvu"
         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{

      var ImageURL = findresponse.GetUserFeedResult.getUserFeeds.map((dyanamicData,key)=>

               fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetImageData',
                    {

                         method: "POST",
                         body: JSON.stringify({
                           "url":dyanamicData.ImageURL
                         }),

                        headers: new Headers({'content-type':'application/json'}),

                  })


               .then((Response)=> Response.json())

               .then((findresponse1)=>{
                   console.log(findresponse1)
                   console.log(findresponse1.GetImageDataResult.length)
                   this.setState({
                      data1:findresponse1
                   })

               })

             )
        console.log(findresponse)
        this.setState({
           data:findresponse.GetUserFeedResult.getUserFeeds,
        })
      })

  }
  render() {
    const numbers = this.state.data1;
    console.log(numbers)
    return (

    <div className="row">
      <div className="col-xl-12">
        <div className="box box-default">
          <div className="box-body">

            {
              this.state.data.map((dyanamicData,key)=>
              <div>
                 <div className="box box-default">
                     <div className="box-body ">
                            {dyanamicData.Text}
                           <div>  {dyanamicData.DateCreated}</div>

                      <span className="float-right">

                          <img src={`data:image/jpg;base64,${this.state.data1.GetImageDataResult}`} alt="Image" height="150" width="150"/>

                      </span>


                     </div>
                </div>
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
