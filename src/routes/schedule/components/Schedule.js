import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import { localeUtils } from './utils';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Demo from './demo';
import TextField from 'material-ui/TextField';

<body>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <div id="root"></div>
</body>

class Schedule extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          color_white: true,
          WEEKDAYS : ['M', 'T', 'W', 'TH', 'F', 'SAT', 'SUN'],
          MondayMap :[]
      };
      this.handleEndTime = this.handleEndTime.bind(this);
          this.handleStartTime = this.handleStartTime.bind(this);
    }

    handleSchedule(event){

        if(this.state.WEEKDAYS[0]==this.state.Monday){
          console.log(this.state.Monday)
        }
        if(this.state.WEEKDAYS[1]==this.state.Tuesday){
          console.log(this.state.Tuesday)
        }
        if(this.state.WEEKDAYS[2]==this.state.Wenesday){
          console.log(this.state.Wenesday)
        }
        if(this.state.WEEKDAYS[3]==this.state.Thursday){
          console.log(this.state.Thursday)
        }
        if(this.state.WEEKDAYS[4]==this.state.Friday){
          console.log(this.state.Friday)
        }
        if(this.state.WEEKDAYS[5]==this.state.Saturday){
          console.log(this.state.Saturday)
        }
        if(this.state.WEEKDAYS[6]==this.state.Sunday){
          console.log(this.state.Sunday)
        }

     this.state.MondayMap.map((dyanamicData,key)=>{dyanamicData.Text})

    }



  changeMonday(){
    this.setState({color_d1:  !this.state.color_d1})
    event.preventDefault();
    this.setState({
        Monday: this.state.WEEKDAYS[0]
      });

      console.log(this.state.WEEKDAYS[0]) ;
      return this.state.WEEKDAYS[0];
  }
  changeTuesday(){
    this.setState({color_d2:  !this.state.color_d2})
    event.preventDefault();
    this.setState({
        Monday: this.state.WEEKDAYS[1]
      });

      console.log(this.state.WEEKDAYS[1]) ;
      return this.state.WEEKDAYS[1];
  }
  changeWenesday(){
    this.setState({color_d3: !this.state.color_d3})
    event.preventDefault();
    this.setState({
        Monday: this.state.WEEKDAYS[2]
      });

      console.log(this.state.WEEKDAYS[2]) ;
      return this.state.WEEKDAYS[2]
    }
  changeThursday(){
    this.setState({color_d4: !this.state.color_d4})
    event.preventDefault();
    this.setState({
        Monday: this.state.WEEKDAYS[3]
      });

      console.log(this.state.WEEKDAYS[3]) ;
      return this.state.WEEKDAYS[3];
    }
  changeFriday(){
    this.setState({color_d5: !this.state.color_d5})
    event.preventDefault();
    this.setState({
        Monday: this.state.WEEKDAYS[4]
      });

      console.log(this.state.WEEKDAYS[4]) ;
      return this.state.WEEKDAYS[4];
    }
  changeSaturday(){
    this.setState({color_d6: !this.state.color_d6})
    event.preventDefault();
    this.setState({
        Monday: this.state.WEEKDAYS[5]
      });

      console.log(this.state.WEEKDAYS[5]) ;
      return this.state.WEEKDAYS[5];
    }
  changeSunday(){
    this.setState({color_d7: !this.state.color_d7})
    event.preventDefault();
    this.setState({
        Monday: this.state.WEEKDAYS[6]
      });

      console.log(this.state.WEEKDAYS[6]) ;
      return this.state.WEEKDAYS[6];
  }

  handleStartTime(event, time) {

  this.setState({
        StartTime: time
      });

      console.log(time) ;
    }

    handleEndTime(event, time) {

    this.setState({
          EndTime: time
        });

        console.log(time) ;
      //  return target.value;
      }



  render() {
//const { classes } = props;
    const rootElement = document.querySelector('#root');
    if (rootElement) {
      render(<Demo />, rootElement);
    }
      let bgColor1 = this.state.color_d1 ? "DodgerBlue" : "white"
      console.log(bgColor1)
      let bgColor2 = this.state.color_d2 ? "DodgerBlue" : "white"
      let bgColor3 = this.state.color_d3 ? "DodgerBlue" : "white"
      let bgColor4 = this.state.color_d4 ? "DodgerBlue" : "white"
      let bgColor5 = this.state.color_d5 ? "DodgerBlue" : "white"
      let bgColor6 = this.state.color_d6 ? "DodgerBlue" : "white"
      let bgColor7 = this.state.color_d7 ? "DodgerBlue" : "white"

    return (

          <article className="article">
            <h2 className="article-title text-center no-margin-top">SCHEDULE</h2>
            <section className="box box-default">
              <div className="box-body padding-xl">
                <div className=" text-center ">

                        <button style={{backgroundColor: bgColor1}}
                        onClick={this.changeMonday.bind(this)}
                        >
                        {this.state.WEEKDAYS[0]}
                        </button>
                       <span className="space" />

                        <button style={{backgroundColor: bgColor2}}
                        onClick={this.changeTuesday.bind(this)}
                        >
                        {this.state.WEEKDAYS[1]}
                        </button>
                      <span className="space" />

                        <button style={{backgroundColor: bgColor3}}
                        onClick={this.changeWenesday.bind(this)}
                        >
                        {this.state.WEEKDAYS[2]}
                        </button>
                       <span className="space" />

                        <button style={{backgroundColor: bgColor4}}
                        onClick={this.changeThursday.bind(this)}
                        >
                        {this.state.WEEKDAYS[3]}
                        </button>
                       <span className="space" />

                        <button style={{backgroundColor: bgColor5}}
                        onClick={this.changeFriday.bind(this)}
                        >
                        {this.state.WEEKDAYS[4]}
                        </button>
                       <span className="space" />

                        <button style={{backgroundColor: bgColor6}}
                        onClick={this.changeSaturday.bind(this)}
                        >
                        {this.state.WEEKDAYS[5]}
                        </button>
                      <span className="space" />

                        <button style={{backgroundColor: bgColor7}}
                        onClick={this.changeSunday.bind(this)}
                        >
                        {this.state.WEEKDAYS[6]}
                        </button>

                 </div><br />



                 <div className="col-lg-12">
                 <div className="row">

                  <div className="col-lg-12">
                      <span className="float-left">

                          <span><h5> Start Time</h5> </span>
                   </span>
                   <span className="float-right">
                   <TimePicker onChange={this.handleStartTime} value={this.state.time} hintText="Select Time" />
                   </span>
                 </div>

</div>
                  <div>
                    <span className="float-left">
                           <span><h5> End Time</h5> </span>
                    </span>
                    <span className="float-right">
                    <TimePicker onChange={this.handleEndTime} value={this.state.time} hintText="Select Time" />
                    </span>
                  </div>

                </div>
                <div>


</div>
              </div>
            </section>
            <center>  <RaisedButton primary label="SAVE" onClick={(e)=>this.handleSchedule(e)}/> </center>
          </article>

  );
  }

}



const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"><Schedule /></div>
      </QueueAnim>
    </section>
  )
}

module.exports = Page;
