// components/EmailListItem.js
import React from 'react';

function EmailListItem({ email, setSelectedEmail, selectedEmail }) {
    const handleClick = () => {
      setSelectedEmail(email);
    };
  
    return (
      <div
        className={`email-list-item ${email.read ? 'read' : 'unread'} ${email === selectedEmail ? 'active' : ''}`}
        onClick={handleClick}
      >
        <p className="email-from">{email.from}</p>
        <p className="email-subject">{email.subject}</p>
        <p className="email-address">{email.address}</p>
        <p className="email-timestamp">{email.timestamp}</p>
      </div>
    );
  }
  
  export default EmailListItem;