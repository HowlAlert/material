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
        result:[],

    };


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
                       window.location.reload();

                   }

      })


  }



handleAlert(value1,value2,value3,value4) {
    var packid = `${value1}`;
    console.log(packid);
    var name = `${value2}`;
    console.log(name)
    var poundid = `${value3}`;
    console.log(poundid)
    var ImageUrl = `${value4}`;
    console.log(ImageUrl);
      // window.location.reload();
    if(poundid === "")
        {

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
                                     pid:findresponse.PoundMyPackMemberResult.UserPackList.map((poundid,key)=>poundid.ID)
                                      })

                   if(this.state.status === "1")
                   {
                       alert("You Howled at "+name);
                       console.log(packid);
                       window.location.reload();


                  }
                   else {
                      alert(this.state.message);
                      // console.log(this.state.pound.UserPoundID)

                   }

      })

}
else {


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
    alert("You UNHOWLED at "+name);

    window.location.reload();
 }
else {
   alert(this.state.message);


}

  })

 }
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
          data2:findresponse.GetUserPackResult.AvgResTimeOfPoundBack,
          UserPoundID:findresponse.GetUserPackResult.UserPackList.map((dyanamicData1,key)=>dyanamicData1.UserPoundID=== "" ? this.state.source1 : this.state.source2),

        })
        var arrOfObj = this.state.data;

        var result = arrOfObj.map(function(el) {
          var o = Object.assign({}, el);
          o.UserPoundID=== "" ? o.url = 'assets/images/Howl-Final-Light-Blue-small.png'
                           : o.url = 'assets/images/Howl-Final-Red-small.png';
          return o;
        })
      this.setState({
        result:result
      })

        // console.log(arrOfObj);
        console.log(this.state.result);

     })

 }

 updateSearch(event) {

   this.setState({
     search: event.target.value.substr(0,35)
   });
 }




  render() {
    // let bgColor1 = this.state.color_d1 ? "DodgerBlue" : "white";
    const ms = this.state.data2
        var v = moment.utc(moment.duration({'s':ms}).asMilliseconds()).format("HH :mm :ss");

        let filteredNames = this.state.result.filter(
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
            <div className="col-md-2 text-center">Howls At Pack <div> {this.state.data1.TotalMyPound}</div></div>
            <div className="col-md-2 float-right text-center">Howls At Me <div > {this.state.data1.TotalPackPound}</div> </div>
            <div className="col-md-4">My Average Response Time <div> {v} </div></div>

        </div>

              <div>
                { filteredNames.map((dyanamicData,key)=>

                     <div className="box box-default">
                      <div className="box-body ">

                     <span className="float-left" width="1">
                        {(dyanamicData.ProfileImageURL === "" || dyanamicData.ProfileImageURL === null) ?
                                  <img src="assets/images/contact.png" alt="Image" height="60" width="60"/>
                              :   <img src={`${dyanamicData.ProfileImageURL}`} alt="Image" height="60" width="60" />
                        }
                    </span>

                    <span className="float-left col-xl-4">
                            {dyanamicData.FirstName} {" "} {dyanamicData.LastName}<br/>
                            {"+"+dyanamicData.PhoneNumberCountryCode}{" "}  {dyanamicData.PhoneNumber}<br/>
                            {dyanamicData.Email}

                    </span>

                        <span className="float-right">

                          {/* {
                            dyanamicData.UserPoundID === ""  ?
                                    <img src={this.state.source1} alt="Image" height="60" width="60" onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.FirstName,dyanamicData.UserPoundID)}  />
                                :   <img src={this.state.source2} alt="Image" height="60" width="60" onClick={()=>this.handleundoAlert(dyanamicData.UserPoundID,dyanamicData.FirstName)} />
                          } */}

                       <img src={dyanamicData.url} alt="Image" height="60" width="60"
                          onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.FirstName,dyanamicData.UserPoundID,dyanamicData.url)}/>


                          {/* {
                          dyanamicData.UserPoundID === ""  ?
                               this.setState({imgSrc:`${this.state.source1}`})
                            :  this.setState({imgSrc:`${this.state.source2}`})
                          }




                          {/* <RaisedButton primary label="Delete" onClick={(e)=>this.handleDelete(e,dyanamicData.ID)}/> */}
                          {/* <button style={{backgroundColor: bgColor1}} onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.UserPoundID)}>HOWL</button>{" "} */}
                          {/* <RaisedButton primary label="HOWL" onClick={()=>this.handleAlert(dyanamicData.ID)}/>{" "} */}

                          <RaisedButton primary label="Delete"  onClick={()=>this.handleDelete(dyanamicData.ID)}/>


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
  <section className="container-fluid with-maxwidth chapter">
    <article className="article">

     <h2 className="article-title">MANAGE PACK<button className="float-right">
        <a href="#/app/pglayout/packcontact">ADD NEW PACK MEMBER</a></button></h2>


     <QueueAnim type="bottom" className="ui-animate">
       <div key="1"><Pack /></div>
     </QueueAnim>

  </article>
</section>
);

module.exports = Page;
