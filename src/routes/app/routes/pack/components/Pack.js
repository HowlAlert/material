import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';

const users = [
  { id:1,
    name: "Leonard Rogers",
    phone: "+91 9640369353"
  },
  { id:2,
    name: "Walker Pace",
    phone: "+91 9640369353"
  },
  { id:3,
    name: "Lance Mcintyre",
    phone: "+91 9640369353"
  },
  { id:4,
    name: "Rudyard Conway",
    phone: "+91 9640369353"
  },
  { id:5,
    name: "Chadwick Oneal",
    phone: "+91 9640369353"
  },
  { id:6,
    name: "Isaiah Kent",
    phone: "+91 9640369353"
  },
  { id:6,
    name: "Griffith Perkins",
    phone: "+91 9640369353"
  },
  { id:7,
    name: "Lawrence Wheeler",
    phone: "+91 9640369353"
  },
  { id:8,
    name: "Preston Walker",
    phone: "+91 9640369353"
  },
  { id:9,
    name: "Simon Brewer",
    phone: "+91 9640369353"
  }
];


class Pack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: users
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {

    let _users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _users = _users.filter(function(user) {
        return user.name.toLowerCase().match(search);
      });
    }
    return (

    <article className="article article-dark">
    <button className="card bg-color-primary" className="float-right"><a href="page-layout#/app/pglayout/packcontact">ADD NEW PACK MEMBER </a></button>
    <h1 className="hero-title text-center ">MANAGE PACK</h1>
    <div className="container-fluid with-maxwidth">
      <input
        type="text"
        value={this.state.searchString}
        ref="search"
        onChange={this.handleChange}
        placeholder="Search Pack"
      />
      <div className="row">
        <div className="col-xl-6">
          <div className="box box-transparent">
            <div className="box-body padding-lg-h">
              <h4>Howls At Pack</h4>
              <h4>Howls At Me</h4>
              <h4>My Average Response Time </h4>

              </div>

              <div>
                {_users.map(l => {
                  return (
                    <li> <i className="material-icons">person_outline</i>
                      {l.name}
                      <a href="#">    {l.phone}</a>
                    </li>
                  );
                })}

              </div>

            </div>
          </div>
        </div>
      </div>

  </article>
);
}
}

const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Pack /></div>
    </QueueAnim>
  </section>
);

module.exports = Page;
