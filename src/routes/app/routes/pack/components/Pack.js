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
        UserPoundID: [],
        imgsrc:'',
        source1:'assets/images/Howl-Final-Light-Blue-small.png',
        source2:'assets/images/Howl-Final-Red-small.png'
    };
    // this.handleChange = this.handleChange.bind(this);

  }

  // toggleIcon(){
  //
  //  }
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
           data2:findresponse.GetUserPackResult.AvgResTimeOfPoundBack,
           UserPoundID:findresponse.GetUserPackResult.UserPackList.map((dyanamicData1,key)=>dyanamicData1.UserPoundID)

         })
         // console.log(this.state.UserPoundID);
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


handleAlert(value1,value2,value3) {

    // alert("Are you sure you want to Alert?");




      var packid = `${value1}`;
      console.log(packid);
      var name = `${value2}`;
      console.log(name)
      var img = `${value3}`;
      console.log(img)


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
                       alert("You Howled at "+name);
                       if(img=== 'assets/images/Howl-Final-Light-Blue-small.png')
                           this.setState({imgsrc:'assets/images/Howl-Final-Red-small.png'})
                       else
                           this.setState({imgsrc:'assets/images/Howl-Final-Light-Blue-small.png'})


                    }
                   else {
                      alert(this.state.message);
                      // console.log(this.state.pound.UserPoundID)

                   }
           console.log(this.state.imgsrc);
      })
  }

  handleundoAlert(value1,value2,value3) {

    var poundid = `${value1}`;
    console.log(poundid);
    var name = `${value2}`;
    console.log(name)
    var img = `${value3}`;
    console.log(img)

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
 var imgSrc;
  {
  this.state.UserPoundID === ""  ?
       imgSrc= 'assets/images/Howl-Final-Light-Blue-small.png'
    :  imgSrc= 'assets/images/Howl-Final-Red-small.png'
  }

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

                     <span className="float-left col-xl-1">
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

                          {
                            dyanamicData.UserPoundID === ""  ?
                                    <img src={this.state.source1} alt="Image" height="60" width="60" onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.FirstName,this.state.source1)}/>
                                :   <img src={this.state.source2} alt="Image" height="60" width="60" onClick={()=>this.handleundoAlert(dyanamicData.UserPoundID,dyanamicData.FirstName,this.state.source1)}/>
                          }


                          {/* {
                          dyanamicData.UserPoundID === ""  ?
                               this.setState({imgSrc:`${this.state.source1}`})
                            :  this.setState({imgSrc:`${this.state.source2}`})
                          }

                          <img src={this.state.imgSrc} alt="Image" height="60" width="60"

                             onClick={()=>this.handleundoAlert(dyanamicData.UserPoundID,dyanamicData.FirstName)}
                             onClick={()=>this.handleAlert(dyanamicData.ID,dyanamicData.FirstName)}/> */}



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
