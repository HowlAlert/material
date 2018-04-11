import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';

// const isOnline = require('is-online');
//
// isOnline().then(online => {
// console.log(online);
// //=> true
// });
const Terms = () => (
  <section className="container-fluid with-maxwidth-md chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <article className="article">
        <center><h2 className="article-title">Terms and Conditions</h2></center>

        <p>
           Last updated: March 10, 2017
        </p>
        <div>
          <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully befor using the Howl Alert mobile application(the "Service") operated by Howl Alert ("us" , "we" , or "our").</p>
        </div>
        <div>
           <p>Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.</p>
        </div>
        <div>
         By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.
        </div>
        <div>
           <h5>PURCHASES</h5>
            <div>
              <p>If you wish to purchase any product or service made available through the Service("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
              <p> You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>
              <p> The service may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to put Privacy Policy.</p>
            </div>
        </div>
        <div>
          <h5>AVAILABILITY, ERRORS AND INACCURACIES</h5>
          <p>
            We are constantly updating product and service offering on the Service. We may experience delays in updating information on the Service and in our advertising on other web sites. The information found on the Service may contain errors or inaccuracies and may not be complete or current. Products or services may be mispriced, described inaccurately, or unavailable on the Service and we cannot guarantee the accuracy or completeness of any information found on the Service.
          </p>
          We therefore reserve the right to change or update information and to correct erors, inaccuracies, or omissions at any time without prior notice.
        </div>
        <div>
          <h5>ACCOUNTS</h5>
          <div>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.</div><br />
          <p> You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a  thirdparty service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

          <p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. you may not use as a username any name that is offensive, vulgar or obscene.</p>
          We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.
         </div>
        <div>
          <h5>INTELLECTUAL PROPERTY</h5>
          The Service and its original content, features and functionality are and will remain the exclusive property of HOWL Alert and its licensors. The Service is protected by copyright, trademark, and other  laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of HOWL Alert.
        </div>
        <div>
           <h5>LINKS TO OTHER WEB SITES</h5>
           Our Service may contain links to third party web sites or services that are not owned or controlled by HOWL Alert.<br />
          <p> HOWL Alert has no control over, and assumes no responsibility for the content, privacy policies, or practices of
             any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their
             websites.</p>
          <p>You acknowledge and agree that HOWL Alert shall not be responsible or liable, directly or indirectly, for any
            damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content,
            goods or services available on or through any such third party web sites or services.</p>
          <p>We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or
            services that you visit.</p>
        </div>
        <div>
          <h5>TERMINATION</h5>
           <p> We may terminate or suspend your account and bar access to the Service immediately, without prior notice or
            liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to
            a breach of the Terms.</p>
            <p>If you wish to terminate your account, you may simply discontinue using the Service.</p>
           <p> All provisions of the Terms which by their nature should survive termination shall survive termination,
            including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
        </div>
        <div>
          <h5>INDEMNIFICATION</h5>
        <p>You agree to defend, indemnify and hold harmless HOWL Alert and its licensee and licensors, and their
            employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations,
            losses, liabilities, costs or debt, and expenses(including but not limited to attorney's fees), resulting from or
            arising out of a) your use and access of the Service, by you or any person using your account and password, or
            b) a breach of these Terms.</p>
        </div>
        <div>
          <h5>LIMITATION OF LIABILITY </h5>
        <p>
          In no event shall HOWL Alert, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for
            any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits,
            data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or
            use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the
            Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on
            warranty, contract, tort(including negligence) or any other legal theory, whether or not we have been informed
            of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential
            purpose.
        </p>
        </div>

        <div>
          <h5>DISCLAIMER</h5>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
           The Service is provided without warranties of any kind, whether express or implied, including, but not limited
           to, implied warranties of merchantability, fitness for a particular purpose, non­infringement or course of
           performance.

          </p>
          <p>
            HOWL Alert its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function
            uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c)
            the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your
            requirements.
          </p>

        </div>

        <div>

          <h5>EXCLUSIONS</h5>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for
            consequential or incidental damages, so the limitations above may not apply to you.
          </p>

        </div>

        <div>

          <h5>GOVERNING LAW</h5>
          <p>
            These Terms shall be governed and construed in accordance with the laws of New York, United States, without
            regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If
            any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these
            Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and
            supersede and replace any prior agreements we might have had between us regarding the Service.

          </p>

        </div>

        <div>

          <h5>CHANGES</h5>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material
            we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change
            will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the
            revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
          </p>
        </div>


        <h5>CONTACTING US</h5>
        <div>IF THERE ARE ANY QUESTIONS REGARDING THIS PRIVACY POLICY, YOU MAY CONTACT US USING THE INFORMATION BELOW.</div><br />
        HOWL ALERT<br />
        10818 QUEENS BLVD, 4TH FLOOR<br />
        FOREST HILLS, NEW YORK 11375<br />
        USA<br />
        INFO@HOWLALERT.COM<br />
        888.453.4427

        </article>
      </div>
    </QueueAnim>
  </section>
);

module.exports = Terms;