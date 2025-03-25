import React, { useState } from 'react';
import ConfirmationPage from './ConfirmationPage';
import './ContactForm.css';

const ContactForm = ({ time }) => {
  const [submitted, setSubmitted] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    time: time,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  if (submitted) {
    return <ConfirmationPage time={contactDetails.time} contactDetails={contactDetails} />;
  }

  return (
    <div className="contact-form">
      <h1>Add Your Personal Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name"></label>
          <input type="text" id="first-name" name="firstName" placeholder="First Name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="last-name"></label>
          <input type="text" id="last-name" name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mobile"></label>
          <input type="tel" id="mobile" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">By clicking the button above, you acknowledge, consent and agree to the following: a Our Privacy Policy and consent to receive notices and other communications electronically: b] We take your privacy seriously. You are providing express written consent for to share your information with up to four (4) of its and for parties calling on behall of, or authorized third parties on their behalf to contact you lincludng through automated means: e.g. autodialing, text and pro-recorded messagingi about legal services or other Mass Tort related offers via telephone, mobile device (including SMS and MMS) and/or emall, even if your to ephone number is currently listed on any stata, tederal, local or corporate Do Not Call list; 6) Consent to be contacted is not required in order to purchase goods or services from or the that contact you. You may choose to speak with an Individual service provider by dialing (888) 888-8888.</label>
        </div>
        <button type="submit">Submit Your Details
        <i className="fas fa-chevron-right"></i>
        </button>
      </form>
      <div className="terms-container">
          <div className="terms">
            <span>Terms and Conditions</span>
            <span className="divider"></span>
            <span>Privacy Policy</span>
            <span className="divider"></span>
            <span>California Policy</span>
          </div>
        </div>
    </div>
  );
};

export default ContactForm;