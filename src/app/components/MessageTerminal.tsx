'use client';

import { useMutation } from 'convex/react';
import { useState } from 'react';
import { api } from '../../../convex/_generated/api';

interface MessageTerminal {
  sender: string; // sender should technically be the id of the person sending the text
}

const MessageTerminal = ({ sender }: MessageTerminal) => {
  const [message, setMessage] = useState('');

  const createMessage = useMutation(api.sendMessage.message);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createMessage({ message, sender });
    setMessage('');
  };

  return (
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
  );
};

export default MessageTerminal;
