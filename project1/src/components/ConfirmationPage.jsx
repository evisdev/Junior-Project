import React from 'react';

const ConfirmationPage = ({ time, contactDetails }) => {
  return (
    <div>
      <h1>Confirmation Page</h1>
      <p>Your action has been successfully completed.</p>
      <h2>Details:</h2>
      <p><strong>First Name:</strong> {contactDetails.firstName}</p>
      <p><strong>Last Name:</strong> {contactDetails.lastName}</p>
      <p><strong>Email:</strong> {contactDetails.email}</p>
      <p><strong>Mobile:</strong> {contactDetails.mobile}</p>
      <p><strong>Preferred Time:</strong> {time}</p>
      <p>Thank you for submitting your details!</p>
    </div>
  );
};

export default ConfirmationPage;