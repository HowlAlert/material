import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import cookie from 'react-cookies';


class Incoming extends React.Component {
  constructor() {
    super();
      this.state = {
        data: [],
      };

  }

  componentDidMount(){

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetPackPoundList';

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
        console.log(findresponse)
        this.setState({
           data:findresponse.GetPackPoundListResult.GetPackPounds,

        })



      })

  }
render() {


  return (

    <div className="row">
      <div className="col-xl-12">
        <div className="box box-default">
          <div className="box-body">


        {
          this.state.data.map((dyanamicData,key) =>

               <div>

                    <div className="box box-default">
                        <div className="box-body col-xl-12">

                                 {dyanamicData.HowlType === "1"  ?
                                       `${dyanamicData.SenderUser.FirstName} ${dyanamicData.SenderUser.LastName} HOWLED at you `
                                      : `You HOWLED back at ${dyanamicData.SenderUser.FirstName} ${dyanamicData.SenderUser.LastName}`
                                       }{" "}
                              {"on " + dyanamicData.DateCreated}

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
    <center><h2 className="article-title">Howls at Me</h2></center>
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Incoming /></div>
      </QueueAnim>
    </section>
  </article>
  )
}

module.exports = Page;
