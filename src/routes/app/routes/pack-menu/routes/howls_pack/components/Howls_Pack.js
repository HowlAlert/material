import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import cookie from 'react-cookies';


class Pack extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
      };

  }
  componentDidMount(){

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetMyPoundList';

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
           data:findresponse.GetMyPoundListResult.GetMyPounds,

        })



      })

  }
  render() {
    // var mes = this.state.data[0].HowlType;
    // console.log(mes)
    //
    //
    // if(mes === 1)
    // {
    //   var message="You Howled at"
    //   console.log(message)
    // }
    // if(mes === 2){
    //   var message="Howled back"
    //   console.log(message)
    // }


    return (
      <div >

          {
            this.state.data.map((dyanamicData,key) =>

                 <div>

                      <div className="box box-default">
                          <div className="box-body ">

                                 <div className="col-xl-12 ">


                                   {dyanamicData.HowlType === "1"  ?  `You HOWLED at ${dyanamicData.ReceiverPack.FirstName} ${dyanamicData.ReceiverPack.LastName}`
                                                 :  `${dyanamicData.ReceiverPack.FirstName} ${dyanamicData.ReceiverPack.LastName} HOWLED back `}{" "}
                                       {"on " + dyanamicData.DateCreated}</div>

                          </div>
                     </div>
            </div>
           )
          }
        </div>


    );
}
}
const Page = () => {
  return (

      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Pack /></div>
      </QueueAnim>
  
  )
}

module.exports = Page;
