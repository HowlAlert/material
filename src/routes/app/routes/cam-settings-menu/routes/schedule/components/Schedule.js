import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';

class Schedule extends React.Component {


  constructor() {
    super();

    this.state = {
        color_white: true
        // startTime:' '
    };

  }

  changeColor1(){     this.setState({color_d1:  !this.state.color_d1})     }
  changeColor2(){     this.setState({color_d2:  !this.state.color_d2})     }
  changeColor3(){     this.setState({color_d3: !this.state.color_d3})     }
  changeColor4(){     this.setState({color_d4: !this.state.color_d4})     }
  changeColor5(){     this.setState({color_d5: !this.state.color_d5})     }
  changeColor6(){     this.setState({color_d6: !this.state.color_d6})     }
  changeColor7(){     this.setState({color_d7: !this.state.color_d7})     }

  render() {
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

                        <button style={{backgroundColor: bgColor1}} onClick={this.changeColor1.bind(this)}>Monday</button>
                       <span className="space" />
                        <button style={{backgroundColor: bgColor2}} onClick={this.changeColor2.bind(this)}>Tuesday</button>
                      <span className="space" />
                        <button style={{backgroundColor: bgColor3}} onClick={this.changeColor3.bind(this)}>Wednesday</button>
                       <span className="space" />
                        <button style={{backgroundColor: bgColor4}} onClick={this.changeColor4.bind(this)}>Thursday</button>
                       <span className="space" />
                        <button style={{backgroundColor: bgColor5}} onClick={this.changeColor5.bind(this)}>Friday</button>
                       <span className="space" />
                        <button style={{backgroundColor: bgColor6}} onClick={this.changeColor6.bind(this)}>Saturday</button>
                      <span className="space" />
                        <button style={{backgroundColor: bgColor7}} onClick={this.changeColor7.bind(this)}>Sunday</button>

                 </div><br />

                <div className="col-xl-12">
                  <div className="row">


                    <div className="col-lg-12">
                      <span className="float-left">
                             <span><h5> Start Time</h5> </span>
                      </span>
                      <span className="float-right">
                          <TimePicker  hintText="Select Time"/>
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="float-left">
                           <span><h5> End Time</h5> </span>
                    </span>
                    <span className="float-right">

                          <TimePicker hintText="Select Time"/>
                   </span>
                  </div>

                </div>
                <div>


</div>
              </div>
            </section>
            <center>  <RaisedButton primary label="SAVE" /> </center>
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
