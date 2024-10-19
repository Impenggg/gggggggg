import React from 'react';
import { useLocation } from 'react-router-dom';

function SubmissionSuccess() {
  const location = useLocation();
  const { name, email, message } = location.state || {};  // Use empty object as fallback

  if (!name || !email || !message) {
    return <div>Error: Missing submission data</div>;
  }

  return (
    <div>
      <h2>Thank you, {name}!</h2>
      <p>Your message has been sent successfully.</p>
      <h4>Submitted Data:</h4>
      <ul>
        <li><strong>Email:</strong> {email}</li>
      </ul>
      <h4>Your Message:</h4>
      <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
  );
}

export default SubmissionSuccess;
