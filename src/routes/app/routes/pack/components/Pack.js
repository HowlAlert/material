import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';
import cookie from 'react-cookies';
// import Howls_Pack from '../../pack-menu/routes/howls_pack/components/Howls_Pack'


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

       <div >


       <input type="text" value={this.state.search}
           name="search"
           onChange={this.updateSearch.bind(this)}
           placeholder="Search Pack"
           />
           <button className="float-right">
             <a href="#/app/pglayout/packcontact">ADD NEW PACK MEMBER</a></button>


      <div className="box-body padding-xl">
        {/* <div className="row">
            <div width="3">Howls At Pack <div> {this.state.data1.TotalMyPound}</div></div>
            <div className="col-md-2 float-right text-center">Howls At Me <div > {this.state.data1.TotalPackPound}</div> </div>
            <div className="col-md-4">My Average Response Time <div> {v} </div></div>

        </div> */}
 <div className="row">
              <div className="col-xl-12">
                { filteredNames.map((dyanamicData,key)=>

                     <div className="box box-default">
                      <div className="box-body ">

                     <span className="float-left" width="1">
                        {(dyanamicData.ProfileImageURL === "" || dyanamicData.ProfileImageURL === null) ?
                                  <img src="assets/images/contact.png" alt="Image" height="60" width="60"/>
                              :   <img src={`${dyanamicData.ProfileImageURL}`} alt="Image" height="60" width="60" />
                        }
                    </span>

                    <span className="float-left" width="3">
                            {dyanamicData.FirstName} {" "} {dyanamicData.LastName}<br/>
                            {"+"+dyanamicData.PhoneNumberCountryCode}{" "}  {dyanamicData.PhoneNumber}<br/>
                            {dyanamicData.Email} <br />
                              <RaisedButton primary label="Delete"  onClick={()=>this.handleDelete(dyanamicData.ID)}/>

                    </span>

                        <span className="float-right">

                          {
                            dyanamicData.UserPoundID === ""    ?
                                    <RaisedButton  primary label="Check-In"
                                       onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.FirstName,dyanamicData.UserPoundID,dyanamicData.url)}/>

                                :   <img src='assets/images/Howl-Final-Red-small.png' alt="Image" height="60" width="60"
                              onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.FirstName,dyanamicData.UserPoundID,dyanamicData.url)} />
                          }

                       {/* <img src={dyanamicData.url} alt="Image" height="60" width="60"
                          onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.FirstName,dyanamicData.UserPoundID,dyanamicData.url)}/> */}


                          {/* {
                          dyanamicData.UserPoundID === ""  ?
                               this.setState({imgSrc:`${this.state.source1}`})
                            :  this.setState({imgSrc:`${this.state.source2}`})
                          }




                          {/* <RaisedButton primary label="Delete" onClick={(e)=>this.handleDelete(e,dyanamicData.ID)}/> */}
                          {/* <button style={{backgroundColor: bgColor1}} onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.UserPoundID)}>HOWL</button>{" "} */}
                          {/* <RaisedButton primary label="HOWL" onClick={()=>this.handleAlert(dyanamicData.ID)}/>{" "} */}




                        </span>

                      </div>

                      </div>

                   )
                }
              </div>
              {/* <div className="col-xl-12">
                <div className="box box-default">
                  <div className="box-body">
                  <h2 className="article-title-header">Howls At Pack</h2>

                  <Howls_Pack />
              </div>
            </div>
          </div> */}
         </div>



      </div>

   </div>

    );
}
}

// const Page = () => (
//   <section className="container-fluid with-maxwidth chapter">
//     <article className="article">
//
//      <h2 className="article-title">MANAGE PACK<button className="float-right">
//         <a href="#/app/pglayout/packcontact">ADD NEW PACK MEMBER</a></button></h2>
//
//
//      <QueueAnim type="bottom" className="ui-animate">
//        <div key="1"><Pack /></div>
//
//      </QueueAnim>
//
//   </article>
// </section>
// );
//
// module.exports = Page;
// import React from 'react';
// import QueueAnim from 'rc-queue-anim';
class Howls_Me extends React.Component {

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
        console.log(this.state.time);
        // var ms = this.state.time;
        // console.log(ms)
        //     var v = moment(ms).format('YYYY-MM-DD HH:MM:SS');

            // var gmtDateTime = moment.utc(v, "YYYY-MM-DD HH:MM:SS");
            //     console.log(gmtDateTime);
            // var local = moment.utc(moment(this.state.time).format('YYYY-MM-DD HH:MM:SS'), "YYYY-MM-DD HH:MM:SS").local().format('DD-MMM-YYYY h:mm A');
            // console.log(local)
            //


      })

  }
  render() {
    return (




  <div >

    <h2 className="article-title-header">Howls At Me</h2>
  <div className="ui-timline-container ">
    <section className="ui-timeline">
      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-caption">
              <a href="javascript:;" className="btn btn-primary btn-block">Today</a>
            </div>
          </div>
        </div>
      </article>


      {/* <div className="ui-timline-container">
    <section className="ui-timeline"> */}
          {
            this.state.data.map((dyanamicData,key) =>
             dyanamicData.HowlType === "1"

        ?
        <article className="tl-item alt">
          <div className="tl-body">
            <div className="tl-entry">

            <div className="tl-time">

               {  moment(new Date(dyanamicData.DateCreated +" "+ 'UTC').toString()).format('DD-MMM-YYYY hh:mm:ss A')}
             </div>{" "}

            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin ">
                <img src="assets/images/Howl-Final-Light-Blue-small.png" alt="Image" height="40" width="40"/></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">

                 {`${dyanamicData.SenderUser.FirstName} ${dyanamicData.SenderUser.LastName} HOWLED at you `}
              </h4>

            </div>


        </div>
      </div>
    </article>

           :
           <article className="tl-item">
             <div className="tl-body">
               <div className="tl-entry">

           <div className="tl-time">  {moment.utc(moment(`${dyanamicData.DateCreated}`).format('YYYY-MM-DD HH:MM:SS'), "YYYY-MM-DD HH:MM:SS").local().format('DD-MMM-YYYY h:mm A')}</div>{" "}
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin">
                <img src="assets/images/Howl-Final-Red-small.png" alt="Image" height="40" width="40"/></div>
            <div className="tl-content ">
              <h4 className="tl-tile text-danger">

                {`You HOWLED back at ${dyanamicData.SenderUser.FirstName} ${dyanamicData.SenderUser.LastName}`}

                {/* `You HOWLED at ${dyanamicData.ReceiverPack.FirstName} ${dyanamicData.ReceiverPack.LastName}`
                              :  `${dyanamicData.ReceiverPack.FirstName} ${dyanamicData.ReceiverPack.LastName} HOWLED back `} */}
              </h4>

        </div>
      </div>
      </div>
      </article>





           )
          }





    </section>
  </div>
</div>









   );
  }

}

class Howls_Pack extends React.Component {

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
           time:findresponse.GetMyPoundListResult.GetMyPounds["0"].DateCreated

        })
        console.log(this.state.time);
        // var ms = this.state.time;
        // console.log(ms)
        //     var v = moment(ms).format('YYYY-MM-DD HH:MM:SS');

            // var gmtDateTime = moment.utc(v, "YYYY-MM-DD HH:MM:SS");
            //     console.log(gmtDateTime);
            // var local = moment.utc(moment(this.state.time).format('YYYY-MM-DD HH:MM:SS'), "YYYY-MM-DD HH:MM:SS").local().format('DD-MMM-YYYY h:mm A');
            // console.log(local)



      })

  }
  render() {
    return (


  <div className="row">


    <div className="col-xl-4">
      <div className="box box-default">
        <div className="box-body">
      <Pack />
    </div>
  </div>
  </div>


<div className="col-xl-4">

  <div className="box box-default">
    <div className="box-body">
    <h2 className="article-title-header">Howls At Pack</h2>
  <div className="ui-timline-container ">
    <section className="ui-timeline">
      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-caption">
              <a href="javascript:;" className="btn btn-primary btn-block">Today</a>
            </div>
          </div>
        </div>
      </article>


      {/* <div className="ui-timline-container">
    <section className="ui-timeline"> */}
          {
            this.state.data.map((dyanamicData,key) =>
             dyanamicData.HowlType === "1"

        ?
        <article className="tl-item alt">
          <div className="tl-body">
            <div className="tl-entry">

            <div className="tl-time">
               {  moment(new Date(dyanamicData.DateCreated +" "+ 'UTC').toString()).format('DD-MMM-YYYY hh:mm:ss A')}</div>{" "}

            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin ">
                <img src="assets/images/Howl-Final-Light-Blue-small.png" alt="Image" height="40" width="40"/></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">

                 {`You HOWLED at ${dyanamicData.ReceiverPack.FirstName} ${dyanamicData.ReceiverPack.LastName}`}
              </h4>

            </div>


        </div>
      </div>
    </article>

           :
           <article className="tl-item">
             <div className="tl-body">
               <div className="tl-entry">

           <div className="tl-time">  {moment.utc(moment(`${dyanamicData.DateCreated}`).format('YYYY-MM-DD HH:MM:SS'), "YYYY-MM-DD HH:MM:SS").local().format('DD-MMM-YYYY h:mm A')}</div>{" "}
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-warning">
                <img src="assets/images/Howl-Final-Red-small.png" alt="Image" height="30" width="30"/></div>
            <div className="tl-content ">
              <h4 className="tl-tile text-danger">

                {`${dyanamicData.ReceiverPack.FirstName} ${dyanamicData.ReceiverPack.LastName} HOWLED back `}

                {/* `You HOWLED at ${dyanamicData.ReceiverPack.FirstName} ${dyanamicData.ReceiverPack.LastName}`
                              :  `${dyanamicData.ReceiverPack.FirstName} ${dyanamicData.ReceiverPack.LastName} HOWLED back `} */}
              </h4>

        </div>
      </div>
      </div>
      </article>





           )
          }





    </section>

  </div>

</div>

</div>

</div>




<div className="col-xl-4">
  <div className="box box-default">
    <div className="box-body">
  <Howls_Me />
</div>
</div>
</div>








</div>


   );
  }

}
const Page = () => (
  <div className="container-fluid  chapter">
    <h2 className="article-title-header">MANAGE PACK</h2>
    <QueueAnim type="bottom" className="ui-animate">

       <div key="1"><Howls_Pack /></div>
       {/* <div key="2"></div> */}

    </QueueAnim>
  </div>
);

module.exports = Page;
