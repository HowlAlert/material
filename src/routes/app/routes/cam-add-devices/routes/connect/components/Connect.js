import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';


class CardDetails extends React.Component {

  render() {
    // this.state.stripe will either be null or a Stripe instance
    // depending on whether Stripe.js has loaded.
    return (
      <StripeProvider apiKey="pk_test_zn4lG02O0aB65P7ku4FeCnZ7">
        <MyStoreCheckout />
     </StripeProvider>
    );
  }
}
// import stripePackage from 'stripe';
//
// const stripe = stripePackage(
//
//   stripe_secret_key:'sk_test_YfFRiwwNYa1RZkUOCl7pG0SE',
//   stripe_public_key:'pk_test_zn4lG02O0aB65P7ku4FeCnZ7'
//
// );


// class CardDetails extends React.Component {
//
//   constructor() {
//     super();
//       this.state = {
//         data: [],
//         stripe: [],
//         card:[]
//         // stripeLoading: true,
//         // stripeLoadingError: false,
//         // submitDisabled: false,
//         // paymentError: null,
//         // paymentComplete: false,
//         // token: null
//
//       };
//   }
//
//
//
//   // card.addEventListener('change', function(event) {
//   //   var displayError = document.getElementById('card-errors');
//   //   if (event.error) {
//   //     displayError.textContent = event.error.message;
//   //   } else {
//   //     displayError.textContent = '';
//   //   }
//   // });
//
// onSubmit(event) {
//
// event.preventDefault();
// stripe.createToken(card).then(function(result) {
//   if (result.error) {
//     // Inform the user if there was an error
//     var errorElement = document.getElementById('card-errors');
//     errorElement.textContent = result.error.message;
//   } else {
//     // Send the token to your server
//     stripeTokenHandler(result.token);
//   }
// });
//
// }
// //   var form = document.getElementById('payment-form');
// // form.addEventListener('submit', function(event) {
// //   event.preventDefault();
// //
// //   stripe.createToken(card).then(function(result) {
// //     if (result.error) {
// //       // Inform the user if there was an error
// //       var errorElement = document.getElementById('card-errors');
// //       errorElement.textContent = result.error.message;
// //     } else {
// //       // Send the token to your server
// //       stripeTokenHandler(result.token);
// //     }
// //   });
// // });
//
//
// // getScriptURL(event) {
// //          return 'https://js.stripe.com/v2/';
// //   }
// //
// //  onScriptLoaded(event) {
// //  if (!CardDetails.getStripeToken) {
// //
// //      // Stripe.setPublishableKey('pk_test_zn4lG02O0aB65P7ku4FeCnZ7');
// //      // var s = stripe.stripe_public_key;
// //     this.setState({ stripeLoading: false, stripeLoadingError: false });
// //   }
// //  }
// //
// //  onScriptError(event) {
// //        this.setState({ stripeLoading: false, stripeLoadingError: true });
// //  }
// //
// //   onSubmit(event) {
// //      var self = this;
// //      event.preventDefault();
// //      // this.setState({ submitDisabled: true, paymentError: null });
// //    // send form here
// //    Stripe.createToken(event.target, function(status, response) {
// //      if (response.error) {
// //        self.setState({ paymentError: response.error.message, submitDisabled: false });
// //      }
// //      else {
// //        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
// //        // make request to your server here!
// //      }
// //    });
// // }
//
//
// render() {
//
//
//   // if (this.state.stripeLoading) {
//   //       return <div>Loading</div>;
//   //     }
//   //     else if (this.state.stripeLoadingError) {
//   //       return <div>Error</div>;
//   //     }
//   //     else if (this.state.paymentComplete) {
//   //       return <div>Payment Complete!</div>;
//   //     }
//   var stripe = Stripe('pk_test_zn4lG02O0aB65P7ku4FeCnZ7');
//   var elements = stripe.elements();
//   var card = elements.create('card');
//   // card.mount('#card-element');
//
//   return(
//
//
//   <section className="container-fluid with-maxwidth-md chapter">
//   {/* <form onSubmit={this.onSubmit} >
//       <span>{ this.state.paymentError }</span><br />
//
//        <TextField  type='text' data-stripe='number' placeholder='credit card number' fullWidth /><br />
//        <TextField  type='text' data-stripe='exp-month' placeholder='expiration month' fullWidth /><br />
//        <TextField  type='text' data-stripe='exp-year' placeholder='expiration year' fullWidth /><br />
//        <TextField  type='text' data-stripe='cvc' placeholder='cvc' fullWidth />
//        <div className="card-action no-border ">
//          <RaisedButton disabled={this.state.submitDisabled} type='submit' primary label="Purchase" />
//        </div>
//
//
//
//
//
//   </form> */}
//   <form action="/charge" method="post" id="payment-form">
//   <div class="card-errors"></div>
//
//   <div class="form-row">
//     <label for="card-element">
//       <span>Card number or debit card</span>
//
//       <input type="text" size="20" data-stripe="number"/>
//     </label>
//   </div>
//
//   <div class="form-row">
//     <label for="card-element">
//       <span>Expiration (MM/YY)</span>
//       <input type="text" size="2" data-stripe="exp_month"/>
//     </label>
//     <span> / </span>
//     <input type="text" size="2" data-stripe="exp_year"/>
//   </div>
//
//   <div class="form-row">
//     <label for="card-element">
//       <span>CVC</span>
//       <input type="text" size="4" data-stripe="cvc"/>
//     </label>
//   </div>
//
//   <div class="form-row">
//     <label for="card-element">
//       <span>Billing Zip</span>
//       <input type="text" size="6" data-stripe="address_zip"/>
//     </label>
//   </div>
//
//   <input type="submit" class="submit" onClick={(e)=>this.onSubmit(e)} value="Submit Payment"/>
// </form>
//
// </section>
// );
//  }
//
// }
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
