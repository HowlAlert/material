import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import cookie from 'react-cookies';
import Howls_Pack from '../../howls_pack/components/Howls_Pack'
import moment from 'moment';

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
           time:findresponse.GetPackPoundListResult.GetPackPounds["0"].DateCreated
        })

         // console.log(this.state.time);
         // var ms = this.state.time;
         // console.log(ms)
         //     var v = moment(ms).format('YYYY-MM-DD HH:MM:SS');
         //
         //     var gmtDateTime = moment.utc(v, "YYYY-MM-DD HH:MM:SS");
         //         console.log(gmtDateTime);
         //     var local = gmtDateTime.local().format('YYYY-MMM-DD h:mm A');
         //     console.log(local)


      })

  }
render() {

//   var gmtDateTime = moment.utc("2015-10-24 20:00", "YYYY-MM-DD HH")
// var local = gmtDateTime.local().format('YYYY-MMM-DD h:mm A');
// console.log(local)


  return (

    <div className="row">
      <div className="col-xl-6">

        <div className="box box-default">
          <div className="box-body">
    <h2 className="article-title-header">Howls at Me</h2>

        {
          this.state.data.map((dyanamicData,key) =>

               <div>

                    <div className="box box-default">
                        <div className="box-body col-xl-12">

                                 {dyanamicData.HowlType === "1"  ?
                                       `${dyanamicData.SenderUser.FirstName} ${dyanamicData.SenderUser.LastName} HOWLED at you `
                                      : `You HOWLED back at ${dyanamicData.SenderUser.FirstName} ${dyanamicData.SenderUser.LastName}`
                                       }{" "}
                              {"on " +

                                   moment.utc(moment(dyanamicData.DateCreated).format('YYYY-MM-DD HH:MM:SS'), "YYYY-MM-DD HH:MM:SS").local().format('DD-MMM-YYYY h:mm A')
                              }


                          </div>

                        </div>
                   </div>

         )
        }

      </div>
    </div>
  </div>


      <div className="col-xl-6">
        <div className="box box-default">
          <div className="box-body">
          <h2 className="article-title-header">Howls At Pack</h2>

          <Howls_Pack />
      </div>
    </div>
  </div>
 </div>

  );
}
}

const Page = () => {
  return (


      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Incoming /></div>
      </QueueAnim>


  )
}

module.exports = Page;
