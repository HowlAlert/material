import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';
import cookie from 'react-cookies';
class Pack extends React.Component {

  constructor() {
    super();
    this.state = {
        search: '',

        data: [],
        data1: [],
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserPack';

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
           data:findresponse.GetUserPackResult.UserPackList,
           data1:findresponse.GetUserPackResult,
           data2:findresponse.GetUserPackResult.AvgResTimeOfPoundBack

         })
      })

  }

  updateSearch(event) {

    this.setState({
      search: event.target.value.substr(0,35)
    });
  }


  handleDelete(value) {

    alert("Are you sure you want to delete?")

      var packid = `${value}`;
      console.log(packid)
    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/DeleteFromUserPack';

        fetch(BaseURL,
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":cookie.load('Id'),
           "UserToken":cookie.load('UserToken'),
           "UserPackID" :packid
         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{
        console.log(findresponse)

        this.setState({
                 status:findresponse.DeleteFromUserPackResult.ResultStatus.Status,
                 message:findresponse.DeleteFromUserPackResult.ResultStatus.StatusMessage
                   })

                   // console.log(this.state.status);
                   // console.log(this.state.message);
                   if(this.state.status === "0")
                   {
                     alert(this.state.message);

                   }

                   else {

                       alert("Deleted Pack Member!")

                   }

      })


  }



  render() {
    const ms = this.state.data2
    var v = moment.utc(moment.duration({'s':ms}).asMilliseconds()).format("HH :mm :ss");

    let filteredNames = this.state.data.filter(
      (dynamicdata)=>{
        return dynamicdata.FirstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }

  );

    return (

       <div className="box box-transparent">
       <h2 className="article-title text-center">
       <input type="text" value={this.state.search}
           name="search"
           onChange={this.updateSearch.bind(this)}
           placeholder="Search Pack"
           />
       </h2>

      <div className="box-body padding-xl">
        <div className="row">
            <div className="col-md-4 text-center">Howls At Pack <div> {this.state.data1.TotalMyPound}</div></div>
            <div className="col-md-4 float-right text-center">Howls At Me <div > {this.state.data1.TotalPackPound}</div> </div>
            <div className="col-md-4">My Average Response Time <div> {v} </div></div>

        </div>

              <div>
                {

                     filteredNames.map((dyanamicData,key)=>

                     <div className="box box-default">
                         <div className="box-body ">
                        {dyanamicData.FirstName} {" "}
                        {dyanamicData.PhoneNumber}
                        {/* <div>                    //Get individual pack id
                          {dyanamicData.ID}
                        </div> */}

                        <span className="float-right">
                          {/* <RaisedButton primary label="Delete" onClick={(e)=>this.handleDelete(e,dyanamicData.ID)}/> */}
                          <RaisedButton primary label="Delete" onClick={()=>this.handleDelete(dyanamicData.ID)}/>

                        </span>

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
      <h2 className="article-title text-center">MANAGE PACK </h2>
      <button className="float-right"><a href="page-layout#/app/pglayout/packcontact">ADD NEW PACK MEMBER </a></button>
    </div>

   <section className="chapter">
     <QueueAnim type="bottom" className="ui-animate">
       <div key="1"><Pack /></div>
     </QueueAnim>
   </section>
  </article>
);

module.exports = Page;
