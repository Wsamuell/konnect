'use client';

import { useMutation, useQuery } from 'convex/react';
import { useState } from 'react';
import { api } from '../../../convex/_generated/api';

interface MessageTerminal {
  sender: string; // sender should technically be the id of the person sending the text
}

const MessageTerminal = ({ sender }: MessageTerminal) => {
  const [message, setMessage] = useState('');

  const createMessage = useMutation(api.messages.sendMessage);
  const messages = useQuery(api.messages.getMessages);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createMessage({ message, sender });
    setMessage('');
  };

  return (
    <div>
      {messages?.map((message) => {
        return <div key={message._id}>{message.message}</div>;
      })}
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageTerminal;
