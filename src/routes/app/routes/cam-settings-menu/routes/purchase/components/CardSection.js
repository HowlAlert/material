import React from 'react';
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


class CardSection extends React.Component {
  render() {
    return (
      <section className="container-fluid with-maxwidth-md chapter">


{/*
        <label>
   Card details
   <CardElement  />
 </label> */}


      <CardElement style={{base: {fontSize: '18px'}}} />

  </section>
    );
  }
};

export default CardSection;
