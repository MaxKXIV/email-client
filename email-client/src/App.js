// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchEmails } from './services/emailService';
import EmailList from './components/emailList/email.list.component';
import EmailBody from './components/emailBody/emailBody';
import SearchBar from './components/searchBar/searcbhar.component';
function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEmails();
      setEmails(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = emails;
    } else {
      filtered = emails.filter(email =>
        email.from.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredEmails(filtered);
  }, [emails, searchInput]);

  const handleInput = e => {
    setSearchInput(e.target.value);
  };

  const handleEmailClick = (email) => {
    if (!email.read) {
      // Mark the email as read if it's unread
      const updatedEmails = emails.map((e) =>
        e.id === email.id ? { ...e, read: true } : e
      );
      setEmails(updatedEmails);
    }

    setSelectedEmail(email);
  };

  return (
    <div className="app-container">
      <div className="search-bar">
        <SearchBar
          placeholder='Search email'
          handleInput={handleInput}
        />
      </div>
      <div className="email-list-container">
        <EmailList emails={filteredEmails} setSelectedEmail={handleEmailClick} selectedEmail={selectedEmail} />
      </div>
      
      <div className="email-body-container">
        <EmailBody selectedEmail={selectedEmail} />
      </div>
    </div>
  );
}

export default App;
