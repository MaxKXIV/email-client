// components/EmailBody.js
import React from 'react';
import './emailBody.css'


function EmailBody({ selectedEmail }) {
    return (
      <div className="email-body">
        {selectedEmail ? (
          <>
            <h2>{selectedEmail.subject}</h2>
            <p>{selectedEmail.message}</p>
          </>
        ) : (
          <p>Select an email to view its content.</p>
        )}
      </div>
    );
  }
  
  export default EmailBody;