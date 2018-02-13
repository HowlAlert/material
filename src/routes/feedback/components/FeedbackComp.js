// import React from 'react';
// import Component from 'react';
// import PropTypes from 'prop-types';
// import QueueAnim from 'rc-queue-anim';
// import Mailto from 'react-mailto';
//
// export const toSearchString = (searchParams = {}) => {
//   return Object.keys(searchParams).map(key =>
//     `${key}=${encodeURIComponent(searchParams[key])}`
//   ).join('&');
//
// };
//
// export const createMailtoLink = (email, headers) => {
//   let link = `mailto:${email}`;
//   if (headers) {
//     link += `?${toSearchString(headers)}`;
//   }
//   return link;
// };
//
// class Feedback extends Component {
//
//   render () {
//     return this.props.obfuscate ?
//       this.renderObfuscatedLink() :
//       this.renderLink();
//   }
//
//   renderLink () {
//     const { email, obfuscate, headers, children, ...others } = this.props;
//     return (
//       <a href={createMailtoLink(email, headers)} {...others}>
//         {children}
//       </a>
//     );
//   }
//
//   renderObfuscatedLink () {
//     const { email, obfuscate, headers, children, ...others } = this.props;
//     return (
//       <a onClick={this.handleClick.bind(this)} href="mailto:support@howlalert.com" {...others}>
//         {children}
//       </a>
//     );
//   }
//
//   handleClick (event) {
//     event.preventDefault();
//     const { email, headers } = this.props;
//     window.location.href = createMailtoLink(email, headers);
//   }
// }
//
// Mailto.propTypes = {
//   children: PropTypes.node.isRequired,
//   email: PropTypes.string.isRequired,
//   headers: PropTypes.object,
//   obfuscate: PropTypes.bool
// };
//
// Mailto.defaultProps = {
//   obfuscate: false
// };
//
// const Page = () => (
//   <div className="page-login">
//     <div className="main-body">
//       <QueueAnim type="bottom" className="ui-animate">
//         <div key="1">
//           <Feedback />
//         </div>
//       </QueueAnim>
//     </div>
//   </div>
// );
// module.exports = Page;
