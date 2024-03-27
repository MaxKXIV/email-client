// email service for retriving the email this will be imported 
// into app.js for cleaner viewing

import axios from 'axios'

const API_URL = 'https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json'

async function fetchEmails() {
    try{
        const response = await axios.get(API_URL);
        return response.data;
    }   catch(error){
        console.error('Error fetching emails:', error);
        throw error;
}
}

export {fetchEmails };