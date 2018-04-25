import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class Help extends React.Component{

  constructor(props) {
       super(props);
       this.state = {
         value: 1,
       }
     }
 handleChange = (event, index, value) => this.setState({value});
  render() {


    return (

      <article className="article ">
        <h2 className="article-title  no-margin-top mainArticle">Frequently Asked Questions</h2>


    <div className="container-fluid with-maxwidth">
      <div className="row">

        <div className="col-xl-12">
          <div className="box box-transparent">
            <div className="box-body padding-lg-h">
              <Card>
                <CardHeader title="Can I use HOWL for free?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                  <p>Yes. The free HOWL App allows you to create a Pack, check-in on those you care about and activate an
                    alarm using voice commands. As a free user, your alarms notify only your Pack (who can notify the authorities). For just $7.99 a month, HOWL will additionally notify the authorities
                    when you issues an alert.
                  *HOWL Hack: using the free version in order to avoid monitoring costs. Designate a specific Pack member to notify 911 manually when you activate an alert
                 </p>

                </CardText>

              </Card>

              <Card>
                <CardHeader title="What type of emergencies can HOWL address?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                       Every type: Crime, Health, Fire, you name it. Whenever you’re in trouble, HOWL can help.
                   </p>
                </CardText>
              </Card>

              <Card>
                <CardHeader title="What do I say to my Voice Activated hub in order to activate an alert?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                       To activate a HOWL Alert, say the wake command followed by “Alert Pack.” For instance, a Google Home user would say “Ok Google, Alert Pack.”
                   </p>
                   <h5>*All alerts will also go to your Pack by default.</h5>
                </CardText>
              </Card>

              <Card>
                <CardHeader title="What information will be shared with my Pack and Professional Emergency Services in the case of an emergency?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                       The type of emergency as dictated by the duress code (Police, Fire, Ambulance, or Pack), as well as any and all information that you input in your HOWL profile (age, medical history, allergies, injuries, special relationships, threats, etc.) will be accessible to your Pack and Professional Emergency Services in order to dictate the most educated and effective response in any circumstance.
                   </p>

                </CardText>
              </Card>

              <Card>
                <CardHeader title="How big can I make my Pack?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                       There is no limit to Pack size. In fact, the bigger the Pack, the more effectively HOWL can function. Feel free to invite as many friends, family members, neighbors, coworkers, etc. to your Pack!
                   </p>

                </CardText>
              </Card>

              <Card>
                <CardHeader title="Can I personally monitor my home while I'm away?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                       Yes. Place our WOLF EYE Howl Motion Sensor Camera strategically throughout your home in order to access 24/7 audio and video feeds, as well as be alerted when the cameras detect any movement.
                   </p>

                </CardText>
              </Card>


              <Card>
                <CardHeader title="How many cameras can I link with my account?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                     As many as you’d like. There is no limit.
                   </p>

                </CardText>
              </Card>

              <Card>
                <CardHeader title="Can I cancel false alarms?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                     You can cancel a phone or smart hub alarm using a spoken or keyed 4-digit pin. In the event an attacker forces you to turn off the alarm, there is a false code that will silence the sound while still alerting your Pack and the authorities.
                   </p>

                </CardText>
              </Card>

              <Card>
                <CardHeader title="Can a stranger/intruder cancel my alert?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                     No. Your 4-digit cancellation code is secret to only you and those you choose to share it with. In the event an attacker requires you to turn off the alarm, there is a false code that will silence the sound while still alerting your Pack and the authorities.
                   </p>

                </CardText>
              </Card>

              <Card>
                <CardHeader title="Can I trigger a voice-activated alert directly through my Smart Phone?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                    This answer depends on the technology of your particular smart phone. Assuming most people use iPhone, when the iPhone is plugged in/charging, a feature called "Hey Siri" is activated, whereby you can use your phone more orless like a Voice Activated hub.
                    Go ahead, give it a try. Plug in your iPhone and say "Hey Siri". She'll hear you. Futhermore, Voice Activation technology is steadily expanding to more and more electronics, especially with Amazon and Google recently making their voice tech public.
                    Whether it's your TV, alarm clock, or toaster,you'll soon be able to speak to just about any piece of hardware in your home, which means HOWL's value and functionality will only keep growing.
                   </p>

                </CardText>
              </Card>

              <Card>
                <CardHeader title="Can HOWL determine/communicate my location?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                    If "Location services" have been enabled via the App, HOWL can access your location as effectively as any other App and let Pack/Professional Emergency Services Know where help is needed.
                    Your  immediate location is communicated through push notifications. <br/>
                    NOTE: The Application and Response Services require adequate Wi-Fi and/or Cellular connectivity (e.g., 2G, 3G, 4G, LTE or other). When your Mobile Device does not have adequate connectivity, the Application and Response Services may not work. You MUST ensure that your Mobile Device has adequate wireless network connectivity and coverage.
                   </p>

                </CardText>
              </Card>

              <Card>
                <CardHeader title="Who is the ideal HOWL user?"
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                   <p>
                     Any one seeking better, faster, more affordable security is an ideal HOWL user. Traditional suburban homeowners have undeniably been the target marget for the security industry up until this point. And, of course, HOWL seeks to help those homeowners more effectivelythan other security options in all ways we've outlined.
                      However, we don't just want to help one demographic, location, or income bracket.
                      HOWL seeks to democreatize security by making it effective and afforable for everyone.
                      Specific markets on which we've focused and see plenty of oppurtunity for HOWL and value for user include urban housing, rural area, college campuses, and elderly communities. We see these as classically underserved territories and ones that are perhaps most in need of support, given their increased isolation and elevated crime or healthemergy rates. But the short answer to this one is "the entire planet."

                   </p>

                </CardText>
              </Card>
    
              <h4 >Do you have any question?</h4>
              <form name="contactForm">
                <div className="form-group">
                  <TextField hintText="Name" fullWidth />
                  <TextField hintText="Email" fullWidth/>
                  <TextField  hintText="Message" fullWidth
                    multiLine
                    rows={3}
                  />
                </div>
                <div>

                <span className="float-left">
                  <h5>How did you hear about us?</h5>
                </span>
                <span className="float-right">

                     <SelectField  value={this.state.value} onChange={this.handleChange}  >
                          <MenuItem value={1} primaryText="Google Search"  />
                          <MenuItem value={2} primaryText="Facebook" />
                          <MenuItem value={3} primaryText="Twitter" />
                          <MenuItem value={4} primaryText="Instagram"  />
                          <MenuItem value={5} primaryText="News" />
                          <MenuItem value={6} primaryText="Alpha Program" />
                    </SelectField>
              </span>
            </div><br/>

              </form>


            </div>
            <div>
                <RaisedButton primary label="Submit" />
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
  <section className="container-fluid chapter">



    <QueueAnim type="bottom" className="ui-animate">

        <div><Help /></div>

    </QueueAnim>


</section>

);

module.exports = Page;
