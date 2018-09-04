import React from 'react';
import {injectStripe} from 'react-stripe-elements';

// import PaymentRequestForm from './PaymentRequestForm';
import CardSection from './CardSection';
// import AddressSection from './AddressSection';

// class PaymentRequestForm extends React.Component {
//   constructor(props) {
//     super(props);
//
//     // For full documentation of the available paymentRequest options, see:
//     // https://stripe.com/docs/stripe.js#the-payment-request-object
//     const paymentRequest = props.stripe.paymentRequest({
//       country: 'US',
//       currency: 'usd',
//       total: {
//         label: 'Demo total',
//         amount: 1000,
//       },
//     });
//
//     paymentRequest.on('token', ({complete, token, ...data}) => {
//        console.log('Received Stripe token: ', token);
//        console.log('Received customer information: ', data);
//       complete('success');
//     });
//
//     paymentRequest.canMakePayment().then(result => {
//       this.setState({canMakePayment: !!result});
//     });
//
//     this.state = {
//       canMakePayment: false,
//       paymentRequest,
//     };
//   }
//
//   render() {
//     return this.state.canMakePayment ? (
//       <PaymentRequestButtonElement
//         paymentRequest={this.state.paymentRequest}
//         className="PaymentRequestButton"
//         style={{
//           // For more details on how to style the Payment Request Button, see:
//           // https://stripe.com/docs/elements/payment-request-button#styling-the-element
//           paymentRequestButton: {
//             theme: 'light',
//             height: '64px',
//           },
//         }}
//       />
//     ) : null;
//   }
// }
// export default injectStripe(PaymentRequestForm);

class CheckoutForm extends React.Component {

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken(

      {name: 'Jenny Rosen'}).then(({token}) =>
      {

     //  console.log('Received Stripe token:', token);

    });


  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="box box-default col-xl-6">
            <div className="box-body ">
        {/* <AddressSection /> */}
        <CardSection />
        {/* <button><a href="cam-add-devices#/app/cameraDevices/serial/Payment">Confirm order</a></button> */}
        {/* <PaymentRequestForm /> */}
          <button>Confirm order</button>
        </div>
      </div>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
