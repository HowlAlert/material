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
        <center><h2 className="article-title">Terms of Service</h2></center>
        <p>This is an Agreement (the "Agreement") between you ("you" or the "Subscriber") and
        HOWL Alert, Inc. ("we" or "HOWL Alert"). In this Agreement, "System" means the
        products you have purchased from HOWL Alert; "Services" mean the services you have
        selected to receive from HOWL Alert, including any Emergency Dispatch Services (as
        described in Section 23 below), Video-Related Services (as described in Section 21
        below), Account Management Services (as described in Section 20 below),the
        Application, defined as the software or subscription services that may be downloaded
        to your smartphone or tablet to access Services remotely and the customer support
        Services provided by HOWL Alert in support of any of the foregoing; "Premises" means
        the premises at which the System is located. The term ?€?you,?€? as used in this
        Agreement, means any person or entity who accesses or uses the Services and any
        person or entity who creates an account and accepts this Agreement and accesses or
        uses the Services, including any person granted access to the Services by you.</p><br />
        <p>
        Please read these terms and conditions carefully. These are the terms and conditions
        under which we are willing to provide you the Services. This Agreement contains
        important disclaimers, limitations of liability and indemnity obligations applicable
        to the Services and requires the use of binding arbitration to resolve disputes
        rather than jury trials or class actions (as described in Section 38 below). By
        clicking the "Submit" button below or using any of the Services, you agree that you
        have read this Agreement and are legally bound by this Agreement, including the
        disclaimers, limitations of liability and indemnity obligations below. The HOWL
        Alert Privacy Policy at http://www.HOWLAlert.com/privacy-policy is incorporated by
        reference into this Agreement. You may print this Agreement by clicking the print
        button on your Internet browser.
      </p>
      <ol>
        <li>Services, Eligibility, and Your Account.</li>
        <ol type="a">
          <li>HOWL Alert will provide you the Services subject to the terms of this Agreement.</li>
          <li>Only individuals age 18 and older are permitted to subscribe for the Services
          and register for an Account.</li>
          <li>To use the Services, you must register for an account (?€?Account?€?) and
          provide certain information about yourself as prompted by the monitoring
          registration form. All information related to your Account is subject to the terms
          of this Agreement and the HOWL Alert Privacy Policy at
          http://www.HOWLAlert.com/privacy-policy. You are entirely responsible for
          maintaining the confidentiality of your Account login information and for all
          activities that occur under your Account. You agree to use ?€?strong?€? passwords
          (passwords that use a combination of upper and lower case letters, numbers and
          symbols) with your Account, and to maintain your password securely to prevent others
          from gaining access without your permission. You agree to immediately notify HOWL
          Alert of any unauthorized use, or suspected unauthorized use, of your Account or any
          other breach of security. HOWL Alert is not liable for any loss or damage arising
          from your failure to comply with the above requirements.</li>
          <li>We may offer the option to log into your Account through the Application using
          Touch ID???. You can activate or deactivate this feature by toggling on or off the
          ?€?Touch ID Authentication?€? controls on the Settings screen and following the
          instructions. HOWL Alert does not have access to your fingerprint information. You
          acknowledge that by enabling Touch ID???, you will allow anyone who has a
          fingerprint stored on your device to access your Account through the Application on
          your device. We caution you against storing the fingerprints of others on your
          device, but if you do, please make sure the individuals who have fingerprints stored
          on your device are authorized to access the personal and Services information
          available through the Application. Touch ID??? can only be associated with one HOWL
          Alert Account at a time on a device. For information on how Apple uses and stores
          your fingerprint data, please see Apple?€?s Privacy Policy and iOS Security Guide.</li>
          <li>If you contact HOWL Alert?€?s customer service, you hereby consent to the means
          by which such contact was initiated. You similarly consent to HOWL Alert contacting
          you through any of the means that HOWL Alert makes available utilizing the contact
          information identified in your Account. This may include one-way or two-way
          video-enabled customer service communication methods, whether made available via
          your mobile device, through the Application or any other mobile or web interface now
          existing or later developed. Except as otherwise expressly agreed by you under a
          separate services agreement, HOWL Alert will not charge you any additional fees to
          deliver, or for you to receive, such customer support Services; however, your
          wireless service provider may charge a fee for air-time or data usage associated
          therewith. Check with your wireless carrier if you have questions about your
          wireless plan.</li>
        </ol>
        <li>Term and Termination. The term of this Agreement will continue until this
        Agreement is terminated pursuant to this section. HOWL Alert or Subscriber may
        terminate this Agreement for any reason or no reason following notice sent to the
        other as set forth in this section. Subscriber shall provide notice of termination
        to HOWL Alert by (1) regular mail, postage prepaid, or overnight delivery, by a
        reputable, national overnight delivery service, to HOWL Alert's then current
        principal place of business or (2) calling HOWL Alert Customer Support at
        1-718-575-8400 and following the instructions provided. Such notice by Subscriber
        shall be effective upon HOWL Alert's receipt thereof. HOWL Alert shall provide
        notice of termination to Subscriber by e-mail sent to the email address on file with
        HOWL Alert for your current online account. HOWL Alert's termination shall be
        effective when HOWL Alert sends the e-mail notice. If you do not provide HOWL Alert
        an e-mail address, then HOWL Alert may send you written notice of the termination by
        regular mail, postage pre-paid and any such notice shall be effective upon four (4)
        days following the day on which HOWL Alert sent the notice. Upon termination of the
        Agreement, HOWL Alert shall have no further obligation to Subscriber and Subscriber
        shall have no further obligation to HOWL Alert other than (i) the obligation
        respecting the payment of any monies due to HOWL Alert for services rendered; and
        (ii) the obligations set forth in Sections 3-8, inclusive, 13-19, inclusive, and
        24-41, inclusive. Notwithstanding the foregoing, HOWL Alert shall refund any
        unearned service charges with respect to any full calendar month following any
        termination. HOWL Alert shall not refund any unearned service charges with respect
        to any partial calendar month following any termination. There are no termination
        fees. (5) A USER HAS THE RIGHT TO CANCEL MONITORING SUBSCRIPTION WITHIN THREE (3)
        BUSINESS DAYS FROM SUBSCRIBING. User must call HOWL Alert Customer Support at
        1-718-575-8400 within that time to cancel to receive refund of service charge of
        that current billing period.</li>
        <li>Payment for Services. Subscriber shall pay HOWL Alert the periodic service charge
        in advance. You authorize HOWL Alert to charge your credit/debit card for the
        periodic (e.g., monthly, quarterly or annually) service charge when due. If charges
        are declined, HOWL Alert shall resubmit the charges for approval and notify you of
        the declined charges by e-mail while continuing to provide Emergency Dispatch
        Services for ten (10) days. If the charges are not approved and you do not make
        payment, HOWL Alert may, in its sole discretion, discontinue services without notice
        at or after the end of the ten (10) day period. If Subscriber otherwise does not pay
        any charges when due, HOWL Alert may, in its sole discretion, terminate this
        Agreement and/or discontinue services without notice.</li>
        <li>INSURANCE. HOWL Alert'S SERVICE CHARGES ARE BASED SOLELY ON THE VALUE OF SERVICES
        PROVIDED AND ARE NOT INSURANCE PREMIUMS AND ARE NOT RELATED TO THE VALUE OF PROPERTY
        LOCATED ON OR NEAR THE PREMISES. YOU ACKNOWLEDGE AND AGREE THAT HOWL Alert IS NOT AN
        INSURER AND SHALL NOT PROVIDE INSURANCE COVERAGE AGAINST ANY LOSSES, AS DEFINED
        BELOW. TO THE EXTENT YOU WISH TO HAVE ANY INSURANCE COVERAGE FOR LOSSES, AS DEFINED
        BELOW, IT IS YOUR RESPONSIBILITY TO PROCURE AND MAINTAIN SEPARATE INSURANCE POLICIES
        FROM AN INSURANCE COMPANY OR COMPANIES, SOLELY AT YOUR COST AND EXPENSE, COVERING
        ALL LOSS, DAMAGE OR EXPENSE (COLLECTIVELY, "LOSSES"), INCLUDING ALL PROPERTY DAMAGE,
        PERSONAL INJURY (INCLUDING DEATH), ECONOMIC LOSSES OR ANY OTHER FORM OF LOSS, DAMAGE
        OR EXPENSE, ARISING OUT OF OR IN CONNECTION WITH, DUE TO, OR CAUSED IN WHOLE OR IN
        PART BY (I) THIS AGREEMENT, INCLUDING ANY BREACH OF ANY REPRESENTATION, WARRANTY,
        COVENANT OR OBLIGATION ARISING HEREUNDER (II) THE SYSTEM, (III) THE SERVICES, (IV)
        THE ACTIVE OR PASSIVE SOLE, JOINT OR SEVERAL NEGLIGENCE OF ANY KIND OR DEGREE OF YOU
        OR ANY HOWL Alert PARTY (AS DEFINED IN SECTION 5), (V) THE IMPROPER OPERATION OR
        NON-OPERATION OF THE SYSTEM, (VI) BREACH OF CONTRACT, EXPRESS OR IMPLIED, WHICH
        OCCURS BEFORE OR AFTER THE SIGNING OF THIS AGREEMENT (VII) BREACH OF WARRANTY,
        EXPRESS OR IMPLIED, (VIII) PRODUCT OR STRICT LIABILITY (IX) THE LOSS OR DAMAGE TO OR
        MALFUNCTION OF FACILITIES NECESSARY TO OPERATE THE SYSTEM, TRANSMIT ANY SIGNAL TO OR
        RECEIVE SIGNALS AT ANY MONITORING FACILITY, (X) A CLAIM FOR SUBROGATION,
        INDEMNIFICATION OR CONTRIBUTION, (XI) A VIOLATION OF ANY APPLICABLE CONSUMER
        PROTECTION LAW OR ANY OTHER THEORY OF LIABILITY OR ALLEGED FAULT ON THE PART OF ANY
        HOWL Alert PARTY, (XII) A VIOLATION OF ANY LAW PROHIBITING THE INTERCEPTION OF ORAL
        COMMUNICATIONS BY ELECTRONIC MEANS, (XIII) THE ACTIONS OF ANY THIRD PARTY IN
        RESPONDING TO A SIGNAL FROM THE SYSTEM, OR (XIV) ANY UNAUTHORIZED ACCESS, USE OR
        DISCLOSURE OF YOUR PERSONAL INFORMATION (COLLECTIVELY, THE "COVERED CLAIMS").
        RECOVERY FOR ANY LOSSES, AS DEFINED IN THIS SECTION 4, SHALL BE LIMITED TO THE
        INSURANCE YOU PURCHASE SEPARATELY FROM AN INSURANCE COMPANY, IF ANY.</li>
        <li>LIMITATIONS OF LIABILITY AND RELEASE. BY AGREEING TO THESE TERMS, YOU ARE
        RELEASING HOWL Alert, ITS AFFILIATES, DIRECTORS, OFFICERS, SHAREHOLDERS, EMPLOYEES,
        SUBCONTRACTORS, AGENTS AND REPRESENTATIVES (COLLECTIVELY, THE "HOWL Alert PARTIES")
        ON YOUR BEHALF AND ON BEHALF OF ALL OTHERS WHO MAKE CLAIMS UNDER THIS AGREEMENT FROM
        ALL LIABILITY ARISING OUT OF OR IN CONNECTION WITH, DUE TO, OR CAUSED IN WHOLE OR IN
        PART BY ANY COVERED CLAIM, AS DEFINED IN SECTION 4. UNDER NO CIRCUMSTANCES WILL HOWL
        Alert BE RESPONSIBLE OR LIABLE TO YOU FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES
        INCLUDING WITHOUT LIMITATION, DAMAGES FOR PERSONAL INJURY, DEATH OR DAMAGES TO
        PROPERTY. NOTWITHSTANDING THE FOREGOING, EVEN IF ANY HOWL Alert PARTY IS FOUND
        LIABLE FOR ANY LOSSES, AS DEFINED IN SECTION 4, ARISING OUT OF OR IN CONNECTION
        WITH, DUE TO, OR CAUSED IN WHOLE OR IN PART BY ANY COVERED CLAIM, AS DEFINED IN
        SECTION 4, ANY SUCH LIABILITY SHALL BE LIMITED TO THE MAXIMUM SUM OF $1,000.00. THIS
        LIMITATION IS CUMULATIVE AND WILL NOT BE INCREASED BY THE EXISTENCE OF MORE THAN ONE
        INCIDENT OR CLAIM. HOWL Alert DISCLAIMS ALL LIABILITY OF ANY KIND OF HOWL Alert?€?S
        LICENSORS AND SUPPLIERS. HOWL Alert AND YOU ACKNOWLEDGE AND AGREE IT IS IMPRACTICAL
        AND EXTREMELY DIFFICULT TO DETERMINE THE ACTUAL DAMAGES, IF ANY, THAT MAY RESULT
        FROM A FAILURE BY HOWL Alert TO PERFORM ANY OF ITS OBLIGATIONS. THIS AGREED-UPON
        AMOUNT IS NOT A PENALTY, AND IS THE SOLE REMEDY. SOME STATES DO NOT ALLOW THE
        EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE
        LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
   </li>
        <li>NO WARRANTIES. THE SERVICES ARE PROVIDED FOR YOUR CONVENIENCE, ?€?AS IS?€? AND
        ?€?AS AVAILABLE?€?, AND HOWL Alert AND ITS LICENSORS AND SUPPLIERS EXPRESSLY
        DISCLAIM ANY WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
        INCLUDING THE WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, ACCURACY AND NON-INFRINGEMENT.</li>
        <li>Release of Insured Losses; Waiver of Subrogation. You release HOWL Alert for all
        Losses covered by your insurance policies and for all insurance deductibles. You
        also waive and release any subrogation and other rights you or your insurance
        company may have against HOWL Alert for money paid to you or on your behalf.</li>
        <li>INDEMNIFICATION. IF ANYONE OTHER THAN YOU (INCLUDING YOUR INSURANCE COMPANY) ASKS
        ANY HOWL Alert PARTY TO PAY FOR ANY LOSSES, AS DEFINED IN SECTION 4, INCLUDING
        ATTORNEYS' FEES, ARISING OUT OF OR IN CONNECTION WITH, DUE TO, OR CAUSED IN WHOLE OR
        IN PART BY ANY COVERED CLAIM, AS DEFINED IN SECTION 4, INCLUDING THE ACTIVE OR
        PASSIVE SOLE, JOINT OR SEVERAL NEGLIGENCE OF ANY KIND OR DEGREE OF YOU OR ANY HOWL
        Alert PARTY, YOU SHALL INDEMNIFY, DEFEND AND HOLD SUCH HOWL Alert PARTY HARMLESS
        (WITHOUT ANY CONDITION THAT ANY OF THEM FIRST PAY), FOR ALL LOSSES, AS DEFINED IN
        SECTION 4, INCLUDING ATTORNEYS' FEES, ASSERTED AGAINST OR INCURRED BY SUCH HOWL
        Alert PARTY. THE FOREGOING INDEMNIFICATION OBLIGATIONS MAY NOT BE ENFORCEABLE IN
        SOME STATES, SO SUCH OBLIGATIONS MAY NOT APPLY TO YOU.
     </li>
        <li>Communications Equipment and Services. The System is designed to transmit signals
        to a monitoring facility through certain communications equipment and services,
        including DSL, broadband, cellular, wireless and/or landline telephone equipment and
        services (collectively, the "Communications Equipment and Services"). Regardless of
        the form of Communications Equipment and Services used, you understand that the
        Communications Equipment and Services may be interrupted, circumvented, unavailable
        (for a limited or extended time period) or otherwise compromised, including as a
        result of equipment designed or used by a third party for the purpose of causing
        false alarms or gaining unauthorized access to or otherwise affecting or controlling
        the Communications Equipment and Services or any Video-Related Services. If the
        Communications Equipment and Services are inoperative or interrupted by any cause,
        there will be no indication of such at the monitoring facility and the monitoring
        facility will not receive a signal from your system. You must test the System's data
        transmission with the monitoring facility at least monthly and immediately after the
        installation, modification or repair of any Communications Equipment or Service. (If
        DSL, VOIP or other form of broadband telephone equipment and services are used, such
        equipment and services should be installed on a telephone line and number that is
        not used by the System to transmit data to the monitoring facility). If you are
        using the optional telephone backup for the System, you will need some other means
        of communications to make a phone call if and when the System transmits data by
        telephone. You must confirm that the Communications Equipment and Services are
        compatible with the System, including when you make any changes to the
        Communications Equipment and Services. Your access to, and availability of the
        Application is dependent on (i) your computer, mobile device, home wiring, home
        Wi-Fi network, Bluetooth connection, and other related equipment, (ii) your Internet
        service provider, and (iii) your mobile device carrier. You shall immediately repair
        (or caused to be repaired) any (i) problems with the Communications Equipment and
        Services; or (ii) problems with the System. Consult the Owner's Manual for your
        System for further important safety information for your System and the transmission
        of signals from your System.<br/>YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOU HAVE NO CONTRACTUAL RELATIONSHIP
        WHATSOEVER WITH THE UNDERLYING WIRELESS SERVICE PROVIDER (THE ?€?UNDERLYING
        CARRIER?€?) OR ITS AFFILIATES OR CONTRACTORS AND THAT YOU ARE NOT A THIRD PARTY
        BENEFICIARY OF ANY AGREEMENT BETWEEN HOWL Alert AND THE UNDERLYING CARRIER. IN
        ADDITION, YOU ACKNOWLEDGE AND AGREE THAT THE UNDERLYING CARRIER AND ITS AFFILIATES
        AND CONTRACTORS SHALL HAVE NO LEGAL, EQUITABLE, OR OTHER LIABILITY OF ANY KIND TO
        YOU AND YOU HEREBY WAIVE ANY AND ALL CLAIMS OR DEMANDS THEREFOR.</li>
        <li>Additional Equipment or Services. You have selected the System based on your
        personal considerations (i.e., cost, the condition of the Premises, insurance
        requirements, etc.). Additional equipment or services, at additional cost, may
        provide increased detection. You agree that any additional equipment or services
        provided by HOWL Alert shall be subject to this Agreement. For example, you may
        request that, upon the receipt of signals from your System, the monitoring facility
        notify you of such activity (via live operator telephone call, text message or other
        form of electronic communication) in addition to or in lieu of providing the
        Emergency Dispatch Services described in Section 23 hereof. We will honor any such
        request provided that we have previously agreed in writing to do so. You also agree
        to pay HOWL Alert for such additional equipment or services. Your municipality may
        require a license or permit or the payment of taxes in connection with the
        installation, use or monitoring of the System. You are solely responsible for
        complying with such obligations and providing HOWL Alert with any then current
        license or permit number. You understand that HOWL Alert does not provide any
        installation or repair services for the System. You shall provide and maintain
        adequate power for all equipment relating to the System.</li>
        <li>False Alarms; Suspension of Service and Shut-Down. You agree to prevent false
        alarms and be solely liable for false alarms. You must pay (or reimburse HOWL Alert)
        any fines, fees, costs, expenses and penalties relating to the System or Services
        assessed against you, HOWL Alert or the monitoring facility by any person or entity,
        including any court or governmental agency or any person or entity acting on the
        behalf of such court or agency. If (i) you default under this Agreement, (ii) this
        Agreement or the Services are terminated by either party for any reason, (iii) the
        System becomes a "runaway" system or excessively signals the monitoring facility
        without apparent reason, or (iv) in the opinion of monitoring facility personnel,
        the System otherwise becomes a ?€?problem account,?€? we may suspend the Services
        and you authorize HOWL Alert to disconnect the System from the monitoring facility.
        The exercise of any such rights shall not be deemed a waiver of Company's right to
        damages.</li>
        <li>Increase in Charges. HOWL Alert may increase periodic recurring charges at any
        time under this Agreement by sending the notice to you by email to the email address
        on file with HOWL Alert for your current online account.</li>
        <li>Default. If you default under this Agreement you shall pay HOWL Alert for all
        Losses in enforcing its rights under this Agreement.</li>
        <li>Binding Agreement. This Agreement shall become binding on HOWL Alert only after
        the commencement of any Services. This Agreement is binding on the parties' heirs,
        executors, administrators, successors and permitted assigns.</li>
        <li>Applicable Law. This Agreement shall be governed by and construed according to
        the laws of New York without reference to its conflicts of law rules. The
        interpretation of this Agreement shall not be construed against the drafter.</li>
        <li>Assignment. You may not assign this Agreement. HOWL Alert may assign all or any
        portion of this Agreement.</li>
        <li>Finance and Late Charges. Invoices are due upon receipt. You agree to pay a
        finance charge of the lesser of (i) one and one-half (1-1/2%) percent per month
        (eighteen percent (18%) per year) or (ii) the maximum rate permitted under
        applicable law, for all charges not paid within thirty (30) days of the invoice
        date. In addition, you shall pay an administrative fee (late charge) of 5% of any
        invoice not paid (as agreed upon damages and not a penalty) within thirty (30) days
        of the invoice date, provided the imposition of such fee (together with the finance
        charge listed above) is permitted and not deemed to exceed the maximum charge
        permitted under applicable law.</li>
        <li>No Waiver of Breach. Waiver of your breach of this Agreement shall not be a
        waiver of any subsequent breach. HOWL Alert's rights under this Agreement shall be
        cumulative, may be exercised concurrently or consecutively and shall include all
        remedies available even if not referred to in this Agreement.</li>
        <li>Consent to Recording. Certain federal and state laws prohibit interception and
        recording of telephone calls and other oral communications by electronic means,
        including the interception and recording of telephone calls and other oral
        communications by the System at the Premises. You, for yourself and any other person
        contacting HOWL Alert or the monitoring facility or whose communication is received
        from the System, whether by HOWL Alert or the monitoring facility (collectively,
        "Users"), consent to the interception, recording, disclosure and use of the contents
        of any telephone call, other oral communications or video in connection with the
        Services. In addition, you shall notify all Users with respect to any such
        interception, recording, disclosure or use. YOU SHALL NOT INTERCEPT OR RECORD ANY
        ORAL COMMUNICATION OF ANY PERSON WITHOUT HAVING SUCH PERSON'S PERMISSION TO DO SO.
        Please refer to the HOWL Alert Privacy Policy at
        http://www.HOWLAlert.com/privacy-policy for important information regarding
        recording audio or video.
   </li>
        <li>Account Management Services. "Account Management Services" means services
        relating to the remote management of the System through the Application or
        otherwise.</li>
        <li>Video-Related Services. "Video-Related Services" consists solely of the
        following: (i) verification of alarm events by monitoring facility personnel in
        connection with the Emergency Dispatch Services to be provided pursuant to Section</li>
        <li>("Verification Services") using audio and video received from the System, (ii)
        real-time access to video and audio from the System through the Application
        ("Real-Time Services") and (iii) storage and retrieval through the Application of
        recorded video and audio stored on our servers, which storage shall be limited and
        subject to change (a) in accordance with the terms of the plan you selected or (b)
        if you did not select a plan that provides for terms regarding storage, at our
        discretion ("Recorded Services"). Verification Services are intended to assist you
        and any permitted monitoring facility personnel to verify an alarm event at the
        Premises, not to reduce or eliminate any risk of loss. None of the Video-Related
        Services are intended to replace alarm monitoring services or to detect or prevent
        unauthorized intrusion onto the Premises or any other emergency condition, including
        fire, smoke, carbon monoxide, medical emergencies or water damage. The Verification
        Services are provided and shall be used by you solely for the verification of alarm
        events at the Premises and no other purpose. Monitoring facility personnel will not
        have access to the Real-Time Services or Recorded Services unless (1) you have
        granted monitoring facility personnel such access through the Application and (2)
        such video and audio is received at the monitoring facility in connection with the
        Emergency Dispatch Services.</li>
        <li>
          Lawful Recording of Video and Audio; Required Connectivity. Recording video or
        audio may be unlawful or violate an individual's rights, including privacy rights.
        You shall not use any of the Video-Related Services, or permit the use of any of the
        Video-Related Services, for any unlawful purpose. For example, you shall not use the
        System to obtain or record video in any place where a person may have a reasonable
        expectation of privacy, including restrooms, dressing or changing areas, locker
        rooms or similar areas. You also shall take all steps necessary to alert individuals
        at the Premises of the possibility of recording video or audio. You shall use a form
        of connectivity to permit the transmission of video, audio and Listed Codes (as
        defined below) from your System to us and any permitted monitoring facility. You
        shall instruct all persons who may use any Video-Related Services or the System of
        any limitations with respect to the Video-Related Services or the System. You shall
        comply with the provisions of Section 19 with respect to the use of the
        Video-Related Services and the System.
        </li>
          <li>
             Emergency Dispatch Service. "Emergency Dispatch Services" shall be provided in
        accordance with this Agreement and consist solely of monitoring facility personnel
        telephoning the governmental authorities ("Authorities") or other persons provided
        by you ("Responsible Parties") or any company that provides on-site response
        services (?€?Third Party Responders?€?) upon the receipt of signals from your System
        reporting specific conditions ("Listed Codes") at the Premises. We shall provide
        Emergency Dispatch Services only for Listed Codes. Our obligation to provide
        Emergency Dispatch Services shall be satisfied by monitoring facility personnel
        contacting (or attempting to contact) the Authorities or Responsible Parties or
        Third Party Responders or by leaving a voicemail or similar type message with the
        Authorities or Responsible Parties or Third Party Responders. Emergency Dispatch
        Services are intended to reduce the risk of a burglary, robbery or other events
        occurring at the Premises but are not a guarantee such events will not occur or that
        there will be no personal injury or property loss as a result. The monitoring
        facility will not contact (nor attempt to contact) any Third Party Responder on your
        behalf unless you have specifically contracted with us to provide such service, or
        you have specifically requested that we provide such service (and we have agreed in
        writing to do so). Examples of where you might desire that the monitoring facility
        attempt to contact a Third Party Responder include situations (i) where the Premises
        are located in a jurisdiction in which the applicable Authorities will not respond
        to alarm signals at the Premises absent prior verification of an actual alarm event,
        or (ii) where you desire a faster response time than what might otherwise be
        provided by the applicable Authorities. Regardless of the circumstances, however,
        you acknowledge that, upon receipt of signals from your System, the monitoring
        facility will not contact (nor attempt to contact), nor have any obligation to
        contact, any Third Party Responder unless you have previously contracted with us to
        provide such service or you have previously requested that we provide such service
        (and we have agreed in writing to do so).
      </li>
    <li>
      Consent to Communicate. The Emergency Dispatch Services require that we
        communicate with the Responsible Parties. Our communication may take different
        forms, including a live operator telephone call, a pre-recorded telephone message
        using an auto-dialer, an SMS or other form of text message or some other form of
        electronic communications. We will communicate with a Responsible Party at the
        telephone number you provide us, including any mobile phone number or residential
        landline number. You will (i) inform the Responsible Parties that we will
        communicate with them at such numbers; and (ii) obtain permission from the
        Responsible Parties that we may communicate with them at these telephone numbers.
        You will indemnify, defend and hold us harmless (without any condition that we first
        pay) for any Losses (as defined in Section 4 of this Agreement), including our
        reasonable attorneys?€? fees, arising out of or in connection with, due to or caused
        in whole or in part by, any claims asserted against us in connection with or as a
        result of our communications with any of the Responsible Parties, including any
        claim under any state or federal consumer protection or similar law, including the
        Telephone Consumer Protection Act. Additionally we have the right to communicate via
        telephone, cell phone, text message or email or any other forms of electronic
        communication with the subscriber.
    </li>
    <li>
      Alarm Verification Prior to Dispatch. Upon receipt of a Listed Code and before
        calling any Authorities or Responsible Parties or any Third Party Responder,
        monitoring facility personnel may, in their sole discretion, take any one or more of
        the following steps in an attempt to verify the need to report the Listed Code to
        the Authorities or any of the Responsible Parties or any Third Party Responder,
        (collectively, the "Alarm Verification Steps"): (i) telephone or attempt to
        telephone the Premises, (ii) if we have access to Real-Time Services or Recorded
        Services, receive, retrieve and review video from the System, (iii) intercept or
        retrieve and listen to oral communications or other audio from the System; or (iv)
        undertake such other reasonable steps to verify the need to report the Listed Code.
        Following any one or more of the Alarm Verification Steps, monitoring facility
        personnel may, in their sole discretion, determine to report (or not report) a
        Listed Code to the Authorities or any of the Responsible Parties or any Third Party
        Responder. In addition, if monitoring facility personnel are unable to verify the
        need to report a Listed Code to the Authorities or any of the Responsible Parties or
        any Third Party Responder, monitoring facility personnel shall have no obligation to
        report such Listed Code. Monitoring facility personnel shall have no obligation to
        review or monitor any audio or video from the System for any time that is not
        immediately before or after receipt of a Listed Code.
      </li>

      <li>
        Alarm Cancellation. Upon receipt of any current cancellation code set in
        accordance with the Owner's Manual for the System or oral advice (confirmed by safe
        word) to disregard the receipt of a Listed Code, monitoring facility personnel may,
        in their sole discretion, determine not to report a Listed Code to the Authorities
        or any of the Responsible Parties or any Third Party Responder.
      </li>
      <li>
        Data; Data Storage. Your Account provides you with access to certain data stored
        by us. You agree that we may delete any data delivered to us when (i) any storage
        period that applies to your account expires, (ii) this Agreement is terminated or
        expires or (iii) you deliver a written request pursuant to Section 39 and such
        deletion is not prohibited by any applicable law, regulation, regulatory authority
        or other applicable judicial or governmental order. Notwithstanding anything
        contained herein to the contrary, HOWL Alert is not responsible for any change to or
        loss of any data.
      </li>
      <li>
        App Stores. You acknowledge and agree that the availability of the Application
        is dependent on the third party websites from which you download the Application,
        e.g. the App Store from Apple or the Android app market from Google (each, an ?€?App
        Store?€?). You acknowledge that this Agreement is between you and HOWL Alert and not
        with an App Store. Each App Store may have its own terms and conditions to which you
        must agree before downloading mobile applications from it. You agree to comply with,
        and your license to use the Application is conditioned upon your compliance with,
        such App Store terms and conditions. To the extent such other terms and conditions
        from such App Store are less restrictive than, or otherwise conflict with, the terms
        and conditions of this Agreement, the more restrictive or conflicting terms and
        conditions in this Agreement apply. HOWL Alert will not charge you any additional
        fees for you to receive and download the Application; however, your wireless service
        provider may charge a fee for air-time or data usage associated therewith. Check
        with your wireless carrier if you have questions about your wireless plan.
       </li>
       <li>
         End User License and Intellectual Property. Subject to the terms and conditions
        of this Agreement, HOWL Alert grants you a non-exclusive, non-transferable license
        to access and use the Services by (i) use the Application in connection with, and
        solely for the purpose of, controlling and monitoring the Services you are
        authorized to receive and/or control or monitor, and (ii) install and use the
        Application solely on your own handheld mobile device (e.g., iPhone, iPad, or
        Android smartphone or other tablet device) and solely for the purposes set forth in
        this Agreement. There is a risk that unauthorized persons may gain access to the
        Application and data thereon and you agree to assume such risk. You consent to our
        posting alarm event and other status reports in connection with the Service on the
        Application. You will keep confidential all information available on the Application
        and all passwords relating to the Application or access thereto. This license will
        continue and be co-extensive with the term of this Agreement except for your (i)
        failure to keep confidential all information available on the Application and all
        passwords or access codes relating to the Application or access thereto, (ii) use of
        the license or the information in any manner that negatively affects us, (iii) use
        of the license or the information for any illegal purpose, (iv) breach of this
        Agreement or (v) violation of any applicable law. You will be solely responsible for
        information you deliver, delete or modify. Upon termination of this Agreement or
        termination or suspension of the license by us, we may immediately, and without
        notice, disable your access to the Application and cancel all passwords or other
        access codes. You will not (a) disclose or make available to third parties any
        portion of the technology associated with the Services or the Application without
        our prior written consent, (b) copy, decompile, dissemble, reverse engineer,
        manipulate, modify, or make derivative works of any technology incorporated in the
        Services or the Application. HOWL Alert may from time to time develop patches,
        updates, upgrades or other modifications (?€?Updates?€?) to improve the performance
        of the Services or the Application. These may be automatically installed without
        providing any additional notice or receiving any additional consent. You consent to
        this automatic update. If you do not want such Updates, your remedy is to terminate
        your Account and stop using the Services or the Application. You acknowledge that
        you may be required to install Updates to use the Services and you agree to promptly
        install any Updates that HOWL Alert provides. IF YOU FAIL TO INSTALL ANY UPDATES
        PROVIDED BY HOWL Alert, YOUR ACCESS TO THE APPLICATION AND THE SERVICES MAY BE
        TERMINATED.
      </li>
      <li>
        Suspension of Service. HOWL Alert's obligations under this Agreement are waived
        automatically without notice and you release HOWL Alert for all Losses following any
        default or breach of this Agreement by you or if the monitoring facility, or
        Communications Equipment and Services are destroyed, damaged, inoperable or
        malfunction for any reason whatsoever, for the duration of such interruption of
        service, and you shall be entitled to a credit of the unearned charges paid for the
        period of interruption on your request, which credit shall not exceed more than one
        month's service charge and shall be the limit of HOWL Alert's liability. If this
        Agreement is terminated or the Services are suspended or terminated for any reason,
        you shall immediately disconnect the System from all Communications Equipment and
        Services (e.g., telephone line, radio transmitter, cellular transmitter, etc.). Upon
        termination of this Agreement or if the Services are suspended or terminated for any
        reason we may, in our sole discretion, without notice, and without any liability,
        remotely disable, disconnect or block the System and data from the System from
        communicating with the monitoring facility.
       </li>
       <li>
        Time Limitation on Actions. All claims, actions or proceedings against HOWL
        Alert must be commenced in court within one (1) year after the cause of action has
        accrued, without judicial extension of time, or such claim, action or proceeding is
        barred. The time period in this Section must be complied with strictly.
      </li>
      <li>
        Integrated Agreement. This Agreement and any document made a part of this
        Agreement contains the entire agreement between the parties respecting the
        transactions described in such documents and supersedes all prior or current
        negotiations, commitments, contracts (express or implied) warranties (express or
        implied) statements and representations, whether written or oral, pertaining to such
        transactions, all of which shall be deemed merged into this Agreement. NEITHER PARTY
        HAS MADE ANY REPRESENTATION, TERM, PROMISE, CONDITION, STATEMENT, WARRANTY, OR
        INDUCEMENT (COLLECTIVELY, "INDUCEMENT") NOT EXPRESSED IN THIS AGREEMENT RESPECTING
        THE TRANSACTIONS DESCRIBED IN THIS AGREEMENT AND ANY DOCUMENT MADE A PART OF THIS
        AGREEMENT AND, IN ENTERING INTO THIS AGREEMENT, NEITHER PARTY IS RELYING ON ANY
        INDUCEMENT WHICH IS NOT SET FORTH IN THIS AGREEMENT.

      </li>

        <li>
          Valid Agreement. Should any provision of this Agreement (or portion of this
          Agreement), or its application to any circumstances, be held illegal, invalid or
          unenforceable to any extent, the validity and enforceability of the remainder of the
          provision and this Agreement, or of such provisions as applied to any other
          circumstances, shall not be affected thereby, and shall remain in full force and
          effect as valid, binding and continuing.
        </li>
       <li>
         Modifications. Additions, amendments, modifications or deletions to these terms
        shall not become part of the Agreement unless agreed to in writing by the parties;
        provided that HOWL Alert may add, amend, modify or delete the terms of this
        Agreement by providing prior written notice of such addition, amendment,
        modification or deletion on its website at www.HOWLAlert.com/terms-of-service and/or
        via a notice delivered pursuant to Section 39(ii), which amended terms shall be
        binding upon the parties.
      </li>
       <li>
         Right to Subcontract. Monitoring of the System is provided by a third party
         independent contractor. Likewise, any Third Party Responder is also an independent
         contractor. HOWL Alert may, in its sole discretion, subcontract for the provision of
         any of the Services under this Agreement. The provisions of this Agreement inure to
         the benefit of and are applicable to (i) any subcontractors engaged to provide any
         of the Services to you, including any monitoring facility and any Third Party
         Responder; and (ii) each of the HOWL Alert Parties, and bind you to all such persons
         or entities listed in the foregoing subsection (i) or (ii) with the same force and
         effect as they bind you to HOWL Alert. Any subcontractor we engage is an independent
         contractor and not our partner or joint venturer. You authorize us to act as your
         agent for purposes of working with, or providing any directions to, any
         subcontractors with respect to the provision of the Services providing direction to
         monitoring and relative monitoring facilities. You authorize us and we act as agent
         to share your personal information with our subcontractors or Third Parties
         including providing direction to monitoring facility for the purpose of providing
         Services under this Agreement.
       </li>

        <li>
          Section Headings; Interpretation. The section titles used herein are for
          convenience of the parties only and shall not be considered in construing the
          provisions of this Agreement. When used in this Agreement, (i) the word "including"
          shall mean "including, but not limited to;" and (ii) the term "sole discretion"
          shall mean "sole and absolute discretion without any liability."

        </li>
        <li>
          Right to Notice and Cure. If HOWL Alert breaches this Agreement, you shall
          provide HOWL Alert written notice specifically identifying the nature of the breach
          and the provisions of this Agreement affected as a result of such breach. HOWL Alert
          may cure the breach within five (5) business days following HOWL Alert's receipt of
          the written notice or, if the breach cannot be reasonably cured within such period,
          may promptly commence to cure and diligently proceed until cured. If HOWL Alert
          cures any such breach, this Agreement shall continue unabated and HOWL Alert shall
          not be liable to you for any Losses arising out of or in connection with, due to or
          caused in whole or in part by any such breach.
        </li>

        <li>
          Dispute Resolution and Arbitration. PLEASE READ THIS SECTION CAREFULLY. FOLLOW
          THE INSTRUCTIONS BELOW IF YOU WISH TO OPT OUT OF THE REQUIREMENT OF ARBITRATION ON
          AN INDIVIDUAL BASIS. Certain portions of this Section 38 are deemed to be a
          ?€?written agreement to arbitrate?€? pursuant to the Federal Arbitration Act. You
          and HOWL Alert agree that HOWL Alert intends that this Section 38 satisfies the
          ?€?writing?€? requirement of the Federal Arbitration Act.
          <ol type="a">
            <li>
              In the event of any dispute or disagreement between the parties, or claim or
              question by a party, arising from or relating to this Agreement or the breach hereof
              (collectively, a ?€?Dispute?€?), the parties hereto shall use their best efforts to
              settle the Dispute. To this effect, the parties shall consult and negotiate with
              each other in good faith and, recognizing their mutual interests, attempt to reach a
              just and equitable solution satisfactory to both parties. If the parties do not
              reach such solution within a period of 60 days then, upon notice by either party to
              the other, such Dispute shall be finally settled by arbitration administered by the
              American Arbitration Association in accordance with the provisions of its Consumer
              Arbitration Rules. Once the Dispute is submitted to the AAA for arbitration and each
              party pays the appropriate filing fees, the parties agree to equally share all costs
              of AAA arbitration, including Arbitrator fees and expenses. The parties will remain
              individually responsible for their own attorney costs or other non-AAA required
              costs. If an in-person arbitration hearing is required, then it will be conducted in
              New York City, New York.
            </li>
            <li>
              The arbitration will be heard and determined by a single neutral arbitrator
              selected by the AAA who is a retired judge or a lawyer with not less than 15 years
              of experience as a practicing member of the bar in the substantive practice area
              related to the Dispute, who will administer the proceedings in accordance with the
              AAA?€?s Consumer Arbitration Rules. The arbitrator will apply applicable law and the
              provisions of this Agreement and will determine any Dispute according to the
              applicable law and facts based upon the record and no other basis. The
              arbitrator?€?s decision must consist of a written statement stating the disposition
              of each claim of the Dispute, and must provide a statement of the essential findings
              and conclusions on which the decision and any award (if any) is based. Judgment on
              the award rendered by the arbitrator may be entered in any court having jurisdiction
              thereof.<br />
                You can obtain the AAA procedures, rules, and fee information as follows:<br/>
                AAA: 800.778.7879<br />
                http://www.adr.org/<br />
            </li>
            In arbitration, as with a court, the arbitrator must honor the terms of this
            Agreement and can award the prevailing party damages and other relief (including
            attorneys?€? fees). However, WITH ARBITRATION (A) THERE IS NO JUDGE OR JURY, (B) THE
            ARBITRATION PROCEEDINGS AND ARBITRATION OUTCOME ARE SUBJECT TO CERTAIN
            CONFIDENTIALITY RULES, AND (C) JUDICIAL REVIEW OF THE ARBITRATION OUTCOME IS
            LIMITED. The parties agree that the arbitration shall be confidential. All parties
            to the arbitration will have the right, at their own expense, to be represented by
            an attorney or other advocate of their choosing.
            <li>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IF YOU OR WE WANT TO ASSERT A
              DISPUTE AGAINST THE OTHER, THEN YOU OR WE MUST COMMENCE IT (BY DELIVERY OF WRITTEN
              NOTICE AS SET FORTH IN SECTION 39) WITHIN 1 YEAR AFTER THE DISPUTE ARISES -- OR IT
              WILL BE FOREVER BARRED.
            </li>
            <li>
              NOTWITHSTANDING THE FOREGOING, THERE SHALL BE NO RIGHT OR AUTHORITY FOR ANY
              DISPUTE TO BE ARBITRATED ON A CLASS ACTION BASIS OR ON ANY BASIS INVOLVING ANY
              DISPUTE BROUGHT IN A PURPORTED REPRESENTATIVE CAPACITY ON BEHALF OF THE GENERAL
              PUBLIC, OTHER PERSONS OR ENTITIES DOING BUSINESS WITH HOWL Alert, OR OTHER PERSONS
              OR ENTITIES SIMILARLY SITUATED. FURTHERMORE, ANY DISPUTE BROUGHT BY OR AGAINST HOWL
              Alert MAY NOT BE JOINED OR CONSOLIDATED IN THE ARBITRATION WITH CLAIMS BROUGHT BY OR
              AGAINST ANY OTHER HOWL Alert SUBSCRIBER, UNLESS OTHERWISE AGREED BY THE PARTIES.
              FURTHER, THE PARTIES ACKNOWLEDGE THAT THEY WAIVE ANY RIGHT TO PARTICIPATE IN A
              REPRESENTATIVE CAPACITY OR AS A MEMBER OF ANY CLASS OF CLAIMANTS PERTAINING TO ANY
              DISPUTE SUBJECT TO ARBITRATION. SUBSCRIBER SHALL HAVE THE RIGHT TO OPT OUT OF THIS
              AGREEMENT TO ARBITRATE BY PROVIDING WRITTEN NOTICE OF ITS INTENTION TO DO SO BY
              EMAILING SUPPORT@HOWLAlert.COM WITHIN 60 DAYS OF THIS AGREEMENT BECOMING BINDING
              UPON SUBSCRIBER FOR THE FIRST TIME. OPTING OUT OF THIS AGREEMENT TO ARBITRATE HAS NO
              EFFECT ON ANY PREVIOUS, OTHER, OR FUTURE ARBITRATION AGREEMENT(S) THAT SUBSCRIBER
              MAY HAVE WITH HOWL Alert. IF THIS AGREEMENT TO ARBITRATE BECOMES BINDING, SUBSCRIBER
              CAN NOT CHANGE, MODIFY OR REVOKE IT (INCLUDING BY ATTEMPTING TO OPT OUT IN
              CONNECTION WITH ANY CONFIRMATION OF THE THESE TERMS OF SERVICE, AS AMENDED FROM TIME
              TO TIME) WITHOUT AN AGREEMENT IN WRITING SIGNED BY HOWL Alert. IN THE EVENT THAT THE
              SUBSCRIBER OPTS OUT OF THIS AGREEMENT TO ARBITRATE IN ACCORDANCE WITH THIS SECTION
            </li>
          </ol>
        </li>
      <li>
          EACH PARTY HEREBY IRREVOCABLY AGREES THAT ANY SUIT, ACTION OR OTHER LEGAL
          PROCEEDING ("SUIT") ARISING OUT OF OR IN CONNECTION WITH OR DUE TO ANY CLAIM OR
          DISPUTE THAT HAS ARISEN OR MAY ARISE BETWEEN THE PARTIES MUST BE RESOLVED
          EXCLUSIVELY BY A STATE OR FEDERAL COURT LOCATED IN NEW YORK CITY, NEW YORK; EACH
          PARTY CONSENTS TO THE EXCLUSIVE JURISDICTION AND VENUE OF EACH SUCH COURT IN ANY
          SUCH SUIT AND WAIVES ANY OBJECTION THAT IT MAY HAVE TO JURISDICTION OR VENUE OF ANY
          SUCH SUIT; EACH PARTY CONSENTS TO SERVICE OF PROCESS IN ACCORDANCE WITH THE NOTICE
          PROVISIONS OF THIS AGREEMENT; AND EACH PARTY HEREBY WAIVES ANY RIGHT TO TRIAL BY
          JURY IN ANY SUCH SUIT.
      </li>
      <li>
        Notices. Unless otherwise expressly provided herein, (i) all notices required to
        be given to HOWL Alert shall be deemed to have been duly given if in writing and
        mailed by regular mail, postage prepaid, or overnight delivery, by a reputable,
        national overnight delivery service to HOWL Alert's then current principal place of
        business and (ii) all notices required to be given to Subscriber shall be deemed to
        have been duly given if in writing and sent to the e-mail address on file with HOWL
        Alert for your Account. Subscriber is responsible to provide HOWL Alert with any
        changes to Subscriber's e-mail address pursuant to the foregoing sentence.
      </li>
       <li>
         Severability. If any provision of this Agreement is found to be invalid, the
         remaining provisions are still effective.
       </li>
       <li>
         Privacy Policy. Please refer to HOWL Alert?€?s privacy policy at
         http://www.HOWLAlert.com/privacy-policy for important information about HOWL
         Alert?€?s collection, use and sharing of Customer?€?s personal information.
       </li>
    
      </ol>

        </article>
      </div>
    </QueueAnim>
  </section>
);

module.exports = Terms;
