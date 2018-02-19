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
        // color_white: true,
        data: [],
        data1: [],
    };
    // this.handleChange = this.handleChange.bind(this);
  }
// changeColor1(){     this.setState({color_d1:  !this.state.color_d1})     }
  componentDidMount() {

    const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserPack';

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
           "UserPackID":packid
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


handleAlert(value1,value2) {

    // alert("Are you sure you want to Alert?");

      var packid = `${value1}`;
      console.log(packid);
      var name = `${value2}`;
      console.log(name)


               const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/PoundMyPackMember';

                fetch(BaseURL,
                    {
                        method: "POST",
                        body: JSON.stringify({"UserID":cookie.load('Id'),"UserToken":cookie.load('UserToken'), "UserPackIDs" :packid}),
                        headers: new Headers({'content-type': 'application/json'}),
                    })
                 .then((Response)=> Response.json())
                 .then((findresponse)=>{
                 console.log(findresponse)

                         this.setState({
                                     status:findresponse.PoundMyPackMemberResult.ResultStatus.Status,
                                     message:findresponse.PoundMyPackMemberResult.ResultStatus.StatusMessage,
                                     // pound:findresponse.PoundMyPackMemberResult.UserPackList
                                      })

                   if(this.state.status === "1")
                   {
                       alert("You Howled at "+name)
                    }
                   else {
                      alert(this.state.message);
                      // console.log(this.state.pound.UserPoundID)

                   }

      })
  }

  handleundoAlert(value1,value2) {

    var poundid = `${value1}`;
    console.log(poundid);
    var name = `${value2}`;
    console.log(name)

      fetch('http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/UndoMyPound',
      {
       method: "POST",
       body: JSON.stringify({ "UserID":cookie.load('Id'),"UserToken":cookie.load('UserToken'),"UserPoundID" : poundid  }),
        headers: new Headers({'content-type': 'application/json'}),
      })
     .then((Response)=> Response.json())
     .then((findresponse)=>{
          console.log(findresponse)
          this.setState({
                      status:findresponse.UndoMyPoundResult.ResultStatus.Status,
                      message:findresponse.UndoMyPoundResult.ResultStatus.StatusMessage,
                      // pound:findresponse.PoundMyPackMemberResult.UserPackList
                       })

    if(this.state.status === "1")
    {
        alert("You UNHOWLED at "+name)
     }
    else {
       alert(this.state.message);
       // console.log(this.state.pound.UserPoundID)

    }

      })
   }




  render() {
    // let bgColor1 = this.state.color_d1 ? "DodgerBlue" : "white";

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

                        {/* {dyanamicData.ProfileImageURL} {" "} */}
                        {
                          dyanamicData.ProfileImageURL === "" ?
                                  <img src="assets/images/g1.jpg" alt="Image" height="75" width="75"/>
                              :   <img src={`${dyanamicData.ProfileImageURL}`} alt="Image" height="75" width="75" />
                        }{" "}
                        {/* <img src="assets/images/Howl-Final-Light-Blue-small.png"/> */}
                        {dyanamicData.FirstName} {" "}
                        {dyanamicData.PhoneNumber}{" "}
                        {/* {dyanamicData.UserPoundID} */}

                        <span className="float-right">

                          {
                            dyanamicData.UserPoundID === ""  ?
                                    <img src="assets/images/Howl-Final-Light-Blue-small.png" onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.FirstName)}/>
                                :   <img src="assets/images/Howl-Final-Red-small.png" onClick={()=>this.handleundoAlert(dyanamicData.UserPoundID,dyanamicData.FirstName)}/>
                          }{" "}
                          {/* <RaisedButton primary label="Delete" onClick={(e)=>this.handleDelete(e,dyanamicData.ID)}/> */}
                          {/* <button style={{backgroundColor: bgColor1}} onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.UserPoundID)}>HOWL</button>{" "} */}
                          {/* <RaisedButton primary label="HOWL" onClick={()=>this.handleAlert(dyanamicData.ID)}/>{" "} */}

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


      {/* <h2 className="article-title text-center">MANAGE PACK </h2>
      <button className="float-right"><a href="page-layout#/app/pglayout/packcontact">ADD NEW PACK MEMBER </a></button>
    </div> */}
      <h2 className="article-title text-center">MANAGE PACK<button className="float-right"><a href="page-layout#/app/pglayout/packcontact">ADD NEW PACK MEMBER</a></button></h2>

   <section className="chapter">
     <QueueAnim type="bottom" className="ui-animate">
       <div key="1"><Pack /></div>
     </QueueAnim>
   </section>
  </article>
);

module.exports = Page;
