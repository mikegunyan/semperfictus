import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sent = ({ userid }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`/messages/${userid}/s`)
    .then((data) => {
      setMessages(data.data);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mailbox">
      {messages.map((message) => (
        <div key={message.id}>{message.message}</div>
      ))}
    </div>
  );
};

export default Sent;
