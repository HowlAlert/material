import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';

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

  render() {
    const ms = this.state.data2
    var v = moment.utc(moment.duration({'s':ms}).asMilliseconds()).format("HH:mm:ss");

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
                      <div id = "FirstName">
                        {dyanamicData.FirstName} {" "}
                      <div>{dyanamicData.PhoneNumber}</div>

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
