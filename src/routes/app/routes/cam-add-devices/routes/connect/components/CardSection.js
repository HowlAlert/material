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
         {/* <div class="form-row">
             <label for="card-element">
                <span>Card number or debit card</span>

                <input type="text" size="20" data-stripe="number"/>
            </label>

       </div> */}

      <CardElement />
  </section>
    );
  }
};

export default CardSection;
