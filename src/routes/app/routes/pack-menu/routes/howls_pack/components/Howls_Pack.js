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

          var mes = (this.state.data[0].HowlType === '2' ? true : false)
          console.log(mes)


      })

  }
  render() {

    var mes = this.state.data[0]
    console.log(mes)

    if(mes === 1)
    {
      var message="You Howled back at"
    }
    else if(mes === 2){
      var message="Howled back on"
    }


    return (

  <div className="box box-transparent">
  <h2 className=" text-center">
    <div>NO NEW HOWL</div>
  </h2>

      <div className="box-body padding-xl">
        <div className="row">


          {
            this.state.data.map((dyanamicData,key) =>

                 <div>

                      <div className="box box-default">
                          <div className="box-body ">

                                 <div className="col-md-12 text-center">

                                   {dyanamicData.HowlType}{" "}
                                   {dyanamicData.ReceiverPack.FirstName}{" "}
                                       {dyanamicData.ReceiverPack.LastName + "Howled back on"} {" "}
                                       {dyanamicData.ReceiverPack.DateCreated}</div>

                          </div>
                     </div>
            </div>
           )
          }
        </div>
      </div>

   </div>

    );
}
}

const Page = () => (
  <article>
    <div>
      <h2 className="article-title text-center">Howls At Pack </h2>

    </div>

   <section className="chapter">
     <QueueAnim type="bottom" className="ui-animate">
       <div key="1"><Pack /></div>
     </QueueAnim>
   </section>
  </article>
);

module.exports = Page;
