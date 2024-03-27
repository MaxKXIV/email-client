// components/EmailList.js
import React from 'react';
import EmailListItem from '../emailListItem/email.list.item.component';
import './emailList.css'

function EmailList({ emails, setSelectedEmail, selectedEmail }) {
    return (
      <div className="email-list">
        {emails.map((email) => (
          <EmailListItem
            key={email.id}
            email={email}
            setSelectedEmail={setSelectedEmail}
            selectedEmail={selectedEmail}
          />
        ))}
      </div>
    );
  }
  
  export default EmailList;
