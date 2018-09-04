import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import cookie from 'react-cookies';




class MotionSensitivity extends React.Component {
  constructor() {
    super();
      this.state = {
        value: 4,
        data: [],

      };
      this.handleChange = this.handleChange.bind(this);

  }

handleChange = (event, index, value) => this.setState({value});


 // componentDidMount(){
 //
 //
 //    console.log(cookie.load('Sensitivity'));
 //    console.log(cookie.load('cameraid'));
 //
 //           var savedSensitivity = cookie.load('Sensitivity');
 //            console.log(savedSensitivity);
 //
 //             this.setState({
 //               value: savedSensitivity,
 //              });
 //
 //
 //   }

  render() {

    // var sensitivity = cookie.load('togglesensitivity');
    //  console.log(sensitivity);

  return (
    <div className="row">
      <div className="col-xl-12">

        <div className="box box-default">
          <div className="box-body">
             <h4 className="article-title-header" >MOTION SENSITIVITY  </h4>
             <p> Change the speed of Motion Detection in the room ! </p>
             <span className="float-right ibox-icon">

                <SelectField  value={this.state.value} onChange={this.handleChange}  >
                 <MenuItem value={1} primaryText="High"  />
                 <MenuItem value={4} primaryText="Normal" />
                 <MenuItem value={7} primaryText="Low" />
               </SelectField>


             </span>

          </div>
        </div>





      </div>

    </div>

  );
 }
}


const Page = () => {
  return (
    <section className="container-fluid with-maxwidth chapter">
      <QueueAnim type="bottom" className="ui-animate">
        <div><MotionSensitivity /></div>

      </QueueAnim>
    </section>
  )
}

module.exports = Page;
