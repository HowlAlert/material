import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

// const users = [
//   { id:1,
//     name: "Leonard Rogers",
//     phone: "+91 9640369353"
//   },
//   { id:2,
//     name: "Walker Pace",
//     phone: "+91 9640369353"
//   },
//   { id:3,
//     name: "Lance Mcintyre",
//     phone: "+91 9640369353"
//   },
//   { id:4,
//     name: "Rudyard Conway",
//     phone: "+91 9640369353"
//   },
//   { id:5,
//     name: "Chadwick Oneal",
//     phone: "+91 9640369353"
//   },
//
// ];


class Pack extends React.Component {

  constructor() {
    super();
    this.state = {
      searchString: "",
      // users: []
      data: [],
        data1: [],
    };
    this.handleChange = this.handleChange.bind(this);
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
        })
        this.setState({
           data1:findresponse.GetUserPackResult,
        })
      })
    this.setState({
      data: data
    });
    this.refs.search.focus();
  }

  handleChange() {

    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {

    let data = this.state.data;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      data = data.filter(function(data) {
        return data.FirstName.toLowerCase().match(search);
      });
    }

    return (

  <div className="box box-transparent">
  <h2 className="article-title text-center">
    <input type="text" value={this.state.searchString}
      ref="search"
      onChange={this.handleChange}
      placeholder="Search Pack"
    />
  </h2>

      <div className="box-body padding-xl">
        <div className="row">
            <div className="col-md-4 text-center">Howls At Pack <div> {this.state.data1.TotalMyPound}</div></div>
            <div className="col-md-4 float-right text-center">Howls At Me <div > {this.state.data1.TotalPackPound}</div> </div>
            <div className="col-md-4 text-center">My Average Response Time <div> {this.state.data1.AvgResTimeOfPoundBack} </div></div>
        </div>

              <div>
                {
                     this.state.data.map((dyanamicData,key)=>
                     <div>
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
