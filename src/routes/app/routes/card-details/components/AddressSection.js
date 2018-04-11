import React from 'react';
// import {AddressElement} from 'react-stripe-elements';
import {CardElement} from 'react-stripe-elements';

// const styles = {
//   base: {
//     maxWidth: 400,
//     marginBottom: 16
//     // fontSize: 4,
//     // color: #C1C7CD,
//   },
//   invalid: {
//     // color: 'red',
//   },
// };


class AddressSection extends React.Component {
  render() {
    return (
      <section className="container-fluid with-maxwidth-md chapter">


      <CardElement />

  </section>
    );
  }
};

export default AddressSection;
