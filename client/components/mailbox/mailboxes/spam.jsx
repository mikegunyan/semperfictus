import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Spam = ({ userid }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`/messages/${userid}/j`)
    .then((data) => {
      setMessages(data.data);
    })
    .catch((err) => console.log(err));
  }, []);

  const markAsRead = (id, isread, index) => {
    axios.put(`/messages/${id}`, { isread })
      .then(() => {
        const newMessages = messages.slice();
        newMessages[index].isread = isread === 1 ? 0 : 1;
        setMessages(newMessages);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mailbox">
      {messages.map((message, index) => (
        <div key={message.id} className={message.isread === 1 ? 'read' : 'un read'}>
          {message.message}
          <button onClick={() => markAsRead(message.id, message.isread, index)}>Mark as {message.isread === 1 ? 'read' : 'unread'}</button>
        </div>
      ))}
    </div>
  );
};

export default Spam;
