import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import stripePackage from 'stripe';

const stripe = stripePackage(

  stripe_secret_key:'sk_test_YfFRiwwNYa1RZkUOCl7pG0SE',
  stripe_public_key:'pk_test_zn4lG02O0aB65P7ku4FeCnZ7'

);


class CardDetails extends React.Component {

  constructor() {
    super();
      this.state = {
        data: [],
        stripeLoading: true,
        stripeLoadingError: false,
        submitDisabled: false,
        paymentError: null,
        paymentComplete: false,
        token: null

      };
  }


getScriptURL(event) {
         return 'https://js.stripe.com/v2/';
  }

 onScriptLoaded(event) {
 if (!CardDetails.getStripeToken) {

     // Stripe.setPublishableKey('pk_test_zn4lG02O0aB65P7ku4FeCnZ7');
     // var s = stripe.stripe_public_key;
    this.setState({ stripeLoading: false, stripeLoadingError: false });
  }
 }

 onScriptError(event) {
       this.setState({ stripeLoading: false, stripeLoadingError: true });
 }

  onSubmit(event) {
     var self = this;
     event.preventDefault();
     // this.setState({ submitDisabled: true, paymentError: null });
   // send form here
   Stripe.createToken(event.target, function(status, response) {
     if (response.error) {
       self.setState({ paymentError: response.error.message, submitDisabled: false });
     }
     else {
       self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
       // make request to your server here!
     }
   });
}


render() {


  // if (this.state.stripeLoading) {
  //       return <div>Loading</div>;
  //     }
  //     else if (this.state.stripeLoadingError) {
  //       return <div>Error</div>;
  //     }
  //     else if (this.state.paymentComplete) {
  //       return <div>Payment Complete!</div>;
  //     }

  return(


  <section className="container-fluid with-maxwidth-md chapter">
  <form onSubmit={this.onSubmit} >
      <span>{ this.state.paymentError }</span><br />

       <TextField  type='text' data-stripe='number' placeholder='credit card number' fullWidth /><br />
       <TextField  type='text' data-stripe='exp-month' placeholder='expiration month' fullWidth /><br />
       <TextField  type='text' data-stripe='exp-year' placeholder='expiration year' fullWidth /><br />
       <TextField  type='text' data-stripe='cvc' placeholder='cvc' fullWidth />
       <div className="card-action no-border ">
         <RaisedButton disabled={this.state.submitDisabled} type='submit' primary label="Purchase" />
       </div>





  </form>

</section>
);
 }

}
const Page = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <article className="article">
      <center><h2 className="article-title">Card Details</h2></center>
      <div key="1"><CardDetails /></div>
        </article>
    </QueueAnim>
  </section>
);

module.exports = Page;
